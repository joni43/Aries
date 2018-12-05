
// quillSwitchSelect är satt till ett fast värde i test syfte.
let quillSwitchSelect = '2';

// quillFunction() kör igenom en switch sats som genererar en quill-konstruktor som antingen är default eller med 
// de olika MUST-mallarna, beroende på val i themeList drop down formen.
function quillFunction(quillSwitchSelect) {

  switch(quillSwitchSelect){

    case '1':
     
    let quillDefault = document.createElement('div');
    quillDefault.setAttribute('id', 'editor');
    document.body.appendChild(quillDefault);
    

    let toolbarOptions = [
        ['bold', 'italic'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }]
    ]
    
    let quill = new Quill('#editor', {
        modules: { toolbar: toolbarOptions },
        theme: 'snow'
      });
     
    break;
     
    case '2':

    let quillChristmas = document.createElement('div');
    quillChristmas.style.color = 'red'
    quillChristmas.setAttribute('id', 'editor');
    document.body.appendChild(quillChristmas);

    let christmasHeading = document.createElement('h1');
    christmasHeading.align = 'center';
    quillChristmas.appendChild(christmasHeading);
    let christmasHeadingText = document.createTextNode("God Jul!");
    christmasHeading.appendChild(christmasHeadingText);
    
    let christmasParagraph = document.createElement('P');
    christmasParagraph.align = 'center';
    quillChristmas.appendChild(christmasParagraph);
    let christmasText = document.createTextNode('Skriv en julhälsning!');
    christmasParagraph.appendChild(christmasText);
    

    let toolbarOptionsChristmas = [
        ['bold', 'italic'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }]
    ]
    
    let quill2 = new Quill('#editor', {
        modules: { toolbar: toolbarOptionsChristmas },
        theme: 'snow'
      });
     
    break;

    case '3':

    let quillEaster = document.createElement('div');
    quillEaster.style.color = 'blue'
    quillEaster.style.background = '#F5F5DC'
    quillEaster.setAttribute('id', 'editor');
    document.body.appendChild(quillEaster);

    let easternHeading = document.createElement('h1');
    easternHeading.align = 'center';
    quillEaster.appendChild(easternHeading);
    let easternHeadingText = document.createTextNode("Glad Påsk!");
    easternHeading.appendChild(easternHeadingText);
    
    let easternParagraph = document.createElement('P');
    easternParagraph.align = 'center';
    quillEaster.appendChild(easternParagraph);
    let easternText = document.createTextNode('Skriv en påskhälsning!');
    easternParagraph.appendChild(easternText);
    

    let toolbarOptionsEaster = [
        ['bold', 'italic'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }]
    ]
    
    let quill3 = new Quill('#editor', {
        modules: { toolbar: toolbarOptionsEaster },
        theme: 'snow'
      });

    break;

    case '4':

    let quillMidsummer = document.createElement('div');
    quillMidsummer.style.color = 'blue';
    quillMidsummer.style.background = '#228B22';
    quillMidsummer.setAttribute('id', 'editor');
    document.body.appendChild(quillMidsummer);

    let quillMidsummerHeading = document.createElement('h1');
    quillMidsummerHeading.align = 'center';
    quillMidsummer.appendChild(quillMidsummerHeading);
    let midsummerHeadingText = document.createTextNode("Glad Midsommar!");
    quillMidsummerHeading.appendChild(midsummerHeadingText);
    
    let quillMidsummerParagraph = document.createElement('P');
    quillMidsummerParagraph.align = 'center';
    quillMidsummer.appendChild(quillMidsummerParagraph);
    let midsummerParagraphText = document.createTextNode('Skriv en midsommarhälsning!');
    quillMidsummerParagraph.appendChild(midsummerParagraphText);


    let toolbarOptionsMidsummer = [
        ['bold', 'italic'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }]
    ]
    
    let quill4 = new Quill('#editor', {
        modules: { toolbar: toolbarOptionsMidsummer },
        theme: 'snow'
    });

    break;
     
    default:
    console.log('Something went wrong!');
     
    break;
     
    }

};

// Kör quillFunction() för att generera en quill editor på sidan även innan användaren har gjort ett val.
window.onload = quillFunction(quillSwitchSelect);

// körs när användaren använder themeList-dropdown:en
document.getElementById("themeList").onchange = function() {
    quillFunction(this.value);
 };