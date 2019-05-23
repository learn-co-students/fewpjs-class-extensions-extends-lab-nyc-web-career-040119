// Your code here

class Polygon {
  constructor (sides) {
    this.sides = sides;
    this.count = sides.length;
  }

  get countSides () {
    //counts the number of sides (each index in the array)
    return this.sides.length;
  }

  get perimeter () {
    //calculate the sum of each side(each index in the array) should be accessible to child class
    let sum = 0;
    for (let n = 0; n < this.sides.length; n++) {
      sum += this.sides[n]
    }
    return sum;
  }


}
class Triangle extends Polygon {
  get isValid () {
    if ( this.count === 3) {
      let sides1 = this.sides[0];
      let sides2 = this.sides[1];
      let sides3 = this.sides[2];
      if ( sides1 + sides2 > sides3 && sides1 + sides3 > sides2 && sides2 + sides3 > sides1) {
        return true;
      } else { return false;}
    }
    else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sides === 4) {
      let sides1 = this.sides[0];
      let sides2 = this.sides[1];
      let sides3 = this.sides[2];
      let sides4 = this.sides[3];
      if (sides1 === sides2 && sides2 === sides3 && sides3 === sides4) {
        return true;
      } else {return false;}
    } else { return false;}
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
