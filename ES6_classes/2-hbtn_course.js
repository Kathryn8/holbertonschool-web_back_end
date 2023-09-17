export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students)) {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_name"] }] */
      this._name = name;
      /* eslint no-underscore-dangle: ["error", { "allow": ["_length"] }] */
      this._length = length;
      /* eslint no-underscore-dangle: ["error", { "allow": ["_students"] }] */
      this._students = students;
    } else {
      throw new TypeError('Please check your inputs');
    }
  }

  get name() {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_name"] }] */
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_name"] }] */
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_length"] }] */
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_length"] }] */
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_students"] }] */
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_students"] }] */
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
