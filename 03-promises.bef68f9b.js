function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var l=i("eWCmQ");const r=document.querySelector(".form");function u(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function s({position:n,delay:t}){e(l).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)}function d({position:n,delay:t}){e(l).Notify.failure(`✅ Fulfilled promise ${n} in ${t}ms`)}r.addEventListener("submit",(function(e){e.preventDefault();let n=Number(r.elements.delay.value);const t=Number(r.elements.amount.value),o=Number(r.elements.step.value);for(let e=1;e<=t;e+=1)u(e,n).then(s).catch(d),n+=o}));
//# sourceMappingURL=03-promises.bef68f9b.js.map