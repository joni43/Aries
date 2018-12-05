// quill.js

// Skapar en lokal version av toolbarOptions från Quill-bibloteket
// med egna angivna värden
// Här kan t.ex. namn för rubriker ändras och vilka delar (t.ex. bold- och italic-knappar) som ska ingå i toolbaren.
// toolbarOptions-variablen används sedan i konstruktorn nedan.
let toolbarOptions = [
  ['bold', 'italic'],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'color': [] }, { 'background': [] }]
]

// Konstruktor, skapar ett objekt av klassen Quill
// med parametrar som är fördefinierade i Quill-bibloteket.
// targets ID editor (<div id="editor">)
let quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions },
  theme: 'snow'
});


// Funktionen saveNote skriven med arrow-syntax
// hämtar innehållet från quill objektet (som skapas av konstruktorn)
// och loggar det till konsolen.

// let saveNote = () => {
//   console.log(quill.root.innerHTML);
// }

// Alternativ syntax till ovanstående funktion

// function saveNote() {
//   console.log(quill.root.innerHTML);
// }

// Quill documentation: https://quilljs.com/

// var Font = Quill.import('formats/font');
// // We do not add Aref Ruqaa since it is the default
// Font.whitelist = ['mirza', 'roboto'];
// Quill.register(Font, true);


// var quill2 = new Quill('#editor-container', {
//   modules: {
//     toolbar: '#toolbar-container'
//   },
//   theme: 'snow'
// });
