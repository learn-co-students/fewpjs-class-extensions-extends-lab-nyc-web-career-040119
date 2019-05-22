class Polygon {
  constructor(integerArray){
    this.integers = integerArray
  }

  get countSides(){
    return this.integers.length
  }

  get perimeter(){
    return this.integers.reduce((total, number) => {
      return total + number
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ((this.integers[0] + this.integers[1]) > this.integers[2] && (this.integers[1] + this.integers[2]) > this.integers[0] && (this.integers[2] + this.integers[0]) > this.integers[1]){
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get area(){
    return this.integers[0] ** 2
  }

  get isValid(){
    if (this.perimeter/this.integers[0] === 4){
      return true
    } else {
      return false
    }
  }
}
