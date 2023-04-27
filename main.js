class Aritmethic {
    constructor(value) {
    this.value = value;
    }
    add(value2) {
    this.value += value2;
    return this;
    }
    subtract(value2) {
    this.value -= value2;
    return this;
    }

    divide(value2) {
    this.value /= value2;
    return this;
    }

    multiply(value2) {
      this.value *= value2;
    return this;
    }}
    
const two = new Aritmethic(2);
console.log(two.add(6).subtract(5).multiply(3).value); // Output: 7

// class Aritmethic {
//     constructor(initialNumber){
//         this.number = initialNumber;
//     }

//     add(value){
//         return this.number + value;
//     }
//     subtract(value){
//         return this.number - value;
//     }
//     divide(value){
//         return this.number / value;
//     }
//     multiply(value){
//         return this.number * value;
//     }
// }

// const one = new Aritmethic(1);
// const two = new Aritmethic(2);
// const three = new Aritmethic(3);

// console.log(one.add(10));
// console.log(two.subtract(2));
// console.log(three.add(100).subtract(50));