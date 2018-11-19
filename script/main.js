/* 
Exempel saved document:
    {
        id:'0'
        title: 'My first document'
        content: 'my content'
        date created: '2018-11-18'
        favorite: 'true/false'
    }

*/

window.onload = function ()
{
//buttons
const saveBtn = document.getElementById("btn-save");
const btnItalic = document.getElementById("btn-italic");
const newdocumentBtn = document.getElementById("new-document-btn")


//objects

var documentObject = {};


//Variables
const inpTitleKey = document.getElementById("inp-title-Key");

//Gets the date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() +1;
var yyyy= today.getFullYear();

if (dd<10){
    dd = '0' + dd;
}
if (mm<10){
    mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;


//Functions

//Makes Title shorter and adds ...
function shortTitle(title)
{
    if (title.length > 8)
        {
            title = title.slice(0,8) + "..."; 
        }
    return title;
}

 //Creates a document item
function createDocumentItem(title,dDate)
{

    let divDocumentHandlerItem = document.createElement('div');
    let divDocumentImage = document.createElement('div');
    let divDocumentTitle = document.createElement('div');
    let divDocumentTime = document.createElement('div');
    let documentTitle = document.createTextNode(title);
    let documentTime = document.createTextNode(dDate);
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



//Saves the document
saveBtn.onclick = function()
{
    let key = inpTitleKey.value;
    const value = "";

    key = shortTitle(key);
    
    if(key){
        localStorage.setItem(key,value);
        createDocumentItem(key,today);
    }
    else{
        alert("Ange dokument titel!");
    }
    
    inpTitleKey.value ="";
    location.reload();
}

//New dokument clears the title and the text editor text
newdocumentBtn.onclick = function()
{
    inpTitleKey.value ="";
    location.reload(); 
}


//loops the local storage



for (var i = 0; i < localStorage.length; i++)
{
    const key = localStorage.key(i);
    createDocumentItem(key,today);
}


//Quills -Added this one here to experiment
var quill = new Quill('#editor', 
{
    modules:
    {
    toolbar:true},theme: 'snow'
});

} 









/*
//Laboration Area//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//Deletes a saved document - Working on this one not finished (Stavros)


    const newdocumentBtn = document.getElementById("new-document-btn");

    newdocumentBtn.onclick = function()
    {
        
        let documents = loadDocuments();
        documents.push(newDocument(getAvailID(documents)));
        saveDocuments(documents);
    } 
    

}

function loadDocuments()
{
    return JSON.parse(localStorage.getItem('documents'));

}

function getAvailID(doc)
{
    if (doc.length > 0)
    {
        return (Math.max(...doc.map(d => d.id),0) + 1 );
    }
    else
    {
        return 0;
    }

}
function saveDocuments(doc)
{
    localStorage.setItem('documents',JSON.stringify(doc));

}

function updateView()
{


}

function deleteDocument()
{
    localStorage.setItem('documents',JSON.stringify([]));

}
function newDocument ()
{
    let newDocument = {};
    newDocument.title = 'ewe';
    newDocument.content = 'wee';
    newDocument.date = 'wewe';
    newDocument.favorite = 'wewe';
    return newDocument;

}




//Laboration Area//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

*/

