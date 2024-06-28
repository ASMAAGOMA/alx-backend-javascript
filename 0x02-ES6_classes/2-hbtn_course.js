export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  set name(fname) {
    if (typeof fname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = fname;
  }

  get length() {
    return this._length;
  }

  set length(flength) {
    if (typeof flength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = flength;
  }

  get students() {
    return this._students;
  }

  set students(fstudents) {
    this._students = fstudents;
  }
}
