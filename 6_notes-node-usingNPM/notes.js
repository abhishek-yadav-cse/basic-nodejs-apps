console.log('Starting notes.js');

//console.log(module);

//exporting values to app.js but in reality we need to export functions
module.exports.age = 25;


//exporting functions - this is converting an ES5 function into arrow function
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New Note';
// };

module.exports.add = (a,b) => {
  return a + b;
};
