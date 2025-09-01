class Vehicle {
startEngine() {
return "The vehicle's engine is starting...";
}
}

// Subclass Car
class Car extends Vehicle {
startEngine() {
return "The car engine is starting with a roar 🚗!";
}
}

// Subclass Motorcycle
class Motorcycle extends Vehicle {
startEngine() {
return "The motorcycle engine is starting with a vroom 🏍️!";
}
}

// Example usage
const myCar = new Car();
const myBike = new Motorcycle();

console.log(myCar.startEngine());
console.log(myBike.startEngine());