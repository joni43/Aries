window.onload = function ()
{


//buttons
const saveBtn = document.getElementById("btn-save");
const newdocumentBtn = document.getElementById("new-document-btn");

//Variables
const inputTitle = document.getElementById("inputTitle");


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

    function submitForm() {
        let formValue = {};
        formValue.id = "nothing right now";
        formValue.inputTitleValue = inputTitle.value;
        formValue.textaareaValue = quill.getContents(); //here we get the content from the editor!
        formValue.dateValue = today(new Date);
        formValue.favorite = "nothing right now";
        return formValue
    };

    //clears the form 
    function clearForm(){
        inputTitle.value ="";
        location.reload();
    };

    //Saves the document
    saveBtn.onclick = function()
    {                      
    
    let titleKey = inputTitle.value;
     
    //just looking so the title is not empty and puts things in the localStorage
    if(titleKey){            //we should put 'documents' here and make just one array of this tha takes object! --not finished id is missing and value for favorite
        localStorage.setItem(titleKey,JSON.stringify(submitForm()));
    }
    else{
        alert("Ange dokument titel!");
    }
    
    clearForm();
    
    }

    //New dokument clears the title and the text editor text
    newdocumentBtn.addEventListener("click",clearForm);

    //loops the local storage --this loop is not finished
    for (var i = 0; i < localStorage.length; i++)
    {
        const key = localStorage.key(i);
        createDocumentItem(shortTitle(key),today(new Date()));
    }

} 

