import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';



Meteor.startup(() => {



});







//Refences insert


// Players.insert({
//   name: 'Mary',
//   score: 420
// });
// //find() returns a cursor, fetch() returns an array
// console.log(Players.find().fetch());

//Refences Import

// // import './../imports/utils.js';
// import {greetUser} from './../imports/utils';
// import multiply, {add} from './../imports/math';
// //ou bien :  import multiply from './../imports/math';
// console.log('Log from /server/main.js');
// console.log('>9 + 6 = ', add(9,6));
// console.log('>9 x 6 = ', multiply(9, 6));


//CLASS


// class Person {//majuscule convention pour dire d'utiliser 'new' keyword
// //                      par default
//   constructor (name = 'Anonyme', age = 0) {
//     this.name = name
//     this.age = age
//     }
//   getGreeting() {
//     //ES6 template strings
//     // return 'Hi I am' + this.name + '.';
//     return `Hi, I am ${this.name}.`;
//     }
//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//     }
//   }
//
// class Entrepreneur extends Person {
//     constructor(name, age, title) {
//     super(name, age);
//     this.title = title;
//     }
//
//     getGreeting() {
//     if (this.title) {
//       return `Hi, I am ${this.name}. I work as a ${this.title}.`;
//     } else {
//       return super.getGreeting();
//     }
//
//     }
//
//     hasJob() {
//         return !!this.title;
//       }
//
//     }
//
// class Programer extends Person {
//   constructor(name, age, preferedLanguage = 'C++') {
//     super(name, age);
//     this.preferedLanguage = preferedLanguage;
//   }
//   getGreeting() {
//     console.log(`Hi, I am ${this.name} and I love to code in ${this.preferedLanguage}.`);
//
//   }
// }
//
//
// let me = new Person('John');
// console.log(me.getGreeting());
//
// let warren = new Entrepreneur('Warren', 29, 'Web Mogul');
// console.log(warren.getDescription());
// console.log(warren.getGreeting());
//
// let dean = new Programer('Dean', 34);
// console.log(dean.getGreeting());
//
// let john = new Programer('John', 27, 'Javascript');
// console.log(john.getGreeting());
//
// let kyle = new Entrepreneur('Kyle');
// console.log(kyle.getDescription());
// console.log(kyle.getGreeting());
