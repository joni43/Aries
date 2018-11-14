
//buttons
var saveBtn = document.getElementById("btn-save");



//Variables
const inpTitleKey = document.getElementById("inp-title-Key");
const inpDocumentText = document.getElementById("inp-document-text");
const outpSavedDocument = document.getElementById("outp-saved-document");

//functions
saveBtn.onclick = function(){
    const key = inpTitleKey.value;
    const value = inpDocumentText.value;

    if(key && value){
        localStorage.setItem(key,value);
    }
    else{
        alert("Ange dokument titel och skriv text!")
    }

    
    inpTitleKey.value ="";
    inpDocumentText.value="";
    location.reload();
};

    for (var i = 0; i < localStorage.length; i++){

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    outpSavedDocument.innerHTML += key + " "+ value + "<br>";
    }


