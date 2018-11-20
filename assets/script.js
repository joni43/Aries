//Variables


//Get the ul that the <li> elements will be added too
const noteList = document.querySelector("#noteList");
//Get the div that the note body will be added to0
const noteContent = document.querySelector("#noteContent");
//Get the form
const form = document.querySelector("#form");
//Get the toggle button for the note body
const toggle = document.getElementsByClassName('toggle')


//Event listners
//Wait until the page is loaded
window.onload = function () {
    //Load the note array from the local storage
    noteArray = loadArrayFromLocalStorage();
    //Create the list containing from the loaded array
    createNotesFromLocalStorage(noteArray);

    //Get the infomation from the form
    form.addEventListener('submit', function () {
        //Save the note to local storage
        saveNote();
        this.reset();
    });

    //Add event listners to all the elements of the <ul> element containing the note list
    noteList.addEventListener('click', function (event) {
        //Only listen to the <a> elements
        if (event.target.tagName == 'A') {
            //Select de div where the note body is on, this is used to get the out the id information needed for the remove click
            let toggleContent = document.querySelector('#noteContent');




            //Toggle favorit
            if (event.target.classList.contains('star') || event.target.classList.contains('favorite')) {
                //Declare the star-button
                let starToggle = event.target;
                //Declare the <ul> element
                let ul = noteList;
                //Declare the top of the list which is the first <li> element
                let topOfList = ul.firstChild;
                //Declare the <li> element going to the top based on what star is preseed
                let starGoingToTop = starToggle.parentElement.parentElement;
                //Declare the star that is going to the bottom, this is same as the star going to the top but renamed to avoid conflicts
                let starGoingToBottom = starGoingToTop;
                //Change the status to show if favorite or note
                let favorite;



                //If the star-buttons is pressed then change the star-button class from star to favorite
                if (starToggle.className === 'star') {
                    starToggle.className = 'favorite';
                    starToggle, textContent = 'Star';

                    favorite = true;


                    //Move the star to the top of the <ul>
                    ul.insertBefore(starGoingToTop, topOfList)
                }
                //If the class is set to favorite then set the class back to star
                else {
                    starToggle.classList = 'star';

                    favorite = false;
                    //Move the element to the bottom of the list
                    ul.append(starGoingToBottom);
                }
                favoriteStatus(favorite);
                //window.location.reload();
                window.location.loadScript = ('script.js')

            }




            //Toggle the note body 
            if (event.target.className === 'toggle') {
                //Declare the ID of the note by using the ID of the div it recides
                noteID = event.target.parentElement.id;

                //Create 2 empty arrays, this will be used to fund the  corresponding body to title
                let findNote = [];
                let noteFound = [];

                //Declare the search initiater
                startFindNote = toggleContent;
                //Declare the array the object that is going to be searched
                findNote = startFindNote.children;

                for (let i = 0; i < findNote.length; i++) {
                    //Compare  the id of the <div> with the id of the note
                    if (findNote[i].id === noteID) {
                        //Declare the found note to the object
                        noteFound = findNote[i];

                        //Toggle the found note
                        if (noteFound.style.display === 'none') {
                            noteFound.style.display = 'block';
                            event.target.textContent = 'Close';
                        } else {

                            noteFound.style.display = 'none';
                            event.target.textContent = 'Open'
                        }
                    }
                }
            }

            //Remove the note
            if (event.target.className == 'remove-button') {
                //Start the remove note function
                removeNote();

            }
        };
    });


}

//Functions




//Save the note
function saveNote() {
    //Declare the object that will hold the note
    let wholeNote = {};
    //Declare the ammound of available id's
    let upper = 1000000;
    //Declare the id by creating a random number
    let id = Math.floor(Math.random() * upper) + 1;

    //Set the object varribles
    wholeNote.id = id;
    wholeNote.favorite = false;
    wholeNote.title = document.querySelector("#noteTitle").value;
    wholeNote.body = document.querySelector('#noteBody').value;
    //Initiate the function to get todays date
    wholeNote.date = getTodaysDate();
    //Add de new object to the array holdning all the notes
    noteArray.push(wholeNote);
    //Add the array to local storage
    localStorage.setItem('notes', JSON.stringify(noteArray));
}
//Add to favorites
function favoriteStatus(key) {
    //Declare the id number
    let IdNumber = event.target.parentNode.id;
    //Declare the note that is going to be removed using the loadObjectsFromNoteArray function above
    let objectToBeUpdated = loadObjectsFromNoteArray(noteArray, IdNumber)

    //Update the object that matches the variable
    objectToBeUpdated.favorite = key;
    //Take out the object that matches the objectToBeRemoved variable
    noteArray.splice(noteArray.indexOf(objectToBeUpdated), 1)
    if (key) {
        let sortFavorites = '9';
        let updateTofavorites;

        objectToBeUpdated.date = sortFavorites.concat('', objectToBeUpdated.date);
        updateTofavorites = objectToBeUpdated;
        //Put it back in the front of the array
        noteArray.unshift(updateTofavorites);
        //noteArray.splice(noteArray.indexOf(objectToBeRemoved), 1)


        //Update the local storage with the new array
        localStorage.setItem('notes', JSON.stringify(noteArray));


    } else {

        let downgradeFromFavorites;

        objectToBeUpdated.date = objectToBeUpdated.date.substring(1);
        downgradeFromFavorites = objectToBeUpdated
        //Put it back in the front of the array
        noteArray.push(downgradeFromFavorites);

        //Update the local storage with the new array
        localStorage.setItem('notes', JSON.stringify(noteArray));
    }
    //window.location.reload();

}

//Load all notes from the local storage
function loadArrayFromLocalStorage() {
    //Declare the variable for the stored notes and get them from the local storage
    storedNotes = localStorage.getItem('notes')

    //If there is stored notes in the local storage key then parse them
    if (storedNotes) {
        arrayData = JSON.parse(storedNotes);
    }
    //If the key does not exist then set the arraydata to an empty array
    else {
        arrayData = [];
    }

    //Return the array containing the stored notes
    return arrayData;
};

//Helper function for the remove method using the note array and key is the Id number of the selected <div> 
function loadObjectsFromNoteArray(array, key) {
    //Loop through the array to find the right object
    for (let i = 0; i < array.length; i++) {
        //If the objects id match up with the id of the <div> then return the object
        if (array[i].id == key) {
            return array[i];
        }
    }
}

//Remove the note from the list and from the local storage
function removeNote() {
    //Declare the listitem
    let li = event.target.parentNode.parentNode;
    //Declare the id number
    let IdNumber = event.target.parentNode.id;
    //Declare the note that is going to be removed using the loadObjectsFromNoteArray function above
    let objectToBeRemoved = loadObjectsFromNoteArray(noteArray, IdNumber)
    //Remove the object that matches the objectToBeRemoved variable
    noteArray.splice(noteArray.indexOf(objectToBeRemoved), 1)
    //Update the local storage with the new array
    localStorage.setItem('notes', JSON.stringify(noteArray));
    //Declare the variable for the <ul> element
    let ul = li.parentNode;
    //Remove the listitem
    ul.removeChild(li);
}

//Get todays date for the object
function getTodaysDate() {

    //Declare the variable that will hold date of when the note was created
    today = new Date();
    //Declare the variables that will hold the day, month and year
    let timeKey = today.getTime();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();

    //Add zeros to the single digit dates
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    //Add the information to the variable
    today = timeKey + ' ' + dd + '/' + mm + '-' + yy;


    //Return todays daye
    return today;
}



function sortingArray(key) {
    let sortOrder = 1;
    if (key[0] === "-") {

        sortOrder = -1;

        key = key.substring(1);

    }


    return function (a, b) {
        //let result = || (a[array] > b[array]) ? -1 || : (a[array] < b[array]) ? 1 || : 0;


        let sortResult;
        if (a[key] > b[key]) {
            sortResult = -1;
        } else if (a[key] < b[key]) {
            sortResult = 1;
        } else {
            sortResult = 0;
        }

        return sortResult * sortOrder;


    }



}
//When the notes are being loaded from the local storage they get created here
function createNotesFromLocalStorage(array) {
    //Declare the variable that will be created form the information
    let noteObject;


    array.sort(sortingArray("date"))
    localStorage.setItem('notes', JSON.stringify(array));




    //Loop through the array to ad the infor to the object and create the necessary elements
    for (let i = 0; i < array.length; i++) {
        //Declare the object
        noteObject = array[i];


        //Add the information to the object
        let id = noteObject.id;
        let favorite = noteObject.favorite;
        let title = noteObject.title;
        let body = noteObject.body;
        let date = noteObject.date;
        //Create the element that will be put into each <li> element
        let starButton = document.createElement('a');
        let titleh2 = document.createElement('h2');
        let dateh2 = document.createElement('h2');
        let p = document.createElement('p');
        let removeButton = document.createElement('a');
        let toggleButton = document.createElement('a');
        let div = document.createElement('div');
        //Create the <li> element
        let li = document.createElement('li');




        //Add class and content to the buttons 

        //Check to se if the note is marked as favorite
        if (favorite) {
            starButton.classList = 'favorite'
        } else {
            starButton.classList = 'star';
        }

        starButton.textContent = 'Star'

        toggleButton.classList = 'toggle';
        toggleButton.textContent = 'Open';

        removeButton.classList = 'remove-button';
        removeButton.textContent = 'X';

        //Create the text elements and add the class and textcontent
        titleh2.classList = 'note-title';
        titleh2.textContent = 'Title: '
        titleh2.textContent += title;
        titleh2.textContent += ' - '

        dateh2.classList = 'todays-date';
        dateh2.textContent = 'Date: ';
        dateh2.textContent += date.slice(-10);

        //Create the <p> element that will hold the content of the note and give it class and id, 
        //also set the display property of the object to none to hide the element until called on 
        p.classList = 'note-body'
        p.textContent = body;
        p.style.display = 'none';
        p.id = id;

        //Add the class to the <li> and <div> element and set the id of the div
        li.classList = 'note-list-line';
        div.classList = 'wholenote'
        div.id = id;

        //Put the created buttons and the title and date into the <div>
        div.appendChild(starButton);
        div.appendChild(toggleButton);
        div.appendChild(titleh2);
        div.appendChild(dateh2);
        div.appendChild(removeButton);

        //Add the <div> to the <li> element
        li.appendChild(div)
        //Add the <li> to the <ul> element        
        noteList.appendChild(li);
        //Add the note body to the <div> that will show it
    }
}