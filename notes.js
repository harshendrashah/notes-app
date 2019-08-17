const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(
        (note) => note.title === title
    )

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

const removeNote = (title) => {
    const notes = loadNotes()
    
    const remainingNotes = notes.filter((note) => note.title !== title)

    if(remainingNotes.length < notes.length) {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse("Sorry, couldn't find the note!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    if (notes.length > 0) {
        console.log(chalk.blue.inverse("Your Notes"))
        notes.forEach( note => {
            console.log(chalk.blue(note.title))
        });
    }
}
 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes
}