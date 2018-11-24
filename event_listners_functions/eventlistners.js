const noteList = document.querySelector('#noteList');
const noteForm = document.querySelector('#form');



//Array from local storage
let parsedLocalStorageArray = checkLocalStorage();

//Use this if you want to create a new id
//let newID ;
window.onload = function () {


    createNote(parsedLocalStorageArray);

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
                toggleFavorite(searchKey, parsedLocalStorageArray);

            } else if (event.target.classList.contains('fa-folder') || event.target.classList.contains('fa-folder-open')) {
                if (event.target.className === 'fas fa-folder') {
                    event.target.className = 'fas fa-folder-open';
                } else if (event.target.className === ('fas fa-folder-open')) {
                    event.target.className = 'fas fa-folder';
                }


                toggleDocument();
            } else if (event.target.classList.contains('fa-trash-alt')) {
                removeDocument(searchKey);
                event.target.parentElement.parentElement.remove()
            }
        }
    })
    noteForm.addEventListener('submit', function () {
        let formObject = submitForm(parsedLocalStorageArray);


        parsedLocalStorageArray.push(formObject)
        localStorage.setItem('notes', JSON.stringify(parsedLocalStorageArray))
        this.reset()
        window.location.reload()
    })

}
//By using th key kind the object in the localstorage array and return the new value to the local storage
function toggleFavorite(key, array) {

    let findNote = scanArray(key, array);

    if (!findNote.favorite) {
        findNote.favorite = true;

    } else {
        findNote.favorite = false;
    }
    localStorage.setItem('notes', JSON.stringify(array));
}

function submitForm(array) {
    let formValue = {};
    let newID = createNewID(array);
    formValue.id = newID;
    formValue.inputTitleValue = noteForm.querySelector('#formInput').value;
    formValue.textaareaValue = noteForm.querySelector('#formTextarea').value;
    formValue.dateValue = today(new Date);
    formValue.favorite = false;

    return formValue
};

function createNewID(array) {
    let newID;
    if (array == 0) {
        newID = 1;
    } else {
        newID = array.slice(-1)[0].id + 1
    }
    return newID;
}

//Check local storage if empty then add MockData else parse the the local storage array
function checkLocalStorage() {

    let getLocalStorage;

    if (localStorage) {

        let tempParseArray = localStorage.getItem('notes');
        getLocalStorage = JSON.parse(tempParseArray);
        //Sort the array after either key of choice

        if (getLocalStorage !== null) {

            return getLocalStorage /* .sort(arraySorter('id')); */
        } else {

            getLocalStorage = []
            return getLocalStorage;
        }

    }

}

function createNote(array) {

    //Create the note with the array from local storage
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
        title = array[i].inputTitleValue
        body = array[i].textaareaValue
        favorite = array[i].favorite
        date = array[i].dateValue

        favoriteButton.className = 'favorite';
        if (favorite) {
            favoritebuttonIcon.className = 'fas fa-star'
        } else {
            favoritebuttonIcon.className = 'far fa-star'
        }
        openButton.className = 'openDocument';
        openButtonIcon.className = 'fas fa-folder';

        titleSpan.className = 'title'
        titleSpan.textContent = title;

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

//Sort after key
function arraySorter(key) {
    let sortOrder = 1;
    if (key[0] === "-") {
        sortOrder = -1;
        key = key.substring(1);

    }
    return function (x, y) {

        let sortRestult;
        if (x[key] > y[key]) {
            sortRestult = -1;
        } else if (x[key] < y[key]) {
            sortRestult = 1;
        } else {
            sortRestult = 0;
        }
        return sortRestult * sortOrder
    }
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

function removeDocument(key) {
    let noteToRemove = scanArray(key, parsedLocalStorageArray);

    parsedLocalStorageArray.splice(parsedLocalStorageArray.indexOf(noteToRemove), 1)
    localStorage.setItem('notes', JSON.stringify(parsedLocalStorageArray))
    event.preventDefault()
}



function mockLocalStorage() {
    let mockLocalStorage = [{
            id: 1,
            noteTitle: 'Title 1',
            noteBody: 'Body 1',
            favorite: false,
            date: '12-02-2007'

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
            date: '13-12-1999'

        },
        {
            id: 32,
            noteTitle: 'Title 32',
            noteBody: 'Body 32',
            favorite: false,
            date: '21-05-2017'

        },
        {
            id: 10000,
            noteTitle: 'Title 1000',
            noteBody: 'Body 1000',
            favorite: false,
            date: '05-05-1917'

        }, {
            id: 2,
            noteTitle: 'Title 2',
            noteBody: 'Body 2',
            favorite: false,
            date: '11-11-2111'

        }
    ]
    localStorage.setItem('notes', JSON.stringify(mockLocalStorage))

}