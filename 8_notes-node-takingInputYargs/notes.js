console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Reading note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
//getAll:getAll
//property:value
//In ES6 if property and value are same there is no need
//specify it in this format.
  getNote,
  removeNote
};
