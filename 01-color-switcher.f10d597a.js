!function(){var t={buttonStartEl:document.querySelector("[data-start]"),buttonStopEl:document.querySelector("[data-stop]")},o=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.buttonStartEl.addEventListener("click",(function(){o=setInterval(n,1e3),t.buttonStartEl.setAttribute("disabled",""),console.log(t.buttonStartEl)})),t.buttonStopEl.addEventListener("click",(function(){clearInterval(o),t.buttonStartEl.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f10d597a.js.map