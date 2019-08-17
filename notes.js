const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your Notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    
    const remainingNotes = notes.filter(function (note) {
        return note.title !== title
    })

    if(remainingNotes.length < notes.length) {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse("Sorry, couldn't find the note!"))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []    
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}