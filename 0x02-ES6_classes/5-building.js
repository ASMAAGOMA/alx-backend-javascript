export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }
	get sqft() {
		return this._sqft;
	}
	set sqft(fsqft) {
		this._sqft = fsqft;
	}
	evacuationWarningMessage() {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}
