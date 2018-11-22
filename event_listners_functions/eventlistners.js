
const noteList = document.querySelector('#noteList');
const noteForm = document.querySelector('#form');




window.onload = function () {

    noteList.addEventListener('click', function () {


        if (event.target.tagName == 'I') {


            if (event.target.classList.contains('fa-star')) {
                if (event.target.classList.contains('far')) {
                    event.target.className = 'fas fa-star';
                } else if (event.target.classList.contains('fas')) {
                    event.target.className = 'far fa-star'
                }


                toggleFavorite();
            } else if (event.target.classList.contains('fa-folder') || event.target.classList.contains('fa-folder-open')) {
                if (event.target.className === 'fas fa-folder') {
                    event.target.className = 'fas fa-folder-open';
                } else if (event.target.className === ('fas fa-folder-open')) {
                    event.target.className = 'fas fa-folder';
                }


                toggleDocument();
            } else if (event.target.classList.contains('fa-trash-alt')) {
                removeDocument();
            }


        }
    })
    noteForm.addEventListener('submit', function () {
        let formObject = submitForm();
        return console.log(formObject);
    })

}

//Gets the date of today and formats it to mm/dd/yyyy , put new Date() in the funtion
function today (date) {
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

//Makes Title shorter and adds ... in the end , use this one when the title is written over the document icon.
function shortTitle(title)
{
    if (title.length > 8)
        {
            title = title.slice(0,8) + "..."; 
        }
    return title;
}


function toggleFavorite() {
    console.log('Favorite Toggle')
}

function toggleDocument() {
    console.log('Document Toggle');
}

function removeDocument() {
    console.log('Document Remove')
}

function submitForm() {
    let formValue = {};
    formValue.id = "nothing right now";
    formValue.inputTitleValue = noteForm.querySelector('#formInput').value;
    formValue.textaareaValue = noteForm.querySelector('#formTextarea').value;
    formValue.dateValue = today(new Date);
    formValue.favorite = "nothing right now";

    return formValue
};