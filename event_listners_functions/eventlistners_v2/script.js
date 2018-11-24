//Variables to select places i html
let noteList = document.querySelector('#noteList');
let noteViewer = document.querySelector('#noteViewer');
let noteForm = document.querySelector('#form');

//Declare load and create clocal storage
let noteArray = getLocalStorage();
createNote(noteArray)
window.onload = function () {


    //Create new note after submit
    noteForm.addEventListener('submit', function () {
        //Save inputs, create the note on page and empty fpr,
        saveNote();
        createNote(noteArray);
        this.reset()
    })

    noteList.addEventListener('click', function () {
        //Change the statis and icon of the favorite star
        if (event.target.parentElement.className === 'star-button') {

            if (event.target.className === 'far fa-star') {
                event.target.className = 'fas fa-star';
            } else {
                event.target.className = 'far fa-star'
            }

            //Declare a note by first finding the right boject and then change it's value
            let noteToFavorite = findObject(event.target.parentElement.parentElement.id, noteArray)
            toggleFavorite(noteToFavorite, noteViewer.childNodes);

        } else if (event.target.parentElement.className === 'folder-button') {
            //Open and close the document
            if (event.target.className === 'fas fa-folder') {
                event.target.className = 'fas fa-folder-open'
            } else {
                event.target.className = 'fas fa-folder'
            }
            //Declare a note by first finding the right boject and then change it's value
            let noteToView = findObject(event.target.parentElement.parentElement.id, noteArray)
            toggleNote(noteToView.id, noteViewer.childNodes);

        } else if (event.target.parentElement.className === 'trash-button') {

            //Declare a note by first finding the right boject and then remove it from the main array
            let noteToRemove = findObject(event.target.parentElement.parentElement.id, noteArray);
            removeNote(noteToRemove, noteArray)
            event.target.parentElement.parentElement.remove();

        }
    })

}
//Change the key from string to number to compare it with corresponding object
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

//Get todays date
function today(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = dd + '/' + mm + '/' + yyyy;
    return date;
}

//See if the value of favorite is true of false and save it to the local storage
function toggleFavorite(key) {
    if (key.favorite === false) {
        key.favorite = true;
    } else {
        key.favorite = false;
    }
    setLocalStorage(noteArray);
}
//Take out the object from the array and save local storage
function removeNote(object, array) {
    array.splice(array.indexOf(object), 1)
    setLocalStorage(array)
}

//Search function to find the right object by compareing id with the array
function findObject(key, array) {
    console.log(key)
    let parsedKey = parseInt(key);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === parsedKey) {
            return array[i];
        }
    }
}
//Create new id but scanning the array
function createID() {
    let newID;
    if (localStorage.length === 0) {
        newID = 1;
    } else {
        let arrayLastID = noteArray[noteArray.length - 1].id;
        arrayLastID++;
        newID = arrayLastID
    }
    return newID;
}
//Inset values into the note object, push it into the main array and set local storage
function saveNote() {
    let newNote = {};
    newNote.id = createID();
    newNote.title = document.querySelector('#noteTitle').value;
    newNote.body = document.querySelector('#noteBody').value;
    newNote.favorite = false;
    newNote.date = today(new Date);

    noteArray.push(newNote);
    setLocalStorage(noteArray)
}

//set local storage to with the main array
function setLocalStorage(array) {
    localStorage.setItem('notes', JSON.stringify(array))
}

//Scan local storage and send the content back if it exist otherwise create a new array
function getLocalStorage() {
    let noteArray;
    if (localStorage.length === 0) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(localStorage.getItem('notes'))
    }
    return noteArray;
}
//Empty the list in dom and create the list items from the main array
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

//Function for debugging
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