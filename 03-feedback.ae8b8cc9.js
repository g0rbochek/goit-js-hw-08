!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,r,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,l=setTimeout(h,t),s?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?m(n,a-(e-c)):n}(e))}function w(e){return l=void 0,v&&o?y(e):(o=r=void 0,u)}function N(){var e=p(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},N.flush=function(){return void 0===l?u:w(p())},N}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||l.test(e)?f(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form");console.log(O);var j,h,w,N='feedback-form-state"',T=null!==(j=JSON.parse(localStorage.getItem(N)))&&void 0!==j?j:{};console.log(T),localStorage.setItem(N,JSON.stringify(T)),O.elements.email.value=null!==(h=JSON.parse(localStorage.getItem(N)).email)&&void 0!==h?h:"",O.elements.message.value=null!==(w=JSON.parse(localStorage.getItem(N)).message)&&void 0!==w?w:"",O.addEventListener("input",n((function(e){T[e.target.name]=e.target.value,localStorage.setItem(N,JSON.stringify(T)),console.log(T)}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),localStorage.removeItem(N),O.reset(),T.message="",T.email=""}))}();
//# sourceMappingURL=03-feedback.ae8b8cc9.js.map
