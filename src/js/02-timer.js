import "../css/timer.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    inputDateTimePickEl: document.querySelector('#datetime-picker'),
    buttonStartEl: document.querySelector('[data-start]'),
    daysEl: document.querySelector('span[data-days'),
    hoursEl: document.querySelector('span[data-hours'),
    minutesEl: document.querySelector('span[data-minutes'),
    secondsEl: document.querySelector('span[data-seconds'),
}

refs.buttonStartEl.setAttribute('disabled', '');

const flatpicOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const selectedDatesUTC = selectedDates[0].getTime();
        const dateNow = Date.now();

        if (selectedDatesUTC <= dateNow) {
            Notiflix.Notify.info('Please choose a date in the future');
        }
        else refs.buttonStartEl.removeAttribute('disabled')
        return selectedDatesUTC
    },
};

flatpickr('input#datetime-picker', flatpicOptions);

let timeId = null;

const timer = {
    start() {
        const startTime = refs.inputDateTimePickEl._flatpickr.selectedDates[0];

        timeId = setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = startTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime)

            updateClockContent({ days, hours, minutes, seconds });

            if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
                clearInterval(timeId);
            }
        }, 1000)
    },
}

refs.buttonStartEl.addEventListener('click', timer.start)

function updateClockContent({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minutesEl.textContent = `${minutes}`;
    refs.secondsEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}




