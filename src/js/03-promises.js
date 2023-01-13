import "../css/form.css";

import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')
formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit(e) {
  e.preventDefault()
  let delay = Number(formEl.elements.delay.value);
  const amount = Number(formEl.elements.amount.value);
  const step = Number(formEl.elements.step.value);

  for (let position = 1; position <= amount; position += 1) {
        delay += step;
        createPromise(position, delay)
          .then(successNotify)
          .catch(failureNotify) 
      }
};

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
};

function successNotify({}) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
}

function failureNotify({}) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
}