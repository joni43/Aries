function openSlide() {
    document.querySelector('#folderSlide').className = 'folder-slide-open';
    
    event.preventDefault();
}

function closeSlide() {
    document.querySelector('#folderSlide').className = 'folder-slide-close';

    event.preventDefault();
}