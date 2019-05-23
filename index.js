class Polygon {
  constructor(arr) {
    this.arr = arr
    this.sides = this.arr.length
  }

  get countSides() {
    return this.sides
  }

  get perimeter() {
    return this.arr.reduce((total,num)=>{
      return total += num
    })
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sortArr = this.arr.sort((a,b)=>{a-b})
    let side1 = Math.pow(sortArr[0],2)
    let side2 = Math.pow(sortArr[1],2)
    let side3 = Math.pow(sortArr[2],2)
    if (this.sides == 3 && ((side1 === side2) && (side1 === side3) && (side2 === side3)) || ((side1 + side2) == side3)) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let side1 = this.arr[0]
    if (this.sides == 4 && this.arr.every(num=>(num == side1))) {
      return true
    } else {
      return false
    }
  }

  get area() {
    let side1 = this.arr[0]
    return Math.pow(side1,2)
  }
}
