console.log('Starting notes.js');

//exporting functions - this is converting an ES5 function into arrow function
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};
