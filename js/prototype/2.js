

Car.prototype.carName = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(color, owner) {
    this.color = color
    this.owner = owner
}

var car = new Car('red', 'aaa')
var car1 = new Car('green', 'bbb')