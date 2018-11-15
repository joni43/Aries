
// localStorage.setItem("newNote", "undefined");
var editor = new Quill('#editor', {
  theme: 'snow'
})
// window.onload = function () {
//   updateView()
// }
// Class constructor. Using this. to initiate methods
class QuireEditor {
  constructor () {
    this.updateView()

    document.getElementById('save').addEventListener('click', () => {
      const note = this.loadNotes()
      note.push(this.newNote(note))
      this.saveNotes(note)
      this.updateView()
    })

  }

  loadNotes () {
    let storedNote = localStorage.getItem('newNote')

    if (!storedNote) storedNote = '[]'
    localStorage.setItem('newNote', storedNote)
    return JSON.parse(storedNote)
  }

  newNote (notes) {
    let newNote = {}
    newNote.content = editor.getText()
      //  + notes.length
    return newNote
  }

  saveNotes (notes) {
    localStorage.setItem('newNote', JSON.stringify(notes))
  }

  updateView () {
    let notes = this.loadNotes()
    console.log(notes)
    document.getElementById('text1').innerHTML = '<h1>Stored notes</h1>'
    // if(notes === null) {
      // TODO, THE CODE DOWN BELOW WONT WORK IF LOCALSTORAGE IS EMPTY, note is null and error message appears in console.
    // }
    let currentSection = document.getElementById('notes')
    currentSection.innerHTML = ""
    notes.forEach(r => {
      let newDiv = document.createElement('div')
      let newP = document.createElement('p')
        //   let newTitle = document.createTextNode(r.title);
      let newIng = document.createTextNode(r.content)

      newDiv.appendChild(newP)
      newDiv.appendChild(newIng)
      newDiv.setAttribute('id', 'newnotes')


      currentSection.appendChild(newDiv)
    })
  }
  }
let quireEditor = new QuireEditor()
