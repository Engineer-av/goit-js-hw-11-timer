class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.updateTime();
  }

  updateTime() {
    const timerID = setInterval(() => {
      const targetTime = this.targetDate.getTime();
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      if (deltaTime <= 0) {
        clearInterval(timerID);
        return console.log("Get a party!!!");
      }
      const time = {
        days: this.getDays(deltaTime),
        hours: this.getHours(deltaTime),
        minutes: this.getMinutes(deltaTime),
        seconds: this.getSeconds(deltaTime)
      };
      this.onTick(time);
    }, 1000);
  }

  getDays(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return days;
  }

  getHours(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    return hours;
  }

  getMinutes(time) {
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    return minutes;
  }

  getSeconds(time) {
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return seconds;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

export default CountdownTimer;
