const chalk = require('chalk')
const yargs = require('yargs')
const notesUtilities = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        },
    },
    handler (argv) {
        notesUtilities.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv) {
        notesUtilities.removeNote(argv.title)   
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes!',
    handler () {
        notesUtilities.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a specific note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string' 
        }
    },
    handler (argv) {
        notesUtilities.readNote(argv.title)
    }
})

yargs.argv