const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    timerId = setInterval(() => {
        const currentDate = Date.now();
        let calculatedDate = this.targetDate - currentDate;
        this.changeTime(calculatedDate);
        this.stopTimer(calculatedDate);
    }, 1000)

    changeTime(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        refs.days.textContent = days < 10 ? `0${days}` : days;
        refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
        refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    }

    stopTimer(time) {
        if (time <= 0) {
            clearInterval(this.timerId);
            alert('START SHOPPING NOW!!!');
            refs.days.textContent = '00';
            refs.hours.textContent = '00';
            refs.mins.textContent = '00';
            refs.secs.textContent = '00';
        }
    }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 26, 2021 00:00:00'),
});