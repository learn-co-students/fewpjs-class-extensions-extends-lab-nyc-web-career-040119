class Polygon {
  constructor(sidesArr) {
    this._sidesArr = sidesArr
  }

  get countSides() {
    return this._sidesArr.length
  }

  get perimeter() {
    return this._sidesArr.reduce((agg, curr) => agg + curr)
  }
}


class Triangle extends Polygon {
  get isValid() {
    const a = this._sidesArr[0], b = this._sidesArr[1], c = this._sidesArr[2]
    return a+b>c && a+c>b && b+c>a
  }
}

class Square extends Polygon {
  get isValid() {
    const a = this._sidesArr[0], b = this._sidesArr[1], c = this._sidesArr[2], d = this._sidesArr[3]
    return a===b && b===c && c===d
  }

  get area() {
    return this._sidesArr[0] ** 2
  }
}
