// javascript/javascript.js
// Quill documentation: https://quilljs.com/

// Variabeln toolbarOptions används i quill-konstruktorn
// Anger vad som ska ingå i tool-bar 
// Tool-bar funktionaliteten finns redan i quills biblotek.
let toolbarOptions = [
  ['bold', 'italic'],
  [{ 'size': ['small', false, 'large', 'huge'] }, ],
  [ 'link', 'blockquote', 'code-block', 'image' ],
  [{ 'color': [] }, { 'background': [] }, { list: 'ordered' }, { list: 'bullet' } ] 
]

// Konstruktor, skapar ett objekt av klassen Quill
// med parametrar som är fördefinierade i Quill-bibloteket.
// targets ID editor (<div id="editor-container">)
let quill = new Quill('#editor-container', {
  modules: { toolbar: toolbarOptions, },
  placeholder: 'Skriv något här...',
  theme: 'snow'
});

// saveNote() är en "placeholder" funktion fram tills att 
// projekten (branchen) mergas med local-storage.
// Funktionen saveNote skriven med arrow-syntax
// hämtar innehållet från quill objektet (som skapas av konstruktorn)
// och loggar det till konsolen.

let saveNote = () => {
  console.log(quill.root.innerHTML);
  alert('Texten har loggats till konsolen');
}

// Alternativ syntax till ovanstående funktion

// function saveNote() {
//   console.log(quill.root.innerHTML);
// }
