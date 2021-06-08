 
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
        console.log(`${this.name} is ${this.age} years old!`);

}
}

//  b) ES6 "class" syntax

class Person {
constructor(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function () {
        console.log(`${this.name} is ${this.age} years old!`);
    };
}
}

//Creating new instance of Person
const personOne = new Person('Nadia',29);
personOne.getDetails(); // Output - "Nadia is 29years old!