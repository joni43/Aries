/*
var notes = [
  {
    id: 0,
    title: 'Matlistan',
    favourite: false,
    content: '<stringify delta from quill>'
  }
]
*/


// const button = document.querySelector('.mrbutton')
// const div = document.createElement('div')

// let justTextContent = document.getElementById('text1')
// let save = document.getElementById('save')

// document.getElementsByClassName('ql-editor')[0].getAttribute('data-id')



var editor = new Quill("#editor", {
  theme: "snow"
});
class QuireEditor {

  constructor() {

    window.onload = function load () {

      updateView()
    }
    document.getElementById("save").addEventListener("click", function() {
      let t = loadNotes();
      let note = t;
      console.log(t);
      note.push(newNote(note));
      saveNotes(note);
      updateView()

    })


    let loadNotes = function() {
      let storedNote = JSON.parse(window.localStorage.getItem("newNote")) || [];
      window.localStorage.setItem("newNote", JSON.stringify(storedNote));

      return storedNote;
      // return JSON.parse(localStorage.getItem('newNote') ? localStorage.getItem('newNote') : '[]');
    };
    let newNote = function(notes) {
      let newNote = {};
      newNote.content = editor.getText() + notes.length;
      return newNote;
    };
    let saveNotes = function(rec) {
      localStorage.setItem("newNote", JSON.stringify(rec));
    }

    let updateView = function() {
      console.log('twice?!')
      let recipes = loadNotes();
      document.getElementById("text1").innerHTML = "<h1>Stored notes</h1>";
      recipes.forEach(r => {
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        //   let newTitle = document.createTextNode(r.title);
        let newIng = document.createTextNode(r.content);
        newDiv.setAttribute('data-id', r.id);

        newDiv.appendChild(newP);
        newDiv.appendChild(newIng);
        newDiv.setAttribute('id', 'newnotes')

        let currentSection = document.getElementById("notes");
        currentSection.appendChild(newDiv);
      });
    };
  }
}
let quireEditor = new QuireEditor();




