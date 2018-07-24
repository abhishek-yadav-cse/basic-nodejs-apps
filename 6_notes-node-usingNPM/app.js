console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
//include a third party module
const _ = require('lodash');
const notes = require('./notes.js');

//var user = os.userInfo();

//one way to print user name of the current Operating System
//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

//Another way to do it using ES6 feature called template strings which uses tick ``
//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//using exported constant variable
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

//using exported function
// var res = notes.addNote();
// console.log(res);

//console.log('Result:', notes.add(9, -2));

//______________________________________
//using lodash utility
//using isString function
console.log(_.isString(true));//boolean is not a string so it will print false
console.log(_.isString('Abhishek')); //abhishek is a string so it will give true

//using uniq function
var filteredArray = _.uniq(['Abhishek', 1, 'Abhishek', 1, 2, 3, 4]);
console.log(filteredArray);
