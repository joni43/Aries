window.onload = function () {

    const saveBtn = document.getElementById("btn-save");
    const newdocumentBtn = document.getElementById("new-document-btn");
    let noteArray = getLocalStorage();
    let noteToView;
    let inputTitle = document.getElementById("input-Title");
    createNote(noteArray);





    window.onclick = function (event) {
       
        console.log(event.target);
        if (event.target.className === 'far fa-star') {
            event.target.className = ('fas fa-star');
            event.target.style.color = ('yellow');
            noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
            toggleFavorite(noteToView);

        } else if (event.target.className === 'fas fa-star') {
            event.target.className = ('far fa-star');
            event.target.style.color = ('black');
            noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
            toggleFavorite(noteToView);
        } else if (event.target.parentElement.className === 'document-handler-item') {
            noteToView = findObject(event.target.parentElement.id, noteArray);

            quill.setContents(noteToView.textContent);
            inputTitle.value = (noteToView.title);

            
              
            


        } else if (event.target.className === 'fas fa-trash-alt') {
            noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
            removeNote(noteToView, noteArray);

        }
    }
    
    //Functions

    //Saves new document if noteToView is true it updates existing note
    saveBtn.onclick = function () {
         if (noteToView) {
             updateNote(noteToView);
         } else {
             saveNote();
             createNote(noteArray);
             clearForm();
       }
     }

    //New dokument clears the title and the text editor text
    newdocumentBtn.addEventListener("click", clearForm);

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

            divDocumentTitle.appendChild(documentTitle);
            divDocumentTime.appendChild(documentTime);

            divDocumentHandlerItem.appendChild(divDocumentTitle);

            starButton.appendChild(starIcon);
            divDocumentHandlerItem.appendChild(starButton);

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

        newNote.id = createID();
        newNote.title = inputTitle.value;
        newNote.textContent = quill.getContents(); //here we get the content from the editor!
        newNote.date = today(new Date);
        newNote.favorite = false;

        noteArray.push(newNote);
        setLocalStorage(noteArray);
    }

    //update the values of title och textcontent
    function updateNote(objectID) {
        objectID.title = inputTitle.value;
        objectID.textContent = quill.getContents(); //here we get the content from the editor!
        setLocalStorage(noteArray);
        location.reload()
    }

    //clears the form 
    function clearForm() {
        inputTitle.value = "";
        location.reload();
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
        location.reload();

    }

    //See if the value of favorite is true of false and save it to the local storage
    function toggleFavorite(objectID) {
        if (objectID.favorite === false) {
            objectID.favorite = true;
        } else {
            objectID.favorite = false;
        }
        setLocalStorage(noteArray);
        location.reload()
    }


}