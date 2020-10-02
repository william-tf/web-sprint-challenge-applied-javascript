// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
headerAppend = document.querySelector('.header-container')

function Header() {

const headerDiv = document.createElement('div')
const headerLambda = document.createElement('h1')
const headerDate = document.createElement('span')
const headerSpan = document.createElement('span')

headerDiv.classList.add('header')
headerLambda.textContent = 'Lambda Times'
headerSpan.classList.add('temp')
headerSpan.textContent = '98°'
headerDate.classList.add('date')
headerDate.textContent = 'MARCH 28, 2020'


headerAppend.appendChild(headerDiv)
headerDiv.appendChild(headerDate)
headerDiv.appendChild(headerLambda)
headerDiv.appendChild(headerSpan)

return headerDiv
}


Header()