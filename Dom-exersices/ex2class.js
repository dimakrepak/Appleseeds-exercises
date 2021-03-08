class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }
    getBrand() {
        return this.brand
    }
    getSpeed() {
        return this.speed
    }
    setSpeed(newspeed) {
        this.speed = newspeed
    }
    print() {
        console.log(`${this.getBrand()} ${this.getSpeed()}`);
    }
}
const cars = []

c1 = new Car('BMW', '60')
c2 = new Car('KIA', '20')
c3 = new Car('FORD', '70')
c4 = new Car('OPEL', '40')
cars.push(c1, c2, c3, c4)

const maxSpeed = cars.reduce((max, val) => {
    if (max.getSpeed() > val.getSpeed()) {
        return max
    }
    return val
})
maxSpeed.print();
cars.sort((a, b) => a.getSpeed() - b.getSpeed());
console.log(cars);



