!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("1WSnx"),l=document.querySelector(".feedback-form");l.addEventListener("input",a.throttle((function(e){e.preventDefault();var t=l.elements.email,r=l.elements.message,n={email:t.value,message:r.value};localStorage.setItem(o,JSON.stringify(n))}),500)),l.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.currentTarget),r={};t.forEach((function(e,t){r[t]=e})),console.log(r),e.currentTarget.reset()}));var o="feedback-form-state";var i=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return localStorage.getItem(e)}};null!==i(o)&&(l.elements.email.value=i(o).email,l.elements.message.value=i(o).message)}();
//# sourceMappingURL=03-feedback.2118f336.js.map
