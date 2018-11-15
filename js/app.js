//Variables
const noteList = document.getElementById('note-list');
const getNoteID = (note) => (note.length > 0) ? (Math.max(...note.map(n => n.id), 0) + 1) : 0;

//Event Listners activates on loaded document
window.onload = function () {
    //update notelist
    updateNotes();

    //submit note
    document.getElementById("form").addEventListener('submit', function () {
        //load previous note
        let notes = loadNotes();
        //add note to array
        notes.push(newNote(getNoteID(notes)));
        //reset form fields
        this.reset();
        //save note to local storage
        saveNotes(notes);
        //update local storage
        updateNotes();
    })
    //listen av press on toggle
    noteList.addEventListener('click', toggleNotes);
}

//Functions
//Load from local storage
// function loadNotes() {
//     return JSON.parse(localStorage.getItem('notes') ? localStorage.getItem('notes') : '[]');
// }
const loadNotes = () => JSON.parse(localStorage.getItem('notes') ? localStorage.getItem('notes') : '[]');
//Save to local storage
function saveNotes(note) {
    localStorage.setItem('notes', JSON.stringify(note))
}
//Delete notes
function deleteNote(id) {
    let notes = loadNotes();
    let newNotes = notes.filter(n => (n.id != id));
    saveNotes(newNotes);
    updateNotes();
}

//update notes
function updateNotes() {
    // get notes
    let notes = loadNotes();
    //Give the storage a headline
    document.getElementById('note-list').innerHTML = '<h4>My notes</h4>';
    //Loop throught the notes and create them from locak storage
    notes.forEach((n) => {

        //Create elements and assign values
        let div = document.createElement('div');
        let anchor = document.createElement('a');
        let paragraph = document.createElement('p');
        let title = document.createTextNode(n.title);
        let content = document.createTextNode(n.content);
        let removeBtn = document.createElement('a');
        let currentSection = document.getElementById('note-list');

        removeBtn.classList = 'remove';
        removeBtn.textContent = 'X';
        removeBtn.setAttribute('onclick', 'deleteNote(' + n.id + ') ');

        anchor.classList = 'toggle';
        paragraph.classList = 'hide';
        div.setAttribute('data-id', n.id);

        //create childs
        anchor.appendChild(title);
        paragraph.appendChild(content);
        div.appendChild(anchor);
        div.appendChild(removeBtn);
        div.appendChild(paragraph);
        //add childes to div
        currentSection.appendChild(div);

    })
}

function newNote(id) {
    //Get the calues from the textarea    
    let noteTitle = document.querySelector('#title').value;
    let noteContent = document.querySelector("#note").value;
    let newNote = {};
    //Fill the varibles with the values
    newNote.title = noteTitle;
    newNote.content = noteContent;
    newNote.id = id;
    return newNote;

}

function toggleNotes(e) {
    //Look if the class contains toggle
    if (e.target.classList.contains('toggle')) {
        // if it contains toggle and the second siblings name is hide then change to show to
        // if (e.target.nextSibling.nextSibling.classList.contains('hide')) {
        //     e.target.nextSibling.nextSibling.classList = 'show';

        // } else {
        //     e.target.nextSibling.nextSibling.classList = 'hide';
        // }
        e.target.nextSibling.nextSibling.classList.toggle('hide');
    }
}