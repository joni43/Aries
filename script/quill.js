// quill.js
// Quill documentation: https://quilljs.com/

// The toolbarOptions variable is used in the quill constructor
// Indicates what should be included in the toolbar
// Toolbar functionality is already in quill library.

let toolbarOptions = [
  
  ['bold', 'italic', 'underline', 'strike'],
  [ 'link', 'blockquote', 'code-block', 'image' ],
  [{ 'color': [] }, { 'background': [] }, { list: 'ordered' }, { list: 'bullet' } ],
  [{ 'header': [1, 2, 3, false] }]
];

// Constructor, creates an object of the class Quill
// with parameters predefined in the Quill library.
// targets ID editor (<div id="editor">)
let quill = new Quill('#editor', {
  modules: { toolbar: toolbarOptions, },
  placeholder: 'Skriv något här...',
  theme: 'snow'
});

