/**
 *
 *  This is the portfolio item class
 *
 */

export default class PortfolioItem {
  constructor(type, img) {
    this._type = type;
    this._img = img;
  }

  // Setters
  set setType(type) {
    this._type = type;
  }
  set setImg(img) {
    this._img = img;
  }

  // Getters
  get getType() {
    return this._type;
  }
  get getImg() {
    return this._img;
  }
}
