// const person = {
//   name: "Sokol",
//   surname: "Paja",
//   age: "29",
//   email: "kolpaja28@gmail.com"
// }
// module.exports = person;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age} years old.`)
  }
}

module.exports = Person;