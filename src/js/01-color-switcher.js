const refs = {
  buttonStartEl: document.querySelector("[data-start]"),
  buttonStopEl: document.querySelector("[data-stop]"),
}
let intervalId = null;
const DELAY = 1000;

refs.buttonStartEl.addEventListener('click', onStartBtnClick)
refs.buttonStopEl.addEventListener('click', onStopBtnClick)


  function onStartBtnClick() {
    intervalId = setInterval(onButtonStart, DELAY);
    refs.buttonStartEl.setAttribute('disabled', '');
    console.log(refs.buttonStartEl);
  }

  function onStopBtnClick() {
    clearInterval(intervalId);
    refs.buttonStartEl.removeAttribute('disabled')
  }

function onButtonStart(){
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

