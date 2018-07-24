console.log('Starting notes.js');

//console.log(module);

//exporting values to app.js but in reality we need to export functions
module.exports.age = 25;


//exporting functions
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};
