function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return d.Date.now()};function b(e,t,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):f}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function T(){var e=v();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-u);return d?p(n,i-(e-c)):n}(e))}function h(e){return a=void 0,s&&r?b(e):(r=o=void 0,f)}function w(){var e=v(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(d)return a=setTimeout(T,t),b(u)}return void 0===a&&(a=setTimeout(T,t)),f}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?m(y(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},w.flush=function(){return void 0===a?f:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const j=document.querySelector(".feedback-form");document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea");j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))})),j.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));const S={};a;
//# sourceMappingURL=03-feedback.51bdc68c.js.map
