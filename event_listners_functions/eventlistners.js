const noteList = document.querySelector('#noteList');
const noteForm = document.querySelector('#form');

//Array from local storage
let parsedLocalStorageArray = checkLocalStorage()
createNote(parsedLocalStorageArray);
window.onload = function () {


    noteList.addEventListener('click', function () {
        if (event.target.tagName == 'I') {

            //Create a search key to locate the right object in local storage
            let searchKey = parseInt(event.target.parentElement.parentElement.id);

            if (event.target.classList.contains('fa-star')) {
                if (event.target.classList.contains('far')) {
                    event.target.className = 'fas fa-star';
                } else if (event.target.classList.contains('fas')) {
                    event.target.className = 'far fa-star'
                }
                toggleFavorite(searchKey);

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

function createNote(array) {


    for (let i = 0; i < array.length; i++) {
        let favoritebuttonIcon = document.createElement('i');
        let favoriteButton = document.createElement('a');
        let openButton = document.createElement('a');
        let openButtonIcon = document.createElement('i');
        let titleSpan = document.createElement('span');
        let dateSpan = document.createElement('span');
        let removeButton = document.createElement('a');
        let removeButtonIcon = document.createElement('i')
        let listWithID = document.createElement('li');
        id = array[i].id
        title = array[i].noteTitle
        body = array[i].noteBody
        favorite = array[i].favorite
        date = array[i].date

        favoriteButton.className = 'favorite';
        if (favorite) {
            favoritebuttonIcon.className = 'fas fa-star'
        } else {
            favoritebuttonIcon.className = 'far fa-star'
        }
        openButton.className = 'openDocument';
        openButtonIcon.className = 'fas fa-folder';

        titleSpan.className = 'title'
        titleSpan.textContent = title + ' ';

        dateSpan.className = 'date';
        dateSpan.textContent = ' ' + date;

        removeButton.className = 'remove';
        removeButtonIcon.className = 'fas fa-trash-alt'

        listWithID.id = id;

        favoriteButton.appendChild(favoritebuttonIcon);
        openButton.appendChild(openButtonIcon);
        removeButton.appendChild(removeButtonIcon);

        listWithID.appendChild(favoriteButton)
        listWithID.appendChild(openButton)
        listWithID.appendChild(titleSpan)
        listWithID.appendChild(dateSpan)
        listWithID.appendChild(removeButton)

        noteList.appendChild(listWithID);
    }
}
//CHeck local storage if empty then add MockData else parse the the local storage array
function checkLocalStorage() {
    let getLocalStorage = localStorage.getItem('notes');
    parseLocalStorage = JSON.parse(getLocalStorage);
    if (!getLocalStorage) {
        let parseLocalStorage = mockLocalStorage();
        localStorage.setItem('notes', JSON.stringify(parseLocalStorage));
        window.location.reload();
    }
    return parseLocalStorage;
}
//Gets the date of today and formats it to mm/dd/yyyy , put new Date() in the funtion

function today(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = dd + '/' + mm + '/' + yyyy;
    return date;
}

//Makes Title shorter and adds ... in the end , use this one when the title is written over the document icon.
function shortTitle(title) {
    if (title.length > 8) {
        title = title.slice(0, 8) + "...";
    }
    return title;
}

//By using th key kind the object in the localstorage array and return the new value to the local storage
function toggleFavorite(key) {

    let findNote = scanArray(key, parsedLocalStorageArray);

    if (!findNote.favorite) {
        findNote.favorite = true;

    } else {
        findNote.favorite = false;

    }
    localStorage.setItem('notes', JSON.stringify(parsedLocalStorageArray));
}

//Scan array for object and if found return it
function scanArray(key, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === key) {
            return array[i];
        }
    }
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



function mockLocalStorage() {
    let mockLocalStorage = [{
            id: 1,
            noteTitle: 'Title 1',
            noteBody: 'Body 1',
            favorite: false,
            date: '25-08-1987'

        },
        {
            id: 10,
            noteTitle: 'Title 10',
            noteBody: 'Body 10',
            favorite: false,
            date: '25-08-1987'

        },
        {
            id: 5,
            noteTitle: 'Title 5',
            noteBody: 'Body 4',
            favorite: false,
            date: '25-08-1987'

        },
        {
            id: 32,
            noteTitle: 'Title 32',
            noteBody: 'Body 32',
            favorite: false,
            date: '25-08-1987'

        },
        {
            id: 10000,
            noteTitle: 'Title 1000',
            noteBody: 'Body 1000',
            favorite: false,
            date: '25-08-1987'

        }, {
            id: 2,
            noteTitle: 'Title 2',
            noteBody: 'Body 2',
            favorite: false,
            date: '25-08-1987'

        }
    ]
    return mockLocalStorage;

}