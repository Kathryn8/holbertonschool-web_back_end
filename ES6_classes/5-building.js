export default class Building {
  constructor(sqft) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_sqft"] }] */
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  evacuationWarningMessage() {
    this._sqft = this.sqft;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
