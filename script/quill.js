// quill.js
// Quill documentation: https://quilljs.com/

// Variabeln toolbarOptions används i quill-konstruktorn
// Anger vad som ska ingå i tool-bar 
// Tool-bar funktionaliteten finns redan i quills biblotek.
<<<<<<< HEAD



=======
>>>>>>> 85d63a3fcc0c93dddbd0ee724f579c4634c85c02

let toolbarOptions = [
  
  ['bold', 'italic', 'underline', 'strike' ],
  [{ 'size': ['small', false, 'large', 'huge', 'h1'] }, ],
  [ 'link', 'blockquote', 'code-block', 'image' ],
<<<<<<< HEAD
  [{ 'color': [] }, { 'background': [] }, { list: 'ordered' }, { list: 'bullet' } ],
  
=======
  [{ 'color': [] }, { 'background': [] }, { list: 'ordered' }, { list: 'bullet' } ]
>>>>>>> 85d63a3fcc0c93dddbd0ee724f579c4634c85c02
];

// Konstruktor, skapar ett objekt av klassen Quill
// med parametrar som är fördefinierade i Quill-bibloteket.
// targets ID editor (<div id="editor">)
let quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions, },
  placeholder: 'Skriv något här...',
  theme: 'snow'
});

