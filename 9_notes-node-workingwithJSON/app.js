console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//getting the input from user from command line
//to get the command line argument we will use process

//console.log(process.argv);
//The output of this is an array with starting two fields as follows-
//1.Points to the excecutable for node
//2.Points to the app file that started
//From third item in the array we get the command line arguments

//To get the argument

//However, this way of taking command line argument is not useful for
//string with key value pair. So to avoid it we will use Yargs module.
const argv = yargs.argv;
var command = process.argv[2];
//or
//var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  //console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  //console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read') {
  //console.log('Reading notes');
  notes.getNote(argv.title);
} else if (command === 'remove') {
  //console.log('Removing notes');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
