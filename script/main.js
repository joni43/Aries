
//buttons
const saveBtn = document.getElementById("btn-save");
const btnItalic = document.getElementById("btn-italic");
const newdocumentBtn = document.getElementById("new-document-btn")



//Variables
const inpTitleKey = document.getElementById("inp-title-Key");
const inpDocumentText = document.getElementById("inp-document-text");

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


//functions

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

//Make Title shorter
function shortTitle(title)
{
    if (title.length > 8)
        {
            title = title.slice(0,8) + "..."; 
        }
    return title;
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

//Deletes a saved document - Working on this one not finished (Stavros)
function deleteDocument(documentTitle)
{
    localStorage.removeItem(documentTitle);
}



//loops the local storage 
for (var i = 0; i < localStorage.length; i++)
{
        const key = localStorage.key(i);
        createDocumentItem(key,today);
}

// Temp development function to nuke local storage
function nukeLocalStorage() {
    localStorage.clear();
    location.reload();
}
    
