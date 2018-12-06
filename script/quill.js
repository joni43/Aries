// quill.js
// Quill documentation: https://quilljs.com/

// Variabeln toolbarOptions används i quill-konstruktorn
// Anger vad som ska ingå i tool-bar 
// Tool-bar funktionaliteten finns redan i quills biblotek.

let toolbarOptions = [
  
  ['bold', 'italic', 'underline', 'strike'],
  [ 'link', 'blockquote', 'code-block', 'image' ],
  [{ 'color': [] }, { 'background': [] }, { list: 'ordered' }, { list: 'bullet' } ],
  [{ 'header': [1, 2, 3, false] }]
];

// Konstruktor, skapar ett objekt av klassen Quill
// med parametrar som är fördefinierade i Quill-bibloteket.
// targets ID editor (<div id="editor">)
let quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions, },
  placeholder: 'Skriv något här...',
  theme: 'snow'
});

