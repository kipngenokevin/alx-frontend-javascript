export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
