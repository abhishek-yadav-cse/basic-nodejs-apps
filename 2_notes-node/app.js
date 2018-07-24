console.log('Starting app.');

//require can be used to take usage of already defined functionality in node modules either by node developers or community.
//The output of require is stored in variables fs to make it reusable
const fs = require('fs');

// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });


//using the fs variable we are accessing the appendFileSync() method
fs.appendFileSync('greetings.txt', 'Hello World!');
