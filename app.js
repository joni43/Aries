/*
var notes = [
  {
    id: 0,
    title: 'Matlistan',
    favourite: false,
    content: '<stringify delta from quill>'
  }
]
*/

var editor = new Quill("#editor", {
  theme: "snow"
})

const button = document.querySelector('.mrbutton')
const div = document.createElement('div')

let justTextContent = document.getElementById('text1')
let save = document.getElementById('save')
// document.getElementsByClassName('ql-editor')[0].classList.add("data-id=2")
// document.getElementsByClassName('ql-editor')[0].getAttribute('data-id')
window.onload = function () {
  document.getElementsByClassName('ql-editor')[0].innerHTML = localStorage.getItem('note')
  console.log(localStorage.getItem('note'))
}
save.addEventListener('click', function () {
  var delta = editor.getContents()
  createElement()

  // window.localStorage.setItem('delta', JSON.stringify(delta))
  console.log('TestDELTA', delta)
  let ls = JSON.parse(window.localStorage.getItem('delta'))
  console.log('TEST', ls)
})

editor.on('text-change', function () {
  let delta = editor.getContents()
  let text = editor.getText()
  // let justHtml = editor.root.innerHTML

  //console.log(JSON.stringify(delta))
  console.log(document.getElementsByClassName('ql-editor')[0].innerHTML)
  localStorage.setItem('note', document.getElementsByClassName('ql-editor')[0].innerHTML)
  console.log(text)
  justTextContent.innerHTML = text
})

// set on load for testing
//  window.localStorage.setItem(this.delta, JSON.stringify(this.delta));
//     save.addEventListener('click', function() {
//       var ls = JSON.parse(window.localStorage.getItem(this.delta));
//       console.log('TEST', ls)
//     })

function createElement () {
  // create a new div element
  let newDiv = document.createElement('div')

  // and give it some content
  let newContent = editor.container.innerText

  // add the text node to the newly created div
  newDiv.append(newContent)

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById('text1')
  newDiv.setAttribute('id', 'Div1')
  currentDiv.parentNode.insertBefore(newDiv, currentDiv)
}
