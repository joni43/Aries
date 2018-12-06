function openSlide() {
    document.querySelector('#folderSlide').className = 'folder-slide-open';
    console.log('Open Nav')
    event.preventDefault();
}

function closeSlide() {
    document.querySelector('#folderSlide').className = 'folder-slide-close';
    console.log('Close Nav')
    event.preventDefault();
}