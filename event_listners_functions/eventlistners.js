const noteList = document.querySelector('#noteList');
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