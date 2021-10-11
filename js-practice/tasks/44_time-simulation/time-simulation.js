export class TimeSimulation {
  constructor() {
    this.time = 0;
    this.realTime = 0;
    this.speed = 1;
  }

  get() {
    return this.time;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  update(currentRealtime) {
    let diff = currentRealtime - this.time;

    if (diff < 0) {
      diff = currentRealtime - this.realTime;
    }

    this.realTime = currentRealtime;
    this.time += diff * this.speed;
  }
}
