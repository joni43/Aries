const saveBtn = document.getElementById("btn-save");

const printbtn = document.getElementById("btn-print")
const newdocumentBtn = document.getElementById("new-document-btn");
let noteArray = getLocalStorage();
let noteToView;
let inputTitle = document.getElementById("input-Title");


createNote(noteArray);



window.onclick = function (event) {
    //Toggle from non-favorite to favorite 
    if (event.target.className === 'far fa-star') {
        event.target.className = ('fas fa-star');
        event.target.style.color = ('yellow');
        noteToViewFav = findObject(event.target.parentElement.parentElement.id, noteArray);
        toggleFavorite(noteToViewFav);


        //Toggle from favorite to non-favorite
    } else if (event.target.className === 'fas fa-star') {
        event.target.className = ('far fa-star');
        event.target.style.color = ('black');
        noteToViewFav = findObject(event.target.parentElement.parentElement.id, noteArray);
        toggleFavorite(noteToViewFav);


        //If documents are selected open in the editor and put title    
    } else if (event.target.parentElement.className === 'document-handler-item') {
        noteToView = findObject(event.target.parentElement.id, noteArray);

        quill.setContents(noteToView.textContent);
        inputTitle.value = (noteToView.title);
        noteToView = event.target.parentElement.id;
        //If the traschcan button is pressed, delete the attached document 
    } else if (event.target.className === 'fas fa-trash-alt') {
        noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
        removeNote(noteToView, noteArray);
        noteToView = "";

    }
}

//Functions

//Uppdates the document handler view by putting the innerHTML to empty and the create the notes again
function updateView() {
    document.getElementById("document-handler-container").innerHTML = "";
    createNote(noteArray);
}

//Saves new document if noteToView is true it updates existing note
saveBtn.onclick = function () {
    console.log(noteToView);
    if (noteToView) {
        updateNote();
    } else {
        saveNote();
        createNote(noteArray);
        updateView();
    }
}

//New dokument clears the title and the text editor text
newdocumentBtn.onclick = function () {
    clearForm();
}

printbtn.onclick = function () {
    printdoc(noteToView)
}

//Prints the title and the text editor content
function printdoc() {
    let content = document.getElementsByClassName("ql-editor")[0].innerHTML
    let title = inputTitle.value;

    let WinPrint = window.open('', '', 'letf=300,top=300,width=461,height=341,toolbar=110,scrollbars=30,status=0');
    WinPrint.document.write(title, content);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    title.innerHTML = letsPrint;
    content.innerHTML = letsPrint
}

//Creates new id 
function createID() {
    let newID;
    if (localStorage.length === 0 || noteArray.length === 0) {
        newID = 1;
    } else {
        let arrayLastID = noteArray[noteArray.length - 1].id;
        arrayLastID++;
        newID = arrayLastID
    }
    return newID;
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

//sets local storage with the main array
function setLocalStorage(array) {
    localStorage.setItem('notes', JSON.stringify(array))
}


//Makes Title shorter and adds ...
function shortTitle(title) {

    if (title.length > 8) {
        title = title.slice(0, 8) + "...";
    }
    return title;
}


//Gets the date of today and formats it
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

//Creates a document item
function createNote(array) {
    //sorts the array by favorite
    array.sort((a, b) => b.favorite - a.favorite);

    for (let i = 0; i < array.length; i++) {
        id = array[i].id;
        title = array[i].title;
        textContent = array[i].textContent;
        favorite = array[i].favorite;
        date = array[i].date;

        let divDocumentHandlerItem = document.createElement('div');
        let divDocumentImage = document.createElement('div');
        let divDocumentTitle = document.createElement('div');
        let divDocumentTime = document.createElement('div');
        let documentTitle = document.createTextNode(shortTitle(title));
        let documentTime = document.createTextNode(date);
        let trashcanIcon = document.createElement('i');
        let trashcanButton = document.createElement('a');
        let starIcon = document.createElement('i');
        let starButton = document.createElement('a');

        divDocumentHandlerItem.id = id;
        divDocumentHandlerItem.className = "document-handler-item";
        divDocumentTitle.className = "item-title";
        divDocumentTime.className = "item-time";
        divDocumentImage.className = "img-document";


        if (favorite) {
            starIcon.className = 'fas fa-star';
            starIcon.style.color = 'yellow';
        } else {
            starIcon.className = 'far fa-star';
        }

        trashcanIcon.className = "fas fa-trash-alt";

        starButton.appendChild(starIcon);
        divDocumentHandlerItem.appendChild(starButton)
        divDocumentTitle.appendChild(documentTitle);
        divDocumentTime.appendChild(documentTime);

        divDocumentHandlerItem.appendChild(divDocumentTitle);

        ;

        divDocumentHandlerItem.appendChild(divDocumentImage);

        divDocumentHandlerItem.appendChild(divDocumentTime);
        trashcanButton.appendChild(trashcanIcon);
        divDocumentHandlerItem.appendChild(trashcanButton);

        document.getElementById("document-handler-container").appendChild(divDocumentHandlerItem);


    }
}

//Saves the note 
function saveNote() {
    let newNote = {};
    let newNoteID = createID();
    console.log(newNoteID + "saves");
    noteToView = newNoteID;
    console.log(noteToView + "saves");
    newNote.id = newNoteID;
    newNote.title = inputTitle.value;
    newNote.textContent = quill.getContents(); //here we get the content from the editor!
    newNote.date = today(new Date);
    newNote.favorite = false;

    noteArray.push(newNote);
    setLocalStorage(noteArray);
}

//update the values of title och textcontent
function updateNote() {
    objectID = findObject(noteToView, noteArray);
    objectID.title = inputTitle.value;
    objectID.textContent = quill.getContents(); //here we get the content from the editor!
    setLocalStorage(noteArray);
    updateView();
}

//clears the form 
function clearForm() {
    inputTitle.value = "";
    quill.setContents([]);
    noteToView = "";
    updateView();
}

//finds object in the array
function findObject(key, array) {
    let parsedKey = parseInt(key);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === parsedKey) {
            return array[i];
        }
    }
}

//Take out the object from the array and save local storage
function removeNote(objectID, array) {
    array.splice(array.indexOf(objectID), 1)
    setLocalStorage(array)
    updateView();
}

//See if the value of favorite is true of false and save it to the local storage
function toggleFavorite(objectID) {
    if (objectID.favorite === false) {
        objectID.favorite = true;
    } else {
        objectID.favorite = false;
    }
    setLocalStorage(noteArray);
    updateView();
}
