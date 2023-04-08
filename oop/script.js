'use strict';

const Person = function (name, birthYear) {
    this.name = name
    this.birthYear = birthYear
  
}
  Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};
  Person.prototype.species="homo sapiens"


const armel = new Person("MUNYANEZA Armel", 2001)
console.log(armel)
armel.calcAge();
console.log(armel.hasOwnProperty('sapiens'))
class PersonCl{
    constructor(firstname, age) {
        this.firstname = firstname
        this.age=age
    }
    calcAge() {
        console.log(2023-this.age)
    }
}
const jonas = new PersonCl('JONAS', 22)
jonas.calcAge()