console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

//one way to print user name of the current Operating System
//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

//Another way to do it using ES6 feature called template strings which uses tick ``
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
