const t={buttonStartEl:document.querySelector("[data-start]"),buttonStopEl:document.querySelector("[data-stop]")};let o=null;function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.buttonStartEl.addEventListener("click",(function(){o=setInterval(e,1e3),t.buttonStartEl.setAttribute("disabled",""),console.log(t.buttonStartEl)})),t.buttonStopEl.addEventListener("click",(function(){clearInterval(o),t.buttonStartEl.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.9434006e.js.map
