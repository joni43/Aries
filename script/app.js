window.onload = function ()
{

//buttons
const saveBtn = document.getElementById("btn-save");
const newdocumentBtn = document.getElementById("new-document-btn");




const inputTitle = document.getElementById("inputTitle");
let noteArray = getLocalStorage();

createNote(noteArray);
  
   
    //Saves the document
    saveBtn.onclick = function()
    {                      
        saveNote();
        createNote(noteArray);
        clearForm();
    }


//Functions

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

function getLocalStorage() {
    let noteArray;
    if (localStorage.length === 0) {
        noteArray = [];
    } else {
        noteArray = JSON.parse(localStorage.getItem('notes'))
    }
    return noteArray;
}



 //Makes Title shorter and adds ...
    function shortTitle(title)
    {
        if (title.length > 8)
            {
                title = title.slice(0,8) + "..."; 
            }
        return title;
    }

    //Gets the date of today and formats it
    function today (date){
        
        var dd = date.getDate();
        var mm = date.getMonth() +1;
        var yyyy= date.getFullYear();
        
        if (dd<10){
            dd = '0' + dd;
        }
        if (mm<10){
            mm = '0' + mm;
        }
        date = dd + '/' + mm + '/' + yyyy;
        return date;
    }

   


 //Creates a document item
    function createNote(array)
    {
        for (let i = 0; i < array.length; i++) 
        {
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
            divDocumentHandlerItem.className="document-handler-item";
            divDocumentTitle.className="item-title";
            divDocumentTime.className="item-time";
            divDocumentImage.className ="img-document";

            
            if (favorite) {
                starIcon.className = 'fas fa-star';
                starIcon.style.color ='yellow';
            } else {
                starIcon.className = 'far fa-star';
            }

            trashcanIcon.className="fas fa-trash-alt";
        
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
    };

    function setLocalStorage(array) {
        localStorage.setItem('notes', JSON.stringify(array))
    }

    //clears the form 
    function clearForm(){
        inputTitle.value ="";
        location.reload();
    };

    //finds object in the array
    function findObject(key, array) {
        console.log(key)
        let parsedKey = parseInt(key);
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === parsedKey) {
                return array[i];
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
   

    //New dokument clears the title and the text editor text
    newdocumentBtn.addEventListener("click",clearForm);

    window.onclick = function(event)
    {
        console.log(event.target.parentElement.id);
        if (event.target.className === 'far fa-star') {
            event.target.className = ('fas fa-star');
            event.target.style.color = ('yellow');
            let noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
            toggleFavorite(noteView)
            console.log(noteToView);
        }

        else if (event.target.className === 'fas fa-star') {
            event.target.className = ('far fa-star');
            event.target.style.color = ('black');
            let noteToView = findObject(event.target.parentElement.parentElement.id.parentElement, noteArray);
            console.log(noteToView);
        }

        else if (event.target.className === 'fas fa-trash-alt') {
            let noteToView = findObject(event.target.parentElement.parentElement.id, noteArray);
            console.log(noteToView);
        }
            
    }
 


 
} 

