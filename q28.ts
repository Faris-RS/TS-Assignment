// Create a constructor function that satisfies the following conditions:
// a.	The name of the constructor function should be Car.
// b.	It should take three parameters: name, mileage and max_speed.
// c.	Store these parameter values in their respective thiskeywords: this.name, this.mileage and this.max_speed.


function Car(name, mileage, max_speed) {
  this.name = name;
  this.mileage = mileage;
  this.max_speed = max_speed;
}

const car1 = new Car("Toyota Camry", 50000, 180);
const car2 = new Car("Honda Civic", 75000, 200);

console.log(car1);
console.log(car2);
