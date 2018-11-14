// localStorage detection
function supportsLocalStorage() {
    return typeof(Storage)!== 'undefined';
  }
  
  // Run the support check
  if (!supportsLocalStorage()) {
    // No HTML5 localStorage Support
  } else {
    // HTML5 localStorage Support
  }
  
  localStorage.setItem('display_name', 'somevalue');
  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],  
        ['link', 'blockquote', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
         [{ 'align': [] }],
  
    ['clean']
      ]
    },
    placeholder: 'Begin writing your story here...',
    theme: 'snow'
  });
  // Store accumulated changes
  var change = new Delta();
  quill.on('text-change', function(delta) {
    change = change.compose(delta);
  });
  
  // Save periodically
  setInterval(function() {
    if (change.length() > 0) {
      console.log('Saving changes', change);
      /* 
      Send partial changes
      $.post('/your-endpoint', { 
        partial: JSON.stringify(change) 
      });
      
      Send entire document
      $.post('/your-endpoint', { 
        doc: JSON.stringify(quill.getContents())
      });
      */
      change = new Delta();
    }
  }, 5*1000);
  
  // Check for unsaved data
  window.onbeforeunload = function() {
    if (change.length() > 0) {
      return 'There are unsaved changes. Are you sure you want to leave?';
    }
  }
  
  var form = document.querySelector('form');
  form.onsubmit = function() {
    // Populate hidden form on submit
    var about = document.querySelector('input[name=about]');
    about.value = JSON.stringify(quill.getContents());
    
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());
    
    document.forms["myform"].submit();
    // No back end to actually submit to!
    alert('Open the console to see the submit data!')
    return false;
  };
  