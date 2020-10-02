// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const tabAppend = document.querySelector('.topics')

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then((res) => {
    let tabbers = res.data.topics
    tabbers.forEach(topic =>{
        let tab2 = tabs(topic)
        tabAppend.appendChild(tab2)
        
    })
    //return tabs(res.data)
})
.catch((drama) => console.log(drama))


function tabs(obj){
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = obj

    tabAppend.appendChild(tab)

    return tab
    
}

