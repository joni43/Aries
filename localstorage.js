console.log("Works!");

var quill = new Quill('#editor', {
  modules: {
    toolbar: false    // Snow includes toolbar by default
  },
  theme: 'snow'
});


myStorage = window.localStorage;

localStorage.setItem("#heading","#content");

var heading = localStorage.getItem("heading");
var text = localStorage.getItem("content");

document.getElementById("heading").innerHTML =
localStorage["Title"] || "Just Write"; //default Text
document.getElementById("content").innerHTML =
localStorage["Text"] || "This text is automatically saved every second"; //default Text

setInterval(function) { // saving the HTML to the div

  localStorage["Title"] = document.getElementById("heading").innerHTML;
  localStorage["Text"] = document.getElementById("content").innerHTML;

}, 1000);

}
