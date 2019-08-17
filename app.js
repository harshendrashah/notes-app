const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    handler: function () {
        console.log('Adding a new note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function () {
        console.log('Removing a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes!',
    handler: function () {
        console.log('Listing all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a specific note!',
    handler: function () {
        console.log('Reading a note!')
    }
})

console.log(yargs.argv)