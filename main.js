// class Aritmethic {
//     constructor(value) {
//     this.value = value;
//     }
//     add(value2) {
//     this.value += value2;
//     return this;
//     }
//     subtract(value2) {
//     this.value -= value2;
//     return this;
//     }

//     divide(value2) {
//     this.value /= value2;
//     return this;
//     }

//     multiply(value2) {
//       this.value *= value2;
//     return this;
//     }}
    
// const two = new Aritmethic(2);
// console.log(two.add(6).subtract(5).multiply(3).value); // Output: 9

class Aritmethic {
    constructor(number){
        this.number = number;
    }
    //NOTE!! CONSOLE LOG DALAM METHOD CUMAN BUAT NGECEK GK WAJIB ADA 
    add(value){
        const result = this.number + value;
        this.number = result;
        console.log(result);
        return this;
    }
    subtract(value){
        const result = this.number - value;
        this.number = result;
        console.log(result);
        return this;
    }
    divide(value){
        // const result = this.number / value;
        this.number /= value;
        console.log(this.number);
        return this;
    }
    multiply(value){
      // const result = this.number * value;
      this.number *= value;
      console.log(this.number);
      return this;
    }
    getResult() {
      console.log('HASIL AKHIR :', this.number);
      return this;
  }
}


// const one = new Aritmethic(1);
// const two = new Aritmethic(2);
const three = new Aritmethic(3);

three.add(10).subtract(5).multiply(4).divide(2).getResult();

// console.log(one.add(10));
// console.log(two.subtract(2));
// console.log(three.add(100).subtract(50));