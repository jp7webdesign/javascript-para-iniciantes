export default class Countdown {
  contructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return this._timeStampDiff / (24 * 60 * 60 * 1000);
  }
}
