let noteList = document.querySelector('#noteList');
let noteViewer = document.querySelector('#noteViewer');
let noteForm = document.querySelector('#form');
let noteArray = getLocalStorage();
createNote(noteArray)
window.onload = function () {
    //saveNote();

    noteForm.addEventListener('submit', function () {
        saveNote();

        createNote(noteArray);
    })

    noteList.addEventListener('click', function () {
        if (event.target.parentElement.className === 'star-button') {

            if (event.target.className === 'far fa-star') {
                event.target.className = 'fas fa-star';
            } else {
                event.target.className = 'far fa-star'
            }

            let noteToView = findObject(event.target.parentElement.parentElement.id, noteArray)
            toggleNote(noteToView.id, noteViewer.childNodes);

        } else if (event.target.parentElement.className === 'folder-button') {

            if (event.target.className === 'fas fa-folder') {
                event.target.className = 'fas fa-folder-open'
            } else {
                event.target.className = 'fas fa-folder'
            }

            let noteToView = findObject(event.target.parentElement.parentElement.id, noteArray)
            toggleNote(noteToView.id, noteViewer.childNodes);

        } else if (event.target.parentElement.className === 'trash-button') {

            let noteToRemove = findObject(event.target.parentElement.parentElement.id, noteArray);
            removeNote(noteToRemove, noteArray)
            event.target.parentElement.parentElement.remove();

        }
    })

}

function toggleNote(key, array) {
    for (let i = 0; i < array.length; i++) {
        let parsedID = parseInt(array[i].id);
        if (key === parsedID) {
            if (array[i].style.display === 'none') {
                array[i].style.display = 'block'
            } else {
                array[i].style.display = 'none';
            }
        }
    }
}

function toggleFavorite(object, array) {
    if (object.favorite === false) {
        object.favorite = true;
    } else {
        object.favorite = false;
    }
    setLocalStorage(array);
}

function removeNote(object, array) {
    array.splice(array.indexOf(object), 1)
    setLocalStorage(array)
}

function findObject(key, array) {
    console.log(key)
    let parsedKey = parseInt(key);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === parsedKey) {
            return array[i];
        }
    }
}

function saveNote() {
    console.log('save')
    let newNote = {};
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    newNote.id = randomNumber;
    newNote.title = document.querySelector('#noteTitle').value;
    newNote.body = document.querySelector('#noteBody').value;
    newNote.favorite = false;
    newNote.date = '-----25/08-1987'

    noteArray.push(newNote);
    setLocalStorage(noteArray)
}

function setLocalStorage(array) {
    localStorage.setItem('notes', JSON.stringify(array))
}

function getLocalStorage() {
    let noteArray;
    if (localStorage.length === 0) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(localStorage.getItem('notes'))
    }
    return noteArray;
}

function createNote(array) {
    noteList.innerHTML = '';
    for (let i = 0; i < array.length; i++) {

        id = array[i].id;
        title = array[i].title;
        body = array[i].body;
        favorite = array[i].favorite;
        date = array[i].date;

        let starIcon = document.createElement('i');
        let starButton = document.createElement('a');
        let folderIcon = document.createElement('i');
        let folderButton = document.createElement('a');
        let trashIcon = document.createElement('i');
        let trashButton = document.createElement('a');
        let titleSpan = document.createElement('span');
        let dateSpan = document.createElement('span');
        let bodyDiv = document.createElement('div');
        let li = document.createElement('li');


        starButton.className = 'star-button';
        if (favorite) {
            starIcon.className = 'fas fa-star';
        } else {
            starIcon.className = 'far fa-star';
        }

        folderIcon.className = 'fas fa-folder'
        folderButton.className = 'folder-button';

        titleSpan.className = 'title-span';
        titleSpan.textContent = title;

        dateSpan.className = 'date-span';
        dateSpan.textContent = date;

        trashIcon.className = 'fas fa-trash-alt'
        trashButton.className = 'trash-button';

        li.id = id;

        bodyDiv.id = id;
        bodyDiv.className = 'body-div';
        bodyDiv.textContent = body;
        bodyDiv.style.display = 'none';

        starButton.appendChild(starIcon);
        folderButton.appendChild(folderIcon);
        trashButton.appendChild(trashIcon);
        li.appendChild(starButton);
        li.appendChild(folderButton);
        li.appendChild(titleSpan);
        li.appendChild(dateSpan);
        li.appendChild(trashButton);

        noteList.appendChild(li);
        noteViewer.appendChild(bodyDiv)
    }
}


function debug(key, target, object, array) {
    console.log('===========================')
    console.log('----------key--------------')
    console.log(key)
    console.log(typeof key)
    console.log('----------object-----------')
    console.log(object)
    console.log('----------array------------')
    console.log(array)
    console.log(array[i])
    console.log('----------target--------------')
    console.log(target)
    console.log(typeof target)
    console.log('===========================')
}