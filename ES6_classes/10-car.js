export default class Car {
  constructor(brand, motor, color) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_brand", "_motor", "_color"] }] */
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
