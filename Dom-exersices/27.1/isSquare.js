function square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;


}

square.prototype.isSqure = function () {
    console.log(this);
    return (this.a === this.b && this.b === this.c) ? true : false


}
const squ1 = new square(2, 2, 2, 2)
const squ2 = new square(1, 2, 2, 2)
console.log(squ1.isSqure())
console.log(squ2.isSqure())