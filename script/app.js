window.onload = function ()
{

//buttons
const saveBtn = document.getElementById("btn-save");
const newdocumentBtn = document.getElementById("new-document-btn");

//Variables
const inputTitle = document.getElementById("inputTitle");
let noteArray = getLocalStorage();

createNote(noteArray);
   
    //Saves the document
    saveBtn.onclick = function()
    {                      
    
        saveNote();

        createNote(noteArray);
        this.reset();
        clearForm();
    
    }


//Functions

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
        console.log(date);
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
            body = array[i].body;
            favorite = array[i].favorite;
            date = array[i].date;

            let divDocumentHandlerItem = document.createElement('div');
            let divDocumentImage = document.createElement('div');
            let divDocumentTitle = document.createElement('div');
            let divDocumentTime = document.createElement('div');
            let documentTitle = document.createTextNode(title);
            let documentTime = document.createTextNode(date);
            let iconTrashCan = document.createElement('i');
            let iconStar = document.createElement('i');
        

            divDocumentHandlerItem.className="document-handler-item";
            divDocumentTitle.className="item-title";
            divDocumentTime.className="item-time";
            divDocumentImage.className ="img-document";
            iconStar.className ="fas fa-star";
            iconTrashCan.className="fas fa-trash-alt";
        
            divDocumentTitle.appendChild(documentTitle);
            divDocumentTime.appendChild(documentTime);

            divDocumentHandlerItem.appendChild(divDocumentTitle);
            divDocumentHandlerItem.appendChild(iconStar);
            divDocumentHandlerItem.appendChild(divDocumentImage);

            divDocumentHandlerItem.appendChild(divDocumentTime);
            divDocumentHandlerItem.appendChild(iconTrashCan);

            document.getElementById("document-handler-container").appendChild(divDocumentHandlerItem);
        }
    }   

    function saveNote() {
        let newNote = {};
        newNote.id = "nothing right now";
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

   

    //New dokument clears the title and the text editor text
    newdocumentBtn.addEventListener("click",clearForm);

 


 
} 

