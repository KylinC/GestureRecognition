/*
Cache: dt-main, dt-language, dt-main-op-jquery, dt-plugins, dt-tooltip-min, dt-animate, dt-modernizr, waypoints, isotope, vc_carousel_js, vc_transition_bootstrap_js, wpb_composer_front_js, thickbox, jquery-migrate, jquery-core
*/
/* jquery-core: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-includes/js/jquery/jquery.js) */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
jQuery.noConflict();
jQuery.fn.changeTag = function(tag){
   var replacement = jQuery('<' + tag + '>');
   var attributes = {};
   jQuery.each(this.get(0).attributes, function(index, attribute) {
       attributes[attribute.name] = attribute.value;
   }); 
   replacement.attr(attributes);
   replacement.data(this.data());
   var contents = this.children().clone(true);
   replacement.append(contents);
   this.replaceWith(replacement);
   return replacement;
}
;

/* jquery-migrate: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-includes/js/jquery/jquery-migrate.min.js) */
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;

/* thickbox: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	jQuery('body').on('click', domChunk, tb_click);
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='208' /></div>");//add loader to the page
		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 50;
			var y = pagesize[1] - 20;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='"+thickboxL10n.close+"'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				e.stopImmediatePropagation();

				if ( e.which == 27 ){ // close
					if ( ! jQuery(document).triggerHandler( 'wp_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keyup.thickbox', function(e){

				if ( e.which == 27 ){ // close
					e.stopImmediatePropagation();
					if ( ! jQuery(document).triggerHandler( 'wp_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

					return false;
				}
			});
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'});
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
	
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}
;

/* wpb_composer_front_js: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/qfy_editor_front.js) */
document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function(){
    var prefix = ['-webkit-','-o-','-moz-','-ms-',""];
    for (var i in prefix) { if(prefix[i]+'transform' in document.documentElement.style) document.documentElement.className += " vc_transform "; }
})();

/*
   On document ready jQuery will fire set of functions.
   If you want to override function behavior then copy it to your theme js file
   with the same name.
*/
function vc_js_init(){
	//BEGIN
	jQuery("#shopping-cart-woocommerce .carsize:not(.pulse1)").addClass("pulse1");
	
	jQuery(".srollupdown:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var all = jQuery(this).attr("data-scroll-all");
		var num = jQuery(this).attr("data-scroll-num");
		var speed = jQuery(this).attr("data-scroll-speed");
		var delay = jQuery(this).attr("data-scroll-delay");
		var slideBox = jQuery(this).find("ul:first");
	
		var allheight = slideBox.css("height").replace("px","")*1;

		var delay = delay||1000,speed = speed||20;
		var tid = null,pause = false;
		var s = function(){		slideBox.attr("style","overflow:hidden !important;height:"+allheight+"px;");slideBox.find("li").removeClass("displaynone");tid=setInterval(slide_scroll, speed); }
		var slide_scroll = function(){
			if(pause) return;
			slideBox.scrollTop(slideBox.scrollTop()+ 2);
			var scrolltop = slideBox.scrollTop();
			if(num>1){
				var first_height = 0;
				var marginbottom =  0;
				slideBox.find("li").each(function(i){
					if(i<num){
						first_height = first_height*1 +jQuery(this).css("height").replace("px","")*1;
						marginbottom =  marginbottom*1 +jQuery(this).css("margin-bottom").replace("px","")*1;
					}
				})
			}else{
				var first_height = slideBox.find("li:eq(0)").css("height").replace("px","");
				var marginbottom =  slideBox.find("li:eq(0)").css("margin-bottom").replace("px","");
			}
			if(scrolltop>=first_height*1+marginbottom*1){
				clearInterval(tid);
				if(num>1){
					slideBox.find("li").each(function(i){
						if(i<num){
							slideBox.append(slideBox.find("li")[0]);
						}
					})
				}else{
					slideBox.append(slideBox.find("li")[0]);
				}
				slideBox.scrollTop(0);
				setTimeout(s, delay);
				}
		}
		slideBox[0].onmouseover=function(){pause=true;}
		slideBox[0].onmouseout=function(){pause=false;}
		setTimeout(s, delay);
	});
	jQuery('.qfy_datatable_event:not(.loaded)').each(function(){
		$this = jQuery(this);
		if(typeof jQuery.fn.DataTable=="undefined"){
			jQuery.getScript("/FeiEditor/bitSite/js/dataTables/jquery.dataTables.js").done(function() {
				 qfy_dataTable_event($this);
			 })
		}else{
			qfy_dataTable_event($this);
		}
	})
	jQuery(".opentip:not(.played)").each(function(){
		var $this = jQuery(this);
		var imageurl = jQuery(this).attr("op-image");
		var title = jQuery(this).attr("op-title");
		var data_pop = jQuery(this).attr("op-style");
		var titlealign = jQuery(this).attr("op-titlealign");
		var stylealign = jQuery(this).attr("op-stylealign");
		var tiptitle= "";
		var download = false;
		if(imageurl){
			
			tiptitle +="<img style='max-width:100%;' src='"+imageurl+"'  />";
		}
		if(title){
			tiptitle +="<div style='margin-top:5px;text-align:"+titlealign+"'>"+title+"</div>";
		}
		if(stylealign){
			var data = { tipJoint:stylealign, fixed:true,style: data_pop };
		}else{
			var data = { style: data_pop };
		}
		if(imageurl){
			jQuery("<img />").attr("src", imageurl).load(function(){
				setTimeout(function(){new Opentip( $this, tiptitle, data);},1500);
			})
			$this.addClass("played");
		   
		}else{
			new Opentip( $this, tiptitle, data);
			$this.addClass("played");
		}
	})
	
	jQuery('.qfy-jiathis:not(".loaded")').each(function(){
		
		var title = jQuery(this).find(".jiathis_style").attr("data-config-title");
		var url = jQuery(this).find(".jiathis_style").attr("data-config-url");
		var imageurl = jQuery(this).find(".jiathis_style").attr("data-config-pic");
		var str = "";
		if(title&&url){
			str = '<script type="text/javascript" >var jiathis_config={url:"'+url+'",summary:"",title:"'+title+'",pic:"'+imageurl+'"}</script>';
		}
		jQuery(this).append(str+'<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>').addClass("loaded");
	})
	jQuery('.video.preload:not(.played)').each(function(){
		jQuery(this).waypoint({
			handler: function(direction) {
				jQuery(this).addClass("played").attr("src",jQuery(this).attr("data-src"));
			},
			triggerOnce: true,
			offset: "95%",
		})
	})
	
	
	
	vc_royalSlider_gallery_init();
	if(top==self){
		accordioncontent();
	}
	jQuery('.qfy-accordioncontent .a_content .panel-title').each(function(){
		 var curr = jQuery(this);
		 var pcontent = curr.closest(".a_content");
		 curr.unbind();
		 if(pcontent.hasClass("mo")){
			 curr.bind("mouseenter",function(e){
				  e.stopPropagation();
				 var n = curr.next();
				 var p = curr.closest(".qfy-accordioncontent");
				 var activeicon = p.attr("activeicon");
				 var normalicon = p.attr("normalicon");
				 var animation = p.attr("animation");
				 var hc =  p.attr("hc");
				 var display = n.css("display");
				  if(hc=="true" &&  !curr.hasClass("active")){
					  p.find(".a_content>section,.a_content>div").slideUp(animation,function(){
						var now = jQuery(this);
						
						now.prev().removeClass("active");
						now.prev().find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
						if(p.attr("data-normalicon-scale")!="1"){
							now.prev().find("i").css("transform","scale('"+p.attr("data-normalicon-scale")+"','"+p.attr("data-normalicon-scale")+"')");
						}
					  });
				  }
				  if(display=="none"){
					  n.next().css("visibility","hidden");
					  curr.addClass("active");
					  n.slideDown(animation,function(){
						 n.next().css("visibility","visible");
						 if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
							jQuery("html, body").animate({scrollTop: curr.offset().top - 30});
						 }
						 curr.removeClass("defaultclick");
						 if(n.find(".wpb_map_wraper iframe").length>0){
							n.find(".wpb_map_wraper iframe").attr("src",n.find(".wpb_map_wraper iframe").attr("src"));
						 }
					  });
					  curr.find("i").attr("class",activeicon).css("font-size",p.attr("data-activeicon-size")+"px").css("left",p.attr("data-activeicon-position")+"px").css("top",p.attr("data-activeicon-pt")+"px");
					  if(p.attr("data-activeicon-scale")!="1"){
						  curr.find("i").css("transform","scale('"+p.attr("data-activeicon-scale")+"','"+p.attr("data-activeicon-scale")+"')");
						}
					  n.find(".wpb_start_animation").each(function(i){
								var $this = this;
								jQuery($this).removeClass("wpb_start_animation");
								setTimeout(function(){wpb_animate_fun($this);},50);
								
					  })
				  }
			 })
		 }else{
			 curr.click(function(e){
				  e.stopPropagation();
				  var n = jQuery(this).next();
				  var p = jQuery(this).closest(".qfy-accordioncontent");
				  var activeicon = p.attr("activeicon");
				  var normalicon = p.attr("normalicon");
				  var animation = p.attr("animation");
				  var hc =  p.attr("hc");
				  var display = n.css("display");
				 if(hc=="true"){
					
					 p.find(".a_content>section,.a_content>div").slideUp(animation,function(){
						var now = jQuery(this);
						now.prev().removeClass("active");
						now.prev().find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
						if(p.attr("data-normalicon-scale")!="1"){
							  now.prev().find("i").css("transform","scale("+p.attr("data-normalicon-scale")+","+p.attr("data-normalicon-scale")+")");
						}
					  });
				  }
				 
		
				  if(display=="none"){
					  n.next().css("visibility","hidden");
					  curr.addClass("active");
					  curr.find("i").attr("class",activeicon).css("font-size",p.attr("data-activeicon-size")+"px").css("left",p.attr("data-activeicon-position")+"px").css("top",p.attr("data-activeicon-pt")+"px");
					
					  if(p.attr("data-activeicon-scale")!="1"){
						  curr.find("i").find("i").css("transform","scale("+p.attr("data-activeicon-scale")+","+p.attr("data-activeicon-scale")+")");
					}
					  n.slideDown(animation,function(){
						 n.next().css("visibility","visible");
						 if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
							jQuery("html, body").animate({scrollTop: curr.offset().top - 30});
						 }
						 curr.removeClass("defaultclick");
						 if(n.find(".wpb_map_wraper iframe").length>0){
							n.find(".wpb_map_wraper iframe").attr("src",n.find(".wpb_map_wraper iframe").attr("src"));
						 }
					  });
					  
					  n.find(".wpb_start_animation").each(function(i){
								var $this = this;
								jQuery($this).removeClass("wpb_start_animation");
								setTimeout(function(){wpb_animate_fun($this);},50);
								
					  })
				  }else{
					 
					  n.slideUp(animation,function(){
						curr.removeClass("active");
						curr.find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
						if(p.attr("data-normalicon-scale")!="1"){
							  curr.find("i").find("i").css("transform","scale("+p.attr("data-normalicon-scale")+","+p.attr("data-normalicon-scale")+")");
						}
					  });
				  }
			 });
		 }	
	 })
	 
	 
	
	 jQuery('.qfy-accordioncontent:not(.loaded)').each(function(){
		 jQuery(this).addClass("loaded");
		  var accordion_default = jQuery(this).attr("default");
		  
		  if(accordion_default>0){
			 var defaultobj = jQuery(this).find(".a_content .panel-title:eq("+(accordion_default-1)+")");
			 var display =defaultobj.next().css("display");
			 if(top!=self && jQuery("body").hasClass("compose-mode")){
				 //编辑情况
				 if(display=="block"){
					 defaultobj.next().hide();
					 display =defaultobj.next().css("display");
				 }
			 }
			 if(display=="none"){
				defaultobj.addClass("defaultclick");
				if(defaultobj.closest(".a_content").hasClass("mo")){
					defaultobj.mouseenter();
				}else{
					defaultobj.click();
				}
			 }
			 
		  }
	  
	 })

	jQuery( ".dl-qfymobile-menu:not(.loaded)" ).each(function(){
		var backCap = jQuery(this).find(".menu-back").html();
		jQuery(this).find(".children.dl-submenu").prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");
		jQuery(this).addClass("loaded").dlmenu();
	})

	if(top==self){
		jQuery( ".background-media.mediagallery:not(.loaded)" ).each(function(){
			var $this = jQuery(this);
			jQuery(this).addClass("loaded On");
			var imagebgs = jQuery(this).attr("data-imagebgs");
			
			var imagebgs_arr = imagebgs.split("|^|");
			var imagebgs_count = imagebgs_arr.length;
			var imagebgs_current = 0;
			var time =  jQuery(this).attr("data-time")?jQuery(this).attr("data-time"):3;
			var thishtml = $this.prop("outerHTML");
			var tmp = "";
			for(var i=0;i<imagebgs_count-1;i++){
				$this.before(thishtml);
				$this.prev().css({'opacity':'0','background-image': 'url('+imagebgs_arr[i]+')'}).removeAttr("data-imagebgs").removeClass("On");
			}
			var p =  jQuery(this).parent();
			setInterval(function(){
				if(p.attr("id")){
					imagebgs_current = p.find(".background-media.On").index('#'+p.attr("id")+'>.background-media');
				}else{
					imagebgs_current = p.find(".background-media.On").index('.background-media');
				}
				p.find(".background-media.On").removeClass("On").css({'opacity':'0'})
				if(imagebgs_current==imagebgs_count-1){
					p.find(".background-media:eq(0)").addClass("On").css({'opacity':'1'});
				}else{
					p.find(".background-media:eq("+(imagebgs_current+1)+")").addClass("On").css({'opacity':'1'});
				}
			},time*1000);
			
		})
	
	     if(jQuery(".qfy-comments .commentlist:hidden").length>0){
			jQuery(".qfy-comments").each(function(){
				
				var p = jQuery(this);
				if(p.find(".commentlist:visible").length>0) return;
				var loadhtml = "<div class='commentlist_loading' style='text-align:center;height:30px;margin:15px auto;' ><img src='/qfy-content/plugins/qfbook/templates/default/images/loader.gif' /></div>";
				p.find(".commentlist").after(loadhtml);
				
				var form =p.find("form#commentform");
				var comment_post_ID = form.find("#comment_post_ID").val();
				var url  = form.attr("action");
				
				jQuery.post(url,{action:"search",comment_post_ID:comment_post_ID,short_atts:p.attr("data-atts")},function(data){
					if(data.indexOf("success")>-1){
						
						var tmp = data.split('|<result>|');
						var commentlist = $(tmp).find(".commentlist");
						p.find(".commentlist").html(commentlist.html());
					}
					p.find(".commentlist").show();
					p.find(".commentlist_loading").remove();
				})
				
			})
		}
	}

	var objs = jQuery(".qfy-icons_list .qfy-icon");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-desc");
		var image = obj.attr("data-image");
		var tj = obj.attr("data-tj")=="0"?"top":"bottom";
		var ta = obj.attr("data-ta");
		var width = obj.attr("data-width");
		var align="left";
		if(ta=="1") align="right";
		else if(ta=="2") align="center";
		obj.attr("title", '');
		var text = "";
		if(name){
			text ="<div style='text-align:"+align+";'>"+base64_decode(name)+"</div>";
		}
		if(image){
			if(width){
				var title ="<div style='width:"+width+"px;text-align:center;'><img src='"+image+"' style='max-width:100%;' /><div style='word-break: break-all;'>"+text+"</div></div>";
			}else{
				var title ="<div style='text-align:center;  '><img src='"+image+"' width='160' style='max-width:100%;' /><div style='word-break: break-all;'>"+text+"</div></div>";
			}
			var img = new Image();
	        img.onload = img.onerror =function() {
	        	var data = { tipJoint: tj,style: "dark" };
				new Opentip(obj, title, data);
	        };
	        img.src = image;
		}else if(text){
			if(width){
				var last = "<div style='width:"+width+"px;word-break: break-all;'>"+text+"</div>";
			}else{
				var last = "<div style='word-break: break-all;'>"+text+"</div>";
			}
			
			var data = { tipJoint: tj,style: "dark" };
			new Opentip(obj, last, data);
		}
	})
	jQuery(".qfyvideo").unbind().mouseenter(function(){
		 jQuery(this).get(0).play();
     }).mouseleave(function(){
    	 if(jQuery(this).get(0).currentTime>0){
    		 jQuery(this).get(0).load();
    	 }
    	 
     })
	
	 jQuery('[data-ride="vc-carousel"]').each(function(){
				qfy_carousel_fun(jQuery(this))
		})
	jQuery(".qfy_scroll_box:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var box = jQuery(this).attr("id");
		var delay = jQuery(this).attr("data-delay");
		var speed = jQuery(this).attr("data-speed");
		var h = jQuery(this).attr("data-h");
		slideLine(box,"div",delay,speed,h);
	});
	jQuery("a[href^='qfy_notice']").unbind().click(function(e){
		 e.preventDefault();
		 e.stopPropagation();
		 var id = jQuery(this).attr("href");
		 if(jQuery("#"+id).length>0){
			 notice_pre_event("#"+id+" .notice_warp","preview");
		 }
	})
	
	jQuery(".qfyanimate:not(.qfyanimated)").each(function(){
		var animaleinbegin =  jQuery(this).attr("data-animaleinbegin");
		if(!animaleinbegin) animaleinbegin = "bottom-in-view";
 		jQuery(this).waypoint({
			handler: function(direction) {
				var delay = jQuery(this).attr("data-delay");
				var duration = jQuery(this).attr("data-duration");
				if(delay===""){
					//专栏使用
					if(jQuery(this).hasClass("qfy-column-inner")){
						delay = jQuery(this).index()*0.1/2;
					}
				}
				var animalename = jQuery(this).attr("data-animalename");
				if(duration){
					jQuery(this).css("animation-duration",duration+"s");
				}
				jQuery(this).css("animation-delay",delay+"s").css("animation-name",animalename).css("visibility","visible");
				jQuery(this).addClass("qfyanimated");
			},
			triggerOnce: true,
			offset: animaleinbegin,
		})
	})
	
	typed_event();
	
	prenext_event();
	//END
}
function vc_js_init2(){
	 //console.trace();
	  vc_slidersBehaviour();
	  vc_waypoints();
	  vc_teaserGrid();
	  vc_carouselBehaviour();
	  vc_plugin_flexslider();
	  resizefullpageheader();
	  bitLibLayout();
	  bit_circliful();
	  bit_counter();
	  bit_counterdown();
	  bit_newgallery();
	  qfy_jplayer_init();
	  bit_myaccountLayout();
	  bit_qfbook();
	  bit_qfbookform();
	  setTimeout(function(){  bit_reloadiframevideo();},1000);
	
}

jQuery(document).ready(function($) {
	
  if(top==self){
	  vc_js_init();
	  vc_js_init2();
  }
  jQuery(document).click(function(e) {
	 if(jQuery("body.clicktoaddmodel").length>0){
		 var target = jQuery(e.target);
		 if(target.closest(".vc-element.vc-vc_row").length==0){
			jAlert("亲，您点在了不能插入区块的地方。请选择内容区域的一个区块。");
			return false;
		 }
	 }
  });

}); // END jQuery(document).ready

jQuery(window).resize(function() {
	 //手机上滚动会触发这个resize
	 var body_width = jQuery("body").width();
	 if(body_width>768){
		 bitLibLayout();
	 }
	 var maxwidth = 0;
	 jQuery(".wpb_gallery .wpb_gallery_slides").find('img').each(function(){
		if(jQuery(this).width()>maxwidth){
			maxwidth = jQuery(this).width();
		}
	 })
	 if(maxwidth>body_width) {
		 vc_plugin_flexslider();
	 }
});
jQuery(window).on("debouncedresize", function() {
		jQuery(".ts-circliful-counter").each(function() {
			if ("true" == jQuery(this).attr("data-responsive")) {
				var t = jQuery(this),
					e = parseInt(jQuery(this).parent().width()),
					a = parseInt(jQuery(this).attr("data-size"));
				e != a && (t.empty(), t.circliful())
			}
		})	
});
function resizefullpageheader(){
	if(jQuery(".bit-html .fullscreenpage.fullpage_layout2").length>0||jQuery(".bit-html .fullscreenpage.fullpage_layout3").length>0||jQuery(".bit-html .fullscreenpage.fullpage_layout4").length>0){
		jQuery(".bit-html .fullscreenpage #fullscreenheader").css("margin-top","-"+(jQuery(".bit-html .fullscreenpage #fullscreenheader").height()/2)+"px");
	}
}
function typed_event(){
	if(jQuery(".qfy-simple_header:not(.loaded)").length==0) return;
	if(typeof Typed!="function"){
		 jQuery.getScript("/FeiEditor/bitSite/js/typed.min.js").done(function() {
			 _typed_event();
		 })
	 }else{
		 _typed_event();
	 }
}
function _typed_event(){
	jQuery(".qfy-simple_header:not(.loaded)").each(function(){
		var $this = jQuery(this);
		$this.addClass("loaded");
		var load = $this.attr("data-load");
		var id =  $this.attr("id");
		var loop = $this.attr("data-loop")=="true"?true:false;
		if($this.attr("data-typeSpeed")){
			var typeSpeed = parseInt($this.attr("data-typeSpeed"));
		}else{
			var typeSpeed = 30;
		}

		if(load=="1"){
			jQuery(this).waypoint({
				handler: function(direction) {
						Typed.new("#"+id+" .qfy-typed", {
					        stringsElement: $this.find(".inner"),
					        typeSpeed: typeSpeed,
					        backDelay: 500,
					        loop: loop,
					        contentType: 'html', // or text
					        loopCount: null,
					    });
				},
				triggerOnce: true,
				offset: "bottom-in-view",
			})
			
		}else{
				 Typed.new("#"+id+" .qfy-typed", {
				        stringsElement: $this.find(".inner"),
				        typeSpeed: typeSpeed,
				        backDelay: 500,
				        loop: loop,
				        contentType: 'html', // or text
				        loopCount: null,
				    });
		}
	})
}
function prenext_event(){
	var lrmiddlelayout = jQuery("#page .lrmiddlelayout:first:not(.loaded)");
	if(lrmiddlelayout.length>0 ){
		lrmiddlelayout.addClass("loaded");
		 jQuery(".lrmiddlelayout.wrap").remove();
		var pre_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;left:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
		pre_html += lrmiddlelayout.find(".pre_inner").prop("outerHTML");
		pre_html += '</div></div>';
		var next_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;right:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
		next_html += lrmiddlelayout.find(".next_inner.first").prop("outerHTML");
		next_html += '</div></div>';
		jQuery("body").append(pre_html+next_html);
	}
	if( jQuery("#page .lrmiddlelayout").length==0){	
		jQuery(".lrmiddlelayout.wrap").remove();
	}
}
function bit_circliful(obj){
	//don't support ie8
	if (jQuery.browser.version < 10.0) {
		return false;
	}
	if( "undefined" != typeof obj ){
		obj = obj.find(".ts-circliful-counter:not(.loaded)");
	}else{
		obj	= jQuery(".ts-circliful-counter:not(.loaded)");
	}
	if(obj.length==0) return;
	if(typeof jQuery.fn.circliful=="undefined"){
		jQuery.getScript("/qfy-content/plugins/qfy_editor/js/jquery.circliful.min.js").done(function() {
			_bit_circliful(obj);
		 })
	}else{
		_bit_circliful(obj);
	}
	
}
function _bit_circliful(obj){
	"undefined" != typeof jQuery.fn.waypoint && "undefined" != typeof jQuery.fn.circliful && obj.each(function() {
		jQuery(this).bind("inview", function(t, e, a, i) {
			if (e) {
				var r = jQuery(this);
				"top" == i || "bottom" == i || r.addClass("ts-circliful-visible")
			} else {
				var r = jQuery(this);
				r.removeClass("ts-circliful-visible")
			}
		})
				
		jQuery(this).addClass("loaded").circliful();
		
	});
}
function formatNumber(s,o){
	 s = s+"";
	 if(/[^0-9\.]/.test(s)) return false;
        s=s.replace(/^(\d*)$/,"$1.");
        s=s.replace(".",o);
        var re=/(\d)(\d{3},)/;
        while(re.test(s))
                s=s.replace(re,"$1,$2");
        s=s.replace(/,(\d\d)$/,".$1");
		s=s.substring(0,s.length-1);
        return s;
}
function qfy_dataTable_event($this){
	$this.addClass("loaded");
	var alltext = base64_decode($this.attr("data-r-alltext"));
	var obj=jQuery.parseJSON(alltext);
	$this.DataTable( {
	    "lengthMenu": [[20, 40, 100, -1], [20, 40, 100, "全部"]],
	     "searching": $this.attr("data-r-search")=="1"?true:false,
	     "ordering": $this.attr("data-r-order")=="1"?true:false,
	    //"filter": false,
	     "info": $this.attr("data-r-info")=="1"?true:false,
	    "paginate": $this.attr("data-r-paginate")=="1"?true:false,
        "processing": true,
        //"scrollX": true,
        "serverSide": true,
        "rowReorder": {
            selector: 'td:nth-child(2)'
        },
        "responsive": true,
        "language": {
            "lengthMenu": obj.table_text_lengthMenu+"_MENU_"+obj.table_text_dw,
            "zeroRecords": obj.table_text_zeroRecords,
            "info": obj.table_text_info+" _PAGE_ of _PAGES_",
            "infoEmpty": obj.table_text_infoEmpty,
            "infoFiltered": "",
            "processing":     obj.table_text_processing,
            "search":         obj.table_text_search,
            "paginate": {
                "first":      obj.table_text_first,
                "last":       obj.table_text_last,
                "next":       obj.table_text_next,
                "previous":   obj.table_text_previous
            },
        },
         "ajax": {
        	 "url": "/admin/admin-ajax.php",
        	 "type": "POST",
        	 "data": function ( d ) {
                 d.action = "qfy_dy_user_list";
                 d.customcontenttype = $this.attr("data-r-type");
                 d.customcontent = $this.attr("data-r-param");
             }
         },

    } );
}

function bit_counter(obj){
	if( "undefined" != typeof obj ){
		obj = obj.find(".ts-icon-counter");
		if(obj.length==0) return false;
	}else{
		obj	= jQuery(".ts-icon-counter");
	}
	if(obj.length==0) return;
	 if(typeof jQuery.fn.countTo=="undefined"){
		 jQuery.getScript("/qfy-content/plugins/qfy_editor/js/jquery.countto.min.js").done(function() {
			 _bit_counter(obj);
		 })
	 }else{
		 _bit_counter(obj);
	 }
}
function _bit_counter(obj){

	 "undefined" != typeof jQuery.fn.waypoint && obj.waypoint({
			handler: function() {
					var t = parseInt(jQuery(this).find(".ts-counter-value").attr("data-start")),
						e = parseInt(jQuery(this).find(".ts-counter-value").attr("data-end")),
						a = parseInt(jQuery(this).find(".ts-counter-value").attr("data-speed")),
						i = jQuery(this).find(".ts-counter-value").attr("data-before"),
						r = jQuery(this).find(".ts-counter-value").attr("data-after"),
						s = jQuery(this).find(".ts-counter-value").attr("data-format"),
						n = jQuery(this).find(".ts-counter-value").attr("data-plus"),
						o = jQuery(this).find(".ts-counter-value").attr("data-seperator"),
						u = jQuery(this).find(".ts-counter-value").attr("data-animation"),
						d = jQuery(this).find(".ts-font-icon");
					jQuery(this).find(".ts-counter-value").countTo({
						from: t,
						to: e,
						speed: a,
						refreshInterval: 50,
						decimals: 0,
						formatter: function(t, e) {
							return i + t.toFixed(e.decimals) + r
						},
						onUpdate: function() {},
						onComplete: function() {
							
							"true" == s ? "true" == n && "" != o ? jQuery(this).empty().html(i + formatNumber(e, o) + "+" + r) : "true" == n ? jQuery(this).empty().html(i + e + "+" + r) : "" != o ? jQuery(this).empty().html(i + formatNumber(e, o) + r) : jQuery(this).empty().html(i + e + r) : jQuery(this).empty().html(e), d.addClass(u), setTimeout(function() {
							d.removeClass(u)
							}, 2e3)
						}
					})
			},
			offset: "85%",
			triggerOnce: !0
		})

}

function bit_newgallery(obj){
	
	if( "undefined" != typeof obj ){
		obj = obj.find(".royalSlider_gallery");
		if(obj.length==0) return false;
	}else{
		obj	= jQuery(".royalSlider_gallery");
	}
	 if(obj.length==0) return;
	 if(typeof jQuery.fn.royalSlider=="undefined"){
		 jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
			 _bit_newgallery(obj);
		 })
	 }else{
		 _bit_newgallery(obj);
	 }
	
}
function _bit_newgallery(obj){
	obj.each(function(){
		var imageScaleMode = jQuery(this).attr("imageScaleMode")?jQuery(this).attr("imageScaleMode"):"fit-if-smaller";
		var slidesOrientation = jQuery(this).attr("slidesOrientation")?jQuery(this).attr("slidesOrientation"):"horizontal";
		//var autoScaleSlider = jQuery(this).attr("autoScaleSlider")==""?true:false;
		var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide")=="true"?true:false;
		//var showfullscreen = jQuery(this).attr("showfullscreen")=="true"?true:false;
		var g_width = jQuery(this).attr("g_width")?jQuery(this).attr("g_width"):"";
		var g_height = jQuery(this).attr("g_height")?jQuery(this).attr("g_height"):"";
		var transitionSpeed = jQuery(this).attr("transitionSpeed");
		var loop = jQuery(this).attr("g_loop")=="true"?true:false;
		var visiblenearby = jQuery(this).attr("visiblenearby")=="true"?true:false;
		var autoPlay  = jQuery(this).attr("auto_Play")=="true"?true:false;
		var arrowsNav = jQuery(this).attr("arrowsNav")=="true"?true:false;
		
		var controlNavigation = jQuery(this).attr("controlNavigation");
		if(controlNavigation=="thumbnails") controlNavigation="thumbnails";
		else if(controlNavigation=="none") controlNavigation="none";
		else controlNavigation = "bullets";
		var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation")?jQuery(this).attr("thumbnails_orientation"):"horizontal";
		var disabledclick = jQuery(this).attr("disabledclick")=="true"?false:true;
		jQuery(this).royalSlider({
		    fullscreen: {
			      enabled: true,
			      nativeFS: true
			    },
			    controlNavigation: controlNavigation,
				slidesOrientation:slidesOrientation,
			    autoScaleSlider: false, 
			    autoScaleSliderWidth: g_width,     
			    autoScaleSliderHeight: g_height,
			    loop: loop,
			    imageScaleMode: imageScaleMode,
			    navigateByClick: disabledclick,
			    numImagesToPreload:2,
			    arrowsNav:arrowsNav,
			    arrowsNavAutoHide: arrowsNavAutoHide,
			    arrowsNavHideOnTouch: true,
			    keyboardNavEnabled: true,
			    fadeinLoadedSlide: true,
			    globalCaption: false,
			    globalCaptionInside: false,
			    addActiveClass:true,
			    thumbs: {
				  orientation :thumbnails_orientation, 
			      appendSpan: true,
			      firstMargin: true,
			      paddingBottom: 4
			    },
			    visibleNearby: {
			        enabled: visiblenearby,
			        centerArea: 0.7,
			        center: true,
			        breakpoint: 650,
			        breakpointCenterArea: 0.64,
			        navigateByCenterClick: true
			    },
			    autoPlay: {
		    		enabled: autoPlay,
		    		pauseOnHover: true
		    	}
			  });
	})

}
function fullscreenclick(obj){	
	jQuery(obj).closest(".royalSlider_gallery").find(".rsFullscreenIcn").click();
}
function bit_myaccountLayout(){
	var defaultindex=getCookie("qfy_order_index");
	
	if(jQuery(".qfy_account.tablayout").length>0 && jQuery(".qfy_account.tablayout.ontab").length==0){
		jQuery(".qfy_account > .woocommerce").append('<div class="woocommerce-tabs tabbed-content woocommerce-tabs-info" style="min-height:500px;"><ul class="tabs"></ul></div>	');
		
		jQuery(".qfy_account .my_account_orders_h2").each(function(i){
			var name = jQuery(this);
			var content = jQuery(this).next();
			if(content.hasClass("my_account_orders_h2")||content.hasClass("woocommerce-tabs-info")||content.length==0){
				content_html = '<div style="min-height:400px;"></div>';
			}else{
				content_html = content.prop('outerHTML');
				content.remove();
			}
			jQuery( '.woocommerce-tabs-info ul.tabs' ).append('<li class="description_tab active"><a href="#tab-info-'+i+'" class="no-opennew">'+name.text()+'</a></li>');
			jQuery( '.woocommerce-tabs-info ul.tabs' ).after('<div style="word-break: break-all; display: block;" id="tab-info-'+i+'" class="panel entry-content">'+content_html+'</div>');
			name.remove();
			
		});
		jQuery(".qfy_account.tablayout").addClass("ontab");
		var titlesize = jQuery(".qfy_account.tablayout").attr("data-size");
		if(titlesize){
			jQuery( '.woocommerce-tabs-info ul.tabs li a' ).css("font-size",titlesize+"px");
		}
		jQuery( '.woocommerce_account_subscriptions').hide();
		jQuery( '.woocommerce-tabs-info .panel' ).hide();
		jQuery( '.woocommerce-tabs-info ul.tabs li a' ).click( function() {
			
			var $tab = jQuery( this ),
				$tabs_wrapper = $tab.closest( '.woocommerce-tabs-info' );
	
			jQuery( 'ul.tabs li', $tabs_wrapper ).removeClass( 'active' );
			jQuery( 'div.panel', $tabs_wrapper ).hide();
			jQuery( 'div' + $tab.attr( 'href' ), $tabs_wrapper).show();
			$tab.parent().addClass( 'active' );
			var index = $tab.parent().index();
			qfy_setCookie("qfy_order_index",index);
			return false;
		});
		if(defaultindex>0){
			jQuery( '.woocommerce-tabs-info ul.tabs li:eq('+defaultindex+') a' ).click();
		}else{
			jQuery( '.woocommerce-tabs-info ul.tabs li:first a').click();
		}
	}

}
function bit_qfbook(){
	setTimeout(function(){
		jQuery(".QFBOOKCalendar-text-message").each(function(){
			var $this = jQuery(this);
			var id = $this.attr("id");
			var val = $this.val();
			jQuery("#QFBOOKCalendar"+id).QFBOOKCalendar(jQuery.parseJSON(val));
			
		})
		jQuery(".QFBOOKCalendar-search-message").each(function(){
			var $this = jQuery(this);
			var id = $this.attr("id");
			var val = $this.val();
			jQuery(".QFBOOKSearch-wrapper"+id).QFBOOKSearch(jQuery.parseJSON(val));
			
		})
	},500)
}
function bit_qfbookform(){	
	jQuery('#QFBOOKSearch-check-in-input').datepicker({minDate: new Date(), onSelect:function(dateText,inst){
       jQuery("#QFBOOKSearch-check-out-input").datepicker("option","minDate",dateText);
    }});
    jQuery('#QFBOOKSearch-check-out-input').datepicker({minDate: new Date(), onSelect:function(dateText,inst){
       jQuery("#QFBOOKSearch-check-in-input").datepicker("option","maxDate",dateText);
    }});
}
function bit_reloadiframevideo(time){
	if(jQuery("div.ts_html5_video_frame_insert").length>0){
		jQuery("div.ts_html5_video_frame_insert").each(function(){
			var $this = jQuery(this);
			var auto_play = $this.attr("data-auto-play");
			if(auto_play=="true"){
				$this = $this.changeTag("iframe");
			}else{
				$this.unbind().click(function(){
					$this.changeTag("iframe").attr("data-auto-play","true");
				})
			}
		})
	}
}
function qfy_jplayer_init(){
	 if( jQuery(".vc_jplayer_container:not(.played)").length==0) return;
	 if(typeof jQuery.fn.videoPlayer=="undefined"){
			 jQuery.when(
				 jQuery.getScript( "/FeiEditor/bitSite/js/jsplayer/jplayer/jquery.jplayer.min.js" ),
				 jQuery.getScript( "/FeiEditor/bitSite/js/jsplayer/jplayer/jplayer.cleanskin.js" ),
				 jQuery.Deferred(function( deferred ){
					 jQuery( deferred.resolve );
			    })
			).done(function(){
				 _qfy_jplayer_init();
			});
			
	 }else{
		 _qfy_jplayer_init();
	 }

}
function _qfy_jplayer_init(){
	//音频
	jQuery(".vc_jplayer_container:not(.played)").each(function(){
		var title = jQuery.trim(jQuery(this).find(">.audio-info").html());
		var mp3 = jQuery(this).find(">.audio-info").attr("data-mp3");
		var autoplay =  jQuery(this).find(">.audio-info").attr("data-auto");
		if(autoplay!=1) autoplay=null;
		var loop =  jQuery(this).find(">.audio-info").attr("data-loop");
		if(loop==1){loop=true;}else{loop=false;};
		jQuery(this).find('>.webPlayer').videoPlayer({
				"name": title,
				"autoplay":autoplay,
				"keyEnabled":false,
				"loop":loop,
				"swfPath":"/FeiEditor/bitSite/js/jsplayer/jplayer",
				"size": {"width": "100%",},
				"media": {"mp3": mp3}
				});
		jQuery(this).addClass("played");
	})
}
function bit_counterdown(){
	 if(jQuery(".ts-countdown-parent").length==0) return;
	 if(typeof jQuery.fn.countEverest=="undefined"){
		 jQuery.getScript("/FeiEditor/bitSite/js/jquery.vcsc.counteverest.min.js").done(function() {
			 jQuery('head').append('<link href="/FeiEditor/bitSite/css/jquery.vcsc.counteverest.min.css" rel="stylesheet" type="text/css" />');
			 _bit_counterdown();
		 })
	 }else{
		 _bit_counterdown();
	 }
}
function _bit_counterdown(){
	jQuery(".ts-countdown-parent").each(function() {
			$TS_VCSC_Countdown_DaysLabel = $TS_VCSC_Countdown_DayLabel = jQuery(this).parent().find(".hidecountdownlabel").data("day");
			$TS_VCSC_Countdown_HoursLabel =  $TS_VCSC_Countdown_HourLabel = jQuery(this).parent().find(".hidecountdownlabel").data("hour");
			$TS_VCSC_Countdown_MinutesLabel =  $TS_VCSC_Countdown_MinuteLabel = jQuery(this).parent().find(".hidecountdownlabel").data("minute");
			$TS_VCSC_Countdown_SecondsLabel =  $TS_VCSC_Countdown_SecondLabel  = jQuery(this).parent().find(".hidecountdownlabel").data("second");
			function t(_) {
				var k = new Date,
					z = Date.UTC(k.getFullYear(), k.getMonth(), k.getDate()),
					P = k.getTimezoneOffset() / -60;
				if (0 == u && (u = P), 1 == r && 0 == o) {
					k.setHours(k.getHours() + parseInt(Q)), k.setMinutes(k.getMinutes() + parseInt(w)), k.setSeconds(k.getSeconds() + parseInt(b)), z = Date.UTC(k.getFullYear(), k.getMonth(), k.getDate()), $countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = k.getHours(), $countdown_target_minute = k.getMinutes(), $countdown_target_second = k.getSeconds(); {
						var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
						Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
					}
				} else if (1 == o) {
					$countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = k.getHours(), $countdown_target_minute = k.getMinutes(), $countdown_target_second = k.getSeconds(); {
						var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
						Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
					}
				} else if (1 == s) {
					k.getHours() >= parseInt(y) && k.getMinutes() >= parseInt(v) && k.getSeconds() >= parseInt(j) && k.setDate(k.getDate() + 1), $countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = parseInt(y), $countdown_target_minute = parseInt(v), $countdown_target_second = parseInt(j); {
						var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
						Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
					}
				} else {
					$countdown_target_day = parseInt(m), $countdown_target_month = parseInt(f), $countdown_target_year = parseInt(g), $countdown_target_hour = parseInt(y), $countdown_target_minute = parseInt(v), $countdown_target_second = parseInt(j); {
						var E = new Date($countdown_target_year, $countdown_target_month - 1, $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
						Date.UTC($countdown_target_year, $countdown_target_month - 1, $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
					}
				}
				n = 0 == s && (k > E && 1 == n || 1 == o) ? !0 : !1, e.countEverest({
					day: $countdown_target_day,
					month: $countdown_target_month,
					year: $countdown_target_year,
					hour: $countdown_target_hour,
					minute: $countdown_target_minute,
					second: $countdown_target_second,
					countUp: n,
					leftHandZeros: d,
					timeZone: u,
					wrapDigits: "horizontal" == i ? !1 : !0,
					daysLabel: $TS_VCSC_Countdown_DaysLabel,
					dayLabel: $TS_VCSC_Countdown_DayLabel,
					daysWrapper: "horizontal" == i ? ".ce-days .ce-flip-back" : ".ce-days",
					hoursLabel: $TS_VCSC_Countdown_HoursLabel,
					hourLabel: $TS_VCSC_Countdown_HourLabel,
					hoursWrapper: "horizontal" == i ? ".ce-hours .ce-flip-back" : ".ce-hours",
					minutesLabel: $TS_VCSC_Countdown_MinutesLabel,
					minuteLabel: $TS_VCSC_Countdown_MinuteLabel,
					minutesWrapper: "horizontal" == i ? ".ce-minutes .ce-flip-back" : ".ce-minutes",
					secondsLabel: $TS_VCSC_Countdown_SecondsLabel,
					secondLabel: $TS_VCSC_Countdown_SecondLabel,
					secondsWrapper: "horizontal" == i ? ".ce-seconds .ce-flip-back" : ".ce-seconds",
					onInit: function() {},
					beforeCalculation: function() {},
					afterCalculation: function() {
						if ("flipboard" == i) {
							var t = this,
								a = {
									days: this.days,
									hours: this.hours,
									minutes: this.minutes,
									seconds: this.seconds
								},
								r = {
									hours: "23",
									minutes: "59",
									seconds: "59"
								},
								s = "active",
								o = "before";
							1 == L && 1 == _ ? (L = !1, e.find(".unit-wrap div").each(function() {
								for (var t = jQuery(this), e = t.attr("class"), i = a[e], r = "", s = "", n = 0; 10 > n; n++) r += ['<div class="digits-inner">', '<div class="flip-wrap">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + n + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + n + "</div>", "</div>", "</div>", "</div>"].join("");
								for (var o = 0; o < i.length; o++) s += '<div class="digits">' + r + "</div>";
								t.append(s)
							})) : 1 == L && 0 == _ && (L = !1), jQuery.each(a, function(a) {
								for (var i, d = e.find("." + a + " .digits").length, u = r[a], l = t.strPad(this, d, "0"), c = l.length - 1; c >= 0; c--) {
									var h = e.find("." + a + " .digits:eq(" + c + ")"),
										p = h.find("div.digits-inner");
									i = u ? n ? 9 == u[c] ? 0 : u[c] : 0 == u[c] ? 9 : u[c] : n ? 0 : 9;
									var m = parseInt(l[c]);
									if (n) var f = m == i ? 9 : m - 1;
									else var f = m == i ? 0 : m + 1;
									p.eq(f).hasClass(s) && p.parent().addClass("play"), p.removeClass(s).removeClass(o), p.eq(m).addClass(s), p.eq(f).addClass(o)
								}
							})
						}
					},
					onChange: function() {
						if ("bars" == i && ("true" == l && TS_VCSC_Countdown_SetBar(I, this.days, 365), "true" == c && TS_VCSC_Countdown_SetBar(S, this.hours, 24), "true" == h && TS_VCSC_Countdown_SetBar(T, this.minutes, 60), "true" == p && TS_VCSC_Countdown_SetBar($, this.seconds, 60)), "columns" == i && "true" == x) {
							var t = 0;
							e.find(".col").each(function() {
								jQuery(this).width() > t && (t = jQuery(this).width())
							}), e.find(".col").each(function() {
								jQuery(this).width(t)
							})
						}
						"clock2" == i && TS_VCSC_Countdown_Animate(e.find(".number")), "circles" == i && ("true" == l && TS_VCSC_Countdown_DrawCircle(document.getElementById("days_" + a), this.days, 365, D, M, H), "true" == c && TS_VCSC_Countdown_DrawCircle(document.getElementById("hours_" + a), this.hours, 24, D, V, H), "true" == h && TS_VCSC_Countdown_DrawCircle(document.getElementById("minutes_" + a), this.minutes, 60, D, A, H), "true" == p && TS_VCSC_Countdown_DrawCircle(document.getElementById("seconds_" + a), this.seconds, 60, D, F, H)), "horizontal" == i && TS_VCSC_Countdown_Animate3D(e.find(".col").find("div:first-child"), this)
					},
					onComplete: function() {
						1 == r && (e.countEverest("destroy"), jQuery("#ts-vcsc-countdown-" + a + "_link").click(), "true" == C && t(!1)), 1 == s && (e.countEverest("destroy"), t(!0))
					}
				})
			}
			var e = jQuery(this).find(".ts-countdown"),
				a = jQuery(this).attr("data-id"),
				i = jQuery(this).attr("data-type"),
				r = "true" == jQuery(this).attr("data-reset") ? !0 : !1,
				s = "true" == jQuery(this).attr("data-repeat") ? !0 : !1,
				n = "true" == jQuery(this).attr("data-countup") ? !0 : !1,
				o = "true" == jQuery(this).attr("data-pageload") ? !0 : !1,
				d = "true" == jQuery(this).attr("data-zeros") ? !0 : !1,
				u = jQuery(this).attr("data-zone");
			u = "false" != u ? parseInt(u) : !1; {
				var l = jQuery(this).attr("data-show-days"),
					c = jQuery(this).attr("data-show-hours"),
					h = jQuery(this).attr("data-show-minutes"),
					p = jQuery(this).attr("data-show-seconds"),
					m = jQuery(this).attr("data-day"),
					f = jQuery(this).attr("data-month"),
					g = jQuery(this).attr("data-year"),
					y = jQuery(this).attr("data-hour"),
					v = jQuery(this).attr("data-minute"),
					j = jQuery(this).attr("data-second"),
					Q = jQuery(this).attr("data-resethours"),
					w = jQuery(this).attr("data-resetminutes"),
					b = jQuery(this).attr("data-resetseconds"),
					C = jQuery(this).attr("data-resetrestart"),
					_ = jQuery(this).attr("data-resetlink");
				jQuery(this).attr("data-resettarget")
			}
			if ("" != _ && jQuery("#ts-vcsc-countdown-" + a + "_link").click(function(t) {
				t.preventDefault();
				var e = jQuery(this),
					a = e.attr("target");
				jQuery.trim(a).length > 0 ? window.open(e.attr("href"), a) : window.location = e.attr("href")
			}), "columns" == i) var x = jQuery(this).attr("data-equalize");
			if ("bars" == i) {
				var k = jQuery(this),
					I = (k.find("#ce-days_" + a), k.find("#ce-hours_" + a), k.find("#ce-minutes_" + a), k.find("#ce-seconds_" + a), jQuery("#bar-days_" + a).find(".fill")),
					S = jQuery("#bar-hours_" + a).find(".fill"),
					T = jQuery("#bar-minutes_" + a).find(".fill"),
					$ = jQuery("#bar-seconds_" + a).find(".fill"),
					z = new Date;
				new Date(z.getTime() + 12096e5)
			}
			if ("circles" == i) var D = jQuery(this).attr("data-color-back"),
				M = jQuery(this).attr("data-color-days"),
				V = jQuery(this).attr("data-color-hours"),
				A = jQuery(this).attr("data-color-minutes"),
				F = jQuery(this).attr("data-color-seconds"),
				H = jQuery(this).attr("data-color-width");
			if ("horizontal" == i && (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) && jQuery("html").addClass("internet-explorer"), "flipboard" == i) var L = !0;
			t(!0)
		});

}
function bitLibLayout(obj){
   jQuery(".old-ie [backgroundSize='true']").css({backgroundSize: "cover"});

   if (typeof obj === 'undefined') {
		obj = jQuery(".wpb_images_lib_isotope")
   }
   obj.each(function () {
	   var current_obj = jQuery(this);
	   var curr_action = current_obj.attr("data-liblayout");
	   var filter = jQuery(this).parent().find(".isotope_image");
	   filter.each(function(){
			jQuery(this).unbind("click").bind("click",function(){
				 var f = jQuery(this).attr("data-filter");
				 var c = jQuery(this).closest(".vcgroup").attr("data-color");
				 var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
				 filter.removeClass("on");
				 filter.css("color",c);
				 jQuery(this).addClass("on");
				 jQuery(this).css("color",hc);
				if(curr_action=="" || curr_action=="undefined"){
					current_obj.find(">.vc-item").hide();
					current_obj.find(f).show();
				}else{
				  
				   current_obj.isotope({
					filter: f
				   });
				}
		   }).bind("mouseover",function(){
				 var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
				 if( !jQuery(this).hasClass("on")){
					jQuery(this).css("color",hc);
				 }
				
		   }).bind("mouseout",function(){
				 var c = jQuery(this).closest(".vcgroup").attr("data-color");
				 if( !jQuery(this).hasClass("on")){
					jQuery(this).css("color",c);
				 }
				
		   })
	   });
   });

 
   var action = obj.attr("data-liblayout");
   var columnWidth= obj.attr("data-width");

   if(obj.length==0 || action=="" || action=="undefined"){
	  return false;
   }
   obj.isotope({
		itemSelector: '.vc-item',
		layoutMode : action,
		 filter: ".images,.templates"
	
   });
   
   var all_load = true;
   
   obj.find('img').each(function(){
	   if(!jQuery(this).prop('complete')){
		   all_load = false;
	   }
   });
   
   if(!all_load) {
	  window.setTimeout(function(){
		  bitLibLayout(obj);
	  }, 500);
	  return;
   }
   obj.isotope("reLayout");
}


if ( typeof window['vc_plugin_flexslider'] !== 'function' ) {
 function vc_plugin_flexslider() {
	 if( jQuery('.wpb_flexslider').length==0) return;
	 if(typeof jQuery.fn.flexslider=="undefined"){
		 jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
			 jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
			 _vc_plugin_flexslider();
		 })
	 }else{
		 _vc_plugin_flexslider();
	 }
 }
 function _vc_plugin_flexslider(){
	 jQuery('.wpb_flexslider').each(function() {
			
	     var this_element = jQuery(this);
	     var sliderSpeed = 800,
	       sliderTimeout = parseInt(this_element.attr('data-interval'))*1000,
	       sliderFx = this_element.attr('data-flex_fx'),
	       sliderShowDirection = this_element.attr('data-direction'),
	       sliderShowBottomNav = this_element.attr('data-bottom_nav'),
		   minItems = this_element.attr('data-per-view'),
		    itemWidth = this_element.attr('data-itemWidth'),
			
	       slideshow = true;
		 var body_width = jQuery("body").width();
		 var img =null;
		 var maxwidth = 0;
		 this_element.find('img').each(function(){
			if(jQuery(this).width()>maxwidth){
				maxwidth = jQuery(this).width();
				img = jQuery(this);
			}
		 })

		 if(maxwidth>body_width) {
			  this_element.parent().parent().css("max-width","100%");
			  this_element.parent().parent().css("max-height","auto");
		 }else{
			  this_element.parent().parent().css("max-width","auto");
			  this_element.parent().parent().css("max-height","auto");
		 }
	   
	     if ( sliderTimeout == 0 ) slideshow = false;
		if (sliderShowDirection == 0) sliderShowDirection= false;
		if (sliderShowBottomNav == 0) sliderShowBottomNav= false;
		
	     this_element.flexslider({
	       animation: sliderFx,
	       slideshow: slideshow,
	       slideshowSpeed: sliderTimeout,
	       sliderSpeed: sliderSpeed,
	       controlNav: sliderShowBottomNav,
	       directionNav: sliderShowDirection,
	       smoothHeight: true,
		   minItems:minItems,
		   itemWidth:itemWidth,
	     });
	   });
 }
}
function bit_product(){
	if ( jQuery( '.woocommerce').length==0 )
		return false;
	// Tabs
	jQuery( '.woocommerce-tabs .panel' ).hide();

	jQuery( '.woocommerce-tabs ul.tabs li a' ).click( function() {

		var $tab = jQuery( this ),
			$tabs_wrapper = $tab.closest( '.woocommerce-tabs' );

		jQuery( 'ul.tabs li', $tabs_wrapper ).removeClass( 'active' );
		jQuery( 'div.panel', $tabs_wrapper ).hide();
		jQuery( 'div' + $tab.attr( 'href' ), $tabs_wrapper).show();
		$tab.parent().addClass( 'active' );

		return false;
	});

	jQuery( '.woocommerce-tabs' ).each( function() {
		var hash	= window.location.hash,
			url		= window.location.href,
			tabs	= jQuery( this );

		if ( hash.toLowerCase().indexOf( "comment-" ) >= 0 ) {
			jQuery('ul.tabs li.reviews_tab a', tabs ).click();

		} else if ( url.indexOf( "comment-page-" ) > 0 || url.indexOf( "cpage=" ) > 0 ) {
			jQuery( 'ul.tabs li.reviews_tab a', jQuery( this ) ).click();

		} else {
			jQuery( 'ul.tabs li:first a', tabs ).click();
		}
	});

	jQuery( 'a.woocommerce-review-link' ).click( function() {
		jQuery( '.reviews_tab a' ).click();
		return true;
	});
	jQuery( '#rating' ).hide();
	if(jQuery("p.stars").length==0){
		jQuery( '#rating' ).before( '<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>' );
	}
	// Star ratings for comments
	

	jQuery( 'body' )
		.on( 'click', '#respond p.stars a', function() {
			var $star   = jQuery( this ),
				$rating = jQuery( this ).closest( '#respond' ).find( '#rating' );

			$rating.val( $star.text() );
			$star.siblings( 'a' ).removeClass( 'active' );
			$star.addClass( 'active' );

			return false;
		})
		.on( 'click', '#respond #submit', function() {
			var $rating = jQuery( this ).closest( '#respond' ).find( '#rating' ),
				rating  = $rating.val();

			if ( $rating.size() > 0 && ! rating && wc_single_product_params.review_rating_required === 'yes' ) {
				alert( wc_single_product_params.i18n_required_rating_text );

				return false;
			}
		});
	
	jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />').find(".input-text").attr("type","text");
	
	// prevent double form submission
	jQuery( 'form.cart' ).submit( function() {
		jQuery( this ).find( ':submit' ).attr( 'disabled','disabled' );
	});
	jQuery( '.woocommerce-main-image a' ).removeAttr("href").click(function(){
		jAlert("请在预览下，查看图片效果！");
	});
	jQuery( '.button.add_to_cart_button,.button.product_type_simple' ).removeAttr("href").click(function(){
		jAlert("编辑情况下，无法使用购物车功能。如果修改商城默认页面，你可以从左上角选择功能页面进行编辑！");
		
	});
	jQuery('.woocommerce-ordering select.orderby').change(function(){
		jAlert("编辑情况下，无法使用排序功能！");
	})

	jQuery(".qfy_carousel .vc-carousel").each(function(){
		qfy_carousel_fun(jQuery(this))
	})
	if(jQuery(".addon-custom-datepicker" ).length>0){
		jQuery(".addon-custom-datepicker" ).datepicker({
			dateFormat: "yy-mm-dd",
			numberOfMonths: 1,
		});
	}
	if(jQuery(".addon-custom-datetimepicker" ).length>0 ){
		jQuery(".addon-custom-datetimepicker" ).datetimepicker({
					dateFormat: "yy-mm-dd",
					numberOfMonths: 1,
					showTime: true,
					constrainInput: false
		});
	}
}
function qfy_carousel_fun($carousel){

	var is_carousel_ok =true;
	$carousel.find('img').each(function(){
		if(!jQuery(this).prop('complete')){
			is_carousel_ok = false;
		}
	
	})
	if(!is_carousel_ok) {
	  window.setTimeout(function(){
		  qfy_carousel_fun($carousel);
	  }, 500);
	  return;
   }
	
   $carousel.carousel($carousel.data());
}



/* Waypoints magic
---------------------------------------------------------- */
if ( typeof window['vc_waypoints'] !== 'function' ) {
  function wpb_animate_fun($this){
		
		var p =  jQuery($this).closest(".qfy-element");
		var delay = p.attr("css_animation_delay");
		var anitime = p.attr("data-anitime");
		var anilength = p.attr("data-anilength");
		if(anitime && anitime>0){
			jQuery($this).css("animation-duration",anitime+"s");
			jQuery($this).css("-webkit-animation-duration",anitime+"s");
		}
		jQuery($this).removeClass("anlength1 anlength2");
		if(anilength && anilength!=0){
			jQuery($this).addClass(anilength);
		}
		if(delay){
			setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},delay*1000);
		}else{
			if(jQuery($this).hasClass("delay1")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},1000);
			}else if(jQuery($this).hasClass("delay0.5")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},500);
			}else if(jQuery($this).hasClass("delay1.5")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},1500);
			}else if(jQuery($this).hasClass("delay2")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},2000);
			}else if(jQuery($this).hasClass("delay3")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},3000);
			}else if(jQuery($this).hasClass("delay4")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},4000);
			}else if(jQuery($this).hasClass("delay5")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},5000);
			}else if(jQuery($this).hasClass("delay6")){
				setTimeout(function(){jQuery($this).addClass('wpb_start_animation');},6000);
			}else{
				jQuery($this).addClass('wpb_start_animation');
			}
		}
  
  }
  function vc_waypoints() {
	if(typeof resetSectionHeight !== 'undefined') resetSectionHeight();
	if (typeof jQuery.fn.waypoint !== 'undefined') {
    jQuery('.wpb_animate_when_almost_visible:not(.wpb_start_animation)').waypoint(function() {
			wpb_animate_fun(this);

		}, { offset: '85%' });
	}
  }
}

/* Teaser grid: isotope
---------------------------------------------------------- */
if ( typeof window['vc_teaserGrid'] !== 'function' ) {
	
	function vc_teaserGrid() {

        var layout_modes = {
            fitrows: 'fitRows',
            masonry: 'masonry'
        }
    	if(jQuery(".list-style9").length>0){ 
    		jQuery(".list-style9").each(function(){
    			vc_isotope_init_load(jQuery(this).find(".vc-carousel-slideline-inner"));
    		})
    		
    	}
		if(jQuery("body.compose-mode").length==1){
			jQuery(".vc-element .vc_ca_post_id a:not(.cate)").each(function(){
					if( !jQuery(this).hasClass("thickbox")){
						var href = jQuery(this).attr("href");
						jQuery(this).removeAttr("href");
						var p  = jQuery(this).closest(".vc_ca_post_id");
						jQuery(this).unbind("click").bind("click",function(){
							top.menuRedirect(href,p);
							return false;
						})
					}
			})
			if(!top.jQuery("body").hasClass("caterole")){
				jQuery(".content-wrapper .vc-element .vc_ca_post_id").mouseenter(function(){
							
							jQuery(this).css("outline","2px dotted #5E87B0");
							if(jQuery(this).find(".vc_list_edit_button").length==0){
								if(jQuery(this).find(".blog-media .toEditor,#item_block .toEditor").length==0){
									jQuery(this).find(".blog-media,#item_block").append("<span class='toEditor' ><span class='edit' style='display:inline' onclick='toCopy(this)'>复制</span><span class='edit' style='display:inline' onclick='toVisit(this)'>打开</span><span class='edit' style='display:inline' onclick='toDelete(this)'>删除</span></span>");
								}
								if(jQuery(this).closest(".vc-element").attr("data-model-id")){
									jQuery(this).find(".blog-media").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>更换图片</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_scrolllist_image_element\")' title='修改样式，格式'>设置</span>");
									jQuery(this).find(".item_img").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>更换图片</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_advanced_image_element\")' title='修改样式，格式'>设置</span>");
									var p = jQuery(this);
									if(p.find(".post-title").length>0 && p.find(".post-title .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="修改样式，格式"></span>';
										var title = p.find(".post-title");
			
										if(p.find(".post-title >a").length>0){
											var title = jQuery(this).find(".post-title >a");
											if(title.html().length>15){
												var newtitle = title.html().substr(0, title.html().length-6);
												title.html("<span class='hidetitle' style='display:none'>"+title.html()+"</span><span class='edittitle' >"+newtitle+"</span>")
											}
											p.find(".post-title >a:first").append(actionstr);
										}else{
											var title = jQuery(this).find(".post-title >span:first");
											if(title.html().length>15){
												var newtitle = title.html().substr(0, title.html().length-6);
												title.html("<span class='hidetitle' style='display:none'>"+title.html()+"</span><span class='edittitle' >"+newtitle+"</span>")
											}
											p.find(".post-title >span:first").append(actionstr);
										}
									}
									if(p.find(".post_excerpt").length>0 && p.find(".post_excerpt .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_text_element\')" title="修改样式，格式"></span>';
										if(p.find(".post_excerpt >p").length>0){
											p.find(".post_excerpt >p").append(actionstr);
										}else{
											p.find(".post_excerpt").append(actionstr);
										}
										
									}

									if(jQuery(this).find(".title").length>0  && jQuery(this).find(".title .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".title").append(actionstr);
										
									}
									if(jQuery(this).find(".details").length>0  && jQuery(this).find(".details .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_details_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".details").append(actionstr);
										
									}
									if(jQuery(this).find(".subtitle").length>0  && jQuery(this).find(".subtitle .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_subtitle_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".subtitle").append(actionstr);
										
									}
									
									if(jQuery(this).find(".post_date").length>0  && jQuery(this).find(".post_date .vc_list_edit_action").length==0){
										var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_postdate_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".post_date").append(actionstr);
										
									}
									
									if(jQuery(this).find(".price_warp").length>0  && jQuery(this).find(".price_warp .vc_list_edit_action").length==0){
										var current_pid = jQuery(this).attr("data-postid");
										var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit('+current_pid+',\'设置商品\', \'product\');" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_price_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".price_warp").append(actionstr);
										
									}
								}
							}
					}).mouseleave(function(){
						jQuery(this).css("outline","0").find(".vc_list_edit_action").remove();					
						jQuery(this).find(".blog-media,#item_block").find(".toEditor").remove();
						jQuery(this).find(".edittitle").remove();
						jQuery(this).find(".hidetitle").each(function(){
							var t = jQuery(this).html();
							 jQuery(this).parent().html(t);
						})
					});
				
				if(jQuery(".product-content.single-product").length==0){
					jQuery(".woocommerce-main-image,.wd_product_wrapper .product_a").mouseenter(function(){
								jQuery(this).removeAttr("href").append("<span class='toEditor' style='right:0;width:100px;'><span class='edit' style='display:inline' onclick='toEditProduct(this)'><i class='glyphicon glyphicon-edit'></i>数据</span><span style='display:inline' class='delete' onclick='toRedirectProduct(this)'><i class='glyphicon glyphicon-forward'></i>页面</span></span>");
							}).mouseleave(function(){
								jQuery(this).find(".toEditor").remove();
					});
				}
			}
			jQuery('.content-wrapper .qfy-listcatecontrols li').each(function(){
				var $li = jQuery(this);
				$li.mouseenter(function(){
					jQuery(this).css("outline","1px dotted #5E87B0");
					if(jQuery(this).find(".toEditor").length==0){
						jQuery(this).append("<span class='toEditor' style='border:0;padding:0;'><span  style='display:inline;border:0;padding:0;background:transparent;' onclick='toDeleteCate(this)'><img src='//fast.qifeiye.com/FeiEditor/bitSite/images/close_hover.png' /></span>");
					}
				}).mouseleave(function(){
					jQuery(this).css("outline","0");
					jQuery(this).find(".toEditor").remove();
				});
			
			}); 
		}
		

        jQuery('.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)').each(function(){
            var $container = jQuery(this);
			
            var $thumbs = $container.find('.wpb_thumbnails');
            var layout_mode = $thumbs.attr('data-layout-mode');
			
			//..
			if(jQuery("body.compose-mode").length==1){
				var p = $container.closest(".qfy-element");
				var iscontent = $container.closest(".content-wrapper");
				//&& $thumbs.closest(".vc-element").length>0
				if(!top.jQuery("body").hasClass("caterole") ){
					$thumbs.find(".isotope-item").mouseenter(function(){
						if(iscontent.length==0) return;
						jQuery(this).css("outline","2px dotted #5E87B0");
						if(jQuery(this).find(".vc_list_edit_button").length==0){
							var editor_html = "<span class='toEditor' ><span class='edit' style='display:inline' onclick='parent.toeditlistmore(this,event,\"vc_list_element_ui\");'>设置</span><span class='edit' style='display:inline' onclick='toCopy(this)'>复制</span><span class='edit' style='display:inline' onclick='toVisit(this)'>打开</span><span class='edit' style='display:inline' onclick='toDelete(this)'>删除</span></span>"
							
							jQuery(this).append(editor_html);
							//<span class='edit' style='display:inline' onclick='toEditor(this)'><i class='glyphicon glyphicon-edit'></i>编辑</span>
							if($container.closest(".vc-element").attr("data-model-id")){
								jQuery(this).find(".post-thumb").css("position","relative");
								jQuery(this).find(".post-thumb").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>更换图片</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_list_image_element\")' title='修改样式，格式'>设置</span>");
								if(jQuery(this).find(".post-title").length>0  && jQuery(this).find(".post-title .vc_list_edit_action").length==0){
									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_list_title_element\')" title="修改样式，格式"></span>';
									if(jQuery(this).find(".post-title >a").length>0){
										var title = jQuery(this).find(".post-title >a");
										if(title.html().length>15){
											var newtitle = title.html().substr(0, title.html().length-6);
											title.html("<span class='hidetitle' style='display:none'>"+title.html()+"</span><span class='edittitle' >"+newtitle+"</span>")
										}
										jQuery(this).find(".post-title >a:first").append(actionstr);
									}else{
										var title = jQuery(this).find(".post-title >span:first");
										if(title.html().length>15){
											var newtitle = title.html().substr(0, title.html().length-6);
											title.html("<span class='hidetitle' style='display:none'>"+title.html()+"</span><span class='edittitle' >"+newtitle+"</span>")
										}
										jQuery(this).find(".post-title >span:first").append(actionstr);
										
									}
									if(jQuery(this).find(".post-title i.glyphicon").length>0){
										jQuery(this).find(".post-title i.glyphicon").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_icon_element\')" title="修改样式，格式"></span>');
									}
								}
								
								
								
								if(jQuery(this).find(".post_excerpt").length>0){
									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="编辑内容"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_text_element\')" title="修改内容样式，格式"></span>';
									if(jQuery(this).find(".post_excerpt >p").length>0  && jQuery(this).find(".post_excerpt .vc_list_edit_action").length==0){
										jQuery(this).find(".post_excerpt >p").append(actionstr);
									}else{
										jQuery(this).find(".post_excerpt").append(actionstr);
									}
								}
								if(jQuery(this).find(".subtitle").length>0  && jQuery(this).find(".subtitle .vc_list_edit_action").length==0){
									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="编辑内容"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_subtitle_element\')" title="修改样式，格式"></span>';
									jQuery(this).find(".subtitle").append(actionstr);
									
								}
								if(jQuery(this).find(".price_warp").length>0  && jQuery(this).find(".price_warp .vc_list_edit_action").length==0){
										var current_pid = jQuery(this).attr("data-postid");
										var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit('+current_pid+',\'设置商品\', \'product\');" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_price_element\')" title="修改样式，格式"></span>';
										jQuery(this).find(".price_warp").append(actionstr);
										
								}
								if(jQuery(this).find(".post-comment").length>0 && jQuery(this).find(".post-comment .vc_list_edit_action").length==0){
									jQuery(this).find(".post-comment").append('<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_comment_element\')" title="修改样式，格式"></span>');
								}
								if(jQuery(this).find(".vc_read_more").length>0 && jQuery(this).find(".vc_read_more .vc_list_edit_action").length==0){
									jQuery(this).find(".vc_read_more").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_readmore_element\')" title="修改样式，格式"></span>');
								}
							}
							
						}
					}).mouseleave(function(){
						jQuery(this).css("outline","0");
						jQuery(this).find(".toEditor,.vc_list_edit_action").remove();
						jQuery(this).find(".edittitle").remove();
						jQuery(this).find(".hidetitle").each(function(){
							var t = jQuery(this).html();
							 jQuery(this).parent().html(t);
						})
					
					});

					
					if(p.find(".mypages").length>0){
						p.find(".mypages").mouseenter(function(){
							if(p.find(".mypages .vc_list_edit_action").length==0){
								p.find(".mypages").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_pagenav_element\')" title="修改样式，格式"></span>');
							}
						}).mouseleave(function(){
							p.find(".vc_list_edit_action").remove();
						});
									
					}

				}
				$thumbs.find("a:not(.cate)").each(function(){
					if( !jQuery(this).hasClass("thickbox")){
						var href = jQuery(this).attr("href");
						jQuery(this).removeAttr("href");
						var p  = jQuery(this).closest(".isotope-item");
						jQuery(this).unbind("click").bind("click",function(){
							top.menuRedirect(href,p);
							return false;
						})
					}
				})
			}
			
			$container.find('.categories_filter a:not(.link)').data('isotope', $thumbs).click(function(e){
					e.preventDefault();
					var $thumbs = jQuery(this).data('isotope');
					jQuery(this).parent().parent().find('.active').removeClass('active');
					jQuery(this).parent().addClass('active');
					if(!$container.hasClass("noanimale")){
						$thumbs.isotope({filter: jQuery(this).attr('data-filter'),  itemSelector : '.isotope-item',layoutMode :'fitRows' });
					}else{
						var filter = jQuery(this).data('filter');
						if(filter=="*"){
							$thumbs.find(">li").show();
						}else{
							$thumbs.find(">li").hide();
							$thumbs.find(filter).show();
						}
					}

				});
			if(!jQuery(this).hasClass("noanimale")){   
			  vc_isotope_init_load($thumbs);
			}
           
        });
	}
	


}
function vc_isotope_init_load(obj){

	   if( obj.find('.post-thumb img,.item_img img').length==0){
			 obj.isotope({filter: '*',  itemSelector : '.isotope-item',layoutMode :obj.attr("data-layout-mode")?obj.attr("data-layout-mode"):'fitRows' });
			 return;
	   }
	   var all_load = true;
	   obj.find('.post-thumb img,.post-thumb video,.item_img img').each(function(){
		   if(!jQuery(this).prop('complete')){
			   all_load = false;
		   }
	   });
	   
   if(!all_load) {
	  window.setTimeout(function(){
		  vc_isotope_init_load(obj);
	  }, 500);
	  return;
   }
   obj.isotope({filter: '*',  itemSelector : '.isotope-item',layoutMode :obj.attr("data-layout-mode")?obj.attr("data-layout-mode"):'fitRows'  });
}
if ( typeof window['vc_carouselBehaviour'] !== 'function' ) {
  function vc_carouselBehaviour() {
    jQuery(".wpb_carousel").each(function() {
            var $this = jQuery(this);
            if($this.data('carousel_enabled') !== true && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var carousel_width = jQuery(this).width(),
                    visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if ( jQuery(this).hasClass('columns_count_1') ) {
                    carousel_speed = 900;
                }
                /* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
                var carousele_li = jQuery(this).find('.wpb_thumbnails-fluid li');
                carousele_li.css({"margin-right": carousele_li.css("margin-left"), "margin-left" : 0 });

                jQuery(this).find('.wpb_wrapper:eq(0)').jCarouselLite({
                    btnNext: jQuery(this).find('.next'),
                    btnPrev: jQuery(this).find('.prev'),
                    visible: visible_count,
                    speed: carousel_speed
                })
                    .width('100%');//carousel_width

                var fluid_ul = jQuery(this).find('ul.wpb_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width()+300);

                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if ( before_resize != screen_size ) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }

    });
       
        if(window.Swiper !== undefined) {

            jQuery('.swiper-container').each(function(){
                var $this = jQuery(this),
                    my_swiper,
                    max_slide_size = 0,
                    options = jQuery(this).data('settings');

                    if(options.mode === 'vertical') {
                        $this.find('.swiper-slide').each(function(){
                            var height = jQuery(this).outerHeight(true);
                            if(height > max_slide_size) max_slide_size = height;
                        });
                        $this.height(max_slide_size);
                        $this.css('overflow', 'hidden');
                    }
                    jQuery(window).resize(function(){
                        $this.find('.swiper-slide').each(function(){
                            var height = jQuery(this).outerHeight(true);
                            if(height > max_slide_size) max_slide_size = height;
                        });
                        $this.height(max_slide_size);
                    });
                    my_swiper = jQuery(this).swiper(jQuery.extend(options, {
                    onFirstInit: function(swiper) {
                        if(swiper.slides.length < 2) {
                            $this.find('.vc-arrow-left,.vc-arrow-right').hide();
                        } else if(swiper.activeIndex === 0  && swiper.params.loop !== true) {
                            $this.find('.vc-arrow-left').hide();
                        } else {
                            $this.find('.vc-arrow-left').show();
                        }
                    },
                    onSlideChangeStart: function(swiper) {
                        if(swiper.slides.length > 1 && swiper.params.loop !== true) {
                            if(swiper.activeIndex === 0) {
                                $this.find('.vc-arrow-left').hide();
                            } else {
                                $this.find('.vc-arrow-left').show();
                            }
                            if(swiper.slides.length-1 === swiper.activeIndex) {
                                $this.find('.vc-arrow-right').hide();
                            } else {
                                $this.find('.vc-arrow-right').show();
                            }
                        }
                    }
                }));
                $this.find('.vc-arrow-left').click(function(e){
                    e.preventDefault();
                    my_swiper.swipePrev();
                });
                $this.find('.vc-arrow-right').click(function(e){
                    e.preventDefault();
                    my_swiper.swipeNext();
                });
                my_swiper.reInit();
            });

        }

	}
}

if ( typeof window['vc_slidersBehaviour'] !== 'function' ) {
	function vc_slidersBehaviour() {
		//var sliders_count = 0;
		jQuery('.wpb_gallery_slides').each(function(index) {
			var this_element = jQuery(this);
			var ss_count = 0;
			if ( this_element.hasClass('wpb_slider_nivo') ) {
				var sliderSpeed = 800,
					sliderTimeout = this_element.attr('data-interval')*1000;
	
				if ( sliderTimeout == 0 ) sliderTimeout = 9999999999;
				this_element.find('.nivoSlider').nivoSlider({
					effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
					slices: 15, // For slice animations
					boxCols: 8, // For box animations
					boxRows: 4, // For box animations
					animSpeed: sliderSpeed, // Slide transition speed
					pauseTime: sliderTimeout, // How long each slide will show
					startSlide: 0, // Set starting Slide (0 index)
					directionNav: true, // Next & Prev navigation
					directionNavHide: true, // Only show on hover
					controlNav: true, // 1,2,3... navigation
					keyboardNav: false, // Use left & right arrows
					pauseOnHover: true, // Stop animation while hovering
					manualAdvance: false, // Force manual transitions
					prevText: 'Prev', // Prev directionNav text
					nextText: 'Next' // Next directionNav text
				});
			}
			else if ( this_element.hasClass('wpb_image_grid') ) {
				var isotope = this_element.find('.wpb_image_grid_ul');
				isotope.isotope({
					// options
					itemSelector : '.isotope-item',
					layoutMode : 'fitRows'
				});
				jQuery(window).load(function() {
					isotope.isotope("reLayout");
				});
			}
		});
	}
}

if ( typeof window['vc_prettyPhoto'] !== 'function' ) {
	function vc_prettyPhoto() {
		try {
			// just in case. maybe prettyphoto isnt loaded on this site
			jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
				animationSpeed: 'normal', /* fast/slow/normal */
				padding: 15, /* padding for each side of the picture */
				opacity: 0.7, /* Value betwee 0 and 1 */
				showTitle: true, /* true/false */
				allowresize: true, /* true/false */
				counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
				//theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
				hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
                deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
				modal: false, /* If set to true, only the close button will close the window */
				callback: function() {
					var url = location.href;
					var hashtag = (url.indexOf('#!prettyPhoto')) ? true : false;
					if (hashtag) location.hash = "!";
				} /* Called when prettyPhoto is closed */,
				social_tools : ''
			});
		} catch (err) { }
	}
}
/* Helper
---------------------------------------------------------- */
function getColumnsCount(el) {
	var find = false,
		i = 1;

	while ( find == false ) {
		if ( el.hasClass('columns_count_'+i) ) {
			find = true;
			return i;
		}
		i++;
	}
}

var screen_size = getSizeName();
function getSizeName() {
	var screen_size = '',
		screen_w = jQuery(window).width();

	if ( screen_w > 1170 ) {
		screen_size = "desktop_wide";
	}
	else if ( screen_w > 960 && screen_w < 1169 ) {
		screen_size = "desktop";
	}
	else if ( screen_w > 768 && screen_w < 959 ) {
		screen_size = "tablet";
	}
	else if ( screen_w > 300 && screen_w < 767 ) {
		screen_size = "mobile";
	}
	else if ( screen_w < 300 ) {
		screen_size = "mobile_portrait";
	}
	return screen_size;
}

function loadScript(url, $obj, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        /*
        script.onload = function(){

            callback();
        };
         */
    }

    script.src = url;
    $obj.get(0).appendChild(script);
}

/**
 * Prepare html to correctly display inside tab container
 *
 * @param event - ui tab event 'show'
 * @param ui - jquery ui tabs object
 */

function wpb_prepare_tab_content(event, ui) {
    var panel = ui.panel || ui.newPanel;
    vc_carouselBehaviour();
    var $ui_panel = jQuery(panel).find('.isotope'),
        $google_maps = jQuery(panel).find('.wpb_gmaps_widget');
    if ($ui_panel.length > 0) {
	    $ui_panel.isotope("reLayout");
    }

    if($google_maps.length && !$google_maps.is('.map_ready')) {
        var $frame = $google_maps.find('iframe');
        $frame.attr('src', $frame.attr('src'));
        $google_maps.addClass('map_ready');
    }
}
jQuery(window).resize(function(){
  bitResizeImageTextInit();
});
jQuery(window).ready(function(){
	setTimeout(function(){bitResizeImageTextInit();},300);
});

function bitResizeImageTextInit(){

	jQuery(".bitImageControlDiv .bit-tp-caption.wf-mobile-hidden").each(function(){
	
		var dataorgipara=jQuery(this).attr("dataorgipara");		
		if(dataorgipara)
		{
				var $this = this;
				var p =  jQuery(this).parent().parent();
				var img = p.find(".bitImageParentDiv img");
				if(img.length>0){
					var imgW=img.width();
					var imgH=img.height();
				}else{
					var imgW= p.find(".bitImageParentDiv .banner-img").width();
					var imgH = p.find(".bitImageParentDiv .banner-img").height();
				}
				var download = new Image();
			    download.src = img.attr("src");
			    if(imgW>760){
			    	initTextposition(dataorgipara,imgW,imgH,this);
			    }else{
				    /*download.onload = function () {
				    	initTextposition(dataorgipara,imgW,imgH,$this);
				    }
				    download.onerror = function (err, msg) {
				    	  initTextposition(dataorgipara,imgW,imgH,$this);
				    }*/
			    }
		}
	})	
}
function initTextposition(dataorgipara,imgW,imgH,obj){
	dataorgipara=dataorgipara.split("\|");
	var textOrgLeft=dataorgipara[0];
	var textOrgTop=dataorgipara[1];
	var width=dataorgipara[2];
	var s=dataorgipara[3];
	var textOrgRight=dataorgipara[4];
	var textOrgBottom=dataorgipara[5];
	if(imgW!=width&&imgW>0){
		
		var n=(width/imgW).toFixed(4);
		
		//if(s/n<10){n=s/10;}
		jQuery(obj).css("font-size",s/n).css("line-height","auto").css("min-height","0").css("min-width","0");
		jQuery(obj).find("slideText").css("line-height","auto");
		var textW=jQuery(obj).width();
		var textH=jQuery(obj).height();
		var paddingLeft=jQuery(obj).css("padding-left");
		if(paddingLeft&&paddingLeft.indexOf("px")){paddingLeft=paddingLeft.replace("px","")};
		var paddingTop=jQuery(obj).css("padding-top");
		if(paddingTop&&paddingTop.indexOf("px")){paddingTop=paddingTop.replace("px","")};
		var s=jQuery(obj).css("left");
		if(textOrgLeft!=0){
			if(s.indexOf("px")>-1){ s=s.replace("px","");jQuery(obj).css("left",textOrgLeft*imgW-textW/2-paddingLeft);}
		}
		if(textOrgRight==1){
			jQuery(obj).css("right","0").css("left","auto");
		}
		var s=jQuery(obj).css("top");
		
		if(textOrgTop!=0){
			if(s.indexOf("px")>-1){ s=s.replace("px","");jQuery(obj).css("top",textOrgTop*imgH-textH/2-paddingTop);}
		}
		if(textOrgBottom==1){
			jQuery(obj).css("bottom","0").css("top","auto");
		}
		
	}else{

		var css=jQuery(obj).attr("style");
		if(css){
			css=css.replace(/font-size[^p]*px;/,"");
			css=css.replace(/right: 0px/,"");
			css=css.replace(/bottom: 0px/,"");
			css=css.replace(/line-height[^;]*;/,"");
			jQuery(obj).attr("style",css);
			var left=jQuery(obj).attr("dataleft");
			jQuery(obj).css("left",left+"px");
			var top=jQuery(obj).attr("datatop");
			jQuery(obj).css("top",top+"px");
		}
	}
	jQuery(obj).addClass("on").show();
	
}
if(top!=self){
	jQuery("html").bind('paste', function(e) {
		if(!e.clipboardData){
			var clipboardData = e.originalEvent.clipboardData;
		}else{
			var clipboardData = e.clipboardData;
		}
		
		if(clipboardData){
			var text = clipboardData.getData('text/plain');
			if(text && parent){
				var tmp = parent.base64_decode(text);
				if(tmp.indexOf("|^^|")>-1){
					var tmparr = tmp.split('|^^|');
					if(tmparr.length==2){
						parent.jQuery("#vc-add-element-dialog .bit-insert-html").click();
						setTimeout(function(){
							top.jQuery(".boxy-wrapper:visible #copyText").val(text);
							top.jQuery(".boxy-wrapper:visible .copytitle").html("点击确认，将复制该组件到当前页面");
						},300);
					}
				}
			}
		}
	});
};

/* vc_transition_bootstrap_js: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/transition.js) */
+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);
;

/* vc_carousel_js: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/vc_carousel.js) */
/* ========================================================================
 * VC: carousel.js v0.4.5
 * Fork Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


;(function($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
	if($(window).width()<768 &&  $(element).hasClass("vc-carousel vc-slide")){
		options.interval = 0;

	}
	if(!options.viewnum) options.viewnum=0;
    this.$element    = $(element)
    this.$indicators = this.$element.find('.vc-carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
    this._build() // new
  }

  Carousel.DEFAULTS = {
    mode: 'horizontal'
  , partial: false
  , interval: 5000
  , pause: 'hover'
  , wrap: false
  , autoHeight: true
  , perView: 1
  , hideOnEnd: false
  }
  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options&&this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      this.touch_start_position = 0;
    return this
  }
  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.vc-item.vc-active')
    if(!this.$active.length) this.$active = this.$element.find('.vc-item:first').addClass('vc-active')
    this.$items  = this.$active.parent().children()
    return this.$items.index(this.$active)
  }
  Carousel.prototype.showHideControl = function(index) {
    if(typeof index === 'undefined') var index = this.getActiveIndex()
    //this.$left_control[index===0 ? 'hide' : 'show']()
    //this.$right_control[index===this.items_count-1 ? 'hide' : 'show']()
  }
  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element && this.$element.find('.vc-next, .vc-prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
	
    var $active   = this.$element.find('.vc-item.vc-active')
    var $next     = next || $active[type]();
	
   if(type=="prev" && $next.index() == -1 && this.options.viewnum>0){	
		$next = this.$element.find('.vc-item:eq("'+(this.items_count-this.options.viewnum*1)+'")');
   }
    var isCycling = this.interval
    var direction = type == 'next' ? 'vc-left' : 'vc-right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this
    if (!$next.length) {
      if (!this.options.wrap) {
        this.returnSwipedSlide()
        return
      }
      $next = this.$element.find('.vc-item')[fallback]()
    }

    this.sliding = true
	//mobile don't move
	if($(window).width()<768 && this.$element.hasClass("vc-carousel vc-slide")){
		return;
	}

    isCycling && this.pause()
	
    var e = $.Event('slide.vc.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('vc-active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.vc-active').removeClass('vc-active')
      this.$indicators.find('.vc-partial').removeClass('vc-partial')
      this.$element.one('slid', function () {
        var index = that.getActiveIndex(),
            $nextIndicator = $(that.$indicators.children().slice(index, that.getActiveIndex() + that.options.perView))
        $nextIndicator && $nextIndicator.addClass('vc-active')
        that.options.partial && $nextIndicator && (index+1 < that.items_count ? $nextIndicator.last().next().addClass('vc-partial') : $nextIndicator.first().prev().addClass('vc-partial'))
        if(that.options.hideOnEnd) that.showHideControl(index)
      })
    }
    this.current_index = $next.index()
    if(this.current_index > this.items_count-this.options.viewnum*1) {
      this.current_index = 0;
	

    } else if(this.current_index < 0) {
      this.current_index = this.items_count -1
    }
    if(this.options.autoHeight) {
      this.current_pos_value = -1 * this._step * this.current_index
    } else {
      this.current_pos_value = -1 * $next.position()[this.animation_position]
    }
    if(this.options.partial && this.current_index >= this.items_count-1) {
      this.current_pos_value += this._step*(1-this.partial_part)
    }
    if ($.support.transition && this.$element.hasClass('vc-slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      this.$slideline_inner
        .addClass('vc-transition')
        .css(this.animation_position,  this.current_pos_value + that.pos_units)
      if(!this.options.autoHeight) this.recalculateSlidelineHeight($next.height(), true)
      this.$slideline_inner.one($.support.transition.end, function(){
        $next.addClass('vc-active')
        $active.removeClass('vc-active')
        that.$slideline_inner.removeClass([type, 'vc-transition'].join(' '))
        that.sliding = false
        that.removeSwipeAnimationSpeed()
        setTimeout(function () { that.$element.trigger('slid') }, 0)
      }).emulateTransitionEnd(this.transition_speed)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('vc-active')
      $next.addClass('vc-active')
      this.sliding = false
      this.$slideline_inner.css(this.animation_position, this.current_pos_value + that.pos_units)
    }
    isCycling && this.cycle()
	if( this.current_index==0 && this.options.viewnum>0){
		 $next.removeClass('vc-active');
		 if(type=="next"){
			this.$element.find('.vc-item:first').addClass("vc-active");
		 }
	}
    return this
  }
  Carousel.prototype.setSwipeAnimationSpeed = function() {
    this.$slideline_inner.addClass('vc-swipe-transition')
  }
  Carousel.prototype.removeSwipeAnimationSpeed = function() {
    this.$slideline_inner.removeClass('vc-swipe-transition')

  }
    /**
     * Velocity
     * @param   {Number}    delta_time
     * @param   {Number}    delta_x
     * @param   {Number}    delta_y
     * @returns {Object}    velocity
     */
    Carousel.prototype.velocity =  function(time, x) {
      return {
          x: Math.abs(x / time) || 0
      }
    }
    Carousel.prototype.recalculateSlidelineHeight = function(height, animate) {
      if(animate === true) {
        this.$slideline.animate({height: height})
      } else {
        this.$slideline.height(height)
      }
    }
    /**
     * Change layout size after resizing of window.
     */
    Carousel.prototype.resizeAction = function() {
      var max_height = 0,
          new_slideline_height = 0
      if(this.options.mode === 'horizontal') {
        this.el_effect_size = this.$element.width() * ( this.options.partial ? this.partial_part : 1 )
        this.$slideline.width(this.items_count*this.el_effect_size)
      
      }

      if (this.options.autoHeight) {
        this.$items.height('auto')
        this.$items.each(function(){
          var item_height = $(this).height()
          if(item_height > max_height) max_height = item_height
        })
        this.$items.height(max_height)
      } else {
        this.recalculateSlidelineHeight(this.$active.height())
      }
      if(this.options.mode === 'vertical') {
        this._step = this.$active.height()
        new_slideline_height = this.$active.height() * this.options.perView * (this.options.partial ? (1 + 1-this.partial_part) : 1)
        this.recalculateSlidelineHeight(new_slideline_height, false)
        this.$slideline_inner.css({top: -1 * this.$active.position().top})
        this.el_effect_size = this._step
      }
    }
    Carousel.prototype.returnSwipedSlide = function() {
      var params = {}
      params[this.animation_position] = this.current_pos_value + this.pos_units
      this.$slideline_inner.animate(params)
    }
    Carousel.prototype._build = function() {
    	//mobile don't build
    	if($(window).width()<768 && this.$element.hasClass("vc-carousel vc-slide")){
    		return;
    	}
      var el                      = this.$element.get(0),
          _touch_start_position   = false,
          _touch_start_time       = 0,
          _pos_before_touch      = 0,
          _diff                   = 0,
          _moved                  = false,
          that                    = this,
          mode                    = this.options.mode
      this.getActiveIndex()

      this.el_width               = 0
      this.items_count            = this.$items.length

      this.$slideline             = this.$element.find('.vc-carousel-slideline')
      this.slideline              = this.$slideline.get(0)
      this.$slideline_inner       = this.$slideline.find('> div')
      this.slideline_inner        = this.$slideline_inner.get(0)

      this.partial_part           = 0.8
      this._slide_width           = 0
      this.swipe_velocity         = 0.7
      this.current_pos_value      = 0
      this.current_index          = 0 // TODO: default start position by options
      this.el_effect_size         = 0
      this.transition_speed       = 600
	
      this.$left_control = this.$element.find('.vc-left.vc-carousel-control')
      this.$right_control = this.$element.find('.vc-right.vc-carousel-control')

      // Enable autoHeight if partial
      if(this.options.partial) this.options.autoHeight = true
      // Add Css classes for perView > 1
      if(this.options.perView > 1) this.$element.addClass('vc-per-view-more vc-per-view-' + this.options.perView)

      if( mode === 'horizontal') {
        this.pos_units = '%'
        this._step = 100.00/this.items_count/this.options.perView
        this.animation_position = 'left'
        this.$items.width(this._step + this.pos_units)
        this.touch_direction = 'pageX'
      } else {
        this.pos_units = 'px'
        this.animation_position = 'top'
        this.touch_direction = 'pageY'
      }
      // Hide first control if this.current_index === 0
      if(this.options.hideOnEnd) this.showHideControl()
      // Add partial css class if partial
      if(this.options.partial) this.$element.addClass('vc_partial')
      // Set indicator
      if(this.$indicators.length) {
        var $active_indecators = that.$indicators.children()
                                                 .slice(this.current_index, this.current_index + this.options.perView)
                                                 .addClass('vc-active')
        this.options.partial && $active_indecators.last().next().addClass('vc_partial')
      }
      $(window).resize(this.resizeAction.bind(this)); this.resizeAction()
	 if(el.addEventListener){

          //IE 8 or lower
		  el.addEventListener("touchstart", function(e){
			_touch_start_position = parseFloat(e[that.touch_direction])
			_touch_start_time = e.timeStamp
			_pos_before_touch = that.$slideline_inner.position()[that.animation_position]
		  }.bind(this), false)
		  el.addEventListener('touchmove', function(e){
			_diff = parseFloat(e[that.touch_direction]) - _touch_start_position
			_moved = Math.abs(_diff) > 0
			if(!_moved) return true
			e.preventDefault()
			that.slideline_inner.style[that.animation_position] = (_pos_before_touch + _diff) + 'px'
		  }, false)
		  el.addEventListener('touchend', function(e){
			var time,part,velocity
			if(_moved) {
			  time= (e.timeStamp-_touch_start_time)/1000
			  part = _diff/ that.el_effect_size
			  velocity = that.velocity(time, part)
			  if((velocity.x > that.swipe_velocity && part < 0) || part <= -0.7) {
				that.setSwipeAnimationSpeed()
				that.next()
			  } else if(velocity.x > that.swipe_velocity || part >= 0.7) {
				that.setSwipeAnimationSpeed()
				that.prev()
			  } else {
				that.returnSwipedSlide()
			  }
			  _moved = false
			}
		  }, false)
	  }
      this.$element.addClass('vc-build')
		 
      return this
    }
  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('vc.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('vc.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).off('click.vc.carousel.data-api').on('click.vc.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false
    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('vc.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="vc-carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

})(window.jQuery);
;

/* isotope: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/isotope/jquery.isotope.min.js) */
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;

/* waypoints: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/jquery-waypoints/waypoints.min.js) */
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);;

/* dt-modernizr: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/themes/qfy-01/js/modernizr.js) */
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-css_filters-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(document.documentMode===undefined||document.documentMode>9)});


var dtGlobals = {};

dtGlobals.isMobile	= (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent));
dtGlobals.isAndroid	= (/(Android)/.test(navigator.userAgent));
dtGlobals.isiOS		= (/(iPhone|iPod|iPad)/.test(navigator.userAgent));
dtGlobals.isiPhone	= (/(iPhone|iPod)/.test(navigator.userAgent));
dtGlobals.isiPad	= (/(iPad)/.test(navigator.userAgent));
dtGlobals.isBuggy	= (navigator.userAgent.match(/AppleWebKit/) && typeof window.ontouchstart === 'undefined' && ! navigator.userAgent.match(/Chrome/));
dtGlobals.isWindowsPhone = navigator.userAgent.match(/IEMobile/i);

dtGlobals.customColor = 'red';
if (dtGlobals.isMobile) { 
	document.documentElement.className += " mobile-true";
} else {
	document.documentElement.className += " mobile-false";
}

dtGlobals.logoURL = false;
dtGlobals.logoH = false;
dtGlobals.logoW = false;

jQuery(document).ready(function($) {
	if (dtGlobals.isWindowsPhone){
		$("body").addClass("ie-mobile");
	}
	if(!$("html").hasClass("old-ie")){
		dtGlobals.isPhone = false;
		dtGlobals.isTablet = false;
		dtGlobals.isDesktop = false;

		var size = window.getComputedStyle(document.body,":after").getPropertyValue("content");

		if (size.indexOf("phone") !=-1 && dtGlobals.isMobile) {
			dtGlobals.isPhone = true;
		} 
		else if (size.indexOf("tablet") !=-1 && dtGlobals.isMobile) {
			dtGlobals.isTablet = true;
		}
		else {
			dtGlobals.isDesktop = true;
		};

	}

	/* !Debounced resize event */
	var dtResizeTimeout;
	if(dtGlobals.isMobile && !dtGlobals.isWindowsPhone){
		$(window).bind("orientationchange", function(event) {
			/*$(window).on("resize", function() {*/
				clearTimeout(dtResizeTimeout);
				dtResizeTimeout = setTimeout(function() {
					$(window).trigger( "debouncedresize" );
				}, 200);
			/*});*/
		});
	}else{
		$(window).on("resize", function() {
			clearTimeout(dtResizeTimeout);
			dtResizeTimeout = setTimeout(function() {
				$(window).trigger( "debouncedresize" );
			}, 200);
		});
	}
	/* Debounced resize event: end */
});;

/* dt-animate: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/themes/qfy-01/js/animate-elements.js) */
/* !Animation Core */

/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */

(function($) {

	$.belowthefold = function(element, settings) {
		var fold = $(window).height() + $(window).scrollTop();
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.abovethetop = function(element, settings) {
		var top = $(window).scrollTop();
		return top >= $(element).offset().top + $(element).height() - settings.threshold;
	};
	$.rightofscreen = function(element, settings) {
		var fold = $(window).width() + $(window).scrollLeft();
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.leftofscreen = function(element, settings) {
		var left = $(window).scrollLeft();
		return left >= $(element).offset().left + $(element).width() - settings.threshold;
	};
	$.inviewport = function(element, settings) {
		return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	};
	$.inviewporttop = function(element, settings) {
		return !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	};

	$.extend($.expr[':'], {
		"below-the-fold": function(a, i, m) {
			return $.belowthefold(a, {threshold : 0});
		},
		"above-the-top": function(a, i, m) {
			return $.abovethetop(a, {threshold : 0});
		},
		"left-of-screen": function(a, i, m) {
			return $.leftofscreen(a, {threshold : 0});
		},
		"right-of-screen": function(a, i, m) {
			return $.rightofscreen(a, {threshold : 0});
		},
		"in-viewport": function(a, i, m) {
			return $.inviewport(a, {threshold : -30});
		},
		"in-viewporttop": function(a, i, m) {
			return $.inviewporttop(a, {threshold : -30});
		}
	});

})(jQuery);


jQuery(document).ready(function($) {

	if(!dtGlobals.isMobile){
		$("body").addClass("no-mobile");
	};
	if(dtGlobals.isiPhone){
		$("body").addClass("is-iphone");
	};

	// !- Skills
	$.fn.animateSkills = function() {
		$(".skill-value", this).each(function () {
			var $this = $(this),
				$this_data = $this.data("width");

			$this.css({
				width: $this_data + '%'
			});
		});
	};

	// !- Animation "onScroll" loop
	function doAnimation() {
		if(!dtGlobals.isMobile){
			var j = -1;
			$(".animate-element:not(.start-animation):in-viewport").each(function () {
				var $this = $(this);
	
				if (!$this.hasClass("start-animation") && !$this.hasClass("animation-triggered")) {
					$this.addClass("animation-triggered");
					j++;
					setTimeout(function () {
						$this.addClass("start-animation");
						if($this.hasClass("skills")){
							$this.animateSkills();
						};
					}, 200 * j);
				};
			});
		}
		else {
			$(".skills").animateSkills();
		};
	};


	// !- Fire animation
	doAnimation();
	if (!dtGlobals.isMobile && !$("html").hasClass("old-ie")){
		$(window).on("scroll", function () {
			doAnimation();
		});
	};

	// !... and ensute it will work in tabs
	$(".tab").on("click", function(){
		if(!dtGlobals.isMobile){
			$(".animate-element", this).each(function (i) {
				var $this = $(this);
				if (!$this.hasClass("start-animation")) {
					setTimeout(function () {
						$this.addClass("start-animation");
					}, 100 * i);
				}
			});
		}
	});

});;

/* dt-tooltip-min: (http://5513e8ed8fca9.t73.qifeiye.com/FeiEditor/bitSite/js/jquery-ui.min.js) */
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery),function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=e.pageX,l=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,h,l,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,v=m+p.helperProportions.width,_=i.offset.top,b=_+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,h=r+p.snapElements[u].width,l=p.snapElements[u].top,c=l+p.snapElements[u].height,r-g>v||m>h+g||l-g>b||_>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(l-b),n=g>=Math.abs(c-_),o=g>=Math.abs(r-v),a=g>=Math.abs(h-m),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(l-_),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,h=a+t.helperProportions.width,l=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return a>=c&&d>=h&&r>=u&&p>=l;case"intersect":return a+t.helperProportions.width/2>c&&d>h-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>l-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||l>=u&&p>=l||u>r&&l>p)&&(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}}(jQuery),function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' ></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"inline-block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing cursor-"+this.axis),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing cursor-s cursor-n cursor-e cursor-w cursor-se cursor-sw cursor-nw cursor-ne"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div ></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=Math.abs(a.parentData.left)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(p-l>0?(e.size.height=p,e.position.top=o.top-u):(e.size.height=l,e.position.top=o.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=o.left-c):(e.size.width=h,e.position.left=o.left+n.width-h))}})}(jQuery),function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||o>i.right||i.top>h||a>i.bottom):"fit"===n.tolerance&&(l=i.left>o&&r>i.right&&i.top>a&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})}(jQuery),function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),o=function(){t.each(n,function(t,i){e[i]&&a[i+"Class"](e[i])})},o(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,o,a,r){return"boolean"==typeof n||n===e?o?t.effects.animateClass.call(this,n?{add:s}:{remove:s},o,a,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,o,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,o;for(o=0;s.length>o;o++)null!==s[o]&&(n=t.data(i+s[o]),n===e&&(n=""),t.css(s[o],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):a.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,o=i.queue,a=t.effects.effect[i.effect];return t.fx.off||!a?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,o=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),o=n.attr("id");s||(s=a+"-header-"+e,i.attr("id",s)),o||(o=a+"-panel-"+e,n.attr("id",o)),i.attr("aria-controls",o),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=o.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,n){var o,a,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(a=d),a=a||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(o=t.show().outerHeight(),e.animate(i,{duration:r,easing:a,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:a,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(o-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,a,p):t.animate(s,r,a,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})}(jQuery),function(t){t.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})}(jQuery),function(t){var e,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},o=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,a=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){a.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled)return!1;t(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var e=s.element[0];o(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(t(this).addClass("ui-state-active"),e=this,s.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",a.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.element.prop("disabled",!!e),e&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?o(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(s),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,o=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(o?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(o?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},x=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},k=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?D():y=!1;else switch(i.charAt(o)){case"d":_=x("d");break;case"D":k("D",d,p);break;case"o":b=x("o");break;case"m":v=x("m");break;case"M":v=k("M",f,g);break;case"y":m=x("y");break;case"@":h=new Date(x("@")),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((x("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(v=1,_=b;;){if(a=this._getDaysInMonth(m,v-1),a>=_)break;v++,_-=a}if(h=this._daylightSavingAdjust(new Date(m,v-1,_)),h.getFullYear()!==m||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,I,P,T,M,S,z,A,E,H,N,W,O,F,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),q=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==q[0]||1!==q[1],$=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-q[0]*q[1]+1,J.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+Q,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?$:j,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;q[0]>x;x++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",P="",X){if(P+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:P+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:P+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:P+=" ui-datepicker-group-middle",I=""}P+="'>"}for(P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?Y?o:s:"")+(/all|right/.test(I)&&0===x?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,G,J,x>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,T+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(P+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((z+S)/7),E=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=E,H=this._daylightSavingAdjust(new Date(te,Z,1-z)),N=0;E>N;N++){for(P+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=m?m.apply(t.input?t.input[0]:null,[H]):[!0,""],F=H.getMonth()!==Z,R=F&&!_||!O[0]||G&&G>H||J&&H>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(H.getTime()===$.getTime()?" "+this._currentClass:"")+(H.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===j.getTime()?" ui-state-highlight":"")+(H.getTime()===$.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);P+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),P+="</tbody></table>"+(X?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=P}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"}(jQuery),function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})}(jQuery),function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var o,a,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),o=t.effects.createWrapper(h).css({overflow:"hidden"}),a=o[p](),r=parseFloat(o.css(f))||0,m[p]=v?a:0,g||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:a+r),v&&(o.css(p,0),g||o.css(f,r+a)),o.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}}(jQuery),function(t){t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=a.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),c&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,g,m)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m).animate(o,g,m),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()}}(jQuery),function(t){t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?l*v:0),top:h+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:l*v),top:h+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}}(jQuery),function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),function(t){t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})}}(jQuery),function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})}}(jQuery),function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(_=_.concat(u),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(_=_.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,u,o.from.y,i.from),i.to=t.effects.setTransition(i,u,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,g[d]=(p?"+=":"-=")+2*h,m[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery),function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,o,a,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",o=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),o===n?a=!0:o=n+o,r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=a&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(o=String.fromCharCode(e.keyCode),r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})}(jQuery),function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),o=i(k.at,p,g),v.left+=o[0],v.top+=o[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,C=d+_+s(this,"marginBottom")+w.height,I=t.extend({},v),P=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:C,offset:[o[0]+P[0],o[1]+P[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,h={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>g&&g>r(n+o)&&(h.vertical="middle"),h.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(I,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})}(jQuery),function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,o,a,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(a=this.options.step,n=o=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:o=this._valueMin();break;case t.ui.keyCode.END:o=this._valueMax();break;case t.ui.keyCode.PAGE_UP:o=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;o=this._trimAlignValue(n+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;o=this._trimAlignValue(n-a)}this._slide(i,r,o)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})}(jQuery),function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;
return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})}(jQuery);;

/* dt-plugins: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/themes/qfy-01/js/plugins.js) */
/* 
SmoothScroll v0.9.9
Licensed under the terms of the MIT license.

People involved
- Balazs Galambosi: maintainer (CHANGELOG.txt)
- Patrick Brunner (patrickb1991@gmail.com)
- Michael Herf: ssc_pulse Algorithm
*/
//changed 12.02.14
/*
jQuery(document).ready(function ($) {
    if (!/(Android|BlackBerry|iPhone|iPod|iPad|Palm|Symbian)/.test(navigator.userAgent) && !$.browser.msie) {
        if (dtLocal.themeSettings.smoothScroll == "on" || dtLocal.themeSettings.smoothScroll == "on_parallax" && $(".stripe-parallax-bg").length > 0) {
!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?o:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=!1,i=function(){a||o.scrollHeight==document.height||(a=!0,setTimeout(function(){o.style.height=document.height+"px",a=!1},500))};if(o.style.height="auto",setTimeout(i,10),S.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,n){if(n||(n=1e3),d(t,o),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,o*=i)}C=+new Date}if(M.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||o||(M=[]),M.length?E(u,e,n/v.frameRate+1):T=!1};E(u,e,0),T=!0}}function n(e){x||t();var n=e.target,r=l(n);if(!r||e.defaultPrevented||s(w,"embed")||s(n,"embed")&&/\.pdf/i.test(n.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),o(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}o(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var o=e.length;o--;)z[N(e[o])]=t;return t}function l(e){var t=[],o=S.scrollHeight;do{var n=z[N(e)];if(n)return i(t,n);if(t.push(e),o===e.scrollHeight){if(!y||S.clientHeight+10<o)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,o){window.addEventListener(e,t,o||!1)}function c(e,t,o){window.removeEventListener(e,t,o||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],o=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!(t||o)}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,o,n;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:800,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,z={};setInterval(function(){z={}},1e4);var A,N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L="onmousewheel"in document;L&&K&&(u("mousedown",a),u("mousewheel",n),u("load",t))}();
        }
    }
})
*/

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

jQuery(document).ready(function(e){var t=e(window);var n=t.height();t.resize(function(){n=t.height()});e.fn.parallax=function(r,i,s){function l(){var s=t.scrollTop();o.each(function(){var t=e(this);var f=t.offset().top;var l=u(t);if(f+l<s||f>s+n){return}o.css("backgroundPosition",r+" "+Math.round((a-s)*i)+"px")})}var o=e(this);var u;var a;var f=0;o.each(function(){a=o.offset().top});if(s){u=function(e){return e.outerHeight(true)}}else{u=function(e){return e.height()}}if(arguments.length<1||r===null)r="50%";if(arguments.length<2||i===null)i=.1;if(arguments.length<3||s===null)s=true;t.bind("scroll",l).resize(l);l()}})

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
if(typeof jQuery.easing["jswing"]=="undefined"){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})}
/**
 * jquery.dlmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' );

	$.DLMenu = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses : { animIn : 'dl-animate-in-2', animOut : 'dl-animate-out-2' }
	};

	$.DLMenu.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();
			
			var animEndEventNames = {
					'WebkitAnimation' : 'webkitAnimationEnd',
					'OAnimation' : 'oAnimationEnd',
					'msAnimation' : 'MSAnimationEnd',
					'animation' : 'animationend'
				},
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ] + '.dlmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.dlmenu',
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config : function() {
			this.open = false;
			this.$trigger = this.$el.find( '#mobile-menu' );
/* ! !changed */
			this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">'+this.$el.find( '.menu-open' ).html()+"</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";
			this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">'+this.$el.find( '.menu-close' ).html()+"</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";
/* !changed: end */
			
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){
				this.$menu = jQuery( '.floatwarpper ul.dl-menu' );
			}else{
				this.$menu = this.$el.find( 'ul.dl-menu' );
			}
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			
		

			this.$back = this.$menu.find( 'li.dl-back' );
			this.$menuitems.each(function(){
				var $item_new = $(this),
						$submenu_new = $item_new.children( 'ul.dl-submenu' );
						 $item_new.siblings(".new-column").find("> a").remove();
					var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();
						new_col_sub.find("> a, > .dl-back").remove();
					new_col_sub.children().unwrap().appendTo($submenu_new);
					$item_new.siblings(".new-column").remove();
					if( $item_new.find("> a").attr("href")=="#"){
						$item_new.find("> a").removeAttr("href");
					}
			});
		},
		_initEvents : function() {

			var self = this;
			
			this.$trigger.unbind().on( 'click.dlmenu', function() {
				
				if( self.open ) {
					self._closeMenu();
				} 
				else {
					self._openMenu();
					// clicking somewhere else makes the menu close

					if(self.$trigger.hasClass("leftbtnmenu")){
						if(jQuery("body >.dl-menu-film").length==0){
							jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
						}
						jQuery("body >.dl-menu-film").off( 'click' ).on( 'click.dlmenu', function() {
							self._closeMenu() ;
						} );
					}else{
						$body.off( 'click' ).on( 'click.dlmenu', function() {
							self._closeMenu() ;
						} );
					}
					
				}
				return false;

			} );
			
			this.$menuitems.on( 'click.dlmenu', function( event ) {
				if($(this).closest(".dl-menuwrapper").css("visibility")=="hidden"){
					return;
				}
				event.stopPropagation();

				var $item = $(this),$submenu = $item.children( 'ul.dl-submenu' );
				
				
				if( $submenu.length > 0 ) {
					
					var xx=event.pageX;
					var width = $submenu.width();
				
					var isclick = width-xx>35;

					if($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")){
						var textw = $item.find(">a>span").width()*1+$item.find(">a>span").offset().left*1;
						isclick = xx<textw;
					}
					if(!$item.find(">a").attr("href")){
						//无链接
						isclick = false;
					}
					if(isclick){
						if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1){
							self._closeMenu();
						}
					}else{
						//...
						if(	$(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu")){
							if($submenu.css("display")!="block"){
								var h  = $submenu.height();
								$submenu.show().css("height",0).animate({ height: h }, 150,function(){
									$submenu.attr("style","display:block;");
								});
								$item.addClass( 'dl-subviewopen' );
							}else{
								$submenu.animate({ height: 0 }, 150,function(){
									$submenu.hide();
								});
								
								$item.removeClass( 'dl-subviewopen' )
							}
						}else{
							$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

							var $flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animIn ),
								onAnimationEndFn = function() {
									self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animOut ).addClass( 'dl-subview' );
									$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
									$item.addClass( 'qfy-subviewopen' );
									$flyin.remove();
								};

							self.$menu.addClass( self.options.animationClasses.animOut );


							if( self.supportAnimations ) {
								self.$menu.on( self.animEndEventName, onAnimationEndFn );
							}
							else {
								onAnimationEndFn.call();
							}
							
							
						}

					
						
						return false;
					}

				}else{
	
					if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1){
						self._closeMenu();
					}
					
				}
			} );

			this.$back.on( 'click.dlmenu', function( event ) {

				$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

				var $this = $( this ),
					$submenu = $this.parents( 'ul.dl-submenu:first' ),
					$item = $submenu.parent(),


					$flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animOut );

				var onAnimationEndFn = function() {
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animIn );
					$flyin.remove();
				};

				self.$menu.addClass( self.options.animationClasses.animIn );

				if( self.supportAnimations ) {
					self.$menu.on( self.animEndEventName, onAnimationEndFn );
				}
				else {
					onAnimationEndFn.call();
				}

				$item.removeClass( 'dl-subviewopen' ).removeClass("qfy-subviewopen");
				
				var $subview = $this.parents( '.dl-subview:first' );
				if( $subview.is( 'li' ) ) {
					$subview.addClass( 'dl-subviewopen' ).addClass("qfy-subviewopen");
				}
				$subview.removeClass( 'dl-subview' );

				return false;

			} );
			
		},
		_closeMenu : function() {
			var self = this,
				onTransitionEndFn = function() {
					self.$menu.off( self.transEndEventName );
					self._resetMenu();
				};
			
			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.parent().removeClass("dl-menuopen-parent");
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){
				$(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");
				$(".dl-menu-open .floatwarpper").removeAttr("style");
				$(".floatwarpper .dl-container").removeAttr("style");
				$("#page #dl-menu").removeAttr("style");
				$("body > #dl-menu").remove();
				var element_right = $("#mobile-menu").attr("data-right");
				if(element_right){
					$("#dl-menu").css("right",element_right+"px");
				}
				var element_top = $("#mobile-menu").attr("data-top");
				if(element_top){
					$("#dl-menu").css("top",element_top+"px");
				}
			}
			$("body").removeClass("dl-menu-open");
			this.$menu.addClass( 'dl-menu-toggle' );
			if(this.$menu.closest("section.section").length>0){
				var style = this.$menu.closest("section.section").attr("style");
				style = style.replace(/min-height:\s*\d+px;*/g,"");
				this.$menu.closest("section.section").attr("style",style);
			}
			this.$trigger.removeClass( 'dl-active' ).html(this.openCap);
			
			if( this.supportTransitions ) {
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}
			else {
				onTransitionEndFn.call();
			}

			this.open = false;

/*
			this.$el.css({
				position : "fixed",
				top : ""
			});
*/
		},
		_openMenu : function() {
			this.$menu.parent().addClass("dl-menuopen-parent");
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$menu.closest(".qfy-listcatecontrols").length==0){
				
				var $this = this;
				$("body").addClass("dl-menu-open");
				var width =  $('html').width();
				if($("#mobile-menu").hasClass("fullfloatmenu")){
					var w= width;
				}else{
					var w = width - 60;
				}
				
				if(!$(".floatwarpper").hasClass("leftbtnmenu")){
					$(".mobilefloatmenu.dl-menu-open #page").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');
					$(".dl-menu-open .floatwarpper").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');
					$(".floatwarpper").width(w).css("right","-"+w+"px");
				}
				$(".floatwarpper .dl-container").css("max-width","100%");
				var element_top = $("#mobile-menu").attr("data-top");
				var element_right = $("#mobile-menu").attr("data-right");
				if(element_top){
					$("#page #dl-menu").css("top",element_top+"px");
					$("body > #dl-menu").css("top",element_top+"px");
				}
				setTimeout(function(){
					if(!$(".floatwarpper").hasClass("leftbtnmenu")){
						$("#page #dl-menu").removeClass("dl-menu-hidden");
						var menu_html =$("#page #dl-menu").prop("outerHTML");
						$("body").prepend(menu_html);
						if(element_top){
							$("body > #dl-menu").css("top",element_top+"px");
						}
						$("#page #dl-menu").addClass("dl-menu-hidden");
						
						if($("#mobile-menu").hasClass("fullfloatmenu")){
							$("body > #dl-menu").css("right",element_right+"px");
						}else{
							$("body > #dl-menu").css("right",(1*w+8)+"px");
						}
					}
					$("body > #dl-menu").unbind().bind("click",function(e){
						 e.stopPropagation();
						$this.$trigger.click();
						return false;
					});
				
				},200)

			}
			this.$trigger.addClass( 'dl-active' ).html(this.closeCap);
			this.open = true;
			if(this.$menu.closest("section.section").length>0){
				var minheight = this.$menu.height();
				this.$menu.closest("section.section").css("min-height",minheight+"px");
			}
			if(!$(".floatwarpper").hasClass("leftbtnmenu")){
				$("html, body").animate({ scrollTop: this.$el.offset().top - 20 }, 150);
			}
		},
		// resets the menu to its original state (first level of options)
		_resetMenu : function() {
			if(!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu")){
				this.$menu.removeClass( 'dl-subview' );
				this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
			}
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'dlmenu' );
				if ( !instance ) {
					logError( "cannot call methods on dlmenu prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'dlmenu' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );
/****************************************************************************************************************************/
 /* !- Tooltip*/  
 function simple_tooltip(e,t){jQuery(e).each(function(e){jQuery("body").append("<div class='"+t+"' id='"+t+e+"'>"+jQuery(this).find("span.tooltip-c").html()+"</div>");var n=jQuery("#"+t+e);jQuery(this).removeAttr("title").mouseover(function(){n.css({opacity:1,display:"none"}).fadeIn(400)}).mousemove(function(e){var t=jQuery(window).scrollTop();var r=jQuery(window).width();var i;var s;var o=15;if(r-o*2>=n.width()+e.pageX){i=e.pageX+o}else{i=r-n.width()-o}if(t+o*2>=e.pageY-n.height()){s=t+o}else{s=e.pageY-n.height()-2.2*o}n.css({left:i,top:s})}).mouseout(function(){n.css({left:"-9999px"})})})}
 
/* !Sandbox */

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
jQuery(document).ready(function(a) {a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup."+b("Open"))},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("update",function(){f(g,h);var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup",function(j){if(!h.hasClass(b("Open"))){g.blur();g.focus()}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown",function(j){h.removeClass(b("Changed"))}).on("mouseup",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.focus()}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup."+b("Open"),function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.blur()}else{f(g,h)}})}}}).focus(function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).blur(function(){h.removeClass(b("Focus")+" "+b("Open"))}).hover(function(){h.addClass(b("Hover"))},function(){h.removeClass(b("Hover"))}).trigger("update")})}})});


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'div.rollover-content, div.fs-entry-content' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options=$.extend({},options);options.expires=-1;}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}expires='; expires='+date.toUTCString();}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}return cookieValue;}};

/* Sandbox: end */;

/* dt-main-op-jquery: (http://5513e8ed8fca9.t73.qifeiye.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip,firstAdapter,i,mouseMoved,mousePosition,mousePositionObservers,position,vendors,_i,_len,_ref,__slice=[].slice,__indexOf=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1},__hasProp={}.hasOwnProperty;for(Opentip=function(){function t(e,i,o,s){var n,r,a,h,p,d,l,u,c,g,f,m,v,b,w=this;if(this.id=++t.lastId,this.debug("Creating Opentip."),t.tips.push(this),this.adapter=t.adapter,n=this.adapter.data(e,"opentips")||[],n.push(this),this.adapter.data(e,"opentips",n),this.triggerElement=this.adapter.wrap(e),this.triggerElement.length>1)throw Error("You can't call Opentip on multiple elements.");if(1>this.triggerElement.length)throw Error("Invalid element.");this.loaded=!1,this.loading=!1,this.visible=!1,this.waitingToShow=!1,this.waitingToHide=!1,this.currentPosition={left:0,top:0},this.dimensions={width:100,height:50},this.content="",this.redraw=!0,this.currentObservers={showing:!1,visible:!1,hiding:!1,hidden:!1},s=this.adapter.clone(s),typeof i=="object"?(s=i,i=o=void 0):typeof o=="object"&&(s=o,o=void 0),o!=null&&(s.title=o),i!=null&&this.setContent(i),s["extends"]==null&&(s["extends"]=s.style!=null?s.style:t.defaultStyle),h=[s],b=s;while(b["extends"]){if(d=b["extends"],b=t.styles[d],b==null)throw Error("Invalid style: "+d);h.unshift(b),b["extends"]==null&&d!=="standard"&&(b["extends"]="standard")}for(s=(f=this.adapter).extend.apply(f,[{}].concat(__slice.call(h))),s.hideTriggers=function(){var t,e,i,o;for(i=s.hideTriggers,o=[],t=0,e=i.length;e>t;t++)r=i[t],o.push(r);return o}(),s.hideTrigger&&s.hideTriggers.length===0&&s.hideTriggers.push(s.hideTrigger),m=["tipJoint","targetJoint","stem"],l=0,c=m.length;c>l;l++)p=m[l],s[p]&&typeof s[p]=="string"&&(s[p]=new t.Joint(s[p]));for(!s.ajax||s.ajax!==!0&&s.ajax||(s.ajax=this.adapter.tagName(this.triggerElement)==="A"?this.adapter.attr(this.triggerElement,"href"):!1),s.showOn==="click"&&this.adapter.tagName(this.triggerElement)==="A"&&this.adapter.observe(this.triggerElement,"click",function(t){return t.preventDefault(),t.stopPropagation(),t.stopped=!0}),s.target&&(s.fixed=!0),s.stem===!0&&(s.stem=new t.Joint(s.tipJoint)),s.target===!0?s.target=this.triggerElement:s.target&&(s.target=this.adapter.wrap(s.target)),this.currentStem=s.stem,s.delay==null&&(s.delay=s.showOn==="mouseover"?.2:0),s.targetJoint==null&&(s.targetJoint=new t.Joint(s.tipJoint).flip()),this.showTriggers=[],this.showTriggersWhenVisible=[],this.hideTriggers=[],s.showOn&&s.showOn!=="creation"&&this.showTriggers.push({element:this.triggerElement,event:s.showOn}),s.ajaxCache!=null&&(s.cache=s.ajaxCache,delete s.ajaxCache),this.options=s,this.bound={},v=["prepareToShow","prepareToHide","show","hide","reposition"],u=0,g=v.length;g>u;u++)a=v[u],this.bound[a]=function(t){return function(){return w[t].apply(w,arguments)}}(a);this.adapter.domReady(function(){return w.activate(),w.options.showOn==="creation"?w.prepareToShow():void 0})}return t.prototype.STICKS_OUT_TOP=1,t.prototype.STICKS_OUT_BOTTOM=2,t.prototype.STICKS_OUT_LEFT=1,t.prototype.STICKS_OUT_RIGHT=2,t.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"},t.prototype._setup=function(){var t,e,i,o,s,n,r,a,h,p,d;for(this.debug("Setting up the tooltip."),this._buildContainer(),this.hideTriggers=[],h=this.options.hideTriggers,o=s=0,r=h.length;r>s;o=++s){if(e=h[o],i=null,t=this.options.hideOn instanceof Array?this.options.hideOn[o]:this.options.hideOn,typeof e=="string")switch(e){case"trigger":t=t||"mouseout",i=this.triggerElement;break;case"tip":t=t||"mouseover",i=this.container;break;case"target":t=t||"mouseover",i=this.options.target;break;case"closeButton":break;default:throw Error("Unknown hide trigger: "+e+".")}else t=t||"mouseover",i=this.adapter.wrap(e);i&&this.hideTriggers.push({element:i,event:t,original:e})}for(p=this.hideTriggers,d=[],n=0,a=p.length;a>n;n++)e=p[n],d.push(this.showTriggersWhenVisible.push({element:e.element,event:"mouseover"}));return d},t.prototype._buildContainer=function(){return this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>'),this.adapter.css(this.container,{position:"absolute"}),this.options.ajax&&this.adapter.addClass(this.container,this["class"].loading),this.options.fixed&&this.adapter.addClass(this.container,this["class"].fixed),this.options.showEffect&&this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect),this.options.hideEffect?this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect):void 0},t.prototype._buildElements=function(){var t,e;return this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>'),this.backgroundCanvas=this.adapter.wrap(document.createElement("canvas")),this.adapter.css(this.backgroundCanvas,{position:"absolute"}),typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager!==null&&G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)),t=this.adapter.find(this.tooltipElement,"."+this["class"].header),this.options.title&&(e=this.adapter.create("<h1></h1>"),this.adapter.update(e,this.options.title,this.options.escapeTitle),this.adapter.append(t,e)),this.options.ajax&&!this.loaded&&this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>')),__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>'),this.adapter.append(t,this.closeButtonElement)),this.adapter.append(this.container,this.backgroundCanvas),this.adapter.append(this.container,this.tooltipElement),this.adapter.append(document.body,this.container),this._newContent=!0,this.redraw=!0},t.prototype.setContent=function(t){return this.content=t,this._newContent=!0,typeof this.content=="function"?(this._contentFunction=this.content,this.content=""):this._contentFunction=null,this.visible?this._updateElementContent():void 0},t.prototype._updateElementContent=function(){var t;return(this._newContent||!this.options.cache&&this._contentFunction)&&(t=this.adapter.find(this.container,"."+this["class"].content),t!=null&&(this._contentFunction&&(this.debug("Executing content function."),this.content=this._contentFunction(this)),this.adapter.update(t,this.content,this.options.escapeContent)),this._newContent=!1),this._storeAndLockDimensions(),this.reposition()},t.prototype._storeAndLockDimensions=function(){var t;if(this.container)return t=this.dimensions,this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"}),this.dimensions=this.adapter.dimensions(this.container),this.dimensions.width+=1,this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"}),this._dimensionsEqual(this.dimensions,t)?void 0:(this.redraw=!0,this._draw())},t.prototype.activate=function(){return this._setupObservers("hidden","hiding")},t.prototype.deactivate=function(){return this.debug("Deactivating tooltip."),this.hide(),this._setupObservers("-showing","-visible","-hidden","-hiding")},t.prototype._setupObservers=function(){var t,e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m=this;for(o=arguments.length>=1?__slice.call(arguments,0):[],n=0,p=o.length;p>n;n++)if(i=o[n],e=!1,i.charAt(0)==="-"&&(e=!0,i=i.substr(1)),this.currentObservers[i]!==!e)switch(this.currentObservers[i]=!e,t=function(){var t,i,o;return t=arguments.length>=1?__slice.call(arguments,0):[],e?(i=m.adapter).stopObserving.apply(i,t):(o=m.adapter).observe.apply(o,t)},i){case"showing":for(c=this.hideTriggers,r=0,d=c.length;d>r;r++)s=c[r],t(s.element,s.event,this.bound.prepareToHide);t(document.onresize!=null?document:window,"resize",this.bound.reposition),t(window,"scroll",this.bound.reposition);break;case"visible":for(g=this.showTriggersWhenVisible,a=0,l=g.length;l>a;a++)s=g[a],t(s.element,s.event,this.bound.prepareToShow);break;case"hiding":for(f=this.showTriggers,h=0,u=f.length;u>h;h++)s=f[h],t(s.element,s.event,this.bound.prepareToShow);break;case"hidden":break;default:throw Error("Unknown state: "+i)}return null},t.prototype.prepareToShow=function(){return this._abortHiding(),this._abortShowing(),this.visible?void 0:(this.debug("Showing in "+this.options.delay+"s."),this.container==null&&this._setup(),this.options.group&&t._abortShowingGroup(this.options.group,this),this.preparingToShow=!0,this._setupObservers("-hidden","-hiding","showing"),this._followMousePosition(),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0))},t.prototype.show=function(){var e=this;return this._abortHiding(),this.visible?void 0:(this._clearTimeouts(),this._triggerElementExists()?(this.debug("Showing now."),this.container==null&&this._setup(),this.options.group&&t._hideGroup(this.options.group,this),this.visible=!0,this.preparingToShow=!1,this.tooltipElement==null&&this._buildElements(),this._updateElementContent(),!this.options.ajax||this.loaded&&this.options.cache||this._loadAjax(),this._searchAndActivateCloseButtons(),this._startEnsureTriggerElement(),this.adapter.css(this.container,{zIndex:t.lastZIndex++}),this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible"),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this.adapter.removeClass(this.container,this["class"].hiding),this.adapter.removeClass(this.container,this["class"].hidden),this.adapter.addClass(this.container,this["class"].goingToShow),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var t;if(e.visible&&!e.preparingToHide)return e.adapter.removeClass(e.container,e["class"].goingToShow),e.adapter.addClass(e.container,e["class"].showing),t=0,e.options.showEffect&&e.options.showEffectDuration&&(t=e.options.showEffectDuration),e.setCss3Style(e.container,{transitionDuration:""+t+"s"}),e._visibilityStateTimeoutId=e.setTimeout(function(){return e.adapter.removeClass(e.container,e["class"].showing),e.adapter.addClass(e.container,e["class"].visible)},t),e._activateFirstInput()}),this._draw()):this.deactivate())},t.prototype._abortShowing=function(){return this.preparingToShow?(this.debug("Aborting showing."),this._clearTimeouts(),this._stopFollowingMousePosition(),this.preparingToShow=!1,this._setupObservers("-showing","-visible","hiding","hidden")):void 0},t.prototype.prepareToHide=function(){return this._abortShowing(),this._abortHiding(),this.visible?(this.debug("Hiding in "+this.options.hideDelay+"s"),this.preparingToHide=!0,this._setupObservers("-showing","visible","-hidden","hiding"),this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)):void 0},t.prototype.hide=function(){var t=this;return this._abortShowing(),this.visible&&(this._clearTimeouts(),this.debug("Hiding!"),this.visible=!1,this.preparingToHide=!1,this._stopEnsureTriggerElement(),this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden"),this.options.fixed||this._stopFollowingMousePosition(),this.container)?(this.adapter.removeClass(this.container,this["class"].visible),this.adapter.removeClass(this.container,this["class"].showing),this.adapter.addClass(this.container,this["class"].goingToHide),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var e;return t.adapter.removeClass(t.container,t["class"].goingToHide),t.adapter.addClass(t.container,t["class"].hiding),e=0,t.options.hideEffect&&t.options.hideEffectDuration&&(e=t.options.hideEffectDuration),t.setCss3Style(t.container,{transitionDuration:""+e+"s"}),t._visibilityStateTimeoutId=t.setTimeout(function(){return t.adapter.removeClass(t.container,t["class"].hiding),t.adapter.addClass(t.container,t["class"].hidden),t.setCss3Style(t.container,{transitionDuration:"0s"}),t.options.removeElementsOnHide?(t.debug("Removing HTML elements."),t.adapter.remove(t.container),delete t.container,delete t.tooltipElement):void 0},e)})):void 0},t.prototype._abortHiding=function(){return this.preparingToHide?(this.debug("Aborting hiding."),this._clearTimeouts(),this.preparingToHide=!1,this._setupObservers("-hiding","showing","visible")):void 0},t.prototype.reposition=function(){var t,e,i,o=this;return t=this.getPosition(),t==null||(e=this.options.stem,this.options.containInViewport&&(i=this._ensureViewportContainment(t),t=i.position,e=i.stem),this._positionsEqual(t,this.currentPosition))?void 0:(this.options.stem&&!e.eql(this.currentStem)&&(this.redraw=!0),this.currentPosition=t,this.currentStem=e,this._draw(),this.adapter.css(this.container,{left:""+t.left+"px",top:""+t.top+"px"}),this.defer(function(){var t,e;return t=o.adapter.unwrap(o.container),t.style.visibility="hidden",e=t.offsetHeight,t.style.visibility="visible"}))},t.prototype.getPosition=function(t,e,i){var o,s,n,r,a,h,p,d,l;if(this.container)return t==null&&(t=this.options.tipJoint),e==null&&(e=this.options.targetJoint),r={},this.options.target?(p=this.adapter.offset(this.options.target),h=this.adapter.dimensions(this.options.target),r=p,e.right?(d=this.adapter.unwrap(this.options.target),d.getBoundingClientRect!=null?r.left=d.getBoundingClientRect().right+((l=window.pageXOffset)!=null?l:document.body.scrollLeft):r.left+=h.width):e.center&&(r.left+=Math.round(h.width/2)),e.bottom?r.top+=h.height:e.middle&&(r.top+=Math.round(h.height/2)),this.options.borderWidth&&(this.options.tipJoint.left&&(r.left+=this.options.borderWidth),this.options.tipJoint.right&&(r.left-=this.options.borderWidth),this.options.tipJoint.top?r.top+=this.options.borderWidth:this.options.tipJoint.bottom&&(r.top-=this.options.borderWidth))):r=this.initialMousePosition?{top:this.initialMousePosition.y,left:this.initialMousePosition.x}:{top:mousePosition.y,left:mousePosition.x},this.options.autoOffset&&(a=this.options.stem?this.options.stemLength:0,n=a&&this.options.fixed?2:10,o=t.middle&&!this.options.fixed?15:0,s=t.center&&!this.options.fixed?15:0,t.right?r.left-=n+o:t.left&&(r.left+=n+o),t.bottom?r.top-=n+s:t.top&&(r.top+=n+s),a&&(i==null&&(i=this.options.stem),i.right?r.left-=a:i.left&&(r.left+=a),i.bottom?r.top-=a:i.top&&(r.top+=a))),r.left+=this.options.offset[0],r.top+=this.options.offset[1],t.right?r.left-=this.dimensions.width:t.center&&(r.left-=Math.round(this.dimensions.width/2)),t.bottom?r.top-=this.dimensions.height:t.middle&&(r.top-=Math.round(this.dimensions.height/2)),r},t.prototype._ensureViewportContainment=function(e){var i,o,s,n,r,a,h,p,d,l,u,c;if(h=this.options.stem,s={position:e,stem:h},!this.visible||!e)return s;if(p=this._sticksOut(e),!p[0]&&!p[1])return s;if(l=new t.Joint(this.options.tipJoint),this.options.targetJoint&&(d=new t.Joint(this.options.targetJoint)),a=this.adapter.scrollOffset(),u=this.adapter.viewportDimensions(),c=[e.left-a[0],e.top-a[1]],i=!1,u.width>=this.dimensions.width&&p[0])switch(i=!0,p[0]){case this.STICKS_OUT_LEFT:l.setHorizontal("left"),this.options.targetJoint&&d.setHorizontal("right");break;case this.STICKS_OUT_RIGHT:l.setHorizontal("right"),this.options.targetJoint&&d.setHorizontal("left")}if(u.height>=this.dimensions.height&&p[1])switch(i=!0,p[1]){case this.STICKS_OUT_TOP:l.setVertical("top"),this.options.targetJoint&&d.setVertical("bottom");break;case this.STICKS_OUT_BOTTOM:l.setVertical("bottom"),this.options.targetJoint&&d.setVertical("top")}return i?(this.options.stem&&(h=l),e=this.getPosition(l,d,h),o=this._sticksOut(e),n=!1,r=!1,o[0]&&o[0]!==p[0]&&(n=!0,l.setHorizontal(this.options.tipJoint.horizontal),this.options.targetJoint&&d.setHorizontal(this.options.targetJoint.horizontal)),o[1]&&o[1]!==p[1]&&(r=!0,l.setVertical(this.options.tipJoint.vertical),this.options.targetJoint&&d.setVertical(this.options.targetJoint.vertical)),n&&r?s:((n||r)&&(this.options.stem&&(h=l),e=this.getPosition(l,d,h)),{position:e,stem:h})):s},t.prototype._sticksOut=function(t){var e,i,o,s;return i=this.adapter.scrollOffset(),s=this.adapter.viewportDimensions(),e=[t.left-i[0],t.top-i[1]],o=[!1,!1],0>e[0]?o[0]=this.STICKS_OUT_LEFT:e[0]+this.dimensions.width>s.width&&(o[0]=this.STICKS_OUT_RIGHT),0>e[1]?o[1]=this.STICKS_OUT_TOP:e[1]+this.dimensions.height>s.height&&(o[1]=this.STICKS_OUT_BOTTOM),o},t.prototype._draw=function(){var e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m,v,b,w,_=this;if(this.backgroundCanvas&&this.redraw){if(this.debug("Drawing background."),this.redraw=!1,this.currentStem){for(v=["top","right","bottom","left"],f=0,m=v.length;m>f;f++)u=v[f],this.adapter.removeClass(this.container,"stem-"+u);this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal),this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}return r=[0,0],a=[0,0],__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(n=new t.Joint(((b=this.currentStem)!=null?b+"":void 0)==="top right"?"top left":"top right"),r=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]],a=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]),o=this.adapter.clone(this.dimensions),s=[0,0],this.options.borderWidth&&(o.width+=this.options.borderWidth*2,o.height+=this.options.borderWidth*2,s[0]-=this.options.borderWidth,s[1]-=this.options.borderWidth),this.options.shadow&&(o.width+=this.options.shadowBlur*2,o.width+=Math.max(0,this.options.shadowOffset[0]-this.options.shadowBlur*2),o.height+=this.options.shadowBlur*2,o.height+=Math.max(0,this.options.shadowOffset[1]-this.options.shadowBlur*2),s[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]),s[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1])),i={left:0,right:0,top:0,bottom:0},this.currentStem&&(this.currentStem.left?i.left=this.options.stemLength:this.currentStem.right&&(i.right=this.options.stemLength),this.currentStem.top?i.top=this.options.stemLength:this.currentStem.bottom&&(i.bottom=this.options.stemLength)),n&&(n.left?i.left=Math.max(i.left,a[0]):n.right&&(i.right=Math.max(i.right,a[0])),n.top?i.top=Math.max(i.top,a[1]):n.bottom&&(i.bottom=Math.max(i.bottom,a[1]))),o.width+=i.left+i.right,o.height+=i.top+i.bottom,s[0]-=i.left,s[1]-=i.top,this.currentStem&&this.options.borderWidth&&(w=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),g=w.stemLength,c=w.stemBase),e=this.adapter.unwrap(this.backgroundCanvas),e.width=o.width,e.height=o.height,this.adapter.css(this.backgroundCanvas,{width:""+e.width+"px",height:""+e.height+"px",left:""+s[0]+"px",top:""+s[1]+"px"}),h=e.getContext("2d"),h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,e.width,e.height),h.beginPath(),h.fillStyle=this._getColor(h,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal),h.lineJoin="miter",h.miterLimit=500,l=this.options.borderWidth/2,this.options.borderWidth?(h.strokeStyle=this.options.borderColor,h.lineWidth=this.options.borderWidth):(g=this.options.stemLength,c=this.options.stemBase),c==null&&(c=0),d=function(t,e,i){return i&&h.moveTo(Math.max(c,_.options.borderRadius,r[0])+1-l,-l),e?(h.lineTo(t/2-c/2,-l),h.lineTo(t/2,-g-l),h.lineTo(t/2+c/2,-l)):void 0},p=function(t,e,i){var o,s,n,a;return t?(h.lineTo(-c+l,0-l),h.lineTo(g+l,-g-l),h.lineTo(l,c-l)):e?(a=_.options.closeButtonOffset,n=r[0],i%2!==0&&(a=[a[1],a[0]],n=r[1]),o=Math.acos(a[1]/_.options.closeButtonRadius),s=Math.acos(a[0]/_.options.closeButtonRadius),h.lineTo(-n+l,-l),h.arc(l-a[0],-l+a[1],_.options.closeButtonRadius,-(Math.PI/2+o),s,!1)):(h.lineTo(-_.options.borderRadius+l,-l),h.quadraticCurveTo(l,-l,l,_.options.borderRadius-l))},h.translate(-s[0],-s[1]),h.save(),function(){var e,i,o,s,r,a,l,u,c,g,f;for(f=[],i=c=0,g=t.positions.length/2;g>=0?g>c:c>g;i=g>=0?++c:--c)r=i*2,a=i===0||i===3?0:_.dimensions.width,l=2>i?0:_.dimensions.height,u=Math.PI/2*i,o=i%2===0?_.dimensions.width:_.dimensions.height,s=new t.Joint(t.positions[r]),e=new t.Joint(t.positions[r+1]),h.save(),h.translate(a,l),h.rotate(u),d(o,s.eql(_.currentStem),i===0),h.translate(o,0),p(e.eql(_.currentStem),e.eql(n),i),f.push(h.restore());return f}(),h.closePath(),h.save(),this.options.shadow&&(h.shadowColor=this.options.shadowColor,h.shadowBlur=this.options.shadowBlur,h.shadowOffsetX=this.options.shadowOffset[0],h.shadowOffsetY=this.options.shadowOffset[1]),h.fill(),h.restore(),this.options.borderWidth&&h.stroke(),h.restore(),n?function(){var t,e,i,o,s;return i=e=_.options.closeButtonRadius*2,n+""=="top right"?(s=[_.dimensions.width-_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]+l,s[1]-l]):(s=[_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]-l,s[1]-l]),h.translate(t[0],t[1]),o=_.options.closeButtonCrossSize/2,h.save(),h.beginPath(),h.strokeStyle=_.options.closeButtonCrossColor,h.lineWidth=_.options.closeButtonCrossLineWidth,h.lineCap="round",h.moveTo(-o,-o),h.lineTo(o,o),h.stroke(),h.beginPath(),h.moveTo(o,-o),h.lineTo(-o,o),h.stroke(),h.restore(),_.adapter.css(_.closeButtonElement,{left:""+(s[0]-o-_.options.closeButtonLinkOverscan)+"px",top:""+(s[1]-o-_.options.closeButtonLinkOverscan)+"px",width:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px",height:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px"})}():void 0}},t.prototype._getPathStemMeasures=function(t,e,i){var o,s,n,r,a,h,p;if(r=i/2,n=Math.atan(t/2/e),o=n*2,a=r/Math.sin(o),s=2*a*Math.cos(n),p=r+e-s,0>p)throw Error("Sorry but your stemLength / stemBase ratio is strange.");return h=Math.tan(n)*p*2,{stemLength:p,stemBase:h}},t.prototype._getColor=function(t,e,i,o){var s,n,r,a,h;if(o==null&&(o=!1),typeof i=="string")return i;for(n=o?t.createLinearGradient(0,0,e.width,0):t.createLinearGradient(0,0,0,e.height),r=a=0,h=i.length;h>a;r=++a)s=i[r],n.addColorStop(s[0],s[1]);return n},t.prototype._searchAndActivateCloseButtons=function(){var t,e,i,o;for(o=this.adapter.findAll(this.container,"."+this["class"].close),e=0,i=o.length;i>e;e++)t=o[e],this.hideTriggers.push({element:this.adapter.wrap(t),event:"click"});return this.currentObservers.showing&&this._setupObservers("-showing","showing"),this.currentObservers.visible?this._setupObservers("-visible","visible"):void 0},t.prototype._activateFirstInput=function(){var t;return t=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea")),t!=null?typeof t.focus=="function"?t.focus():void 0:void 0},t.prototype._followMousePosition=function(){return this.options.fixed?void 0:t._observeMousePosition(this.bound.reposition)},t.prototype._stopFollowingMousePosition=function(){return this.options.fixed?void 0:t._stopObservingMousePosition(this.bound.reposition)},t.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)},t.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)},t.prototype._clearTimeouts=function(){return clearTimeout(this._visibilityStateTimeoutId),this._clearShowTimeout(),this._clearHideTimeout()},t.prototype._triggerElementExists=function(){var t;t=this.adapter.unwrap(this.triggerElement);while(t.parentNode){if(t.parentNode.tagName==="BODY")return!0;t=t.parentNode}return!1},t.prototype._loadAjax=function(){var t=this;if(!this.loading)return this.loaded=!1,this.loading=!0,this.adapter.addClass(this.container,this["class"].loading),this.setContent(""),this.debug("Loading content from "+this.options.ajax),this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(e){return t.debug("Loading successful."),t.adapter.removeClass(t.container,t["class"].loading),t.setContent(e)},onError:function(e){var i;return i=t.options.ajaxErrorMessage,t.debug(i,e),t.setContent(i),t.adapter.addClass(t.container,t["class"].ajaxError)},onComplete:function(){return t.adapter.removeClass(t.container,t["class"].loading),t.loading=!1,t.loaded=!0,t._searchAndActivateCloseButtons(),t._activateFirstInput(),t.reposition()}})},t.prototype._ensureTriggerElement=function(){return this._triggerElementExists()?void 0:(this.deactivate(),this._stopEnsureTriggerElement())},t.prototype._ensureTriggerElementInterval=1e3,t.prototype._startEnsureTriggerElement=function(){var t=this;return this._ensureTriggerElementTimeoutId=setInterval(function(){return t._ensureTriggerElement()},this._ensureTriggerElementInterval)},t.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)},t}(),vendors=["khtml","ms","o","moz","webkit"],Opentip.prototype.setCss3Style=function(t,e){var i,o,s,n,r;t=this.adapter.unwrap(t),r=[];for(i in e)__hasProp.call(e,i)&&(o=e[i],t.style[i]!=null?r.push(t.style[i]=o):r.push(function(){var e,r,a;for(a=[],e=0,r=vendors.length;r>e;e++)s=vendors[e],n=""+this.ucfirst(s)+this.ucfirst(i),t.style[n]!=null?a.push(t.style[n]=o):a.push(void 0);return a}.call(this)));return r},Opentip.prototype.defer=function(t){return setTimeout(t,0)},Opentip.prototype.setTimeout=function(t,e){return setTimeout(t,e?e*1e3:0)},Opentip.prototype.ucfirst=function(t){return t==null?"":t.charAt(0).toUpperCase()+t.slice(1)},Opentip.prototype.dasherize=function(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})},mousePositionObservers=[],mousePosition={x:0,y:0},mouseMoved=function(t){var e,i,o,s;for(mousePosition=Opentip.adapter.mousePosition(t),s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],s.push(e());return s},Opentip.followMousePosition=function(){return Opentip.adapter.observe(document.body,"mousemove",mouseMoved)},Opentip._observeMousePosition=function(t){return mousePositionObservers.push(t)},Opentip._stopObservingMousePosition=function(t){var e;return mousePositionObservers=function(){var i,o,s;for(s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],e!==t&&s.push(e);return s}()},Opentip.Joint=function(){function t(t){t!=null&&(t instanceof Opentip.Joint&&(t+=""),this.set(t))}return t.prototype.set=function(t){return t=t.toLowerCase(),this.setHorizontal(t),this.setVertical(t),this},t.prototype.setHorizontal=function(t){var e,i,o,s,n,r,a;for(i=["left","center","right"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.horizontal=e.toLowerCase());for(this.horizontal==null&&(this.horizontal="center"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.horizontal===e?e:void 0);return a},t.prototype.setVertical=function(t){var e,i,o,s,n,r,a;for(i=["top","middle","bottom"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.vertical=e.toLowerCase());for(this.vertical==null&&(this.vertical="middle"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.vertical===e?e:void 0);return a},t.prototype.eql=function(t){return t!=null&&this.horizontal===t.horizontal&&this.vertical===t.vertical},t.prototype.flip=function(){var t,e;return e=Opentip.position[this.toString(!0)],t=(e+4)%8,this.set(Opentip.positions[t]),this},t.prototype.toString=function(t){var e,i;return t==null&&(t=!1),i=this.vertical==="middle"?"":this.vertical,e=this.horizontal==="center"?"":this.horizontal,i&&e&&(e=t?Opentip.prototype.ucfirst(e):" "+e),""+i+e},t}(),Opentip.prototype._positionsEqual=function(t,e){return t!=null&&e!=null&&t.left===e.left&&t.top===e.top},Opentip.prototype._dimensionsEqual=function(t,e){return t!=null&&e!=null&&t.width===e.width&&t.height===e.height},Opentip.prototype.debug=function(){var t;return t=arguments.length>=1?__slice.call(arguments,0):[],Opentip.debug&&(typeof console!="undefined"&&console!==null?console.debug:void 0)!=null?(t.unshift("#"+this.id+" |"),console.debug.apply(console,t)):void 0},Opentip.findElements=function(){var t,e,i,o,s,n,r,a,h,p;for(t=Opentip.adapter,h=t.findAll(document.body,"[data-ot]"),p=[],r=0,a=h.length;a>r;r++){i=h[r],n={},e=t.data(i,"ot"),(e===""||e==="true"||e==="yes")&&(e=t.attr(i,"title"),t.attr(i,"title","")),e=e||"";for(o in Opentip.styles.standard)s=t.data(i,"ot"+Opentip.prototype.ucfirst(o)),s!=null&&(s==="yes"||s==="true"||s==="on"?s=!0:(s==="no"||s==="false"||s==="off")&&(s=!1),n[o]=s);p.push(new Opentip(i,e,n))}return p},Opentip.version="2.4.6",Opentip.debug=!1,Opentip.lastId=0,Opentip.lastZIndex=100,Opentip.tips=[],Opentip._abortShowingGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i._abortShowing()):r.push(void 0);return r},Opentip._hideGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i.hide()):r.push(void 0);return r},Opentip.adapters={},Opentip.adapter=null,firstAdapter=!0,Opentip.addAdapter=function(t){return Opentip.adapters[t.name]=t,firstAdapter?(Opentip.adapter=t,t.domReady(Opentip.findElements),t.domReady(Opentip.followMousePosition),firstAdapter=!1):void 0},Opentip.positions=["top","topRight","right","bottomRight","bottom","bottomLeft","left","topLeft"],Opentip.position={},_ref=Opentip.positions,i=_i=0,_len=_ref.length;_len>_i;i=++_i)position=_ref[i],Opentip.position[position]=i;Opentip.styles={standard:{"extends":null,title:void 0,escapeTitle:!0,escapeContent:!1,className:"standard",stem:!0,delay:null,hideDelay:.1,fixed:!1,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:!1,offset:[0,0],containInViewport:!0,autoOffset:!0,showEffect:"appear",hideEffect:"fade",showEffectDuration:.3,hideEffectDuration:.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:!0,ajax:!1,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,style:null,background:"#fff18f",backgroundGradientHorizontal:!1,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:!0,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[.5,"rgba(255, 255, 255, 0.8)"],[.5,"rgba(250, 250, 250, 0.9)"],[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[.5,"rgba(30, 30, 30, 0.8)"],[.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[.5,"rgba(203, 15, 19, 0.8)"],[.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}},Opentip.defaultStyle="standard",typeof module!="undefined"&&module!==null?module.exports=Opentip:window.Opentip=Opentip;var __slice=[].slice;(function(t){var e;return t.fn.opentip=function(t,e,i){return new Opentip(this,t,e,i)},e=function(){function e(){}return e.prototype.name="jquery",e.prototype.domReady=function(e){return t(e)},e.prototype.create=function(e){return t(e)},e.prototype.wrap=function(e){if(e=t(e),e.length>1)throw Error("Multiple elements provided.");return e},e.prototype.unwrap=function(e){return t(e)[0]
},e.prototype.tagName=function(t){return this.unwrap(t).tagName},e.prototype.attr=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).attr.apply(o,e)},e.prototype.data=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).data.apply(o,e)},e.prototype.find=function(e,i){return t(e).find(i).get(0)},e.prototype.findAll=function(e,i){return t(e).find(i)},e.prototype.update=function(e,i,o){return e=t(e),o?e.text(i):e.html(i)},e.prototype.append=function(e,i){return t(e).append(i)},e.prototype.remove=function(e){return t(e).remove()},e.prototype.addClass=function(e,i){return t(e).addClass(i)},e.prototype.removeClass=function(e,i){return t(e).removeClass(i)},e.prototype.css=function(e,i){return t(e).css(i)},e.prototype.dimensions=function(e){return{width:t(e).outerWidth(),height:t(e).outerHeight()}},e.prototype.scrollOffset=function(){return[window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop]},e.prototype.viewportDimensions=function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},e.prototype.mousePosition=function(t){return t==null?null:{x:t.pageX,y:t.pageY}},e.prototype.offset=function(e){var i;return i=t(e).offset(),{left:i.left,top:i.top}},e.prototype.observe=function(e,i,o){return t(e).bind(i,o)},e.prototype.stopObserving=function(e,i,o){return t(e).unbind(i,o)},e.prototype.ajax=function(e){var i,o;if(e.url==null)throw Error("No url provided");return t.ajax({url:e.url,type:(i=(o=e.method)!=null?o.toUpperCase():void 0)!=null?i:"GET"}).done(function(t){return typeof e.onSuccess=="function"?e.onSuccess(t):void 0}).fail(function(t){return typeof e.onError=="function"?e.onError("Server responded with status "+t.status):void 0}).always(function(){return typeof e.onComplete=="function"?e.onComplete():void 0})},e.prototype.clone=function(e){return t.extend({},e)},e.prototype.extend=function(){var e,i;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],t.extend.apply(t,[i].concat(__slice.call(e)))},e}(),Opentip.addAdapter(new e)})(jQuery);

/* dt-language: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/themes/qfy-01/js/language.js) */
jQuery(function(){
	 if(jQuery.datepicker){
		 jQuery.datepicker.regional['zh-CN'] = {
		        clearText: '清除',
		        clearStatus: '清除已选日期',
		        closeText: '关闭',
		        closeStatus: '不改变当前选择',
		        prevText: '<上月',
		        prevStatus: '显示上月',
		        prevBigText: '<<',
		        prevBigStatus: '显示上一年',
		        nextText: '下月>',
		        nextStatus: '显示下月',
		        nextBigText: '>>',
		        nextBigStatus: '显示下一年',
		        currentText: '今天',
		        currentStatus: '显示本月',
		        monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
		        monthNamesShort: ['一','二','三','四','五','六', '七','八','九','十','十一','十二'],
		        monthStatus: '选择月份',
		        yearStatus: '选择年份',
		        weekHeader: '周',
		        weekStatus: '年内周次',
		        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		        dayNamesMin: ['日','一','二','三','四','五','六'],
		        dayStatus: '设置 DD 为一周起始',
		        dateStatus: '选择 m月 d日, DD',
		        dateFormat: 'yy-mm-dd',
		        firstDay: 1,
		        initStatus: '请选择日期',
		        isRTL: false}; 
	
		 jQuery.datepicker.regional['zh-TW'] = {
		        clearText: '清除',
		        clearStatus: '清除已選日期',
		        closeText: '關閉',
		        closeStatus: '不改變當前選擇',
		        prevText: '<上月',
		        prevStatus: '顯示上月',
		        prevBigText: '<<',
		        prevBigStatus: '顯示上壹年',
		        nextText: '下月>',
		        nextStatus: '顯示下月',
		        nextBigText: '>>',
		        nextBigStatus: '顯示下壹年',
		        currentText: '今天',
		        currentStatus: '顯示本月',
		        monthNames: ['壹月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十壹月','十二月'],
		        monthNamesShort: ['壹','二','三','四','五','六', '七','八','九','十','十壹','十二'],
		        monthStatus: '選擇月份',
		        yearStatus: '選擇年份',
		        weekHeader: '周',
		        weekStatus: '年內周次',
		        dayNames: ['星期日','星期壹','星期二','星期三','星期四','星期五','星期六'],
		        dayNamesShort: ['周日','周壹','周二','周三','周四','周五','周六'],
		        dayNamesMin: ['日','壹','二','三','四','五','六'],
		        dayStatus: '設置 DD 為壹周起始',
		        dateStatus: '選擇 m月 d日, DD',
		        dateFormat: 'yy-mm-dd',
		        firstDay: 1,
		        initStatus: '請選擇日期',
		        isRTL: false};
		if(dtGlobals.language==""){
			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']); 
		}else if(dtGlobals.language=="2"){
			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-TW']); 
		}
	 }
	 if(jQuery.timepicker){
		jQuery.timepicker.regional['zh-CN'] = {
				currentText: '当前时间',
				closeText: '确认',
				timeOnlyTitle: '选择时间',
				timeText: '时间',
				hourText: '小时',
				minuteText: '分钟',
				secondText: '秒',
				millisecText: '毫秒',
				timezoneText: '时区',
		        isRTL: false}; 
		 jQuery.timepicker.regional['zh-TW'] = {
				currentText: '當前時間',
				closeText: '確認',
				timeOnlyTitle: '選擇時間',
				timeText: '時間',
				hourText: '小時',
				minuteText: '分鐘',
				secondText: '秒',
				millisecText: '毫秒',
				timezoneText: '時區',
		        isRTL: false}; 
		if(dtGlobals.language==""){
			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-CN']); 
		}else if(dtGlobals.language=="2"){
			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-TW']); 
		}
	 }
	
})
;

/* dt-main: (http://5513e8ed8fca9.t73.qifeiye.com/qfy-content/themes/qfy-01/js/main.js) */
//悬浮效果
(function($){$.fn.floatAd=function(l){var m={customhtml:"",close:1,closeHTML:"",speed:30,id_class:"",x:"0",y:"0"};var n=false;var l=$.extend(m,l);var o="<div id='qfy_float_ad' class='"+l.id_class+"' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";o+=l.customhtml;if(l.close=="1"){if(l.closeHTML==""){o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>关闭</div></div>"}else{o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' >"+l.closeHTML+"</div></div>"}}$('body').append(o);function qfy_ad_init(){var x=l.x,y=l.y+$(window).scrollTop();var g=true,yin=true;var h=1;var i=10;var j=$("#qfy_float_ad."+l.id_class);var k=function(){var L=0,T=$(window).scrollTop();var a=j.width();var b=j.height();var c=$(window).width();var d=$(window).height()+$(window).scrollTop();x=x+h*(g?1:-1);if(x<L){g=true;x=L}if(x>c-a-1){g=false;x=c-a-1}y=y+h*(yin?1:-1);if(y>d-b-10){yin=false;y=d-b-10}if(y<T){yin=true;y=T}var e=x;var f=y;j.css({'top':f,'left':e})};n=setInterval(k,l.speed);$('#qfy_float_ad.'+l.id_class).mouseover(function(){if(n){clearInterval(n)}});$('#qfy_float_ad.'+l.id_class).mouseout(function(){n=setInterval(k,l.speed)})}qfy_ad_init();$('#qfy_close_f_ad.'+l.id_class).click(function(){$('#qfy_float_ad.'+l.id_class+',#QFY_overlay.'+l.id_class).remove();clearInterval(n)})}})(jQuery);
//objectFitFallback.js
//requires modernizr

//REFERENCES:
//https://css-tricks.com/almanac/properties/o/object-fit/

(function(Modernizr) {

	//switch between height:100% and width:100% based on comparison of img and container aspect ratios
	function coverFillSwitch(container, img, invert) {
	if (!container || !img) return false;
	
	var imgHeight = img.naturalHeight || img.videoHeight;
	var imgWidth = img.naturalWidth || img.videoWidth;
	var containerRatio = container.offsetWidth / container.offsetHeight;
	var imgRatio = imgWidth / imgHeight;
	
	var ratioComparison = false;
	if (imgRatio >= containerRatio) ratioComparison = true;
	if (invert) ratioComparison = !ratioComparison; // flip the bool
	
	if (ratioComparison) {
	 img.style.height = '100%';
	 img.style.width = 'auto';
	} else {
	 img.style.height = 'auto';
	 img.style.width = '100%';
	}
	
	}
	
	function objectFitResize() {
	var i, img, container;
	
	var imgsCover = document.getElementsByClassName('section-background-video');
	for (i = 0; i < imgsCover.length; i++) {
	 img = imgsCover[i];
	 container = img.parentElement;
	 if (container.classList.contains('background-media')) {
	   coverFillSwitch(container, img);
	 }
	}
	}
	
	//add absolute center image css properties
	function applyStandardProperties(container, img) {
	var containerStyle = window.getComputedStyle(container);
	if (containerStyle.overflow !== 'hidden') container.style.overflow = 'hidden';
	if (containerStyle.position !== 'relative' &&
	 containerStyle.position !== 'absolute' &&
	 containerStyle.position !== 'fixed') container.style.position = 'relative';
	img.style.position = 'absolute';
	img.style.top = '50%';
	img.style.left = '50%';
	img.style.transform = 'translate(-50%,-50%)';
	}
	
	function objectFitInt() {
	var imgs = document.getElementsByClassName('section-background-video');
	for (var i = 0; i < imgs.length; i++) {
	 var type = 'cover';
	 var img = imgs[i];
	 var container = img.parentElement;
	
	 switch (type) {
	   case 'container':
	     break;
	   case 'cover':
	     coverFillSwitch(container, img);
	     applyStandardProperties(container, img);
	     break;
	   case 'contain': // opposite of cover
	     coverFillSwitch(container, img, true);
	     applyStandardProperties(container, img);
	     break;
	   case 'fill':
	     img.style.height = '100%';
	     img.style.width = '100%';
	     applyStandardProperties(container, img);
	     break;
	   case 'none':
	     img.style.height = 'auto';
	     img.style.width = 'auto';
	     applyStandardProperties(container, img);
	     break;
	   case 'scale-down':
	     img.style.maxHeight = '100%';
	     img.style.maxWidth = '100%';
	     img.style.height = 'auto';
	     img.style.width = 'auto';
	     applyStandardProperties(container, img);
	     break;
	   default:
	     break;
	 }
	}
	}
	
	var resizeTimeout;
	
	function resizeThrottler() { // @source https://developer.mozilla.org/en-US/docs/Web/Events/resize
	if (!resizeTimeout) {
	 resizeTimeout = setTimeout(function() {
	   resizeTimeout = null;
	   objectFitResize();
	 }, 66); // The objectFitResize will execute at a rate of 15fps
	}
	}
	
	Modernizr.objectfit = Modernizr.testAllProps('objectFit'); // detect IE and Edge
	if (!Modernizr.objectfit && top==self) {
	window.addEventListener('load', objectFitInt, false);
	window.addEventListener('resize', resizeThrottler, false);
	}

})(Modernizr);

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
function clipboard_fun(toclass){
	
	var clipboard = new Clipboard(toclass);
	clipboard.on('success', function(e) {
		if(jQuery(e.trigger).find(".copymsg").length>0) jQuery(e.trigger).find(".copymsg").remove();
		if(toclass==".copytxt"){
			jQuery(e.trigger).find(".fa").attr("class","icon");
			jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;right:-10px;color:green;font-size:12px !important;background:none;">提取成功</span>');
			setTimeout(function(){
				jQuery(".copymsg").remove();
			},2200);
		}
	    e.clearSelection();
	    clipboard.destroy();
	});

	clipboard.on('error', function(e) {
		jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;right:-10px;color:red;font-size:12px !important;background:none;">抱歉,你的浏览器不支持复制,你可以手动ctrl+c</span>');
		clipboard.destroy();
	});
}

function resetSectionHeight(){
	var h = jQuery(window).height();
	

	var body_w = jQuery("body").width();
	
	if(body_w>760){
		if(jQuery(".section.minperheight100:not(.fixheight)").length>0){
			jQuery(".section.minperheight100:not(.fixheight)").css("min-height", h+"px");
		}
		if(jQuery(".section.minperheight90:not(.fixheight)").length>0){
			jQuery(".section.minperheight90:not(.fixheight)").css("min-height", 0.9*h+"px");
		}
		if(jQuery(".section.minperheight80:not(.fixheight)").length>0){
			jQuery(".section.minperheight80:not(.fixheight)").css("min-height", 0.8*h+"px");
		}
		if(jQuery(".section.minperheight70:not(.fixheight)").length>0){
			jQuery(".section.minperheight70:not(.fixheight)").css("min-height", 0.7*h+"px");
		}
		if(jQuery(".section.minperheight60:not(.fixheight)").length>0){
			jQuery(".section.minperheight60:not(.fixheight)").css("min-height", 0.6*h+"px");
		}
		if(jQuery(".section.minperheight50:not(.fixheight)").length>0){
			jQuery(".section.minperheight50:not(.fixheight)").css("min-height", 0.5*h+"px");
		}
		if(jQuery(".section.minperheight40:not(.fixheight)").length>0){
			jQuery(".section.minperheight40:not(.fixheight)").css("min-height", 0.4*h+"px");
		}
		if(jQuery(".section.minperheight30:not(.fixheight)").length>0){
			jQuery(".section.minperheight30:not(.fixheight)").css("min-height", 0.3*h+"px");
		}
		if(jQuery(".section.minperheight20:not(.fixheight)").length>0){
			jQuery(".section.minperheight20:not(.fixheight)").css("min-height", 0.2*h+"px");
		}
		if(jQuery(".section.minperheight15:not(.fixheight)").length>0){
			jQuery(".section.minperheight15:not(.fixheight)").css("min-height", 0.15*h+"px");
		}
		if(jQuery(".section.minperheight10:not(.fixheight)").length>0){
			jQuery(".section.minperheight10:not(.fixheight)").css("min-height", 0.1*h+"px");
		}
		if(jQuery(".section.minperheight5:not(.fixheight)").length>0){
			jQuery(".section.minperheight5:not(.fixheight)").css("min-height", 0.05*h+"px");
		}
		jQuery(".section.fixheight").each(function(){
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if(w>0){
				var h = w*fixheight;
				jQuery(this).height(h);
				jQuery(this).css("min-height",h+"px");
			}
		})
		jQuery(".qfy-column-inner.fixheight").each(function(){
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if(w>0){
				var h = w*fixheight;
				if(jQuery(this).closest(".section.fixheight").length>0){
					h = jQuery(this).closest(".section.fixheight").height();
				}
				jQuery(this).height(h);
				jQuery(this).css("min-height",h+"px");
				jQuery(this).find(">.column_inner").css("min-height",h+"px");
			}
			
		})
	}else{
		
		if(jQuery(".section.minperheight100").length>0){
			jQuery(".section.minperheight100").css("min-height", h+"px");
		}
		if(jQuery(".section.minperheight90").length>0){
			jQuery(".section.minperheight90").css("min-height", 0.9*h+"px");
		}
		if(jQuery(".section.minperheight80").length>0){
			jQuery(".section.minperheight80").css("min-height", 0.8*h+"px");
		}
		if(jQuery(".section.minperheight70").length>0){
			jQuery(".section.minperheight70").css("min-height", 0.7*h+"px");
		}
		if(jQuery(".section.minperheight60").length>0){
			jQuery(".section.minperheight60").css("min-height", 0.6*h+"px");
		}
		if(jQuery(".section.minperheight50").length>0){
			jQuery(".section.minperheight50").css("min-height", 0.5*h+"px");
		}
		if(jQuery(".section.minperheight40").length>0){
			jQuery(".section.minperheight40").css("min-height", 0.4*h+"px");
		}
		if(jQuery(".section.minperheight30").length>0){
			jQuery(".section.minperheight30").css("min-height", 0.3*h+"px");
		}
		if(jQuery(".section.minperheight20").length>0){
			jQuery(".section.minperheight20").css("min-height", 0.2*h+"px");
		}
		if(jQuery(".section.minperheight15").length>0){
			jQuery(".section.minperheight15").css("min-height", 0.15*h+"px");
		}
		if(jQuery(".section.minperheight10").length>0){
			jQuery(".section.minperheight10").css("min-height", 0.1*h+"px");
		}
		if(jQuery(".section.minperheight5").length>0){
			jQuery(".section.minperheight5").css("min-height", 0.05*h+"px");
		}
		
	}
	
}
var last_size_mobile = false;
var size_mobile = false;
function resizeDefaultObjSize(){
	/*jQuery('div.divmiddle').each(function(){
		var h = jQuery(this).height();
		
		if(h>0){
			jQuery(this).css("margin-top","-"+(h/2)+"px");
		}
	})*/
	if(dtGlobals.isMobile==false){
		 if(jQuery("body").width()<768){
			 size_mobile = "mobile";
			 if(!last_size_mobile) last_size_mobile ="mobile";
		 }else{
			 size_mobile = "pc";
			 if(!last_size_mobile) last_size_mobile ="pc";
		 }
		 if(size_mobile!=last_size_mobile){
			 last_size_mobile = size_mobile;
			 jQuery(".qfy-element").each(function(){
					var m_padding = jQuery(this).attr("m-padding");
					var p_padding = jQuery(this).attr("p-padding");
					if(size_mobile=="mobile"){
						if(m_padding ){
							jQuery(this).css("padding",m_padding);
						}
					}else{
						if(p_padding ){
							jQuery(this).css("padding",p_padding);
						}
					}

			 });
			
		 }
	}
	
	
	if(jQuery(".wpb_map_wraper iframe").length>0){
			jQuery(".wpb_map_wraper iframe").each(function(){
				var oh = jQuery(this).parent().attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).parent().height((width*2/4)+"px");
					}
				}
			})
		}
		if(jQuery(".vc_bit_raw_video").length>0){
			jQuery(".vc_bit_raw_video").each(function(){
				var oh = jQuery(this).attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).height((width*2/4)+"px");
					}  
				}
			})
		}
		resetSectionHeight();
		column_init_align();
}
function resize_royalSlider_gallery_new(org_obj){
	jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function(){
		var obj = jQuery(this);
		setTimeout(function(){
			var h1 = obj.find(".rsOverflow").height();
			var h2 = obj.find(".rsSlide.rsActiveSlide").height();
			if(h2>0 && h1!=h2){
				obj.find(".rsOverflow").height(h2);
			}
		},200);
	})
	
}
function searchForm(obj){
	if(typeof(obj)=="undefined"){
		obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
	}
	
	/*--search*/
	obj.on('click', function(e) {
		e.preventDefault();
		jQuery(this).siblings('input.searchsubmit').click();
		return false;
	});

}
function qfy_setCookie(c_name, value, exdays) {
	  var exdate = new Date();
	  exdate.setDate(exdate.getDate() + exdays);
	  var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
	  document.cookie = c_name + "=" + c_value;
	}
function mobile_menu_fix(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();
	
	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;
		
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery("#dl-menu").addClass("positionFixed");
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery("#dl-menu").removeClass("positionFixed");
		};
		top_scrTop = jQuery(window).scrollTop();
		
	});
}
function mobile_menu_fix_2(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery(".dl-menu-fixedheader").height();

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;
		
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery(".dl-menu-fixedheader").css("position","fixed");
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery(".dl-menu-fixedheader").css("position","relative");
		};
		top_scrTop = jQuery(window).scrollTop();
		
	});
}
function initmouseover(){
	
	jQuery(".mouseHover").live({
	  mouseenter: function() {
		jQuery(this).addClass("hover");
		
	  },
	  mouseleave: function() {
		jQuery(this).removeClass("hover");
	  }
	});
	jQuery("a.bitButton").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).css("background",backgroundhovercolor);
					jQuery(this).css("transition",str);
					jQuery(this).removeAttr('onmouseover');
					jQuery(this).removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).css("border","1px solid "+borderhovercolor);
					jQuery(this).css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).css("border-color",bordercolor);
				}
		  }
		});
	
	jQuery("a.bitIcon").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).find("b").css("background",backgroundhovercolor);
					jQuery(this).find("b").css("transition",str);
					jQuery(this).find("b").removeAttr('onmouseover');
					jQuery(this).find("b").removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).find("b").css("border","1px solid "+borderhovercolor);
					jQuery(this).find("b").css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).find("b").css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).find("b").css("border-color",bordercolor);
				}
		  }
		});
	
	
	jQuery("a.qfy_thickbox").live({
		  click: function(e) {
			  e.preventDefault();
			  if( top.jQuery(".qfy_gallerys").length>0){
				  return false;
			  }
			  var default_img = jQuery(this).attr("href");
			  var thumbPath = jQuery(this).attr("thumbPath");
			  if(!thumbPath) thumbPath = default_img;
			  var i = 0;
			  var qfy_imglists= Array();
			  jQuery("a.qfy_thickbox").each(function(){
				var href = jQuery(this).attr("href");
				var thumbPath = jQuery(this).attr("thumbPath");
				if(!thumbPath) 	thumbPath = href;
				
				if(href!=default_img && href!= undefined){
					 qfy_imglists[i] = href+"|^|"+thumbPath;
					 i++;
				}
			  })
			 
			  top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor='+encodeURIComponent(dtGlobals.gallery_bgcolor)+'&tfamily='+encodeURIComponent(dtGlobals.gallery_tfamily)+'&dfamily='+encodeURIComponent(dtGlobals.gallery_dfamily)+'&blankclose='+encodeURIComponent(dtGlobals.gallery_blankclose)+'&showthumbs='+dtGlobals.gallery_showthumbs+'&style='+dtGlobals.gallery_style+'&autoplay='+dtGlobals.gallery_autoplay+'&playspeed='+dtGlobals.gallery_playspeed+'&imagesize='+dtGlobals.gallery_imagesize+'&stopbutton='+dtGlobals.gallery_stopbutton+'&thumbsposition='+dtGlobals.gallery_thumbsposition+'&tsize='+dtGlobals.gallery_tsize+'&tcolor='+encodeURIComponent(dtGlobals.gallery_tcolor)+'&dsize='+dtGlobals.gallery_dsize+'&dcolor='+encodeURIComponent(dtGlobals.gallery_dcolor)+'&default_img='+default_img+'&thumbPath='+thumbPath+'&time='+Math.random()+'" width="100%" height="100%" border=0 style="border:0;" /></div>')
			  top.jQuery(".qfy_gallerys").animate({height:"100%"});
			  return false;
		  }
		});
	
	var body_width = window.screen.width; 
	var body_height =window.screen.height; 
	
	if(!jQuery("body").hasClass("compose-mode") && top==self){
		jQuery("a").each(function(){
			var href = jQuery(this).attr("href");
			if(href) href = href.toLowerCase();
			if(href && href.indexOf("/api/video-server/play.php")>-1){
				var turl =  href.split("?");
				var media_id = 0;
				var se =0;
				var nonce = 0;
				var width="800";
				var height="600";
				var turl2 = turl[1].split("&");
				for(i=0;i<turl2.length;i++){
					var t3 = turl2[i].split("=");
					if(t3[0]=="media_id"){
						media_id = t3[1];
					}else if(t3[0]=="se"){
						se = t3[1];
					}else if(t3[0]=="width" && t3[1]!=""){
						width = t3[1];
					}else if(t3[0]=="height"&& t3[1]!=""){
						height = t3[1];
					}
				}
				
				if(typeof jQuery.fn.blockUI=="undefined"){
					jQuery.getScript("/qfy-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js");
				}
				
				if(media_id){
					jQuery(this).unbind().bind("click",function(e){
						//获取播放权限
						var url = "/api/video-server/play.php?se="+se+"&media_id="+media_id;
						var bodywidth = jQuery("body").width();
						var bodyheight = jQuery(window).height();
						if(bodywidth>width){
							top.jQuery.blockUI({css: {"top":"15%","left":"50%","margin-left":"-"+(width/2)+"px",width:width,height:height},message: "<iframe class='videoframe' style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+height+"' data-controlBarVisibility='hover' data-autoplay='true' src='"+url+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"});
						}else{
							var h =  Math.round(bodywidth*3/4);
							var toppx = (bodyheight-h)/2;
							top.jQuery.blockUI({css: {"top":toppx+"px","left":"0",width:bodywidth+"px",height:h+"px"},message: "<iframe class='videoframe'  style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+ h+"' data-controlBarVisibility='hover' data-autoplay='true' src='"+url+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:7px;color:#fff;'>✕</div>"});
						}
						top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
							 top.jQuery.unblockUI();
						});
						top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
						top.jQuery('body,.blockOverlay').css('cursor', 'auto');
						
						return false;
					});
				}
			}else if(href && href.indexOf("iframe.php?video_mp4_local=")>-1 && href.indexOf("size=")>-1 && href.indexOf("&auto=")>-1){
				jQuery(this).addClass("thickbox");
				var auto = true;
				var full = true;
				var width = body_width;
				var height = body_height;
				var color = "#000";
				var opacity = "";
				var id = 0;
				var t1 = href.split("&");
				for(i=0;i<t1.length;i++){
					var t2 = t1[i].split("=");
					if(t2[0]=="size"){
						if(t2[1]=="big"){
							width = width*0.8;
							height = height*0.6;
							full =false;
						}else if(t2[1]=="middle"){
							width = width*0.6;
							height = height*0.4;
							full =false;
						}else if(t2[1]=="small"){
							width = width*0.4;
							height = width*0.8;
							full =false;
						}else if(t2[1]=="less"){
							width = width*0.3;
							height = height*0.2;
							full =false;
						}else if(t2[1]=="full"){
							width = width;
							height = height*0.7;
							full =true;
						}
					}else if(t2[0]=="auto"){
						if(t2[1]=="1"){
							auto = true;
						}else{
							auto= false;
						}
					}else if(t2[0]=="color"){
						color = decodeURIComponent(t2[1]);
					}else if(t2[0]=="opacity"){
						opacity = t2[1];
					}
				}
				var newhref = href+"&video_volume=50&video_fullscreen="+full+"&video_auto="+auto+"&ispopup=1&video_theme=maccaco&video_bgcolor=%23000&KeepThis=true&TB_iframe=true&height="+height+"&width="+width;
			
				jQuery(this).attr("href",newhref).unbind().bind("click",function(){
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},100);
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},400);
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},800);
				   
				})
			}
			
		})
	}

	
}
function qfy_custom_select(){
	jQuery(".qfy_custom_select").each(function(){
		var fun = jQuery(this).attr("data-fun");
		var ids = '['+jQuery(this).attr("data-ids")+']';
		var urls = jQuery(this).attr("data-urls");
		if(ids!=""){
			jQuery(this).cxSelect({
				  selects: eval(ids),
				  required: true,
				  url: eval(urls),
				});	
		}
	})
}
function thebackground(qfy_bg_images,time) {
	if(screen.width<760){
		return false;
	}
	var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
	var str ="";
	var bodyColor = jQuery("body").css("background-color");
	var bodyrepeat = jQuery("body").css("background-repeat");
	var bodyattachment = jQuery("body").css("background-attachment");
	var bodyposition = jQuery("body").css("background-position");
	var bodysize = jQuery("body").css("background-size");

	
	for(i=0;i<tmp_qfy_bg_images.length;i++){
		var img = tmp_qfy_bg_images[i];
		if(i==0){
			str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url('+img+')"  class="show"></div>';
		}else{
			str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url('+img+')"  ></div>';
		}
	}
	jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> '+str+'</div>');
	jQuery("body .qfy_body_background > div").css("background-color",bodyColor).css("background-repeat",bodyrepeat).css("background-attachment",bodyattachment).css("background-position",bodyposition).css("background-size",bodysize);
	jQuery('div.qfy_body_background div').css({opacity: 0.0});
	jQuery('div.qfy_body_background div:first').css({opacity: 1.0});
	
	setInterval(function(){
		var current = (jQuery('div.qfy_body_background div.show')? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
		if ( current.length == 0 ) current = jQuery('div.qfy_body_background div:first');
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') :current.next()) : jQuery('div.qfy_body_background div:first'));
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
	},time*1000);

	
}
function vc_element_init(){
	if(dtGlobals.isMobile==false && jQuery("body").width()<768){
		jQuery(".qfy-element").each(function(){
			var m_padding = jQuery(this).attr("m-padding");
			if(m_padding ){
				jQuery(this).css("padding",m_padding);
			}
		});
	}
}

function right_nav_bar(){
	if(jQuery("#right_nav_bar_scroll").length>0){
		jQuery("#right_nav_bar_scroll").waypoint({
			handler: function(direction) {
				if(direction=="down"){
					jQuery(".right_nav_bar").show();
				}else{
					jQuery(".right_nav_bar").hide();
				}
			},
			offset: "0",
		})
	}

	var bgcolor = jQuery(".right_nav_bar").attr("data-bgcolor");
	var hovercolor = jQuery(".right_nav_bar").attr("data-hovercolor");
	var data_pop= jQuery(".right_nav_bar").attr("data-pop");
	jQuery(".right_nav_bar .icons").each(function(){
		var title = jQuery(this).attr("data-desc");
		var $this = jQuery(this);
		var imageurl = jQuery(this).attr("data-file");
		if(imageurl){
			
			var tiptitle="<img src='"+imageurl+"'  style='width:150px;height:150px;'/><div style='width:150px;text-align:center;overflow:hidden;margin-top:5px;'>"+title+"</div>";
			if(jQuery(this).find(".title").html()=="" || jQuery(this).find(".title").length==0){
				var data = { tipJoint: "right", fixed:true,offset:[-50,0],style: data_pop };
				jQuery("<img />").attr("src", imageurl).load(function(){
					setTimeout(function(){new Opentip( $this, tiptitle, data);},1500);
				})
				
			}
			
		}
	}).mouseenter(function(){
		if(jQuery(this).find(".title").html()!="" && jQuery(this).find(".title").length>0){
			var width = jQuery(this).find(".title").css("width");
			width = width.replace("px","");
			jQuery(this).animate({width:(width*1+64)+"px"},200);
		}
		var tmpcolor = jQuery(this).attr("data-hovercolor");
		if(!tmpcolor) tmpcolor = hovercolor;

		jQuery(this).css({background:tmpcolor});
	}).mouseleave(function(){
		if(jQuery(this).find(".title").html()!="" && jQuery(this).find(".title").length>0){
			jQuery(this).animate({width:"54px"},200);
		}
		var tmpcolor = jQuery(this).attr("data-color");
		if(!tmpcolor) tmpcolor = bgcolor;
		
		jQuery(this).css({background:tmpcolor});
	});
	jQuery(".right_nav_bar .totop-icon").click(function(e){
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	})
}


function dropdownmenu_event(obj){
	
	 var $this = jQuery(obj);
	 var p = $this.closest(".dropdown_container");
	 if(p.find(".list-content").hasClass("active")){
		 p.find(".list-content").removeClass("active");
		 p.closest("section").removeClass("overflowauto");
		 p.closest(".qfy-column-inner").removeClass("overflowauto");
	 }else{
		 p.find(".list-content").addClass("active");
		 p.closest("section").addClass("overflowauto");
		 p.closest(".qfy-column-inner").addClass("overflowauto");
	 } 
	
}
function column_init_align(){
	
	var w = jQuery("body").width();
	jQuery('.qfy-column-inner.column_middle').each(function(){
		
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var section = jQuery(this).closest("section.section");
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		var pheight = section.height();
		var padding = 0;
		if(pheight<heigth ) pheight = heigth;
		if(t1>0 || t2>0){
			if( (pheight*1-heigth) < (t1-t2)){
				if(pheight*1==heigth){
					padding = (t2*1-t1*1)/2;
				}else{
					padding = (t2*1-t1*1-heigth)/2;
				}
			}else if( (pheight*1-heigth) < (t2-t1)){
				padding = t2*1-t1*1+(heigth-pheight)/2;
			}else{
				padding = (t2*1-t1*1)/2;
			}
		}
	
		if(jQuery(this).siblings(".qfy-column-inner").length>0){
			if(w>760){
				jQuery(this).css("margin-top",((pheight-heigth)/2 + padding)+"px");
			}
		}else{
			jQuery(this).css("margin-top",((pheight-heigth)/2+ padding)+"px");
		}
		
	})
	jQuery('.qfy-column-inner.column_bottom').each(function(){
		var section = jQuery(this).closest("section.section");
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		var pheight = section.height();
		if(pheight<heigth) pheight = heigth;

		if(section.find(".qfy-column-inner").length>1){
			if(w>760){
				jQuery(this).css("margin-top",(pheight-heigth)+"px");
			}
		}else{
			jQuery(this).css("margin-top",(pheight-heigth)+"px");
		}
		
	})
	
}
function vc_royalSlider_gallery_init(){
	var w = jQuery("body").width();
	
	var is_image_ok =true;
	jQuery('.royalSlider_gallery_new:not(.played) img').each(function(){
		if(!jQuery(this).prop('complete')){
			is_image_ok = false;
		}
		
	})
	if(!is_image_ok) {
	  window.setTimeout(function(){
		  vc_royalSlider_gallery_init();
	  }, 500);
	  return;
   }
   royalSlider_gallery_new();
}

function royalSlider_gallery_new(obj){
	
	if(typeof(obj)== "undefined"){
		obj = jQuery('.royalSlider_gallery_new:not(".played")');
	}
	var w = jQuery("body").width();
	obj.each(function(){
				
				if(w<760 && !obj.hasClass("tabroya")){
					return;
				}

				var id =  jQuery(this).parent().attr("id");
				
				var $this = this;
				var istolast = false;
				var count = 0;
				if(top!=self &&  parent.vc){
					if(jQuery($this).hasClass("played") || jQuery($this).find(".rsContainer").length>0){
						 if(parent.vc.ShortcodesBuilder.isAddSlider){
							 istolast = true;
							 parent.vc.ShortcodesBuilder.isAddSlider = false;
						 }
						 var slider = jQuery($this).data('royalSlider');
						 if(slider)
							slider.destroy();
						 jQuery($this).html("");
						 var id = jQuery(this).closest(".vc-container").attr("data-model-id");
						 var model =  parent.vc.shortcodes.get(id);
						 var old_view = model.view;

						 var models =  parent.vc.shortcodes.where({parent_id: model.get('id')});
						
						parent._.each(models, function(childmodel) {
							if(childmodel.view.$el){
								childmodel.view.$el.appendTo(model.view.content());
								count++;
							}
						  }, this);	
						model.view.updated();
					
					}
				}
				jQuery(this).addClass("played");
				var imageScaleMode = jQuery(this).attr("imageScaleMode")?jQuery(this).attr("imageScaleMode"):"fit-if-smaller";
				var slidesOrientation = jQuery(this).attr("slidesOrientation")?jQuery(this).attr("slidesOrientation"):"horizontal";
				//var autoScaleSlider = jQuery(this).attr("autoScaleSlider")==""?true:false;
				var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide")=="true"?true:false;
				//var showfullscreen = jQuery(this).attr("showfullscreen")=="true"?true:false;
				//var g_width = jQuery(this).attr("g_width")?jQuery(this).attr("g_width"):"";
				//var g_height = jQuery(this).attr("g_height")?jQuery(this).attr("g_height"):"";
				var transitionSpeed = jQuery(this).attr("transitionSpeed");
				var loop = jQuery(this).attr("g_loop")=="true"?true:false;
				var visiblenearby = jQuery(this).attr("visiblenearby")=="true"?true:false;
				var autoPlay  = jQuery(this).attr("auto_Play")=="true"?true:false;
				var arrowsNav = jQuery(this).attr("arrowsNav")=="true"?true:false;
				
				var controlNavigation = jQuery(this).attr("controlNavigation");
				if(controlNavigation=="thumbnails") controlNavigation="thumbnails";
				else if(controlNavigation=="none") controlNavigation="none";
				else controlNavigation = "bullets";
				var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation")?jQuery(this).attr("thumbnails_orientation"):"horizontal";
				var disabledclick = jQuery(this).attr("disabledclick")=="true"?false:true;
				
				var transitionSpeed  = jQuery(this).attr("transitionSpeed");
				if(!transitionSpeed) transitionSpeed = 600;
				var transitionType  = jQuery(this).attr("transitionType");
				if(!transitionType) transitionType = "move";
				if(transitionType=="fade") transitionSpeed = Math.ceil(transitionSpeed/500);

				var delay  = jQuery(this).attr("delay");
				if(!delay) delay = 3000;
				var autoHeight = true;
				if(jQuery(this).attr("data-minheight") && jQuery(this).attr("data-minheight")>0){
					jQuery(this).find("section.section").css("height",jQuery(this).attr("data-minheight")+"px");
				}
				if(jQuery(this).children().length==0) return;
				jQuery(this).royalSlider({
					    fullscreen: {
						  enabled: false,
						  nativeFS: false
						},
						controlNavigation: controlNavigation,
						slidesOrientation:slidesOrientation,
						autoScaleSlider: false, 
						autoScaleSliderWidth: 300,     
						autoScaleSliderHeight: 150,
						loop: loop,
						transitionSpeed:transitionSpeed,
						transitionType:transitionType,
						imageScaleMode: imageScaleMode,
						navigateByClick: disabledclick,
						numImagesToPreload:10,
						arrowsNav:arrowsNav,
						arrowsNavAutoHide: arrowsNavAutoHide,
						arrowsNavHideOnTouch: true,
						keyboardNavEnabled: top==self?true:false,
						sliderDrag: w<760?true:false,
						fadeinLoadedSlide: true,
						globalCaption: false,
						globalCaptionInside: false,
						addActiveClass:true,
						autoHeight:autoHeight,
						thumbs: {
						  orientation :thumbnails_orientation, 
						  appendSpan: true,
						  firstMargin: true,
						  paddingBottom: 4
						},
						visibleNearby: {
							enabled: visiblenearby,
							centerArea: 0.7,
							center: true,
							breakpoint: 650,
							breakpointCenterArea: 0.64,
							navigateByCenterClick: true
						},
						autoPlay: {
							enabled: autoPlay,
							pauseOnHover: true,
							delay:delay
						}
					  });	
				var slider = jQuery(this).data('royalSlider');
				if(istolast && count>0){
					
					slider.goTo(count-1);
					
				}
				var $this = jQuery(this);
				var p = $this.closest(".qfy-tabcontent")
			
				if(p.length>0){
					slider.ev.on('rsAfterSlideChange', function() {
							// mouse/touch drag end
							p.find(".tabcontent-header-menu li.item button").removeClass("active");
							var index = p.find(".rsBullets .rsNavItem.rsNavSelected").index();
							p.find(".tabcontent-header-menu li.item:eq("+index+") button").addClass("active");
							p.find(".rsActiveSlide .wpb_start_animation").each(function(i){
								var $this = this;
								jQuery($this).removeClass("wpb_start_animation");
								setTimeout(function(){wpb_animate_fun($this);},50);
								
							})
							
							
					});
				}
				
				})
				
		
}
function accordioncontent(){
	 jQuery('.qfy-accordioncontent .a_content').each(function(){
		 var p = jQuery(this).parent();
		 jQuery(this).find('> section').each(function(index){
			 var curr = p.find(".a_header h4:eq("+index+")");
			 var text = curr.html();
			 if(text){
				jQuery(this).before('<h4 class="panel-title" >'+text+'</h4>');
				jQuery(this).prev().find(".line").remove();
			 }
			
			 if(curr.find(".line").length>0){
				 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>"+curr.find(".line").clone().prop("outerHTML")+"</h5>";
				 jQuery(this).after(line);
			 }
		 })
	 })
	 
}
jQuery(window).load(function() {
	if(top==self){
		resizeDefaultObjSize();
	}
});
jQuery(document).ready(function($) {
	//滚动...
	if($("#phantom").css("display")=="block"){
		var floatMenuH = $("#phantom").height();
	}else{
		var floatMenuH = 0;
	}
	var urlHash = "#" + window.location.href.split("#")[1];
	if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
		if(urlHash!= "#undefined"){
			$("html, body").animate({
				scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
			}, 600, function(){
				$("body").removeClass("is-scroll");
			});
		}
	}else{
		if($(urlHash).length > 0){
			$("body").addClass("is-scroll");
			setTimeout(function(){
				$("html, body").animate({
					scrollTop:  $(urlHash).offset().top
				}, 600, function(){
					jQuery("#parallax-nav a[href='"+urlHash+"']").closest("li").addClass("active");
					$("body").removeClass("is-scroll");
					parallax_scroll_fun();
				});
			},500);
			
		}else{
			parallax_scroll_fun();
		}
	}
	//滚动...end
	//...check body
	vc_element_init();
	//侧边栏
	right_nav_bar();
	//底部菜单
	jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var submenu = jQuery(this).next(".sub-menu");
		if(submenu.css("display")=="none"){
			submenu.css("display","block");
		}else{
			submenu.css("display","none");
		}
	})
	//背景多个图片切换
	if(typeof(qfy_bg_images)!= "undefined"){
		thebackground(qfy_bg_images,qfy_bg_images_int);
	}
	//图片加载完再执行一下resize
	if(jQuery(".preloadimg:not('.loaded')").length>0){
		setTimeout(function(){
				jQuery(".preloadimg:not('.loaded')").each(function(){
					var newurl = jQuery(this).attr("org-src");
					jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
						resizeDefaultObjSize();
					});
				});
		},300);
	}
	
	//多级选择
	qfy_custom_select();
	

	if(top==self){
		$(".qfy-text a[url-flagtarget='_blank']").attr("target","_blank");
		$(".qfy-text a[url-flagtarget='']").removeAttr("target");
	}
	if(top!=self){
		  function closeOpenPanel(){
			  if(top.jQuery(".boxy-wrapper:visible").length>0){
					top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
		    	}
				if(parent.jQuery("#wpbody-content>.panel:visible").length>0){
					parent.jQuery("#wpbody-content>.panel:visible .vc-close").click();
		    	}
				if(top.jQuery(".bitPopIframe:visible").length>0){
					top.jQuery(".bitPopIframe:visible .btn-default").click();
		    	}
		  }
		  var ctrlDown = false;
		  var escDown = false;
		  var ctrlKey = 17, vKey = 86, cKey = 67,escKey=27,zkey=90,ykey=89;
		  $(document).keydown(function(e){
	  			if (e.keyCode == escKey){
	  				closeOpenPanel();
	  				 top.jQuery.unblockUI();
	  			}
	  			if(e.ctrlKey && (e.keyCode== zkey|| e.keyCode== ykey)){
	  				top.restorePage();
	  			}
		  })
		  $(top.document).keydown(function(e){
			  			if (e.keyCode == escKey){
			  				closeOpenPanel();
			  			}
			  			if(e.ctrlKey  && (e.keyCode== zkey|| e.keyCode== ykey)){
			  				top.restorePage();
			  			}
		 })
		  $(parent.document).keydown(function(e){
			  			if (e.keyCode == escKey){
			  				closeOpenPanel();
			  			}
		 })
	  }
	$(".dropdown-toggle").unbind("click").bind("click",function(){
		 var obj =jQuery(this).parent().find(".dropdown-menu");
		 if(obj.css("display") == "none"){
			obj.show();
		 }else{
			obj.hide();
		 }
	})
	initmouseover();
	resizeDefaultObjSize();
	toolTip();
	weiBoAndWeiXinToolTip();
	searchForm();
	/*--Append element </i> to preloader*/
	//$(".tp-loader, .ls-defaultskin .ls-loading-indicator").not(".loading-label").append('<svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg>');

	/*--Set variable for floating menu*/
	if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;

	/*--old ie remove csstransforms3d*/
	//if ($.browser.msie) $("html").removeClass("csstransforms3d");

	/*--Detect iphone phone*/
	if(dtGlobals.isiPhone){
		$("body").addClass("is-iphone");
	};
	
	/* !Custom touch events */
	/* !(we need to add swipe events here) */

	/* Custom touch events:end */
	if(top==self){
		if($(".bitMainTopSider .vc-no-content-helper").length==0 && $(".bitMainTopSider").length>0  && $(".bitMainTopSider").height()==0){
			$(".bitMainTopSider").parent().parent().remove();
			//$(".bitMainTopSider-wrapper").css("padding-top",0);
		}
	}



	
	/* !-overlap for webkit*/
	if ( !$.browser.webkit || dtGlobals.isMobile ){
		$("body").addClass("not-webkit").removeClass("is-webkit");
	}else{
		$("body").removeClass("not-webkit").addClass("is-webkit");
		//$(".overlap #main").prepend("<div class='main-gradient'></div>");
	};


	/*overlap for webkit:end*/
/*Misc:end*/

/* !-jQuery extensions */

	/* !- Check if element exists */
	$.fn.exists = function() {
		if ($(this).length > 0) {
			return true;
		} else {
			return false;
		}
	}

	/* !- Check if element is loaded */
	$.fn.loaded = function(callback, jointCallback, ensureCallback){
		var len	= this.length;
		if (len > 0) {
			return this.each(function() {
				var	el		= this,
					$el		= $(el),
					blank	= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

				$el.on("load.dt", function(event) {
					$(this).off("load.dt");
					if (typeof callback == "function") {
						callback.call(this);
					}
					if (--len <= 0 && (typeof jointCallback == "function")){
						jointCallback.call(this);
					}
				});

				if (!el.complete || el.complete === undefined) {
					el.src = el.src;
				} else {
					$el.trigger("load.dt")
				}
			});
		} else if (ensureCallback) {
			if (typeof jointCallback == "function") {
				jointCallback.call(this);
			}
			return this;
		}
	};

/* jQuery extensions: end */

/* !-Main navigation */
/* We need to fine-tune timings and do something about the usage of jQuery "animate" function */ 



if(dtGlobals.isWindowsPhone){
	$("body").addClass("windows-phone");
}

$(".mini-nav select").change(function() {
	window.location.href = $(this).val();
});


dtGlobals.isHovering = false;

mainmenu_event();

/* !-Navigation widget */
var customTimeoutShow
$(".custom-nav > li > a").click(function(e){
	$menuItem = $(this).parent();
	if ($menuItem.hasClass("has-children")) e.preventDefault();
	
	
		if ($(this).attr("class") != "active"){
				$(".custom-nav > li > ul").stop(true, true).slideUp(400);
				$(this).next().stop(true, true).slideDown(500);
				$(".custom-nav > li > a").removeClass("active");
				$(this).addClass('active');
		}else{
				$(this).next().stop(true, true).slideUp(500);
				$(this).removeClass("active");
		}

		$menuItem.siblings().removeClass("act");
		$menuItem.addClass("act");
});
$(".custom-nav > li > ul").each(function(){
	clearTimeout(customTimeoutShow);
	$this = $(this);
	$thisChildren = $this.find("li");
	if($thisChildren.hasClass("act")){
		$this.prev().addClass("active");
		$this.parent().siblings().removeClass("act");
		$this.parent().addClass("act");
		$(this).slideDown(500);
	}
});

/* Navigation widget: end */

/*!-SLIDERS*/

	/* !-Metro slider*/
	var mtResizeTimeout;

	$(window).on("resize", function() {
		resizeDefaultObjSize();
		
		clearTimeout(mtResizeTimeout);
		mtResizeTimeout = setTimeout(function() {
			$(window).trigger( "metroresize" );
		}, 200);
		try{
			if( parent.jQuery("#mobile_iframe_preivew").length==1){
				parent.setMobileDocumentInit();
			}
		}catch(e){
	
		}
		if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
			var v1 = jQuery("#header #branding").width();
			var v2 = jQuery("#header .assistive-info").width();
			jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
		
		}
		
	});
	try{
		if( parent.jQuery("#mobile_iframe_preivew").length==1){
			setTimeout(function(){
				parent.setMobileDocumentInit();
			},1000);
			
		}
	}catch(e){
		//跨域异常下，document.referrer
		
		var lang = getQueryString("lang");
		var BodyIsFt=getCookie(JF_cn)
		if(lang=="zh-cn"){
			BodyIsFt = 0;
			setCookie(JF_cn,"",-1);
		}
		if(lang=="zh" || BodyIsFt=="1"){
			setTimeout("StranBody()",100);
		}
		
	}
	
	if(jQuery(".zh_tw_lang").length>0){
		StranBody(jQuery(".zh_tw_lang")[0]);
		var href = jQuery(".selected_template_a").attr("href");
		var nhref = Traditionalized(href);
		jQuery(".selected_template_a").attr("href",nhref);
	}
	//翻译简繁体
	tranlanguage(jQuery("html"));



	/*!Scroll to Top*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').removeClass('off').addClass('on');
		}
		else {
			$('.scroll-top').removeClass('on').addClass('off');
		}
	});
	$(".scroll-top").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	/*Scroll to Top:end*/


	/*Shopping cart top bar:end*/

	/* !- Skills */
	$.fn.animateSkills = function() {
		$(".skill-value", this).each(function () {
			var $this = $(this),
				$this_data = $this.data("width");

			$this.css({
				width: $this_data + '%'
			});
		});
	};

	// !- Animation "onScroll" loop
	function doAnimation() {
		
		if(dtGlobals.isMobile){
			$(".skills").animateSkills();
		}
		if($("html").hasClass("old-ie")){
			$(".skills").animateSkills();
		};
	};
	// !- Fire animation
	doAnimation();
	/* Skills:end */
	// Create the dropdown base 12.02.14
	$("<select />").prependTo(".mini-nav .menu-select");

	// Create default option "Select"
	$("<option />", {
		"selected"  :  "selected",
		"value"     :  "",
		"text"      :  "———"
	}).appendTo(".mini-nav .menu-select select");

	// Populate dropdown with menu items
	$(".mini-nav").each(function() {
		var elPar = $(this),
			thisSelect = elPar.find("select");
		$("a", elPar).each(function() {
			var el = $(this);
			$("<option />", {
				"value"   : el.attr("href"),
				"text"    : el.text(),
				"data-level": el.attr("data-level")
			}).appendTo(thisSelect);
		});
	});
	

	$(".mini-nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	$(".mini-nav select option").each(function(){
		var $this = $(this),
			winHref = window.location.href;
		 if($this.attr('value') == winHref){
			$this.attr('selected','selected');
		};
	})
	/*!-Appearance for custom select*/
	$('.woocommerce-ordering-div select').each(function(){
		$(this).customSelect();
	});
	$(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible");

	$(".mini-nav option").each(function(){
		var $this	= $(this),
			text	= $this.text(),
			prefix	= "";

		switch ( parseInt($this.attr("data-level"))) {
			case 1:
				prefix = "";
			break;
			case 2:
				prefix = "— ";
			break;
			case 3:
				prefix = "—— ";
			break;
			case 4:
				prefix = "——— ";
			break;
			case 5:
				prefix = "———— ";
			break;
		}
		$this.text(prefix+text);
	});


/* !Onepage template */
	$(".anchor-link").each(function(){
		var $_this = $(this),
			selector 	= $_this.attr("href");
			var this_offset, that_offset, offset_diff;
			var base_speed  = 600,
				speed       = base_speed;
			if($(selector).length > 0){
				var this_offset = $_this.offset(),
					that_offset = $(selector).offset(),
					offset_diff = Math.abs(that_offset.top - this_offset.top),
					speed       = (offset_diff * base_speed) / 1000;
			}
		$(this).on('click',function(e){
			$("body").addClass("is-scroll");
			if($("#phantom").css("display")=="block"){
				var floatMenuH = $("#phantom").height();
			}else{
				var floatMenuH = 0;
			}
			var $_this = $(this),
				selector = $_this.attr("href");
			if(selector == "#"){
				$("html, body").animate({
					scrollTop: 0
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
					$("html, body").animate({
						scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}else{
					if($(selector).length > 0){
						$("html, body").animate({
							scrollTop:  $(selector).offset().top - floatMenuH + 1
						}, speed, function(){
							$("body").removeClass("is-scroll");
						});
					}
				}
			}
			return false;
			
		});
	});
	jQuery(window).load(function(){
		if(jQuery('#load').length){
			jQuery('#load').fadeOut().remove();
		}
	});

	if($(".one-page-row").length){

		function onePageAct (){
			var active_row = $(".one-page-row div:in-viewport[data-anchor^='#']").attr("data-anchor");
			if($('.one-page-row .menu-item a[href='+ active_row +']').length ){
				$('.one-page-row .menu-item a').parent("li").removeClass('act');
				$('.one-page-row .menu-item a[href='+ active_row +']').parent("li").addClass('act');
			}
			if(active_row == undefined && $('.one-page-row .menu-item a[href="#"]').length){
				$('.one-page-row .menu-item a[href="#"]').parent("li").addClass('act');
			}
		};
		onePageAct();
	}

	$("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function(){
			var $_this = $(this),selector = $_this.attr("href");
		
		if(selector && selector.indexOf("#")>-1 && selector!="#"){
			//if(selector.indexOf("#")!=0){
				selector = jQuery.trim(selector);
				var tmpselecter = selector.split("#");
				selector = "#"+tmpselecter[tmpselecter.length-1];
			//}	
			
			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					if($("body >.dl-menuwrapper.floatmenu").length>0){
						$("#dl-menu #mobile-menu .phone-text").click();
					}
	
					$("body").addClass("is-scroll");
					

					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}
					var $_this = $(this),
						selector = $_this.attr("href");
					//if(selector.indexOf("#")!=0){
						var tmpselecter = selector.split("#");
						selector = "#"+tmpselecter[tmpselecter.length-1];
					//}	
					$_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
					var base_speed  = 600,
						speed       = base_speed;
					if(selector.indexOf("=")<0 &&  $(selector).length > 0){
						var this_offset = $_this.offset(),
							that_offset = $(selector).offset(),
							offset_diff = Math.abs(that_offset.top - this_offset.top),
							speed       = (offset_diff * base_speed) / 1000;
					}

					$(".one-page-row .menu-item a").parent("li").removeClass("act");
					if($(".one-page-row").length>0){
						$_this.parent("li").addClass("act");
					}
					if(selector == "#" && ($(".one-page-row").length > 0)){
						$("html, body").animate({
							scrollTop: 0
						}, speed, function(){
							$("body").removeClass("is-scroll");
							$_this.parent().siblings(".onepage").removeClass("act onepage");
						});
					}else{
						if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
							$("html, body").animate({
								scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
							}, speed, function(){
								$("body").removeClass("is-scroll");
							});
						}else{
							if(selector.indexOf("=")<0 &&  $(selector).length > 0){
								$("html, body").animate({
									scrollTop:  $(selector).offset().top - floatMenuH + 1
								}, speed, function(){
									$("body").removeClass("is-scroll");
								
									$_this.parent().siblings(".onepage").removeClass("act onepage");
									$_this.parent().addClass("act onepage");
					
								});
							}
						}
					}
					return false;
				});
		
			}
		
		}

	});
	$(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click',function(e){
		$("body").addClass("is-scroll");
		if($("#phantom").css("display")=="block"){
			var floatMenuH = $("#phantom").height();
		}else{
			var floatMenuH = 0;
		}
		var $_this = $(this),
			selector 	= $_this.attr("href");

		var base_speed  = 600,
			speed       = base_speed;
		if($(selector).length > 0){
			var this_offset = $_this.offset(),
				that_offset = $(selector).offset(),
				offset_diff = Math.abs(that_offset.top - this_offset.top),
				speed       = (offset_diff * base_speed) / 1000;
		}
		if(selector == "#"){
			$("html, body").animate({
				scrollTop: 0
			}, speed, function(){
				$("body").removeClass("is-scroll");
			});
		}else{
			if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
				$("html, body").animate({
					scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(selector).length > 0){
					$("html, body").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}
			}
		}
		return false;
	});
	if($(".one-page-row").length){
		$(window).scroll(function () {
			var currentNode = null;
			if(!$("body").hasClass("is-scroll")){
				$('.one-page-row div[data-anchor^="#"]').each(function(){
					var activeSection = $(this),
						currentId = $(this).attr('data-anchor');
					if($(window).scrollTop() >= ($(".one-page-row div[data-anchor='" + currentId + "']").offset().top - 100)){
						currentNode = currentId;
					}
				});
				$('.menu-item a').parent("li").removeClass('act');
				$('.menu-item a[href="'+currentNode+'"]').parent("li").addClass('act');
				if($('.menu-item a[href="#"]').length && currentNode == null){
					$('.menu-item a[href="#"]').parent("li").addClass('act');
				}
			}
		});
	}
/* Onepage template:end */
	 floatmenu_create();

	jQuery(".mainmenu >.menu-item > a").each(function(){
		var $this = this;
		var href =jQuery(this).attr("href");
		if(href.indexOf("#")>-1 &&href!="#" ){
			var href_id = href.split("#");
			if(href_id.length>1){
				href_id = jQuery.trim(href_id[1]);
			}
			if(href_id && href_id.indexOf("=")<0 &&  jQuery("section#"+href_id).length>0){
				
				jQuery("section#"+href_id).waypoint({
					handler: function(direction) {
						jQuery("#phantom .mainmenu >.menu-item").removeClass("act onepage");
						var currli;
						jQuery("#phantom .mainmenu >.menu-item > a").each(function(){
							var href =jQuery(this).attr("href");
							if(href.indexOf("#")>-1 &&href.indexOf(href_id)>-1){
								currli = jQuery(this).parent();
							}	
						})
						if(currli){
							currli.addClass("act onepage");
						}
					},
					offset: "20px",
				})
				
				
			}
		}
	})
	
//ready  in
	
	
//ready end	
});

function floatmenu_create(){
	
	if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
		var v1 = jQuery("#header #branding").width();
		var v2 = jQuery("#header .assistive-info .top-bar-right").width();
		jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
	}
	var $ = jQuery;
	if($("#header.newrightmenu,#header.newleftmenu").length>0){
		if($("#page.bodyheader40,#page.bodyheader0").length>0){
			$("#header").css("position","fixed").css("top","0");
			return;
		}
	}

	

	/*!Floating menu*/
	if (smartMenu) {
		var controlDiv = "";
		var mouseHtml = "";
		try{
			if(self!=top && !top.jQuery("body").hasClass("caterole")){
				var pcontroldiv = '<div class="controls-column bitPcontrols wf-mobile-hidden" style="top:50%;margin-top:-8px;"><div class="controls-out-tl"><div class="parent parent-vc_row active "><a class="control-btn"><span class="vc-btn-content vo-btn-nomove" style="padding:0 5px 0 10px !important;  line-height: 18px !important;font-size:12px !important;color:#fff;" onclick="top.wpFloatMenuSetting()">设置浮动头部和LOGO</span></a></div></div></div>';

				mouseHtml = 'onmouseover="document.getElementById(\'phantomFloatMenu\').style.display = \'block\';floatmenucontrols_mouseenter();" onmouseout="document.getElementById(\'phantomFloatMenu\').style.display = \'none\';floatmenucontrols_mouseout();"  ';
				controlDiv = '<div id="phantomFloatMenu"  style="line-height: 0px; opacity: 1; visibility: visible; transition: auto 0s ease 0s; display: none;" class="controls-element vc-controls bit-controls-element">'+pcontroldiv+'<div class="controls-cc"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">浮动菜单和LOGO</span></a><a class="control-btn control-btn-edit " onclick="top.wpFloatMenuSetting()" title="设置 浮动菜单样式"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>';
			}
		}catch(e){
			
		
		}
		
		var scrTop = 0,
			scrDir = 0,
			scrUp = false,
			scrDown = false,
			/*$header = $("#main-nav"),*/
			$header = $("#main-nav"),
			$headerSlide = $("#main-nav-slide .main-nav-slide-inner"),
			f_logoheight =  $("#main-nav").attr("data-lh"),
			f_maxwidth =  $("#main-nav").attr("data-mw"),
			f_fh =  $("#main-nav").attr("data-fh"),
			logoURL = $("#branding a").attr("href"),
			desc =  $("#bit-floatlogoText").html(),
			$parent = $header.parent(),
			$headerSlideParent = $headerSlide.parent(),
			$phantom = $('<div id="phantom" '+mouseHtml+' >'+controlDiv+'<div class="ph-wrap"><div class="ph-wrap-content"><div class="ph-wrap-inner"><div class="logo-box" ></div><div class="menu-box" ></div><div class="menu-info-box"  ></div></div></div></div></div>').appendTo("body"),
			$menuBox = $phantom.find(".menu-box"),
			$headerH = $header.height(),
			isMoved = false,
			breakPoint = 0,
			threshold = $("#header").offset().top + $("#header").height(),
			doScroll = false;
		var headerobj = $("#header>*");
		var header_height = jQuery("#header").height();
		
		
		if ($("#wpadminbar:visible").exists()) { $phantom.css("top", "28px"); };
		if ($("#page").hasClass("boxed")) { $phantom.find(".ph-wrap").addClass("boxed"); $phantom.addClass("boxed");}
		$phantom.find(".ph-wrap").addClass("with-logo");
		if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
			//if(logoURL == undefined){
				if(dtGlobals.logoURL){
					var valign = jQuery(".floatlogoText").css("vertical-align");
					if(!valign) valign="middle";
					var img_str = "";
					if(logoURL){
						img_str = '<a href="'+logoURL+'"><img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'"></a>';
					}else{
						img_str = '<img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'">';
					}
					$phantom.find(".logo-box").html('<div style="height:48px;vertical-align: '+valign+';display: table-cell;" >'+img_str+'</div>');
				}
			//}else{
			//	$phantom.find(".logo-box").html('<img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'"></a>');
			//}
		}else{
			$phantom.find(".ph-wrap").addClass("with-logo-no");
		}
		if(desc){
			$phantom.find(".logo-box").append(desc);
			$phantom.find(".with-logo-no .logo-box").css("display","table-cell");
		}
		if(f_logoheight >=10 &&f_logoheight<=50 ){
			$("#phantom .logo-box img").css("max-height",f_logoheight+"px");
		}
		if(f_fh==1 ){
			$("#phantom").addClass("min");
		}
		if(f_maxwidth>0 ){
			$("#phantom .ph-wrap .ph-wrap-content").css("max-width",f_maxwidth+"px");
		}
		var info_w = $("#phantom .menu-info-box").width();
		if(jQuery("#header.bit-logo-menu").length>0 && !$("#phantom").hasClass("bit-logo-menu")){
			var old_img_str = $header.find("#branding .logo img:first").attr("src");
			$header.find("#branding .logo img:first").css("width","auto");
			$("#phantom").addClass("bit-logo-menu").find(".logo-box").remove();
			$("#phantom .menu-box").css("padding-left",info_w+"px");
		}

		$(".one-page-row .logo-box a").on('click',function(e){
			$("body").addClass("is-scroll");
			if($("#phantom").css("display")=="block"){
				var floatMenuH = $("#phantom").height();
			}else{
				var floatMenuH = 0;
			}
			var $_this = $(this),
				selector 	= $_this.attr("href");

			var base_speed  = 600,
				speed       = base_speed;
			if($(selector).length > 0){
				var this_offset = $_this.offset(),
					that_offset = $(selector).offset(),
					offset_diff = Math.abs(that_offset.top - this_offset.top),
					speed       = (offset_diff * base_speed) / 1000;
			}
			if(selector == "#"){
				$("html, body").animate({
					scrollTop: 0
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
					$("html, body").animate({
						scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}else{
					if($(selector).length > 0){
						$("html, body").animate({
							scrollTop:  $(selector).offset().top - floatMenuH + 1
						}, speed, function(){
							$("body").removeClass("is-scroll");
						});
					}
				}
			}
			return false;
		});

		$(window).on("debouncedresize", function() {
			$headerH = $header.height();
		});
		var top_threshold = $("#dl-menu").offset().top + $("#dl-menu").height();
		
		$(window).on("scroll", function() {
			
			var tempCSS = {},tempScrTop = $(window).scrollTop();
			scrDir = tempScrTop - scrTop;
			
			if (tempScrTop > threshold && isMoved === false) {
				if( !dtGlobals.isHovering ) {
					var s="0.5s";
					if($header.attr("data-sp")==0) s="0.4s";
					else if($header.attr("data-sp")==1) s="1s";
					else if($header.attr("data-sp")==2) s="2s";
					if($header.attr("data-st")=="1"){
						$phantom.css("animation-duration",s).addClass("showed_tb");
					}else{
						$phantom.css({"transition":"opacity "+s,"opacity": 1, "visibility": "visible"});
					}
					if($("#phantom").hasClass("bit-logo-menu")){
						if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
							$header.find("#branding .logo img:first").attr("src",dtGlobals.logoURL);
						}
					}
					
					 if(jQuery("#header.newrightmenu,#header.newleftmenu").length>0){
						 if( jQuery("#dl-menu:visible").length==0){
							 	jQuery("#header").addClass("position-ab-fixed");
						 }
						 $phantom.find(".ph-wrap").remove();
					}else{
						$parent.css("min-height",$header.height()+"px");
						$header.appendTo($menuBox);
						$headerSlide.prependTo($phantom.find(".menu-info-box"));
						$header.removeClass($header.data('bit-menu')).addClass($header.data('bit-float-menu')).removeClass("bit-menu-default").addClass("bit-menu-float");
					}
					var infoclass = $headerSlide.attr("data-class");
					$phantom.find(".menu-info-box").addClass(infoclass);
			
					isMoved = true;
					//fancy-rollovers wf-mobile-hidden underline-hover bit-menu-float
					
					
					if($phantom.find("#main-nav").hasClass("position-ab-center")){
						var div1 = $phantom.find(".logo-box").width()+$phantom.find(".logo-box").css("padding-left").replace("px","")*1+$phantom.find(".logo-box").css("padding-right").replace("px","")*1;
						var div2 = $phantom.find(".menu-info-box").width();
						$phantom.find(".menu-box").css("position","relative").css("left",(div2-div1)/2+"px");
					}
				}
			}
			else if (tempScrTop <= threshold && isMoved === true) {
				jQuery("#phantom .mainmenu >.menu-item.onepage").removeClass("act onepage");
				if($("#phantom").hasClass("bit-logo-menu")){
					if(old_img_str)
						$header.find("#branding .logo img:first").attr("src",old_img_str);
				}
				 if(jQuery("#header.newrightmenu,#header.newleftmenu").length>0){
					 jQuery("#header").removeClass("position-ab-fixed");
				}else{
					$header.appendTo($parent);
					$parent.css("min-height","auto");
					$header.removeClass($header.data('bit-float-menu')).addClass($header.data('bit-menu')).addClass("bit-menu-default").removeClass("bit-menu-float");
				}
				
				if($(".logo-classic-centered, .logo-center").length){
					if($(".mini-search").length ){
						$header.insertBefore(".mini-search");
					}
				}
				if($header.attr("data-st")=="1"){
					$phantom.removeClass("showed_tb");
				}else{
					$phantom.css({"opacity": 0, "visibility": "hidden"});
				}
				
				
				isMoved = false;
				
			};
			scrTop = $(window).scrollTop();
			
		});
	}
/*Floating menu:end*/
}
function mainmenu_event(){
	$ = jQuery;
	//custom menu
	
	$("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
		if($("#mobile-menu").hasClass("dropTopStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}

				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}
				
			}else if($("#mobile-menu").hasClass("dropCenterStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}	
				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

				
			}else if($("#header").hasClass("wf-mobile-hidden")){
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >"+menu_html+"</div>");
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else{
				//default
				if($("#mobile-menu").hasClass("positionFixed")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
					mobile_menu_fix();
				}

		}
	
	$(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
	$("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

	var $mainNav = $("#main-nav,.mini-nav");
	

	$(".act", $mainNav).parents("li").addClass("act");

	var	$mobileNav = $mainNav.clone();
	var	$mobileTopNav = $(".mini-nav").clone();
	var backCap = $("#mobile-menu > .menu-back").html();

	$mobileNav
		.attr("id", "")
		.attr("class", "dl-menu")
		.find(".sub-nav")
			.addClass("dl-submenu")
			.removeClass("sub-nav")
			.prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");
	

	$mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


	$("body").removeClass("mobilefloatmenu");
	$("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
	if($("#mobile-menu").hasClass("floatmenu") ||$("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")){
		$("body").addClass("mobilefloatmenu");
		var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
		$("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >"+menu_content+"</div>");
		var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
		$("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >"+menu_html+"</div>");
		
		if($("#mobile-menu").hasClass("fullfloatmenu")){
			$(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
		}else	if($("#mobile-menu").hasClass("leftbtnmenu")){
			$("body").addClass("mobileleftbtnmenu");
			$(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend( jQuery(".menu_displaynone").html() ).append( jQuery(".menu_displaynone_footer").html()  );
			if($("body >.dl-menu-film").length==0){
				$("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
			}
			if($("body >.dl-menu-fixedheader").length==0){
				$("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
			}
			if(top!=self && jQuery("body").hasClass("compose-mode")){
				 jQuery("body").find("[bitDataAction='site_widget_container'] .site_tooler").each(
						function() {
							parent.widgetHover(this,  jQuery("body"));
						})
				 jQuery("body").find("[bitDataAction='site_fix_container']").each(function() {
					 parent.widgetFixEvent(this);
				})
			}
			jQuery("body").addClass("moble_menufixed");
			mobile_menu_fix_2();
			if ( jQuery(window).scrollTop()> jQuery(".dl-menu-fixedheader").height()) {
				jQuery(".dl-menu-fixedheader").css("position","fixed");
			}else{
				jQuery(".dl-menu-fixedheader").css("position","relative");
			}
		}
		if($("#mobile-menu").hasClass("left")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
			$(".floatwarpper").addClass("left");
		}else if($("#mobile-menu").hasClass("right")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
			$(".floatwarpper").addClass("right");
		}else{
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
			$(".floatwarpper").addClass("center");
		}
		var padding = $("#mobile-menu").attr("data-padding");
		if(padding){
			$(".floatwarpper").css("padding-left",padding+"px").css("padding-right",padding+"px");
		}
		var element_right = $("#mobile-menu").attr("data-right");
		if(element_right){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("right",element_right+"px");
		}
		var element_top = $("#mobile-menu").attr("data-top");
		if(element_top){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("top",element_top+"px");
		}

	}
	
	if (!$("html").hasClass("old-ie")) $( "#dl-menu:not(.dl-qfymobile-menu)" ).dlmenu();
	
	var timeouthidden = new Array();
	$(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
		var $this = jQuery(this);
		
		
		jQuery(this).on("mouseenter", function(e) {
			
			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			var h = obj.children().height();
			var t = obj.attr("data-time");
			if(!obj.hasClass("ing") && !obj.hasClass("ed")){
				obj.stop().addClass("ing").removeClass("ending").css({"visibility":"visible","height": 0}).animate({"height": h}, t*1000,function(){
					jQuery(this).removeClass("ing").addClass("ed").css({"visibility":"visible"});
				});
			}

		}).on("mouseleave", function(e) {
			
			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			timeouthidden[i] = setTimeout(function(){
				if(obj.hasClass("ending") || obj.hasClass("ing") ) return;
				obj.addClass("ending").removeClass("ed").animate({"height": 0}, 500,function(){jQuery(this).removeClass("ending ed").css({"visibility":"hidden","height": 0});});
			},300);
		});
	});

	$(".sub-nav", $mainNav).parent().each(function() {
	var $this = $(this);
	if(dtGlobals.isMobile || dtGlobals.isWindowsPhone){
		$this.find("> a").on("click tap", function(e) {
			if (!$(this).hasClass("dt-clicked")) {
				e.preventDefault();
				$mainNav.find(".dt-clicked").removeClass("dt-clicked");
				$(this).addClass("dt-clicked");
			} else {
				e.stopPropagation();
			}

		});
	};

	var menuTimeoutShow,
		menuTimeoutHide;

	if($this.hasClass("dt-mega-menu")){
		
		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();

			var $this = jQuery(this);
			$this.addClass("dt-hovered");

			dtGlobals.isHovering = true;


			var $_this = jQuery(this),
				$_this_h = $this.height();

			var $_this_ofs_top = $this.position().top;
				$this.find("> .sub-nav").css({
					top: $_this_ofs_top+$_this_h
				});

			
			if($this.hasClass("mega-auto-width")){
				var $_this = $(this),
					$_this_sub = $_this.find(" > .sub-nav > li"),
					coll_width = $("#main .wf-wrap").width()/5,
					$_this_par_width = $_this.parent().width(),
					$_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

				$_this.find(" > .sub-nav").css({
					left: $_this_parents_ofs,
					"marginLeft": -($_this.find(" > .sub-nav").width()/2 - $_this.width()/2)
				});
			}
			if($this.is(':first-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
					"marginLeft": 0
				});
			}else if($this.is(':last-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: "auto",
					right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ( $this.position().left + $this.width() ),
					"marginLeft": 0
				});
			};

			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
				$this.children("ul").addClass("right-overflow");
			};
			if($this.position().left < ($this.children("ul").width()/2)) {
				$this.children("ul").addClass("left-overflow");
			}

			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutShow = setTimeout(function() {
				if($this.hasClass("dt-hovered")){
					$this.find("ul").stop().css("visibility", "visible").animate({
						"opacity": 1
					}, 150);
				}
			}, 100);
		});

		$this.on("mouseleave", function(e) {
			var $this = $(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutHide = setTimeout(function() {
				if(!$this.hasClass("dt-hovered")){
					$this.children("ul").stop().animate({
						"opacity": 0
					}, 150, function() {
						$(this).css("visibility", "hidden");

						$(this).find("ul").stop().css("visibility", "hidden").animate({
							"opacity": 0
						}, 10);
					});
					
					setTimeout(function() {
						if(!$this.hasClass("dt-hovered")){
							$this.children("ul").removeClass("right-overflow");
							$this.children("ul").removeClass("left-overflow");
						}
					}, 400);
					
				}
			}, 150);

			$this.find("> a").removeClass("dt-clicked");
		});
	}else{
	
		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();
			
			var $this = jQuery(this);
			$this.addClass("dt-hovered");
			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
			//if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
				$this.children("ul").addClass("right-overflow");
			}
			dtGlobals.isHovering = true;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0){
				menuTimeoutShow = setTimeout(function() {
					if($this.hasClass("dt-hovered")){
						if($this.closest("#main-nav").attr("data-sliderdown")){
							var h = $this.children('ul').height();
							$this.children('ul').stop().css({"visibility":"visible","opacity":"1","overflow":"hidden","max-height":"0"}).animate({
								"max-height": h
							}, 300,function(){
								jQuery(this).css({"overflow":"inherit"})
							});
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
						}else{
							$this.children('ul').stop().css("visibility", "visible").animate({
								"opacity": 1
							}, 150);
						}
						
						
					}
				}, 100);
			}
		});

		$this.on("mouseleave", function(e) {
			var $this = jQuery(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0 ){
				menuTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("dt-hovered")){
						
						if($this.closest("#main-nav").attr("data-sliderdown")){
							$this.children("ul").stop().removeAttr("style");
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children("ul").stop().removeAttr("style");
						}else{
							$this.children("ul").stop().animate({
								"opacity": 0
							}, 150, function() {
								$(this).css("visibility", "hidden");
							});
							
						}
						
						setTimeout(function() {
							if(!$this.hasClass("dt-hovered")){
								$this.children("ul").removeClass("right-overflow");
							}
						}, 400);
					}
				}, 150);
			}

			$this.find("> a").removeClass("dt-clicked");
		});
	};

});

/* Main navigation: end */

}
function floatmenucontrols_mouseenter(){
	 if(typeof(parent.floatmenucontrols_mouseenter)=="function"){
			parent.floatmenucontrols_mouseenter();
	 }
}
function floatmenucontrols_mouseout(){
	 if(typeof(parent.floatmenucontrols_mouseout)=="function"){
			parent.floatmenucontrols_mouseout();
	 }
}
function base64_decode(str)
{
    var base64DecodeChars = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
            52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
            -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
        ];
    var c1, c2, c3, c4;
    var i, j, len, r, l, out;
 
    len = str.length;
    if (len % 4 != 0) {
        return '';
    }
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
        return '';
    }
    if (str.charAt(len - 2) == '=') {
        r = 1;
    }
    else if (str.charAt(len - 1) == '=') {
        r = 2;
    }
    else {
        r = 0;
    }
    l = len;
    if (r > 0) {
        l -= 4;
    }
    l = (l >> 2) * 3 + r;
    out = new Array(l);
 
    i = j = 0;
    while (i < len) {
        // c1
        c1 = base64DecodeChars[str.charCodeAt(i++)];
        if (c1 == -1) break;
 
        // c2
        c2 = base64DecodeChars[str.charCodeAt(i++)];
        if (c2 == -1) break;
 
        out[j++] = String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
 
        // c3
        c3 = base64DecodeChars[str.charCodeAt(i++)];
        if (c3 == -1) break;
 
        out[j++] = String.fromCharCode(((c2 & 0x0f) << 4) | ((c3 & 0x3c) >> 2));
 
        // c4
        c4 = base64DecodeChars[str.charCodeAt(i++)];
        if (c4 == -1) break;
 
        out[j++] = String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return toUTF16(out.join(''));
}
function toUTF8(str)
{
    if (str.match(/^[\x00-\x7f]*$/) != null) {
        return str.toString();
    }
    var out, i, j, len, c, c2;
    out = [];
    len = str.length;
    for (i = 0, j = 0; i < len; i++, j++) {
        c = str.charCodeAt(i);
        if (c <= 0x7f) {
            out[j] = str.charAt(i);
        }
        else if (c <= 0x7ff) {
            out[j] = String.fromCharCode(0xc0 | (c >>> 6),
                                         0x80 | (c & 0x3f));
        }
        else if (c < 0xd800 || c > 0xdfff) {
            out[j] = String.fromCharCode(0xe0 | (c >>> 12),
                                         0x80 | ((c >>> 6) & 0x3f),
                                         0x80 | (c & 0x3f));
        }
        else {
            if (++i < len) {
                c2 = str.charCodeAt(i);
                if (c <= 0xdbff && 0xdc00 <= c2 && c2 <= 0xdfff) {
                    c = ((c & 0x03ff) << 10 | (c2 & 0x03ff)) + 0x010000;
                    if (0x010000 <= c && c <= 0x10ffff) {
                        out[j] = String.fromCharCode(0xf0 | ((c >>> 18) & 0x3f),
                                                     0x80 | ((c >>> 12) & 0x3f),
                                                     0x80 | ((c >>> 6) & 0x3f),
                                                     0x80 | (c & 0x3f));
                    }
                    else {
                       out[j] = '?';
                    }
                }
                else {
                    i--;
                    out[j] = '?';
                }
            }
            else {
                i--;
                out[j] = '?';
            }
        }
    }
    return out.join('');
}
function toUTF16(str)
{
    if ((str.match(/^[\x00-\x7f]*$/) != null) ||
        (str.match(/^[\x00-\xff]*$/) == null)) {
        return str.toString();
    }
    var out, i, j, len, c, c2, c3, c4, s;
 
    out = [];
    len = str.length;
    i = j = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxx xxxx
            out[j++] = str.charAt(i - 1);
            break;
            case 12: case 13:
            // 110x xxxx   10xx xxxx
            c2 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x1f) << 6) |
                                            (c2 & 0x3f));
            break;
            case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            c2 = str.charCodeAt(i++);
            c3 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x0f) << 12) |
                                           ((c2 & 0x3f) <<  6) |
                                            (c3 & 0x3f));
            break;
            case 15:
            switch (c & 0xf) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 1111 0xxx  10xx xxxx  10xx xxxx  10xx xxxx
                c2 = str.charCodeAt(i++);
                c3 = str.charCodeAt(i++);
                c4 = str.charCodeAt(i++);
                s = ((c  & 0x07) << 18) |
                    ((c2 & 0x3f) << 12) |
                    ((c3 & 0x3f) <<  6) |
                     (c4 & 0x3f) - 0x10000;
                if (0 <= s && s <= 0xfffff) {
                    out[j++] = String.fromCharCode(((s >>> 10) & 0x03ff) | 0xd800,
                                                  (s         & 0x03ff) | 0xdc00);
                }
                else {
                    out[j++] = '?';
                }
                break;
                case 8: case 9: case 10: case 11:
                // 1111 10xx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=4;
                out[j++] = '?';
                break;
                case 12: case 13:
                // 1111 110x  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=5;
                out[j++] = '?';
                break;
            }
        }
    }
    return out.join('');
}
function weiBoAndWeiXinToolTip(){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	 var objs = jQuery(".soc-ico .weixin");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/"+name+"'  width='160'/><div>请扫二维码关注微信</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
	var objs = jQuery(".soc-ico .weibo");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/"+name+"' width='160' /><div>请扫二维码关注微博</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
	
	
}
function toolTip(objs){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 if(typeof(objs)=="undefined"){
		objs = jQuery("[data-tooltip='on']");
	 }
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	objs.each(function(){
		var obj = jQuery(this);
		var title = jQuery(this).attr("data-original-title");
		if(!title) title="";
		var image = jQuery(this).attr("data-original-image");
		
		var imagewidth = jQuery(this).attr("data-original-imagewidth");
		var imageheight = jQuery(this).attr("data-original-imageheight");
		if(image){
			if(!imagewidth)	imagewidth=150;
			if(!imageheight) imageheight=150;
			title = "<div>"+title+"</div>"+"<img src='"+image+"'  style='width:"+imagewidth+"px;height:"+imageheight+"px'/>";
		}
		var cate =  jQuery(this).attr("data-tooltip-cate");
		var data ="";
		if(cate==1){
			data = { tipJoint: "bottom"};
		}else if(cate==2){
			data = { tipJoint: "bottom",style: "alert"};
		}else if(cate==3){
			data = { tipJoint: "bottom",style: "dark" };
		}else if(cate==4){
			data = { tipJoint: "bottom",style: "glass" };
		}else if(cate==5){
			data = { tipJoint: "bottom right",style: "dark"};
		}else if(cate==6){
			data = { tipJoint: "bottom left",style: "dark" };
		}else if(cate==7){
			data = { tipJoint: "top right",style: "dark" };
		}else if(cate==8){
			data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
		}else if(cate==9){
			data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
		}else if(cate==10){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
		}else if(cate==11){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
		}else if(cate==12){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
		}
		if(data!=""){
			new Opentip(obj, title, data);
		}
	})
}
function toVisit(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	
	var post_id = p.attr("data-postid");
	var pt = p.find('[data-title="true"]');
	var title = "";
	if(pt.length>0){
		var title =jQuery.trim(pt.text());
	}
	jConfirm("确认是否离开当前页面，访问页面【"+title+"】？",function(){
				top.$('#pageUrl').val(post_id).change();
	});

}
function toEditor(obj,e){
	if(e){
		 e.preventDefault();
		 e.stopPropagation();
	}
	parent.toEditor(obj);
}
function toCopy(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var post_id = p.attr("data-postid");
	parent.bitSettingsEdit(post_id, "复制一个页面", "copyPage","COPY");
}
function toDelete(obj){
	parent.toDelete(obj);
}
function toEditProduct(obj){
	parent.toEditProduct(obj);
	return false;
}
function toRedirectProduct(obj){
	parent.toRedirectProduct(obj);
	return false;
}
function toDeleteCate(obj){
	parent.toDeleteCate(obj);
}
function pageNav(paged){
	var obj =top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(url.indexOf("paged")>-1){
		var tmp = url.split("&paged");
		url = tmp[0]+"&paged="+paged;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&paged="+paged;
		}else{
			url = url+"?paged="+paged;
		}
	}
	obj.attr("src",url);
}
function pageCate(page_id,cate_id){
	var obj = top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(cate_id==0) cate_id="";
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&categories="+cate_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&categories="+cate_id;
		}else{
			url = url+"?post_id="+page_id+"&categories="+cate_id;
		}
		
	}
	
	jConfirm("确认是否需要打开该分类列表页面？",function(){
		obj.attr("src",url);
	});

	return false;
}
function searchResult(p){
	
	var action = jQuery(p).attr("action");
	var search = jQuery(p).find("[name='search']").val();
	var page_id = jQuery(p).find("[name='page_id']").val();
	var searchtype = jQuery(p).find("[name='searchtype']").val();

	var obj = top.jQuery("#site-content-iframe");
	if(obj.length>0){
		var url  = obj.attr("src");
		if(url.indexOf("post_id")>-1){
			var tmp = url.split("&post_id");
			url = tmp[0]+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
		}else{
			if(url.indexOf("?")>-1){
				url = url+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}else{
				url = url+"?post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}
		}
		obj.attr("src",url);
		return false;
	}
}

var clicksmsnum = 0;
function toverify(){
	smsWarning("");
	var p = jQuery("[name='sms_phone']").val();
	var image_code = jQuery("[name='sms_image']").val();
	var hidden_rand = jQuery("[name='hidden_rand']").val();
	if(jQuery.trim(p)=="" || p==null ){
		smsWarning("手机号码不能为空");
		return ;
	}
	if(jQuery.trim(image_code)=="" || image_code==null){
		smsWarning("图形验证码不能为空");
		return ;
	}
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	var str ='<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
	parentDIv.find(".bitButtonVerify").after(str);
	countVerify();
	jQuery.post("/admin/admin-ajax.php",{"action":"toverifySms","phone":jQuery.trim(p),"image_code":jQuery.trim(image_code),"hidden_rand":hidden_rand},
		function(data){
			if(data=="success"){
				smsWarning("短信已经成功发送，请查看您的手机。您可能在1-5分钟之后收到短信",1);
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1) ){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else if(data=="empty"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码不能为空");
			}else if(data=="errorphone"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码格式错误(国际号码示例：例如美国+112345678901)");
			}else if(data=="image_empty"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("图形验证码不能为空");
			}else if(data=="image_error"||data=="image_notmatch"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("图形验证码填写错误");
			}else if(data=="loginout"||data=="0"){
				smsWarning("会话已经过期，请重新登录");
			}else if(data=="exist"){
				smsWarning("短信已经发送，请查看您的手机,30秒之内只能获取一次验证码");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1)){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else if(data=="existUserPhone"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码已经绑定了帐号,一个手机号码只能绑定一个帐号哦");
			}else if(data=="limitPhone"){
				smsWarning("1个小时内对一个号码不能发送超过10条短信");
			}else if(data=="limitIp"){
				smsWarning("1个小时内一个客户IP端不能发送超过10条短信");
			}else if(data=="failed"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("短信发送失败，请30秒后再试一次");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1)){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else{
				smsWarning("短信发送异常,请30秒后再试一次");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1) ){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}

	})
}
function tocallbutton(){
	smsWarning("");
	if(confirm("确认是否通过呼叫你的手机来获取语言验证码？")){

		var p = jQuery("[name='sms_phone']").val();
		var image_code = jQuery("[name='sms_image']").val();
		var hidden_rand = jQuery("[name='hidden_rand']").val();
		if(jQuery.trim(p)=="" || p==null ){
			smsWarning("手机号码不能为空");
			return ;
		}
		if(jQuery.trim(image_code)=="" || image_code==null){
			smsWarning("图形验证码不能为空");
			return ;
		}
		var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
		var str ='<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
		parentDIv.find(".bitButtonVerify").after(str);
		countVerify();
		jQuery.post("/admin/admin-ajax.php",{"action":"toverifyCall","phone":jQuery.trim(p),"image_code":jQuery.trim(image_code),"hidden_rand":hidden_rand},
			function(data){
				if(data=="success"){
					smsWarning("我们正在尝试呼叫你的手机，请注意接听语言提示",1);
				}else if(data=="empty"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码不能为空");
				}else if(data=="errorphone"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码格式错误");
				}else if(data=="image_empty"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("图形验证码不能为空");
				}else if(data=="image_error"||data=="image_notmatch"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("图形验证码填写错误");
				}else if(data=="loginout"||data=="0"){
					smsWarning("会话已经过期，请重新登录");
				}else if(data=="existUserPhone"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码已经绑定了帐号,一个手机号码只能绑定一个帐号哦");
				}else if(data=="limitPhone"){
					smsWarning("1个小时内对一个号码不能发送超过10条短信");
				}else if(data=="limitIp"){
					smsWarning("1个小时内一个客户IP端不能发送超过10条短信");
				}else if(data=="failed"){
					smsWarning("拨打电话失败,请30秒后再试一次");
				}else{
					smsWarning("拨打电话失败,请30秒后再试一次");
				}

		})
	}
}
function countVerify(){
	if(jQuery(".bit-button-waiting.countVerify").length==1){
		var countVerifyNum = jQuery(".bit-button-waiting.countVerify").text();
		if(countVerifyNum*1<2){
			jQuery(".bit-button-waiting.countVerify").remove();
		}
		setTimeout(function(){
			countVerifyNum = countVerifyNum*1 -1;
			jQuery(".bit-button-waiting.countVerify").text(countVerifyNum);
			countVerify();
		},1000);
	
	}
	
}
function countVerifyCall(){
	if(jQuery(".tocallbutton").css("opacity")!="1"){
		var countVerifyNum = jQuery(".tocallbutton").attr("data-second");
		if(countVerifyNum*1<2){
			jQuery(".tocallbutton").css("opacity","1").attr("title","").attr("data-second",0).css("cursor","pointer");
		}
		setTimeout(function(){
			countVerifyNum = countVerifyNum*1 -1;
			jQuery(".tocallbutton").attr("title","等待"+countVerifyNum+"s后可以重拨").attr("data-second",countVerifyNum);
			countVerifyCall();
		},1000);
	
	}
	
}
function toSubmitPhoneSms(){
	smsWarning("");
	var p = jQuery("[name='sms_phone']").val();
	if(jQuery.trim(p)=="" || p==null){
		smsWarning("手机号码不能为空");
		return ;
	}
	var c = jQuery("[name='sms_code']").val();
	if(jQuery.trim(c)=="" || c==null){
		smsWarning("手机验证码不能为空");
		return ;
	}
	var image_code = jQuery("[name='sms_image']").val();
	if(jQuery.trim(image_code)=="" || image_code==null){
		smsWarning("图形验证码不能为空");
		return ;
	}
	var hidden_rand = jQuery("[name='hidden_rand']").val();
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	if(parentDIv.find(".bitButtonSubmitDiv .bit-button-waiting").length==1){
		return ;
	}
	var str ='<a class="bit-button-waiting" style="background:none;border:0;position:relative;"><img style=" height: 20px;margin-left: 10px;position: relative;top: 5px;" src="/qfy-content/plugins/qfyuser/skins/elegant/img/loading.gif"></a>';
	parentDIv.find(".bitButtonSubmit").after(str);
	parentDIv.find(".bitButtonSubmit").css("opacity","0.65").css("cursor","default");
	jQuery.post("/admin/admin-ajax.php",{"action":"successToVerify","phone":jQuery.trim(p),"code":jQuery.trim(c),"image_code":jQuery.trim(image_code),hidden_rand:hidden_rand},
		function(data){
			parentDIv.find(".bit-button-waiting").remove();
			parentDIv.find(".bitButtonSubmit").css("opacity","1").css("cursor","pointer");
			if(data=="success"){
				
				if(!jQuery("body").hasClass("only_show_sms_content")){
					smsWarning("手机验证成功，系统正在自动跳转到网站管理页面",1);
					if(jQuery("#redirect_sms_url").val()==""){
						location.href="/";
					}else{
						location.href=jQuery("#redirect_sms_url").val();
					}
				}else{
					smsWarning("手机验证成功，请关闭弹框，继续下面的操作",1);
				}
			}else if(data=="loginout"||data=="0"){
				smsWarning("会话已经过期，请重新登录");
			}else if(data=="None"){
				smsWarning("验证失败，请认真填写相关信息");
			}else if(data=="image_empty"){
				smsWarning("图形验证码不能为空");
			}else if(data=="image_error"||data=="image_notmatch"){
				smsWarning("图形验证码填写错误");
			}else if(data=="fail"){
				smsWarning("验证失败，一个手机验证码只能使用一次，请重新获取");
			}else if(data=="expire"){
				smsWarning("验证失败，手机验证码已经过期，请重新获取");
			}else if(data=="nomatch"){
				smsWarning("验证失败，验证码发送手机与当前绑定手机不符");
			}else if(data=="nomatchcode"){
				smsWarning("验证失败，手机验证码错误");
			}else {
				smsWarning("验证失败,未知异常，请尝试重新验证");
			}
	})

}
function smsWarning(content,flag){
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	parentDIv.find(".sms-warning").html("");
	parentDIv.find(".btn-warning").html("");
	if(content==""){
		return false;
	}
	if(flag=="1"){
		parentDIv.find(".sms-warning").html("<span style='color:green;'>"+content+"...</span>");
	}else {
		parentDIv.find(".btn-warning").html(content);
	}
}

function cart_button_warning(){
	jAlert("编辑情况下，无法使用购物车功能。如果修改商城默认页面，你可以从左上角选择功能页面进行编辑");
}
function toorderview(id){
	id = id.replace("#","");
	var obj = top.jQuery("#site-content-iframe");
	var page_id = top.jQuery("#pageUrl").val();
	var  url=obj.attr("src");	
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&view-order="+id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&view-order="+id;
		}else{
			url = url+"?post_id="+page_id+"&view-order="+id;
		}
	}
	

	obj.attr("src",url);
}

function toorderpage(page_id){
	
	var obj = top.jQuery("#site-content-iframe");
	var  url=obj.attr("src");	
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id;
		}else{
			url = url+"?post_id="+page_id;
		}
	}
	obj.attr("src",url);
}

function checkCommentForm(obj){
	if(top!=self){
		top.jAlert("编辑状态下不能提交，请在预览模式下使用！");
		return false;
	}
	var form = jQuery(obj);
	var text1 = form.attr("data-text_7")?form.attr("data-text_7"):"请认真填写评价内容，字数不得少于10个字。";
	var text2 = form.attr("data-text_9")?form.attr("data-text_9"):"请填写必填项目。";
	var text3 = form.attr("data-text_10")?form.attr("data-text_10"):"请输入有效的地址邮件。";
	var text4 = form.attr("data-text_11")?form.attr("data-text_11"):"提交成功";
	var text5 = form.attr("data-button_texting")?form.attr("data-button_texting"):"提交中";


	var comment = jQuery.trim(form.find("#comment").val());
	if(comment.length <10 ){
		if(top!=self){top.jAlert(text1)}else{ alert(text1)};
		return false;
	}
	if(form.find("#author[aria-required='true']").length>0){
		var author = jQuery.trim(form.find("#author[aria-required='true']").val());
		if(author=="" ){
			if(top!=self){top.jAlert(text2)}else{ alert(text2)};
			return false;
		}
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
		var email = jQuery.trim(form.find("#email[aria-required='true']").val());
		if(email=="" ){
			if(top!=self){top.jAlert(text2)}else{ alert(text2)};
			return false;
		}else if(!reg.test(email)){
			if(top!=self){top.jAlert(text3)}else{ alert(text3)};
			return false;
		}
	}
	var url  = form.attr("action");
	var old_submit_text = form.find("#submit").val();
	if(form.find("#submit").val()==text5+"..."){
		return false;
	}
	form.find("#comment_parent").val(0);
	form.find("#hide_content").remove();
	form.find("#submit").val(text5+"...");
	var p = form.closest(".qfy-comments");
	var pp = p.parent();
	if(form.find("[name='type']").val()=="nomarl"){
		if(form.find("#short_atts").length==0){
			form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='"+jQuery(obj).closest(".qfy-comments").attr("data-atts")+"' />");
		}else{
			form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
		}
	}
	jQuery.ajax({
        type: "POST",
        url:url,
        data:form.serialize(),
        error: function(request) {
        	if(top!=self){top.jAlert("连接异常。")}else{alert("连接异常");};
        	form.find("#submit").val(old_submit_text);
        },
        success: function(data) {
            if(data.indexOf("success")>-1){
				if(form.closest(".qfy-comments").length>0){
					form.find("#submit").val(text4);
					var tmp = data.split('|<result>|');
					p.replaceWith(tmp[1]);
					pp.find(".commentlist").show();
					var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">'+text4+'</div></div>';
					qfy_popinfo_fun(success_htm,2);
				}else{
					var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">'+text4+'</div></div>';
					qfy_popinfo_fun(success_htm,2);
					setTimeout(function(){
						location.reload();
					},3000)
				}
            }else{
				if( form.attr("data-text_12")){
					if(data=="对不起，你已经提交过评论啦。该商品或页面你只能评价一次！"){
						data = form.attr("data-text_12");
					}
				}else if( form.attr("data-text_13")){
					if(data=="禁止回复，超过条数限制..."){
						data = form.attr("data-text_13");
					}
				}
            	if(top!=self){top.jAlert(data)}else{alert(data);};
            	form.find("#submit").val(old_submit_text);
            }
            
        }
    });
	return false;
}

function response_comment(obj){
	var p = jQuery(obj).parent();
	jQuery(obj).closest(".comment").find(".response_comment"+p.attr("data-id")).show();
	p.find(".response_comment_span").hide();
	p.find(".response_comment_tosave").show();
	p.find(".response_comment_tocancel").show();
}
function response_comment_edit(obj){
	var p = jQuery(obj).closest(".comment-body");
	var v = jQuery.trim(p.find(">.content").html());
	var id = p.attr("data-id");
	var status =  p.attr("data-status");
	var t1 = jQuery(obj).attr("data-text_4")?jQuery(obj).attr("data-text_4"):"已审核";
	var t2 = jQuery(obj).attr("data-text_5")?jQuery(obj).attr("data-text_5"):"待审";
	var t3 = jQuery(obj).attr("data-text_6")?jQuery(obj).attr("data-text_6"):"垃圾评论";
	var t4 = jQuery(obj).attr("data-text_2")?jQuery(obj).attr("data-text_2"):"关闭";
	var t5 = jQuery(obj).attr("data-button_text")?jQuery(obj).attr("data-button_text"):"保存";

	p.find(">.content").hide();
	p.find(".reply.commentmetadata").hide();
	if(p.find(".edit_comment").length==0){
		var str ='<div class="edit_comment commentmetadata edit_comment'+id+'"><div style="border: 2px solid rgb(204, 212, 217);"><textarea name="comment"  style="color: rgb(64, 64, 64);font-size:14px;width:100%;border: 0 none; overflow-x: hidden;overflow-y: auto;resize: none; height: 80px;line-height: 20px;" id="editcontent'+id+'" cols="58" rows="10" tabindex="4">'+v+'</textarea><div style="background-color: rgb(246, 248, 249); text-align: right;"><label class="approved" style="font-weight:400px;font-size:12px;color: rgb(0, 128, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="1" name="comment_status" >'+t1+'</label><label class="waiting" style="font-weight:400px;font-size:12px;color: rgb(255, 165, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="0" name="comment_status">'+t2+'</label><label class="spam" style="font-weight:400px;font-size:12px; color: rgb(255, 0, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="spam" name="comment_status">'+t3+'</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" name="submit" style="border: 1px solid rgb(94, 144, 165); padding: 5px 10px; background-color: rgb(94, 144, 165); color: rgb(255, 255, 255);" class="response_comment_toedit" id="submit" tabindex="5" value="'+t5+'" onclick="response_comment_toedit(this)">&nbsp;&nbsp;<input type="button" onclick="response_comment_tocancel3(this)" name="cancel" style="border:1px solid #ccc;padding:5px 10px;background-color:#ccc;color:#fff;" id="cancel" tabindex="5" value="'+t4+'"></div></div></div>';
		p.append(str);
	}else{
		p.find(".edit_comment").show();
	}

	p.find(".edit_comment"+id+" [name='comment_status'][value="+status+"]").attr("checked",true); 
}
function response_comment_tocancel(obj){
	var p = jQuery(obj).parent();
	jQuery(obj).closest(".comment").find(".response_comment"+p.attr("data-id")).hide();
    p.find(".response_comment_span").show();
    p.find(".response_comment_tosave").hide();
	p.find(".response_comment_tocancel").hide();
}
function response_comment_tocancel2(obj){
	var p = jQuery(obj).closest(".comment").find(".reply.commentmetadata");
	jQuery(obj).closest(".comment").find(".response_comment"+p.attr("data-id")).hide();
    p.find(".response_comment_span").show();
    p.find(".response_comment_tosave").hide();
	p.find(".response_comment_tocancel").hide();
}
function response_comment_tocancel3(obj){
	var p = jQuery(obj).closest(".comment-body");
	p.find(">.content").show();
	p.find(".edit_comment.commentmetadata").hide();
	p.find(".reply.commentmetadata").show();
}
function response_comment_toedit(obj){
	var	p =jQuery(obj).closest(".comment-body");
	var pp = jQuery(obj).closest(".qfy-comments").parent();
	var id = p.attr("data-id");
	var comment = p.find("#editcontent"+id).val();
	var dp = p.attr("data-parent");

	if(comment.length <10 ){
		if(top!=self){top.jAlert("请认真填写评价内容，字数不得少于10个字。")}else{ alert("请认真填写评价内容，字数不得少于10个字。")};
		return false;
	}
	var form =jQuery(obj).closest(".qfy-comments").find("form#commentform");
	var url  =form.attr("action");
	form.find("#comment_parent").val(dp);
	if(form.find("#comment_approved").length==0){
		form.append('<input type="hidden" value="0" id="comment_approved" name="comment_approved">');
	}
	form.find("#comment_approved").val(p.find(".edit_comment"+id+" [name='comment_status']:checked").val());
	if(form.find("#hide_content").length==0){
		form.prepend("<input type='hidden' name='hide_content'  id='hide_content' value='"+comment+"' />");
	}else{
		form.find("#hide_content").val(comment);
	}
	if(form.find("#comment_ID").length==0){
		form.prepend("<input type='hidden' name='comment_ID'  id='comment_ID' value='"+id+"' />");
	}else{
		form.find("#comment_ID").val(id);
	}
	if(p.find(".response_comment_toedit").val()!=p.attr("data-btntext")){
		return false;
	}
	if(form.find("#short_atts").length==0){
		form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='"+jQuery(obj).closest(".qfy-comments").attr("data-atts")+"' />");
	}else{
		form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
	}
	p.find(".response_comment_toedit").val(p.attr("data-btntexting")+"...");
	//....
	jQuery.ajax({
        type: "POST",
        url:url,
        data:form.serialize(),
        error: function(request) {
        	if(top!=self){top.jAlert("连接异常。")}else{alert("连接异常");};
        	p.find(".response_comment_toedit").val(p.attr("data-btntext"));
			form.find("#comment_ID").remove();
			form.find("#comment_approved").remove();
        },
        success: function(data) {
            if(data.indexOf("success")>-1){
				p.find(".response_comment_toedit").val(p.attr("data-btntext"));
				var tmp = data.split('|<result>|');
				form.closest(".qfy-comments").replaceWith(tmp[1]);
				pp.find(".commentlist").show();
				
            }else{
				p.find(".response_comment_toedit").val(p.attr("data-btntext"));
				form.find("#comment_ID").remove();
				form.find("#comment_approved").remove();
            	if(top!=self){top.jAlert(data)}else{alert(data);};
				
            }
        }
    });
}
function commentSort(obj,order){
	var p = jQuery(obj).closest(".qfy-comments");
	var pp = p.parent();
	var form =p.find("form#commentform");
	var comment_post_ID = form.find("#comment_post_ID").val();
	
	var url  = form.attr("action");
	
	var newsest_text = p.find("#commentmenu.nav-menu-left li:first a").html();
	var oldest_text = p.find("#commentmenu.nav-menu-left li:last a").html();
	p.css("opacity","0.5");
	jQuery.post(url,{action:"search",comment_post_ID:comment_post_ID,reverse_top_level:order,short_atts:p.attr("data-atts")},function(data){
		if(data.indexOf("success")>-1){
			var tmp = data.split('|<result>|');
			p.replaceWith(tmp[1]);
			pp.find(".commentlist").show();
			if(order==0){
				p.find(".comment-nav-left b").html(newsest_text);
			}else{
				p.find(".comment-nav-left b").html(oldest_text);
			}
		}
		p.css("opacity","1");
	})
}
function next_comment_page(obj,pageid){
	var p = jQuery(obj).closest(".qfy-comments");
	var form =p.find("form#commentform");
	var comment_post_ID = form.find("#comment_post_ID").val();
	var url  = form.attr("action");
	p.css("opacity","0.5");
	jQuery.post(url+"?cpage="+pageid,{action:"search",comment_post_ID:comment_post_ID,short_atts:p.attr("data-atts")},function(data){
		if(data.indexOf("success")>-1){
			var tmp = data.split('|<result>|');			
			var t = jQuery(tmp[1]).find(".commentlist").html();
			var load = jQuery(tmp[1]).find(".loadmore_inner").html();
			p.find(".commentlist").append(t);
			if(load){
				p.find(".loadmore_inner").html(load);
			}else{
				p.find(".loadmore_inner").remove();
			}
			p.css("opacity","1");
			
		}
	})

}
function removecomment(obj,id){
	if(confirm(jQuery(obj).attr("data-text"))){
		var p = jQuery(obj).closest(".qfy-comments");
		var pp = p.parent();
		var form =p.find("form#commentform");
		var comment_post_ID = form.find("#comment_post_ID").val();
		var url  = form.attr("action");
		p.find("#div-comment-"+id).css("opacity","0.5");
		jQuery.post(url,{action:"trash",comment_id:id,comment_post_ID:comment_post_ID,short_atts:p.attr("data-atts")},function(data){
			if(data.indexOf("success")>-1){
				var tmp = data.split('|<result>|');
				p.replaceWith(tmp[1]);
				pp.find(".commentlist").show();
			}else{
				p.find("#div-comment-"+id).css("opacity","1");
				alert(data);
			}
		})
	}
}
function response_comment_tosave(obj){
	//商品和普通评论，不一样的结构
	var p = jQuery(obj).parent();
	var pp = jQuery(obj).closest(".qfy-comments").parent();
	var id = p.attr("data-id");
	var product = true;
	var form = jQuery(obj).closest("#tab-reviews").find("form#commentform");
	if(!id){ 
		//普通
		p =jQuery(obj).closest(".reply.commentmetadata");
		id = p.attr("data-id");
		product = false;
		form = jQuery(obj).closest(".qfy-comments").find("form#commentform");
		if(form.find("#short_atts").length==0){
			form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='"+jQuery(obj).closest(".qfy-comments").attr("data-atts")+"' />");
		}else{
			form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
		}
		var old_submit_text = p.find(".response_comment_tosave").val();
	}
	if(p.find("#replycontent"+id).length>0){
		var comment = p.find("#replycontent"+id).val();
	}else{
		var comment = jQuery("#replycontent"+id).val();
	}
	if(comment.length <10 ){
		if(top!=self){top.jAlert("请认真填写评价内容，字数不得少于10个字。")}else{ alert("请认真填写评价内容，字数不得少于10个字。")};
		return false;
	}
	
	var url  = form.attr("action");
	form.find("#comment_parent").val(id);
	if(form.find("#hide_content").length==0){
		form.prepend("<input type='hidden' name='hide_content'  id='hide_content' value='"+comment+"' />");
	}else{
		form.find("#hide_content").val(comment);
	}
	
	
	if(p.find(".response_comment_tosave").html()=="提交中..." || p.find(".response_comment_tosave").val()=="提交中..."){
		return false;
	}
	if(product){
		p.find(".response_comment_tosave").html("提交中...");
	}else{
		 p.find(".response_comment_tosave").val("提交中..");
	}
	p.find(".response_comment_tocancel").hide();
	//....
	jQuery.ajax({
        type: "POST",
        url:url,
        data:form.serialize(),
        error: function(request) {
        	if(top!=self){top.jAlert("连接异常。")}else{alert("连接异常");};
        	form.find(".response_comment"+p.attr("data-id")).hide();
        	p.find(".response_comment_span").show();
			if(product){
        		p.find(".response_comment_tosave").hide().html("保存");
			}else{
				p.find(".response_comment_tosave").hide().val(old_submit_text);
			}
        },
        success: function(data) {
        	
            if(data.indexOf("success")>-1){
				if(form.closest(".qfy-comments").length>0){
					p.find(".response_comment_tosave").val("提交成功");
					var tmp = data.split('|<result>|');
					form.closest(".qfy-comments").replaceWith(tmp[1]);
					pp.find(".commentlist").show();
				}else{
					if(top!=self){top.jAlert("提交成功。")}else{alert("提交成功,");};
            		location.reload();
				}
            }else{
            	if(top!=self){top.jAlert(data)}else{alert(data);};
                form.find(".response_comment"+p.attr("data-id")).hide();
            	p.find(".response_comment_span").show();
				if(product){
            		p.find(".response_comment_tosave").hide().html("保存");
				}else{
					p.find(".response_comment_tosave").val(old_submit_text);
				}
            }
        }
    });
}






function jConfirm(msg,yes,no,title){
	if(top!=self){
		top.jConfirm(msg,yes,no,title);
	}
}

function jAlert(msg,title){
	if(top==self){
		alert(msg);
	}else{
		top.jAlert(msg,title);
	}
}

function setCookie(cname, cvalue,exdays)		//cookies设置
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function getQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = location.search.substr(1).match(reg);  
    if (r != null) return unescape(decodeURI(r[2])); return null;  
}  
function tobigimage(obj){
	var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
	var height = bigimage.find("img").height();
	var src = jQuery(obj).find("img").attr("src");
	jQuery(obj).parents(".qfy_imgList").find("img").css("border","0");
	jQuery(obj).find("img").css("border","2px solid #f63");
	src = src.replace("-150x150","");
	bigimage.find("img").attr("src",src).height(height);
}
function slideLine(box,stf,delay,speed,h){
	
	if(jQuery("#"+box+" div").length ==0){
		return false;
	}

	var slideBox = document.getElementById(box);
	var delay = delay||1000,speed = speed||20,h = h||20;
	var tid = null,pause = false;
	var s = function(){tid=setInterval(slide, speed);}
	var slide = function(){
	if(pause) return;
	slideBox.scrollTop += 1;
	if(slideBox.scrollTop%h == 0){
		clearInterval(tid);
		slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
		slideBox.scrollTop = 0;
		setTimeout(s, delay);
		}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(s, delay);
}

function vc_gallery_relat(){
	jQuery(".wpb_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function(){
		var img = jQuery(this);
		var src = img.attr("src");
		img.css("cursor","pointer");
		src = src.replace(/-[\d]*x[\d]*/g,"");
		img.unbind("click").bind("click",function(){
			jQuery(".wpb_gallery.rela_other .slides").each(function(){
				var obj = jQuery(this);
				var index = 0;
				obj.find("img").each(function(){
					var toimg = jQuery(this);
					var tosrc = toimg.attr("src");
					tosrc = tosrc.replace(/-[\d]*x[\d]*/g,"");
					var p = toimg.closest("li");
					
					if(!p.hasClass("clone")){
						index++;
					}
					
					if(!p.hasClass("clone") && src == tosrc){
						p.siblings().removeClass("flex-active-slide");
						
						p.addClass("flex-active-slide");
						var width = p.width();
						
						p.parent().css("-webkit-transition-duration","0.6s");
						p.parent().css("transition-duration","0.6s");
						p.parent().css("-webkit-transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						p.parent().css("transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						
						return;
					}
				})
			})	
						
		})
	});
}
function qfbookformSubmit(obj){
	if(top==self){
		var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
		var url = p.attr("action");
		var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
		var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
		if(url.indexOf("?")>-1){
			location.href = url+"&QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}else{
			location.href = url+"?QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}
		
	}
}
function entersearchqfylist(){
	 var event = window.event || arguments.callee.caller.arguments[0];
     if (event.keyCode == 13)
     {
    	 jQuery(".qfytemplateslist .itemli" ).removeClass("active");
    	 jQuery(".qfytemplateslist .itemli.all-0" ).addClass("active");
		 var tag = "all-0";
    	 searchqfylist(tag,1);
     }
}

function qfytemplate_hover(){
		jQuery('.qfy-template-content .qfy_template_lib a').hover(function() {
			var img = $(this).find('img');
			var imgh = img.height();
			var ph =  img.parent().height();
			if(imgh>ph && imgh>300){
				img.css("transform","translateY(-"+(imgh-ph)+"px)");
				img.css("transition","all 5.5s linear 0s");
			}
		}, function() {
			var img = $(this).find('img');
			img.css("transform","translateY(0px)");
			img.css("transition","all 2s linear 0s");
		});
	
}
function searchqfylist(tag,paged,flag){
	if(top==self){
		var searchText = jQuery(".qfytemplateslist #form_search").val();
		if(jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').length>0){
			return;
		}
		//jQuery('.qfytemplateslist .qfy-template-content').block({ message: '<img src="http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif" />',css: { backgroundColor: 'transparent',borderColor: 'transparent', margin:"0 0 0 -35px",left:"50%",width:'70px',height:'32px',padding:"8px 0 9px 0"},overlayCSS:{backgroundColor:"#F2F2F2",opacity:"0.9",} });
		jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').hide();
		jQuery('.qfytemplateslist .viewmoretemplate').append("<div class='loadingimage' style='text-align:center;margin:50px auto;'><img style='vertical-align: middle;width:30px;' src='http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif' /><span style='color:#0088c2;margin-left:10px;'>正在自动加载更多模板...</span></div>");
		
		var url = jQuery(".qfytemplateslist").attr("data-url");
		jQuery.post("/admin/admin-ajax.php",{"action":"getqfytemplatelist","url":url,"paged":paged,"searchText":searchText,"tag":jQuery(".qfytemplateslist .itemli.active").attr("data-tag")},function(data){
			jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').show();
			jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').remove();
			if(data){
				if(flag=="append"){
					jQuery('.qfytemplateslist .qfy-template-content-inner').append(data);
					jQuery('.qfytemplateslist .viewmoretemplate:first').remove();
				}else{
					jQuery('.qfytemplateslist .qfy-template-content-inner').html(data);
					
				}
				if(jQuery(".qfytemplateslist.zh_tw_lang").length>0){
					StranBody(jQuery(".qfytemplateslist.zh_tw_lang")[0]);
				}
				jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
					var newurl = jQuery(this).attr("data-src");
					var $this = jQuery(this);
					jQuery('<img src="'+newurl+'">').load(function(){
						$this.attr("src",newurl);
					})
				})
				jQuery(".qfytemplateslist  .info").unbind().click(function(){
					var url = jQuery(this).attr("data-url");
					if(top==self){
						window.open(url);
					}
				})
				jQuery(".qfytemplateslist  .use").unbind().click(function(){
					var url = jQuery(this).attr("data-url");
					if(top==self){
						location.href = url;
					}
				})
				jQuery(".qfytemplateslist .viewmoretemplate_inner").unbind().click(function(){
					var tag = "all-0";
					if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
						tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
					}
					var paged = jQuery(this).attr("data-page");
					searchqfylist(tag,paged*1+1,'append');
				})
				qfytemplate_hover();
				//jQuery('.qfy_template_lib .viewmoretemplate').waypoint('destroy')
				jQuery(".qfy_template_lib .viewmoretemplate").unbind().waypoint({
					handler: function(direction) {
						if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
							jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
						}
					
					},
					triggerOnce: true,
					offset: "90%",
				})
			}
		});
	}
}
function parallax_scroll_fun(){
	var old_current_url = window.location.href;
	jQuery("#parallax-nav a").each(function(i){
		var $this = this;
		var obj = jQuery.attr(this, 'href');
		var orgcolor = jQuery("#parallax-nav ul").attr("data-orgcolor");
		if(jQuery("#parallax-nav.mouseEvent").length==0){
			jQuery(obj).waypoint({
				handler: function() {
					if(!jQuery($this).hasClass("active") && isqfyscrolling==false ){
					
						jQuery($this).parent().siblings().removeClass("active");
						jQuery($this).parent().addClass("active");
						jQuery("#parallax-nav li  a").removeAttr("style");
						if(top==self){
							  var current_url = window.location.href;
							  var tmpurl = current_url.split("#");
							  try {
						        	 window.history.pushState({
						                path: window.location.href
						            }, '', tmpurl[0]+jQuery($this).attr("href"));
						        } catch(e) {
						            console.error('history.pushState failed, maybe HTML5 is not supported?')
						        }
						  }
						
						
						if(jQuery("#parallax-nav").hasClass("color-weight-dark")){
							
							var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
							if(!bordercolor){
								bordercolor = orgcolor;
							}
							jQuery("#parallax-nav li a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
							jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color",bordercolor).css("color",bordercolor);
							
						}else{
							var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
							if(!bordercolor){
								bordercolor = orgcolor;
							}
							jQuery("#parallax-nav li a").css("border-color","transparent").css("background-color",bordercolor).css("color",bordercolor);
							jQuery("#parallax-nav li.active a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
						}
					}
				},
				/*horizontal:true,*/
				triggerOnce: false
			})
		}
		jQuery($this).parent().click(function(e) {
			e.preventDefault();
			qfyToscroll($this);
			return false;
		});
		
	})

	if(old_current_url.indexOf("#")<0){
		jQuery("#parallax-nav li:first:visible").click();
	}
	
	if(jQuery("#parallax-nav.mouseEvent").length>0){
		
		var qfyscrollFunc=function(e){ 
			if(e){
				 e.preventDefault();
				 e.stopPropagation();
			}
			if( (e.wheelDelta && e.wheelDelta>0 ) || (e.detail && e.detail<0 )){
				//上
				var thisobj = jQuery("#parallax-nav.mouseEvent .active").prev().find("a");
				if(thisobj.length>0){
					qfyToscroll(thisobj)
					return false;
				}
				
			}else{
				
				var thisobj = jQuery("#parallax-nav.mouseEvent .active").next().find("a");
				if(thisobj.length>0){
					qfyToscroll(thisobj);
					return false;
				}
				
			}
		}  
		if(document.addEventListener){ 
			document.addEventListener('DOMMouseScroll',qfyscrollFunc,false); 
		}//W3C 
		window.onmousewheel=document.onmousewheel=qfyscrollFunc;

	}
	
}

var isqfyscrolling =false;
function qfyToscroll(thisobj){
		if(isqfyscrolling){
			return;
		}
		isqfyscrolling = true;
		var obj = jQuery(thisobj).attr('href');
		jQuery(thisobj).parent().siblings().removeClass("active");
		jQuery(thisobj).parent().addClass("active");
		var orgcolor = jQuery(thisobj).closest("ul").attr("data-orgcolor");
		jQuery("#parallax-nav li  a").removeAttr("style");
		if(jQuery("#parallax-nav").hasClass("color-weight-dark")){
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("border-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color",bordercolor).css("color",bordercolor);
			
		
		}else{
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("background-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color","transparent").css("background-color",bordercolor).css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
		}

		var speed = 'normal';
		speed = 1000;
		if(jQuery("#parallax-nav").hasClass("speedquick")){
			speed = speed*0.75;
		}else if(jQuery("#parallax-nav").hasClass("speedslow")){
			speed = speed*1.5;
		}
		if(obj=="#"||obj=="#header"){
			jQuery("html, body").animate({ scrollTop: 0 }, speed,function(){isqfyscrolling=false;
				  if(top==self){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]+obj);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }
			});
		}else{
			if(jQuery( jQuery(thisobj).attr('href') ).length>0){
				jQuery("html, body").animate({ scrollTop: jQuery( jQuery(thisobj).attr('href') ).offset().top }, speed,'easeInOutExpo',function(){isqfyscrolling=false;
				   if(top==self){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  var tmpobj = jQuery(thisobj).attr('href');
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]+tmpobj);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }
				
				});
			}else{
				isqfyscrolling=false;
			}
		}
}
function checkAdvertising(){
	var uuid = dtGlobals.id;
	var href = 'http://www.qifeiye.com?tcode=freesite&uuid='+uuid;
	if(dtGlobals.qfymodel){ href="#";}

	var style = 'display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;';
	var content = 'BY 起飞页自助建站';
	if(jQuery(".qfy_advertising").length==0){
		var tmphtml= '<a class="wf-mobile-hidden qfy_advertising" target=_blank style="'+style+'"  rel="external nofollow" href="'+href+'" >'+content+'</a>';
		jQuery("#page").append(tmphtml);
	}
	
	var opacity = jQuery(".qfy_advertising").css("opacity");

	if(opacity!="1"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	if(jQuery(".qfy_advertising").css("position")!="fixed"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	if(jQuery(".qfy_advertising").css("bottom")!="40px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	if(jQuery(".qfy_advertising").css("left")!="0px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var bgcolor = jQuery(".qfy_advertising").css("background-color");
	if(bgcolor!="#000000" && bgcolor!='rgb(0, 0, 0)'){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var color = jQuery(".qfy_advertising").css("color");
	if(color!="#ffffff" &&  color!="rgb(255, 255, 255)"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var marginLeft = jQuery(".qfy_advertising").css("margin-left");
	if(marginLeft!="0px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var marginTop = jQuery(".qfy_advertising").css("margin-top");
	if(marginTop!="0px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var zindex = jQuery(".qfy_advertising").css("z-index");
	if(zindex!="2147483647"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var width = jQuery(".qfy_advertising").css("width");
	if(width!="116px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var height = jQuery(".qfy_advertising").css("height");
	if(height!="20px"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var transform = jQuery(".qfy_advertising").css("transform");
	if(transform!="none"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var visible =  jQuery(".qfy_advertising").css("visibility");
	if(visible!="visible"){
		jQuery(".qfy_advertising").attr("style",style);
	}
	var display = jQuery(".qfy_advertising").css("display");
	if(display!="block"&& jQuery("body").width()>760){
		jQuery(".qfy_advertising").attr("style",style);
	}
	if(jQuery(".qfy_advertising").attr("href")!=href){
		jQuery(".qfy_advertising").attr("href",href);
	}
	if(jQuery(".qfy_advertising").html()!=content){
		jQuery(".qfy_advertising").html(content);
	}
	//检查预览下是否在iframe
	if(top!=self ){		
		try{
			//不同host
			if(top.window.location.host!=window.location.host){
				location.href = "http://www.qifeiye.com";
			}
		}catch(e){
			//跨域啦
			location.href = "http://www.qifeiye.com";
		}
	}
	
	
	
	jQuery("#footer_band").hide();
	
}
function clickscode(obj){
	jQuery(obj).attr('src','/api/scode.php'+'?'+Math.random());
}
function nav_pagemore(obj){
	if(jQuery(obj).hasClass("vc")){
		jAlert("编辑情况下，无法点击，请在预览情况下使用！");
		return;
	}
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	if(jQuery(obj).hasClass("notmore")){
		return ;
	}
	var type=0;
	if(jQuery(obj).parent().hasClass("woocommerce-pagination")){
		var p = jQuery(obj).closest(".woocommerce").parent();
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] ul.products";
		var childClass = "ul.products";
	}else if(jQuery(obj).closest(".qfy_images_list").length>0){
		var p = jQuery(obj).closest(".qfy_images_list");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .wpb_images_list";
		var childClass = ".wpb_images_list";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".advanced_list").length>0){
		var p = jQuery(obj).closest(".advanced_list");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .wpb_wrapper ";
		var childClass = ".wpb_wrapper";
		type = 0;
		if(p.find(".list-style7").length>0){
			type = 1;
		}
	}else{
		var p = jQuery(obj).closest(".wpb_teaser_grid");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'].wpb_teaser_grid.wpb_content_element ul.wpb_thumbnails";
		var childClass = "ul.wpb_thumbnails";
	}
	
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	var list_id = p.find(".wpb_teaser_grid.wpb_content_element").attr("id");
	
	p.find(".wpb_teaser_grid.wpb_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	var loadtext = jQuery(obj).attr("data-loadtext");
	var old_html = jQuery(obj).find("a").html();
	jQuery(obj).hide();
	jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;'+loadtext+'</span></div>');
	jQuery.get(url,function(data){
		if(list_id){
			var nowlistobj =jQuery(data).find("#"+list_id+" ul.wpb_thumbnails");
		}else{
			var nowlistobj =jQuery(data).find(luClass);
		}
		
		var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

		var style = nowlistobj.find(" >li").attr("style");
		p.find(childClass).append(nowlistobj.html());
		
		
		p.find(childClass).height("auto");
		p.find(childClass+" li").attr("style",style).css("transform","none").css("top","auto").css("position","relative");
		jQuery(obj).show();
		//jQuery("html, body").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");
		p.find("div.qfy_list_loading").remove();
		if(type=="1"){
			jQuery(obj).remove();
		}

		if(pagemore.length>0){
			jQuery(obj).attr("data-url",pagemore.attr("data-url"));
			jQuery(obj).attr("style",pagemore.attr("style"));
		}else{
			jQuery(obj).remove();
		}
		
		if(p.find(".categories_filter").length>0){
			p.find(".categories_filter a[data-filter='*']").click();
		}
		
		if(p.attr("data-open")=="1")
			changelistlinkfun(p);
		p.find('div.divmiddle').each(function(){
			var pimage = jQuery(this).closest(".images");
			if(pimage.find("img").length>0){
				var $this = this;
				jQuery('<img src="'+pimage.find("img").attr("src")+'">').load(function(){
						var h = jQuery($this).height();
						if(h>0){
							jQuery($this).css("margin-top","-"+(h/2)+"px");
						}
				})
			
			}else{
				var h = jQuery(this).height();
				if(h>0){
					jQuery(this).css("margin-top","-"+(h/2)+"px");
				}
			}

			
		})
		vc_js_init();
		tranlanguage(p);
	})
}
function bindqfylist(obj){
	jQuery("body").addClass("doing");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	
	jQuery(".qfy-element.wpb_teaser_grid.wpb_content_element").css("outline","10px solid #FF6600").css("cursor","cursor").css("opacity","0.6");
	jQuery(".qfy-element.wpb_teaser_grid.wpb_content_element").unbind("click.bindqfylist").bind("click.bindqfylist",function(e){
		var item = $(e.currentTarget);
		
		jQuery("body").removeClass("doing");
		var list =   item.closest(".qfy-element.wpb_teaser_grid.wpb_content_element");
		var val = list.attr("qfyuuid");
		var post_type =  list.attr("data-post");
		var post_cate =  list.attr("data-cate");

		//能添加uuid，则添加uuid
		if(list.parent().attr("data-model-id") && (post_type=="post" || post_type=="products") && (!val || val==0 || val=="") ){
			var listmodel_id = list.parent().attr("data-model-id");
			var listmodel =  parent.vc.shortcodes.get(listmodel_id);
			var listparams = listmodel.get('params');
			listparams.qfyuuid = "qfy_posts_grid_"+parent.vc.ShortcodesBuilder.randomString();
			listmodel.save({params: listparams}, {silent: true});
			val = listparams.qfyuuid;
			list.attr("qfyuuid",val);
	
		}
		var pageid=0;
		if(top.jQuery("#pageUrl").length>0){
			pageid = top.jQuery("#pageUrl").val();
		}

		if(val && val!=0 && val!="" && (post_type=="post" || post_type=="products" || post_type=="product") ){
			top.jAlert("你已经成功绑定了列表");
			if(c.parent().attr("data-model-id")){
				var model_id = c.parent().attr("data-model-id");
				var model =  parent.vc.shortcodes.get(model_id);
				var params = model.get('params');
				params.cate_to_listuuid = val;
				params.cate_type = post_type;
				if(post_cate!=""){
					if(post_type=="products"){
						params.cate_products_selected_id = post_cate;
					}else{
						params.cate_post_selected_id = post_cate;
					}
				}
				
				model.save({params: params});
				parent.ajaxBeforeLoading(0,model.view.$el);
				parent.vc.ShortcodesBuilder.update(model);
				parent.updatePage(model, null);
			}else if(c.closest(".site_tooler").length>0){
				var wid = c.closest(".site_tooler").attr("id");
				jQuery.post("/FeiEditor/siteEdit/updatePostlistOneparam" ,{"wid":wid,"bind_pageid":pageid,"cate_to_listuuid":val,"cate_type":post_type,"post_type_selected":post_cate}, function(rs){
						var p =  jQuery(obj).closest('.site_tooler');
						parent.loaderDivUI(p);
						parent.updateWidgetViewEvent(wid,p);
				});
			}
			jQuery(".qfy-element.wpb_teaser_grid.wpb_content_element").css("outline","0").css("cursor","normal").css("opacity","1");
			jQuery(".qfy-element.wpb_teaser_grid.wpb_content_element").unbind("click.bindqfylist");
		}else if(post_type=="page" ){
			top.jAlert("这个列表类型不正确，只能绑定资讯和产品列表");
		}else{
		

			top.jAlert("这个列表还没有设置自己的UUID，你可以在设置中添加该列表唯一的UUID");
		}
		
	})
}

function nav_pagecate_confirm(obj){
	
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	
	var li = jQuery(obj).closest("li");
	var li_id = li.attr("data-id");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var type = c.attr("type");
	var id = c.attr("to_qfyuuid");
	if(!id ||!type){
		jAlert("没有找到对应的列表");
		return ;
	}

	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children") ){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}
	
	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0 ) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var p = jQuery("[qfyuuid='"+id+"'].wpb_teaser_grid.wpb_content_element").parent();
	var model_id = p.attr("data-model-id");
	if(model_id && parent){
		parent.ajaxBeforeLoading(0,p);
		var model =  parent.vc.shortcodes.get(model_id);
		var params = model.get('params');
		if(type)
			params.post_type = type;
		if(type=="products"){
			var pro_old = params.pro_categories;
			params.pro_categories = li_id;
		}else if(type=="product"){
			var product_old = params.product_categories;
			params.product_categories = li_id;
		}else{
			var post_old = params.post_categories;
			params.post_categories = li_id;
		}
		if(params.parse_url)
			var parse_url_old =  params.parse_url;
		if(params.parse_search)
			var parse_search_old =  params.parse_search;
		params.parse_url ="0";
		params.parse_search ="0";

		model.save({params: params});
        parent.vc.ShortcodesBuilder.update(model);
		if(type=="products"){
			params.pro_categories = pro_old;
		}else if(type=="product"){
			params.product_categories = product_old;
		}else{
			params.post_categories = post_old;
		}
		if(parse_url_old)
			params.parse_url = parse_url_old;
		if(parse_search_old)
			params.parse_search = parse_search_old;
		model.save({params: params});
	}

}
function nav_customsearch(obj){
	if(top.jQuery("#site-html #site-body").length>0){
		top.jAlert("请在预览下查看");
		return;
	}

	var li = jQuery(obj);
	var ul = jQuery(obj).closest("ul");
	var url = ul.attr("data-url");
	url = url.replace(/q_term=-?\d*&/g,"");

	url = url.replace(/q_term-key_\d*=-?cs-\d*-[^&]*&/g,"");
	url = url.replace(/q_term-key_\d*=-?pt-\d*-[^&]*&/g,"");
	url = url.replace(/q_term-key_\d*=-?[^&]*&/g,"");
	url = url.replace(/q_term-key_sub_\d*=-?[^&]*&/g,"");
	
	
	var p = ul.closest(".mainul");
	var data_key = li.attr("data-key");
	if(data_key && data_key.indexOf("sub")<0){
		p.find("[data-key=sub_"+data_key+"]").removeClass("active");
	}
	
	if(li.hasClass("active")){
		if(ul.closest("ul.subul").attr("data-morecheck")=="0" ){
			ul.find(">li").removeClass("active");
		}else{
			li.removeClass("active");
		}
	}else{
		if(ul.closest("ul.subul").attr("data-morecheck")=="0" || li.attr("data-id")=="-1"){
			ul.find(">li").removeClass("active");
		}
		li.addClass("active");
	}
	var out = [];
	var i = 0;
	p.find("ul.subul").each(function(){
		var key = jQuery(this).attr("data-key");
		var morecheck = jQuery(this).attr("data-morecheck");
		
		if(jQuery(this).find("li.active").length>0){
			var ids = new Array();
			var len = jQuery(this).find("li.active").length;
			var n = 0;
			jQuery(this).find("li.active").each(function(){
				if(len>1  ){
					if( jQuery(this).attr("data-id")!="-1"){
						ids[n]= jQuery(this).attr("data-id");
						n++;
					}
				}else{
					ids[n]= jQuery(this).attr("data-id");
					n++;
				}
			});
			out[i++]  = "q_term-key_"+key+"="+ids.join(",");
		}else{
			if(jQuery(this).attr("data-default")!="" && jQuery(this).attr("data-default")!="0"){
				//none,not default
				out[i++]  = "q_term-key_"+key+"=-2";
			}
		}
	})
	
	
	if(p.attr("data-ajax")=="1"){
		url = url+"&"+out.join("&");
		var touuid = p.attr("data-touuid");
		var posttype = p.attr("data-posttype");
		
		var id = ul.closest(".qfy_custom_search ").attr("id");
		var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
		var w = "";
		if(touuid!="-1"){
			var plist = jQuery(".qfy-element[qfyuuid='"+touuid+"']");
		}else{
			if(posttype=="product"){
				var plist = jQuery("#main .qfyproductlist:first");
			}else{
				var plist = jQuery("#main .wpb_teaser_grid:first");
			}
		}
		var pp = plist.parent();
		if(plist.attr("data-loading")){
			image_src = plist.attr("data-loading");
			w = plist.attr("data-loading-w");
		}
		
		plist.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img  style="width:'+w+'px"  src="'+image_src+'"></div>');
		

		jQuery.post(url,function(data){
			if(touuid!="-1"){
				var list = jQuery(data).find(".qfy-element[qfyuuid='"+touuid+"']");

			}else{
				if(posttype=="product"){
					var list = jQuery(data).find("#main .qfyproductlist:first");
				}else{
					var list = jQuery(data).find("#main .wpb_teaser_grid:first");
				}
			}
			if(list.length>0){
				plist.replaceWith(list);
			}
			var search = jQuery(data).find("#"+id);
			if(search.length>0){
				jQuery("#"+id).replaceWith(search);
			}
		
			if(plist.attr("data-open")=="1"){
				changelistlinkfun(pp);
			}
			window.vc_js_init2();
			window.vc_js_init();
			if(plist.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			tranlanguage(pp);
		})
	}else{
		location.href=url+"&"+out.join("&");
	}
	return;
}
function tranlanguage(htm){

	if(jQuery("body.qfy_slw_tzh").length==1){
		StranBody(htm[0]);
		
	}else if(jQuery("body.qfy_slw_szh").length==1){
		StranBody(htm[0],0);
		
	}
	
}
function nav_pagecate(obj,flag){
	
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	var type=0;
	var li = jQuery(obj).closest("li");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var id = c.attr("to_qfyuuid");
	var p = jQuery("[qfyuuid='"+id+"'].wpb_teaser_grid.wpb_content_element");
	if(p.length==0 && jQuery(obj).attr("data-bindurl")){
		location.href = jQuery(obj).attr("data-bindurl");
		return;
	}else if(flag=="direct"){
		location.href = jQuery(obj).attr("data-url");
		return;
	}


	var luClass = "[qfyuuid='"+id+"'].wpb_teaser_grid.wpb_content_element ul.wpb_thumbnails";
	var childClass = "ul.wpb_thumbnails";
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	
	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children")){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}
	
	p.find(".wpb_teaser_grid.wpb_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	
	
	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
	var w = "";
	if(p.attr("data-loading")){
		image_src = p.attr("data-loading");
		w = p.attr("data-loading-w");
	}

	
	p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
	jQuery.get(url,function(data){	
		var nowlistobj =jQuery(data).find("[qfyuuid='"+id+"']");
		if(nowlistobj.length>0){
			p.replaceWith(nowlistobj);	
			window.vc_js_init2();
			window.vc_js_init();
			 if(p.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			 tranlanguage(p);
		}
		if(nowlistobj.attr("data-open")=="1")
			changelistlinkfun(nowlistobj);
	})
}
var noticeTimeoutShow = false;
function qfy_notice_event(){
	jQuery(".qfy-element.qfy_notice .notice_warp").each(function(){
		notice_pre_event(this);
	})
	
	jQuery("a[href^='qfy_notice']").unbind().click(function(e){
		 e.preventDefault();
		 e.stopPropagation();
		 var id = jQuery(this).attr("href");
		 if(jQuery("#"+id).length>0){
			 notice_pre_event("#"+id+" .notice_warp","preview");
		 }
	})
}
function notice_pre_event(thisobj,flag){
	
	var tooler = jQuery(thisobj).closest(".site_tooler");
	if( tooler.length>0 && tooler.css("display")=="none" ){
		return;
	}
	var event = jQuery(thisobj).attr("data-event");
	var event_delay = jQuery(thisobj).attr("data-event_delay");
	var showtimes = jQuery(thisobj).attr("data-showtimes");
	var closetime = jQuery(thisobj).attr("data-closetime");
	var id = jQuery(thisobj).parent().attr("id");
	var contenttype = jQuery(thisobj).attr("data-contenttype");
	var post_id = jQuery(thisobj).attr("data-post_id");
	var contenttype = jQuery(thisobj).attr("data-contenttype");
	var torun = true;
	var num = 0;
	
	if(flag=="preview"){
		torun = true;
		closetime = 0;
		event = 0;
	}else{
		if(id &&　showtimes !=3){
			var num = getCookie(id);
			if(showtimes=="0" && num>0){
				torun = false;
			}else if(showtimes=="1" && num>1){
				torun = false;
			}else if(showtimes=="2" && num>2){
				torun = false;
			}else if(showtimes=="4"){
				var is_confirm = getCookie(id+"_confirm");
				if(is_confirm>0){
					torun = false;
				}
			}
		}
	}
	if(torun){
		if(num) num = num+1;
		else num = 1;
		if(flag!="preview"){
			setCookie(id,num,"365");
		}
		if(contenttype == "2"){
			//ajax
			if(!post_id || post_id==""){
				content = "对应的组件页面不存在(ID:0)。请重新指定一个组件页面。";
				notice_event(thisobj,content);
				return;
			}else{
				jQuery.post("/admin/admin-ajax.php",{"action":"get_noticepostcontent_from_id","post_id":post_id},function(data){
					if(data.indexOf("Error:")!==0){
						if(event=="0" || (event=="1" && event_delay==0)){
							notice_event(thisobj,data);
						}else if(event=="1"){
							noticeTimeoutShow = setTimeout(function(){notice_event(thisobj,data);},event_delay*1000);
						}
						if(closetime>0){
							setTimeout(function(){
								if(noticeTimeoutShow)
									clearTimeout(noticeTimeoutShow);
								//close it
								$('#qfy_float_ad.'+id+',#QFY_overlay.'+id+',#QFY_window.'+id).remove();
							},closetime*1000);
							
						}
					}else {
						content = "对应的组件页面不存在(ID:"+post_id+")。请重新指定一个组件页面。";
						notice_event(thisobj,content);
						return;
					}
				});
			}
			
		}else{
			if(event=="0" || (event=="1" && event_delay==0)){
				notice_event(thisobj);
			}else if(event=="1"){
				var $this = thisobj;
				noticeTimeoutShow = setTimeout(function(){notice_event(thisobj);},event_delay*1000);
			}
			if(closetime>0){
				setTimeout(function(){
					if(noticeTimeoutShow)
						clearTimeout(noticeTimeoutShow);
					//close it
					//$('#qfy_float_ad.'+id+',#QFY_overlay.'+id+',#QFY_window.'+id).remove();
					notice_close_fun("#"+id+" .notice_warp");
				},closetime*1000);
				
			}
			
			
		}

		
	}
}
function notice_close_fun(thisobj){
	var obj = jQuery(thisobj); 
	var id_class = jQuery(thisobj).parent().attr("id");
	var animale = obj.attr("data-animale");
	var close_animale = obj.attr("data-close_animale");
	if(close_animale=="1"){
		jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
	}else{
		if(animale=="0"){
			jQuery("#QFY_window."+id_class).stop(true).animate({opacity:"0"},'fast',function(){
				jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
			});
		}else if(animale=="1"){
			jQuery("#QFY_window."+id_class).stop(true).animate({top:"-100%",opacity:"0"},'fast',function(){
				jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
			})
		}else if(animale=="2"){
			jQuery("#QFY_window."+id_class).stop(true).animate({top:"100%",opacity:"0"},'fast',function(){
				jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
			})
		}else if(animale=="3"){
			jQuery("#QFY_window."+id_class).stop(true).animate({left:"-100%",opacity:"0"},'fast',function(){
				jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
			})
		}else if(animale=="4"){
			jQuery("#QFY_window."+id_class).stop(true).animate({left:"100%",opacity:"0"},'fast',function(){
				jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class).remove();
			})
		}
	}

	
}
function notice_event(thisobj,precontent){
	var id_class = jQuery(thisobj).parent().attr("id");
	jQuery("#QFY_window."+id_class+",#QFY_overlay."+id_class+",#qfy_float_ad."+id_class).remove();
	jQuery("body").removeAttr("style");
	
	var obj = jQuery(thisobj); 
	var device = obj.attr("data-device");
	if(device=="1" && jQuery(window).width()<760){
		return;
	}else if(device=="2" && jQuery(window).width()>760){
		return;
	}
	var type = obj.attr("data-type");
	var align = obj.attr("data-align");
	var screenpadding = obj.attr("data-screenpadding")?obj.attr("data-screenpadding"):0;
	var animale = obj.attr("data-animale");
	var animale_time = obj.attr("data-animale_time");
	if(animale_time<=0 || !animale_time) animale_time =1;
	var qfy_width = obj.attr("data-width")?obj.attr("data-width"):600;
	var qfy_height = obj.attr("data-height")?obj.attr("data-height"):400;
	if(jQuery(window).width()<760){
		qfy_width = obj.attr("data-mobilewidth")?obj.attr("data-mobilewidth"):300;
		qfy_height = obj.attr("data-mobileheight")?obj.attr("data-mobileheight"):300;
	}
	
	var allow_close = obj.attr("data-allow_close");
	var btn_align = obj.attr("data-btn_align");
	var z_index = obj.attr("data-z_index");
	var btn_position = obj.attr("data-btn_position");
	var btn_position_x = obj.attr("data-btn_position_x");
	if(qfy_width.indexOf("%")>-1){
		qfy_width = qfy_width.replace("%","");
		if(qfy_width>100) qfy_width =100;
		if(qfy_width<10) qfy_width =10;
		qfy_width = jQuery(window).width()*qfy_width/100;
	}
	if(qfy_height.indexOf("%")>-1){
		qfy_height = qfy_height.replace("%","");
		if(qfy_height>100) qfy_height =100;
		if(qfy_height<10) qfy_height =10;
		qfy_height = jQuery(window).height()*qfy_height/100;
	}
	
	var content = obj.html();
	content = content.replace("display:none;","").replace("display:none;","").replace("display:none;","").replace("display:none;","");
	
	if(precontent){
		//ajax
		content = content.replace('<div class="notice_loading"></div>',precontent);
	}
	
	var style = "opacity:0;";

	var marginleft = parseInt((qfy_width / 2),10);
	var margintop = parseInt((qfy_height / 2),10);
	var totop = "50%";
	var defaultleft = "50%";
	var toleft = "50%";
	if(type=="0" || type=="1"){
		if(align=="0"){
			if(animale=="1"){
				style += "top:0;";
			}else if(animale=="2"){
				style += "top:100%;";
			}else{
				style += "top:50%;";
			}
			
			if(animale=="3"){
				defaultleft = "0";
			}else if(animale=="4"){
				defaultleft = "100%";
			}
			style += "margin-top:-"+margintop+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = "50%";
			toleft = "50%";
			
		}else if(align=="1"){
			if(animale=="1"){
				style += "top:-50%;";
			}else if(animale=="2"){
				style += "top:50%;";
			}else{
				style += "top:0;";
			}
			
			if(animale=="3"){
				defaultleft = "0";
			}else if(animale=="4"){
				defaultleft = "100%";
			}
			style += "margin-top:"+screenpadding+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = "0%";
			toleft = "50%";
		}else if(align=="2"){
			if(animale=="1"){
				//style += "top:50%;";
				style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
			}else if(animale=="2"){
				//style += "top:100%;";
				style += "top:"+jQuery(window).height()+"px;";
			}else {
				style += "bottom:0;";
			} 
			
			if(animale=="3"){
				defaultleft = "0";
			}else if(animale=="4"){
				defaultleft = "100%";
			}
			style += "margin-bottom:"+screenpadding+"px;margin-left:-"+marginleft+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = jQuery(window).height() - qfy_height;
			toleft = "50%";
		}else if(align=="3"){
			 if(animale=="1"){
				style += "top:0;";
			}else if(animale=="2"){
				style += "top:100%;";
			}else {
				style += "top:50%;";
			}
			
			if(animale=="3"){
				defaultleft = -qfy_width;
			}else if(animale=="4"){
				defaultleft = qfy_width;
			}else{
				defaultleft = screenpadding;
			}
			style += "margin-top:-"+margintop+"px; position: fixed; left: "+defaultleft+"px;z-index:10003";
			
			totop = "50%";
			toleft = screenpadding;
		}else if(align=="4"){
			
			if(animale=="1"){
				style += "top:0;";
			}else if(animale=="2"){
				style += "top:100%;";
			}else {
				style += "top:50%;";
			}
			
			if(animale=="3"){
				defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
			}else if(animale=="4"){
				defaultleft = jQuery(window).width()+"px";
			}else{
				defaultleft = "auto;right:0";
			}
			
			style += "margin-top:-"+margintop+"px;position: fixed; margin-right: "+screenpadding+"px;left:"+defaultleft+";z-index:10003";
				
			
			totop = "50%";
			toleft = jQuery(window).width() - qfy_width;
		}else if(align=="5"){
			var defaultleft ="0";
			var screeny = obj.attr("data-screeny");
			var screenx = obj.attr("data-screenx");
			if(animale=="1"){
				style += "top:-50%;";
			}else if(animale=="2"){
				style += "top:50%;";
			}else{
				style += "top:0;";
			}
			
			if(animale=="3"){
				defaultleft = "-"+qfy_width+"px";
			}else if(animale=="4"){
				defaultleft = qfy_width+"px";
			}
			style += "margin-top:"+screeny+"px;margin-left:"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = "0%";
			toleft = "0%";
		}else if(align=="6"){
			var defaultleft = (jQuery(window).width() - qfy_width)+"px";
			var screeny = obj.attr("data-screeny");
			var screenx = obj.attr("data-screenx");
			if(animale=="1"){
				style += "top:-50%;";
			}else if(animale=="2"){
				style += "top:50%;";
			}else{
				style += "top:0;";
			}
			
			if(animale=="3"){
				defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
			}else if(animale=="4"){
				defaultleft = jQuery(window).width()+"px";
			}
			style += "margin-top:"+screeny+"px;margin-left:-"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = "0%";
			toleft = jQuery(window).width() - qfy_width;
			
		}else if(align=="7"){
			var defaultleft = 0;
			var screeny = obj.attr("data-screeny");
			var screenx = obj.attr("data-screenx");
			if(animale=="1"){
				style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
			}else if(animale=="2"){
				style += "top:"+jQuery(window).height()+"px;";
			}else {
				style += "bottom:0;";
			} 
			
			if(animale=="3"){
				defaultleft = "-"+qfy_width+"px";
			}else if(animale=="4"){
				defaultleft = qfy_width+"px";
			}
			style += "margin-bottom:"+screeny+"px;margin-left:"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = jQuery(window).height() - qfy_height;
			toleft = "0%";
			
		}else if(align=="8"){
			var defaultleft = (jQuery(window).width() - qfy_width)+"px";
			var screeny = obj.attr("data-screeny");
			var screenx = obj.attr("data-screenx");
			if(animale=="1"){
				style += "top:"+(jQuery(window).height() - 2*qfy_height)+"px;";
			}else if(animale=="2"){
				style += "top:"+jQuery(window).height()+"px;";
			}else {
				style += "bottom:0;";
			} 
			
			if(animale=="3"){
				defaultleft = (jQuery(window).width() - 2*qfy_width)+"px";
			}else if(animale=="4"){
				defaultleft = jQuery(window).width()+"px";
			}
			style += "margin-bottom:"+screeny+"px;margin-left:-"+screenx+"px; position: fixed; left: "+defaultleft+";z-index:10003";
			
			totop = jQuery(window).height() - qfy_height;
			toleft = jQuery(window).width() - qfy_width;
			
		}
		
		var qfy_width_tmp = qfy_width;
		var qfy_height_tmp = qfy_height;
		
		if(jQuery("#QFY_window."+id_class).length==0){
			if(obj.attr("data-width")=="100%"){
				qfy_width_tmp = "100%";
			}else{
				qfy_width_tmp = qfy_width+"px";
			}
			if(obj.attr("data-height")=="100%"){
				qfy_height_tmp = "100%";
			}else{
				qfy_height_tmp = qfy_height+"px";
			}
			jQuery("body").append("<div id='QFY_window' class='"+id_class+"' style='width:"+qfy_width_tmp+";height:"+qfy_height_tmp+";"+style+"'><div id='QFY_content' style='height:"+qfy_height_tmp+"' >"+content+"</div></div>");
			
		}
		if(jQuery("#TB_overlay."+id_class).length==0 && type=="0"){
			var optcolor = obj.attr("data-optcolor")?obj.attr("data-optcolor"):"#000000";
			var opt= obj.attr("data-opt")?obj.attr("data-opt"):"0.7";
			jQuery("body").append("<div id='QFY_overlay' class='"+id_class+"' style='height: 100%;left: 0;position: fixed;top: 0;width: 100%;z-index: 100;background-color: "+optcolor+";opacity: "+opt+";z-index:10001;'></div>");
		}
	
		if(animale=="0"){
			jQuery("#QFY_window."+id_class).stop(true).animate({opacity:"1"},animale_time*1000,function(){
					if(obj.attr("data-width")=="100%"){
						jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
					}
				});
		}else if(animale=="1" || animale=="2"){
			if(align=="2"){
				jQuery("#QFY_window."+id_class).stop(true).animate({top:totop,opacity:"1"},animale_time*1000,function(){
					jQuery("#QFY_window."+id_class).css({"bottom":"0","top":"auto"});
					if(obj.attr("data-width")=="100%"){
						jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
					}
				});
			}else{
				jQuery("#QFY_window."+id_class).stop(true).animate({top:totop,opacity:"1"},animale_time*1000,function(){
					if(obj.attr("data-width")=="100%"){
						jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
					}
				});
			}
		}else if(animale=="3"||animale=="4"){
			if(align=="4"){
				jQuery("#QFY_window."+id_class).stop(true).animate({left:toleft,opacity:"1"},animale_time*1000,function(){
					jQuery("#QFY_window."+id_class).css({"right":"0","left":"auto"});
					if(obj.attr("data-width")=="100%"){
						jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
					}
				});
			}else{
				jQuery("#QFY_window."+id_class).stop(true).animate({left:toleft,opacity:"1"},animale_time*1000,function(){
					if(obj.attr("data-width")=="100%"){
						jQuery("#QFY_window."+id_class).css({"left":"0","margin-left":"0"});
					}
				});
			}
		}
	}else if(type=="3"){

		if(jQuery("#qfy_float_ad."+id_class).length==0){
			if(allow_close=="0" && jQuery("#qfy_float_ad."+id_class+" #QFY_close").length==0){
				if(jQuery(thisobj).find(".notice_close").length>0){
					var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
					notice_close = notice_close.replace("display:none;","");
					if(btn_align==0){
						closeHTML = "<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>"+notice_close+"</div>";
					}else if(btn_align==1){
						closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >"+notice_close+"</div>";
					}else if(btn_align==2){
						closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >"+notice_close+"</div>";
					}
					
				}
			}
			
			var x=(jQuery(window).width()-qfy_width)/2,y=(jQuery(window).height()-qfy_height)/2;
			if(align=="1"){
				y=0;
			}else if(align=="2"){
				y=jQuery(window).height()-qfy_height;
			}else if(align=="3"){
				x=0;
			}else if(align=="4"){
				x=jQuery(window).width()-qfy_width;
			}else if(align=="5"){
				x=0;y=0;
			}else if(align=="6"){
				y=0;
				x=jQuery(window).width()-qfy_width;
			}else if(align=="7"){
				y=jQuery(window).height()-qfy_height;
				x=0;
			}else if(align=="8"){
				y=jQuery(window).height()-qfy_height;
				x=jQuery(window).width()-qfy_width;
			}
		   jQuery("body").floatAd({
	         customhtml: "<div id='QFY_content' style='height:"+qfy_height+"px;'>"+content+"</div>",
	         speed:animale_time*10,
	         id_class:id_class,
	         closeHTML:closeHTML,
	         x:x,
	         y:y
	       });
		   if(obj.attr("data-width")=="100%"){
			   jQuery("#qfy_float_ad."+id_class).width("100%").css("margin-left","1px").height(qfy_height);
		   }else{
			   jQuery("#qfy_float_ad."+id_class).width(qfy_width).height(qfy_height);
		   }
		   jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("top",btn_position+"px");
			var close_left = jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("left");
			if(close_left=="auto"){
				close_left = qfy_width - jQuery("."+id_class+" #QFY_close").width();
			}else{
				close_left = close_left.replace("px","");
			}

			jQuery("#qfy_float_ad."+id_class+" #QFY_close").css("right","auto").css("left",(close_left*1+btn_position_x*1)+"px");
			
		    jQuery("#QFY_window."+id_class).remove();
		}
	}
	
	
	if(jQuery("#QFY_window."+id_class).length==1){
		jQuery("#QFY_window."+id_class).css("z-index",z_index);
		if(allow_close=="0" && jQuery("#QFY_window."+id_class+" #QFY_close").length==0){
			if(jQuery(thisobj).find("#QFY_close").length==0){
				var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
				notice_close = notice_close.replace("display:none;","").replace("display: none;","");
				if(btn_align==0){
					jQuery("#QFY_window."+id_class).append("<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>"+notice_close+"</div>");
				}else if(btn_align==1){
					jQuery("#QFY_window."+id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >"+notice_close+"</div>");
				}else if(btn_align==2){
					jQuery("#QFY_window."+id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >"+notice_close+"</div>");
				}
			
				
				jQuery("#QFY_window."+id_class+" #QFY_close").css("top",btn_position+"px");
				var close_left = jQuery("#QFY_window."+id_class+" #QFY_close").css("left");
							
				if(close_left=="auto"){
					close_left = qfy_width - jQuery("."+id_class+" #QFY_close").width();
				}else{
					close_left = close_left.replace("px","");
				}
				
				jQuery("#QFY_window."+id_class+" #QFY_close").css("right","auto").css("left",(close_left*1+btn_position_x*1)+"px");
					
				jQuery("#QFY_window."+id_class+" #QFY_close").click(function(){
					var title = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_warninfo");
					if(title){
						title = base64_decode(title);
						alert(title);
					}
					var allow_forceclose = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_forceclose");
					if(allow_forceclose!="1"){
						//..........
						notice_close_fun(thisobj);
					}
				})
			}
		}
		
		
	}
	
	var bgcolor = obj.attr("data-bgcolor");
	var borderwidth = obj.attr("data-borderwidth");
	var bordercolor = obj.attr("data-bordercolor");
	var shadowwidth = obj.attr("data-shadowwidth");

	var shadowcolor = obj.attr("data-shadowcolor");
	var radius = obj.attr("data-radius");
	
	
	jQuery("#QFY_window."+id_class+" #QFY_content .notice_close,#qfy_float_ad."+id_class+" #QFY_content .notice_close").remove();
	
	if(bgcolor){
		jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("background",bgcolor);
	}else{
		jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("background","#fff");
	}
	if(borderwidth){
		//jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("border",borderwidth+"px solid "+bordercolor);
	}
	
	if(shadowwidth>0 ){
		jQuery("#QFY_window."+id_class+" #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("box-shadow","0px 0px "+shadowwidth+"px  "+shadowcolor);
	}
	if(radius>0){
		jQuery("#QFY_window."+id_class+" #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("border-radius",radius+"px");
	}
	
	
	if(jQuery("."+id_class+" .notice_header").length>0){
		var f_h = jQuery("."+id_class+" .notice_header").outerHeight();
	}else{
		var f_h = 0;
	}
	if(jQuery("."+id_class+" .notice_footer").length>0){
		var f_f = jQuery("."+id_class+" .notice_footer").outerHeight();
	}else{
		var f_f = 0;
	}
	
	var h = jQuery("."+id_class+" #QFY_content").height() - f_f  - f_h;
	jQuery("."+id_class+" .notice_content").height(h);
	
	jQuery("#QFY_window .editorview,#qfy_float_ad .editorview").remove();
	if( obj.attr("data-opt_hide")=="1" && jQuery("#QFY_overlay."+id_class).length>0){
		jQuery("#QFY_overlay."+id_class).unbind().click(function(){
			var title = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_warninfo");
			if(title){
				title = base64_decode(title);
				alert(title);
			}
			var allow_forceclose = jQuery("#QFY_window."+id_class+" .notice_content").attr("data-allow_forceclose");
			if(allow_forceclose!="1"){
				
				//..........
				notice_close_fun(thisobj);
			}
		})
	}
	
	jQuery("."+id_class+" .notice_header,."+id_class+" .notice_footer,."+id_class+" .notice_content").show();
	if(precontent){
		window.vc_js_init2();
		window.vc_js_init();
	}
	
}
function gototab(obj){
	var p = jQuery(obj).closest(".qfy-tabcontent");
	p.find(".tabcontent-header-menu li.item button").removeClass("active");
	jQuery(obj).find("button").addClass("active");
	var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
	p.find(".rsBullets .rsNavItem:eq("+index+")").click();
}
function backlistbtn(obj){
	var $this = jQuery(obj).closest(".wpb_teaser_grid.wpb_content_element");
	var h = $this.find(".list_hidden_btn");
	h.siblings().show();
	h.hide();
	vc_teaserGrid();
}
function qfy_btn_primry_notice(obj){
	var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
	if(p.length==1){
		var title = p.find(".notice_content").attr("data-allow1_warninfo");
		if(title){
			title = base64_decode(title);
			alert(title);
		}
		var allow_forceclose = p.find(".notice_content").attr("data-allow1_forceclose");
		if(allow_forceclose!="1"){
			if(p.attr("id")=="qfy_float_ad"){
				p.remove();
				var id_class = p.attr("class");
				jQuery("#QFY_overlay."+id_class).remove();
			}else{
				var id_class = p.attr("class");
				notice_close_fun("#"+id_class+" .notice_warp");
			}
			setCookie(id_class+"_confirm",1,"365");
		}
	}
}
function qfy_btn_default_notice(obj){
	var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
	if(p.length==1){
		var title = p.find(".notice_content").attr("data-allow2_warninfo");
		if(title){
			title = base64_decode(title);
			alert(title);
		}
		var allow_forceclose = p.find(".notice_content").attr("data-allow2_forceclose");
		if(allow_forceclose!="1"){
			if(p.attr("id")=="qfy_float_ad"){
				p.remove();
				var id_class = p.attr("class");
				jQuery("#QFY_overlay."+id_class).remove();
			}else{
				var id_class = p.attr("class");
				notice_close_fun("#"+id_class+" .notice_warp");
			}
		}
	}
	
}
function changelistlinkfun($this){
	$this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link").click(function(event) {
			var link = jQuery(this).attr("href");
			var h = $this.find(".list_hidden_btn");
			var slider = h.attr("data-slider");
			h.find(".backbtn").hide();
			h.siblings().hide();
			h.show();
			var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
			var w = "";
			if(h.closest(".qfy-element").attr("data-loading")){
				image_src = h.closest(".qfy-element").attr("data-loading");
				w = h.closest(".qfy-element").attr("data-loading-w");
			}
			h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
			jQuery.get(link,function(data){
				var htm =jQuery(data).find(".content-wrapper").html();
				if(!htm) htm ="";
				if(slider=="1"){
					var htm_prev = "";
					var htm_next = "";
					if(jQuery(data).find(".bitMainTopSider").length>0){
						htm_prev = "<div class='bmts' style='position:relative;width:100%'>"+jQuery(data).find(".bitMainTopSider").html()+"</div>";
					}
					if(jQuery(data).find(".bitMainBottomSider").length>0){
						htm_next = "<div class='bmbs'  style='position:relative;width:100%'>"+jQuery(data).find(".bitMainBottomSider").html()+"</div>";
					}
					htm = htm_prev+htm+htm_next;
				}
				h.find(".list_hiddencontent").html(htm);
				h.find(".backbtn").show();
				 window.vc_js_init2();
				 window.vc_js_init();
				 qfy_notice_event();
				 tranlanguage(h);
			});
			
			return false;//阻止链接跳转
	 });
}
var qfy_template_waypoint;
jQuery(document).ready(function($) {
	jQuery(".mobile_variation_warp").closest("section").css("z-index","100");
	jQuery("#dl-menu .qfy-sub-div").remove();
	jQuery(".qfy-sub-div").each(function(){
		if(jQuery(this).attr("data-full")=="1"){
			var bodywidth = jQuery("body").width();
			var offsetleft = jQuery(this).closest("li").offset().left;
			jQuery(this).css("width","100vw").css("margin-left","-"+offsetleft+"px");
		}
		
	})
	if(jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
		jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
			var cur = jQuery(this).find(".list-content .current-cat");
			jQuery(this).find(".list-content .children").hide();
			cur.parents("li,ul").show();
			if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
		})
	
	}
	if(jQuery(".qfy_template_lib .viewmoretemplate").length>0){
		jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
			handler: function(direction) {
				if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
					jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
				}
				
			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
		
	}

	if(top==self){
		jQuery(".wpb_teaser_grid.wpb_content_element[data-open='1']").each(function(){
			var $this =  jQuery(this);
			changelistlinkfun($this);
		})
		qfy_notice_event();
	}
	
	if(jQuery("body.free_public").length>0){
		checkAdvertising();
		setTimeout("checkAdvertising()",3000);
		setTimeout("checkAdvertising()",6000);
		setTimeout("checkAdvertising()",10000);
		setTimeout("checkAdvertising()",20000);
		setTimeout("checkAdvertising()",30000);
		setTimeout("checkAdvertising()",100000);
	}
	
	jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
		var newurl = jQuery(this).attr("data-src");
		var $this = jQuery(this);
		jQuery('<img src="'+newurl+'">').load(function(){
			$this.attr("src",newurl);
		})
	})
	jQuery(".qfy_scroll_box:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var box = jQuery(this).attr("id");
		var delay = jQuery(this).attr("data-delay");
		var speed = jQuery(this).attr("data-speed");
		var h = jQuery(this).attr("data-h");
		slideLine(box,"div",delay,speed,h);
	});
	
	vc_gallery_relat();
	//特殊处理一些网站
	if(jQuery(".re_second_user_class").length>0 && jQuery.trim(jQuery(".re_second_user_span").text())==""){
		jQuery(".re_second_user_class").hide();
	}
	
	if(jQuery(".addon-custom-datepicker" ).length>0 ){
		jQuery(".addon-custom-datepicker" ).datepicker({
						dateFormat: "yy-mm-dd",
						numberOfMonths: 1,
		});
	}
	if(jQuery(".addon-custom-datetimepicker" ).length>0 ){
		jQuery(".addon-custom-datetimepicker" ).datetimepicker({
					dateFormat: "yy-mm-dd",
					numberOfMonths: 1,
					showTime: true,
					constrainInput: false
		});
	}
	if(jQuery(".qfytemplateslist").length>0 ){
		if(jQuery(".qfytemplateslist .citem > a.active").length>0){
			jQuery(".qfytemplateslist .citem > a.active").closest(".citem").show();
		}
		jQuery(".qfytemplateslist  .info").click(function(){
			var url = jQuery(this).attr("data-url");
			if(top==self){
				window.open(url);
			}
		})
		jQuery(".qfytemplateslist  .use").click(function(){
			var url = jQuery(this).attr("data-url");
			if(top==self){
				location.href = url;
			}
		})
		
		jQuery(".qfytemplateslist .mypages a").removeAttr("href").click(function(){
			var tag = "all-0";
			if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
				tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
			}
			var paged = jQuery(this).attr("paged");
			searchqfylist(tag,paged);
		})
		
		jQuery(".qfytemplateslist .itemli" ).click(function(){
			jQuery(".qfytemplateslist .itemli" ).removeClass("active");
			jQuery(".qfytemplateslist .citem").hide();
			if(jQuery(this).parent().hasClass("citem")){
				jQuery(this).parent().show();
			}else{
				jQuery(this).parent().find(".citem").show();
			}
			jQuery(this).addClass("active");
		
			var tag = "all-0";
			if(jQuery(this).attr("data-tag")){
				tag = jQuery(this).attr("data-tag");
			}
			searchqfylist(tag,1);
		})
		jQuery(".qfytemplateslist .viewmoretemplate_inner").click(function(){
					var tag = "all-0";
					if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
						tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
					}
					var paged = jQuery(this).attr("data-page");
					searchqfylist(tag,paged*1+1,'append');
		});
		qfytemplate_hover();
	}	

	var current_page_id = jQuery('body').attr('data-pid');
	var current_page_key = jQuery('body').attr('data-pkey');
	
	if(current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined'){
	    jQuery.ajax({
	        url: '/FeiEditor/traffic/log',
	        type: 'post',
	        async: true,
	        data: {
	        	st_pid: current_page_id,
	        	st_pkey: current_page_key,
	        }
	    });
	}
	setTimeout(function(){
		try{
			if(top!=self && !jQuery("body").hasClass("compose-mode")){
				if(top.jQuery('#pageUrl').length>0 && parent.jQuery("#vc-post-id").val()!=dtGlobals.curr_id){
					if(parent.jQuery("#vc-post-id").val()){
						top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
						return;
					}else if(jQuery("#vc-post-id").length==0){
						top.jAlert("页面过期，正尝试自动刷新！");
						setTimeout(function(){top.location.reload();},1000);
						return;
					}
				}
			}
		}catch(e){
			
		}
		
	},1000);
	
	//ready end
})


function qfy_popinfo_fun(htm,timetoclose){
	jQuery(".qfy_popinfo").remove();
	if(htm){
		var msg = '<div class="qfy_popinfo" ><div class="md-content">'+htm+'</div></div>';
		jQuery("body").append(msg);
		setTimeout(function(){ jQuery(".qfy_popinfo").addClass("qfy_show"); },500);
		if(timetoclose){
			setTimeout(function(){ jQuery(".qfy_popinfo").removeClass("qfy_show"); },timetoclose*1000);
		}
	}
}
function mobilecart(){
	jQuery(".mobile_variation_warp").addClass("show");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").addClass("lowIndex");
	jQuery(".mobile_variation_warp").closest("section").removeClass("lowIndex").addClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").addClass("topIndex");
	jQuery(".mobile-mask").addClass("show");
	jQuery(".product_mobilecart").hide();
	jQuery('html, body').on('touchmove', function(e){ 
		if(jQuery("section.section.topIndex").length>0){
			e.preventDefault(); 
		}
	});
}
function mobileunmask(){
	jQuery(".mobile-mask").removeClass("show");
	jQuery(".mobile_variation_warp").removeClass("show");
	jQuery(".mobile_variation_warp").closest("section").removeClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").removeClass("topIndex");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").removeClass("lowIndex");
	jQuery(".product_mobilecart").show();
}
function changeUserPhonenumber(obj){
	var form = jQuery(obj).closest("form");
	if(form.find(".qfyuser-loading:visible").length>0){
		return;
	}
	var url = "/admin/admin-ajax.php";
	var element = form.find(".phone_number");
	form.find(".qfyuser-warning").remove();
	form.find(".qfyuser-loading").show().addClass('inline');
	jQuery.ajax({
        type: "POST",
        url:url,
		dataType: "JSON",
        data:form.serialize(),
        error: function(request) {
			form.find(".qfyuser-loading").hide().removeClass('inline');
        	if (element.parent().find('.qfyuser-warning').length==0 ) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>提交失败</div>');
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			} else {
				element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>提交失败' );
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			}
        },
        success: function(data) {
			form.find(".qfyuser-loading").hide().removeClass('inline');
        	if(data.status=="error"){
				var element1 = form.find("."+data.key);
				if (element1.parent().find('.qfyuser-warning').length==0 ) {
					element1.addClass('warning').removeClass('ok');
					element1.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>'+data.msg+'</div>');
					element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
				} else {
					element1.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>'+data.msg );
					element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
				}
			}else{
				location.reload();
			
			}
        }
    });
}
function send_user_sms(key,flag,obj){
	var text1 = jQuery(obj).attr("data-sms_gtext2");
	var text2 = jQuery(obj).attr("data-sms_gtext3");
	if(jQuery(obj).hasClass("begining")) return;
	jQuery(obj).val("60").addClass("begining");
	var p = jQuery(obj).closest("form");
	if(key!=""){
		var phone = p.find("#phone_number-"+key);
	}else{
		var phone = p.find(".phone_number");
	}
	jQuery.post("/admin/admin-ajax.php",{"action":"tosendsms","phone":phone.val()},function(data){
		
		if(data!="success"){
			jQuery(obj).val(text1);
			var element = phone;
			if (element.parent().find('.qfyuser-warning').length==0 ) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data + '</div>');
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			} else {
				element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data );
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			}
		}else{
			jQuery(obj).val(text2);
			var element = phone;
			element.parent().find('.qfyuser-warning').remove();
			setTimeout(function(){jQuery(obj).val(text1);},10000);
		}
		
	})
	
	setTimeout(function(){
		tominuto1(obj);
		
	},1000);
}
function tominuto1(obj){
	var text1 = jQuery(obj).attr("data-sms_gtext2");
	var text2 = jQuery(obj).attr("data-sms_gtext3");
	if(text1 && text2){
		if(jQuery(obj).val()>0 && jQuery(obj).val()!=text1 && jQuery(obj).val()!=text2){
			jQuery(obj).val(jQuery(obj).val()-1);
		}else{
			jQuery(obj).removeClass("begining");
			return;
		}
	}else{

		if(jQuery(obj).val()>0 && jQuery(obj).val()!="发送" && jQuery(obj).val()!="获取" && jQuery(obj).val()!="发送成功"){
			jQuery(obj).val(jQuery(obj).val()-1);
		}else{
			jQuery(obj).removeClass("begining");
			return;
		}
	}
	setTimeout(function(){
		tominuto1(obj);
	},1000);
}
function qfy_phone_change(obj,flag){
	var p = jQuery(obj).closest(".phonediv");
	if(flag=="1"){
		p.find(".old_phone_div").hide();
		p.find(".password_div,.new_phone_div,.yanzheng_div,.qfyuser-submit").show();
	}else if(flag=="2" || flag=="3"){
		p.find(".old_phone_div,.password_div").hide();
		p.find(".new_phone_div,.yanzheng_div,.qfyuser-submit").show();
		v = p.find(".old_phone_div input").val();
		if(p){
			p.find(".new_phone_div .phone_number").val(v);
		}
	}
}
function weixin_auto_redirect(){
	var last_weixin_check = getCookie("last_weixin_check");
	if(last_weixin_check){
		return;
	}
	//大概15分钟失效
	setCookie("last_weixin_check",1,0.01);
	jQuery.post("/admin/admin-ajax.php",{action:"weixin_auto_redirect"},function(data){
		if(data.indexOf("http")==0){
			location.href=data;
		}
	});
	
}
function customcontent_fun(){
	if(jQuery("#pagehtmlcontainer_drag .customcontentouter").width()!="0"){
		jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
			jQuery(this).hide();
		});
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
	}else{
		jQuery("#pagehtmlcontainer_drag .customcontentouter").show().animate({width:290},'fast');
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","0");
		
		//激活
		if(!jQuery("#pagehtmlcontainer_drag").hasClass("dragged")){
			jQuery("#pagehtmlcontainer_drag").addClass("dragged");
			isFirefox=(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)?true:false;
			jQuery( "#pagehtmlcontainer_drag .dragitem").draggable({
			        revert: "invalid", 
			        //appendTo: isFirefox?".content-wrapper":"body",
			        appendTo:"body",
			       // refreshPositions: true,
			        scroll: true,
			        classes: {
			            "ui-droppable-active": "ui-state-active",
			            "ui-droppable-hover": "ui-state-hover"
			          },
			        cursorAt: {top: 20, left: 16},
			        drag: function(event,ui){
			        	if(isFirefox){
			        		var st = parseInt($(this).data("startingScrollTop"));
			        		ui.position.top = ui.position.top - st;
			        	}
			         },
			        start: function(event, ui){
			        	$(this).data("startingScrollTop",$("html").scrollTop());
			        	jQuery("body").addClass("vc-sorting");
			        	var l = jQuery('.content-wrapper').offset().left;
			        	var t = jQuery('.content-wrapper').offset().top;
			        	var w =jQuery('.content-wrapper').width();
			        	var h = jQuery('.content-wrapper').height();
			        	jQuery("#pagehtmlcontainer_o_top").height(t).width("100%");
			        	jQuery("#pagehtmlcontainer_o_bottom").height(jQuery("body").height() - t-h).css("top",(t*1+h)+"px").width("100%");
			        	jQuery("#pagehtmlcontainer_o_left").height(h+2).width(l).css("top",t+"px");
			        	jQuery("#pagehtmlcontainer_o_right").height(h+2).css("left",(l*1+w)+"px").width(jQuery("body").width() - w-l).css("top",t+"px");
			        	jQuery("#pagehtmlcontainer_o_top,#pagehtmlcontainer_o_bottom,#pagehtmlcontainer_o_left,#pagehtmlcontainer_o_right").show();
			        },
			        stop: function(event, ui){
			        	jQuery("body").removeClass("vc-sorting");
			        	jQuery("#pagehtmlcontainer_o_top,#pagehtmlcontainer_o_bottom,#pagehtmlcontainer_o_left,#pagehtmlcontainer_o_right").hide();
			        },
			        placeholder: 'vc-placeholder-cy',
			        helper: 'clone',
			        iframeFix: true,
			        //connectToSortable:  iframeWin.jQuery('.content-wrapper'),
			        cursor: "move",
			});
		    if(isFirefox){
				jQuery("#pagehtmlcontainer_drag_contrainer .drag_inner_div").mCustomScrollbar({
					theme:"minimal-dark",
					autoHideScrollbar:true,
				});
		    }
		}
		
		var t = jQuery('.content-wrapper').offset().top;
		var st =jQuery('html').scrollTop();
    	if(st<t){
    		jQuery("html").animate({ scrollTop: t }, "slow");
    	}
    	if(top.jQuery("#pagehtmlcontainer").height()>0){
    		top.jQuery("#pagehtmlcontainer").animate({height:"0"});
    		top.jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
    	}
    	
    	
	}
}
function editOnePage(){
	jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
		jQuery(this).hide();
	});
	jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
	top.jQuery(".page_settings").click();
}
function inner_cate(obj){
	var cates = jQuery(obj).attr("data-cates");
	jQuery("#pagehtmlcontainer_drag .innnerCat").removeClass("active");
	jQuery(obj).addClass("active");
	jQuery("#pagehtmlcontainer_drag .innnerContents .dragitem,#pagehtmlcontainer_drag .innnerContents .dragtitle").hide();
	jQuery("#pagehtmlcontainer_drag .innnerContents .dragitem[data-cates='"+cates+"'],#pagehtmlcontainer_drag .innnerContents .dragtitle[data-cates='"+cates+"']").show();
}
function customclose_fun(){
	if(jQuery("#pagehtmlcontainer_drag .customcontentouter").width()!="0"){
		jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
			jQuery(this).hide();
		});
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
		return;
	}
	if(jQuery("#pagehtmlcontainer_drag:visible").length>0){
		jQuery("#pagehtmlcontainer_drag").hide();
		jQuery(".pagehtmlcontainer_drag_close").show();
		top.setCookie("fullbarstatusnew","off",7); 
	}else{
		jQuery("#pagehtmlcontainer_drag").show();
		jQuery(".pagehtmlcontainer_drag_close").hide();
		top.setCookie("fullbarstatusnew","on",7);
	}
}
function openheaderbtn(obj){
	if(jQuery("#page,#phantom").hasClass("menuopen")){
		jQuery("#page,#phantom").removeClass("menuopen");
	}else{
		jQuery("#page,#phantom").addClass("menuopen");
	}
}

function quick_search(obj){
	var v = jQuery(obj).val();
	var pageid = jQuery(obj).attr("data-pageid");
	var title = jQuery(obj).attr("data-title")? jQuery(obj).attr("data-title"):"搜索";
	var placeholder = jQuery(obj).attr("data-placeholder")?jQuery(obj).attr("data-placeholder"):"请输入关键词";
	var btn1 = jQuery(obj).attr("data-btn1")?jQuery(obj).attr("data-btn1"):"确认";
	var btn2 = jQuery(obj).attr("data-btn2")?jQuery(obj).attr("data-btn2"):"取消";
	var  posttype =  jQuery(obj).attr("data-posttype");
	var bodywidth = jQuery("body").width();
	var bodyheight = jQuery(window).height();
	var message="<div><form action='/' ><input type='hidden'  name='searchtype' value='"+posttype+"' /><input type='hidden' name='page_id' value='"+pageid+"'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>"+title+"</div>";
	message +='<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="'+placeholder+'" type="search" name="search"></div>';
	message +='<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">'+btn1+'</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">'+btn2+'</button></div></form></div>';
	if(bodywidth<768){
		var w = bodywidth - 40;
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-"+(w/2)+"px",width:w+"px",height:"180px"},message:message});
	}else{
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-360px",width:"720px",height:"180px"},message:message});
	}
	jQuery('body').css('cursor', 'auto');

}
function unblockUI(){
	jQuery.unblockUI();
}
function beforeOnclick(e,msg){
	if(confirm(msg)){
		
	}else{
		 e.preventDefault();
		 e.stopPropagation();
		 return false;
	}
}
function login_button_click(id,link){
	if(self!=top && typeof parent.jAlert =="function"){
		jAlert("在编辑模式下，不允许使用该功能，请到预览模式下使用。");
		return false;
	}
	var back = location.href;
	try{if(location.href.indexOf('qfy-login.php')>0) back = document.loginform.redirect_to.value;}catch(e){back = '/';}
	location.href=(link?link:'/')+'?connect='+id+'&action=login&qfy_nocache=true&back='+escape(back);
}
function play_qfy_video(obj){
	var p = jQuery(obj).closest(".video_play");
	var iframe = p.find("iframe");
	var src =  iframe.attr("data-src");
	var ispop = iframe.attr("data-ispopup");
	if(jQuery("body").width()<768){
		ispop = 0;
    }
	if(ispop=="1"){
    	var pop_width=iframe.attr("data-pop_width");
    	var pop_height=iframe.attr("data-pop_height");
    	var cover=iframe.attr("data-cover");
    	var controlBarVisibility=iframe.attr("data-controlbarvisibility");
    	var volume=iframe.attr("data-volume");
    	var bodywidth = jQuery("body").width();
    	var bodyheight = jQuery(window).height();
    	if(pop_width>bodywidth){
    		pop_width = bodywidth;
    	}
    	if(pop_height>bodyheight){
    		pop_height = bodyheight;
    	}
    	//onOverlayClick: top.jQuery.unblockUI,
		top.jQuery.blockUI({css: {"top":"50%","left":"50%","margin-top":"-"+(pop_height/2)+"px","margin-left":"-"+(pop_width/2)+"px",width:pop_width+"px",height:pop_height+"px"},message: "<iframe style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+pop_height+"' data-cover='"+cover+"' data-controlbarvisibility='"+controlBarVisibility+"' data-volume='"+volume+"' data-autoplay='true' src='"+src+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"});
		top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
			 top.jQuery.unblockUI();
		});
		top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
		top.jQuery('body,.blockOverlay').css('cursor', 'auto');
	}else{
		jQuery(obj).removeClass("toplay").addClass("playing");
		iframe.attr("data-autoplay","true").attr("src",src);
	}
};

