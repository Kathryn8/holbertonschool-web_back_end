export default class Airport {
  constructor(name, code) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_code", "_name"] }] */
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
