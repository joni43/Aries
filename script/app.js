window.onload = function ()
{


//buttons
const saveBtn = document.getElementById("btn-save");
const newdocumentBtn = document.getElementById("new-document-btn");

//Variables
const inputTitle = document.getElementById("inputTitle");

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
    date = mm + '/' + dd + '/' + yyyy;
    return date;
}




//object constructor

function DocumentObject(id,title,content,createdDate,favorite){
    let newDocument = { };
    newDocument.id = id;
    newDocument.title = title;
    newDocument.content = content;
    newDocument.createdDate = createdDate;
    newDocument.favorite = favorite;
    return newDocument;
};

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
{                      //here we get the content from the editor!
    let contentValue = quill.getContents();
    let titleKey = inputTitle.value;
     
    
    //just looking so the title is not empty and puts things in the localStorage
    if(titleKey){            //we should put 'documents' here and make just one array of this tha takes object! --not finished id is missing and value for favorite
        localStorage.setItem(titleKey,JSON.stringify(DocumentObject("id",titleKey,contentValue,today(new Date),"favorite")));
    }
    else{
        alert("Ange dokument titel!");
    }
    
    inputTitle.value ="";
    location.reload();
}

    //New dokument clears the title and the text editor text
    newdocumentBtn.onclick = function()
    {
        inputTitle.value ="";
        location.reload(); 
    }


    //loops the local storage --this loop is not finished
    for (var i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        createDocumentItem(shortTitle(key),today(new Date()));
    }

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