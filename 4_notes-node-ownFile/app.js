console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

//one way to print user name of the current Operating System
//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

//Another way to do it using ES6 feature called template strings which uses tick ``
//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//using exported constant variable
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

//using exported function
var res = notes.addNote();
console.log(res);
