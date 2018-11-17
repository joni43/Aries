
//buttons
const saveBtn = document.getElementById("btn-save");
const btnItalic = document.getElementById("btn-italic");



//Variables
const inpTitleKey = document.getElementById("inp-title-Key");
const inpDocumentText = document.getElementById("inp-document-text");






//functions

//Create a document item
function createDocumentItem(){

    let divDocumentHandlerItem = document.createElement('div');
    let divDocumentImage = document.createElement('div');
    let divDocumentTitle = document.createElement('div');
    let DocumentTitle = document.createTextNode('test');
    let iconTrashCan = document.createElement('i');
    let iconStar = document.createElement('i');
    

    divDocumentHandlerItem.className="document-handler-item";
    divDocumentTitle.className="item-title";
    divDocumentImage.className ="img-document";
    iconStar.className ="fas fa-star";
    iconTrashCan.className="fas fa-trash-alt";
    
    divDocumentTitle.appendChild(DocumentTitle);
    divDocumentHandlerItem.appendChild(divDocumentTitle);
    divDocumentHandlerItem.appendChild(divDocumentImage);
    divDocumentHandlerItem.appendChild(iconStar);
    divDocumentHandlerItem.appendChild(iconTrashCan);

    document.getElementById("document-handler-container").appendChild(divDocumentHandlerItem);
}

saveBtn.onclick = function(){
    const key = inpTitleKey.value;
    const value = inpDocumentText.value;

    if(key && value){
        localStorage.setItem(key,value);
    }
    else{
        alert("Ange dokument titel och skriv text!");
    }

    
    inpTitleKey.value ="";
    inpDocumentText.value="";
    location.reload();
};








btnItalic.onclick = function(){
    alert("test!");
}

    for (var i = 0; i < localStorage.length; i++){
    
    createDocumentItem();
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    }


    //Quills
    var quill = new Quill('#editor', {
        modules:{
        toolbar:false

        },
        theme: 'snow'
      });

    
