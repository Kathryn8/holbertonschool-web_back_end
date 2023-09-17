export default class HolbertonClass {
  constructor(year, location) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_year", "_location"] }] */
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
