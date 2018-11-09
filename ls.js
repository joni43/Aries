var quill = new Quill('#editor', {
  modules: {
    toolbar: false    // Snow includes toolbar by default
  },
  theme: 'snow'
});



document.getElementById("heading").innerHTML =
localStorage["Title"]
