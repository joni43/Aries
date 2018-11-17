
//buttons
const saveBtn = document.getElementById("btn-save");
const btnItalic = document.getElementById("btn-italic");



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

 //Create a document item
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
  
    saveBtn.onclick = function()
    {
        const key = inpTitleKey.value;
        const value = "";

        if(key){
            localStorage.setItem(key,value);
            createDocumentItem(key,today);
        }
        else{
            alert("Ange dokument titel!");
        }
    
        inpTitleKey.value ="";
        inpDocumentText.value="";
        location.reload();
    };


    for (var i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        createDocumentItem(key,today);
    }


    //Quills
    var quill = new Quill('#editor', 
    {
        modules:
        {
        toolbar:true},theme: 'snow'
    });

    
