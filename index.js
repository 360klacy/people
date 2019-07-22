
document.addEventListener('DOMContentLoaded', () => {
    console.log(`It's better to burn out than to fade away.`);
});
// create element for name with letters start
// append contatienr and letters to the dom
// create element for new results array 
// create event on the button with each contact
// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const letters = alphabet.split('');
// const alphaContainer = document.querySelector('.letters');
// const newResults = letters.map(letter=>{
//     const el = createElement('button');
userData.results.forEach((result) =>{

    const container = document.querySelector('.container');
    const section = document.createElement('section');
    container.appendChild(section)
    section.classList.add('avatar')
    section.innerHTML =`
    <div class="avatar-image">
        <img src="${result.picture.large}" alt="albert fleming"/>
    </div>
    <div class="avatar-content">
        <h2 class="avatar-header">${result.name.first} ${result.name.last}</h2>
        <div class="avatar-location">
            ${result.location.street}<br/> ${result.location.city} ${result.location.state}<br/>${result.location.postcode}
        </div>
        <ul class="avatar-contact-list">
            <li class="avatar-contact-list-item">
                <a href="${result.email}">✉</a>
            </li>
            <li class="avatar-contact-list-item">
                <a href="${result.cell}">✆</a> 
            </li>
        </ul>
    </div>
    `
})

// })
// create clickable item list for searching
const container = document.querySelector('.container');
const listIndex = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Reset'];
const newEl = document.createElement('div');
document.body.insertBefore(newEl, container);
const catchArray = listIndex.map((letter)=> {
    return `<button class = 'selectedTab'> ${letter} </button>`
})
catchArray.forEach((letter)=>{
    newEl.innerHTML+=letter;
})
const handleClick = (event)=>{
    console.log(event.target)}
const allButtons = document.querySelectorAll('.selectedTab');
    console.log(allButtons);
allButtons.forEach((button)=>{
    button.addEventListener('click', handleClick);
})

// // create container for list items
// const button = document.createElement('button');
// // add buttons to button container
// button.innerHTML= `listIndex`;
// // call helper function to filter data
// // write helper function
// // set innerhtml to each button
// }
// allButtons.addEventListener('click');


// const container = document.querySelector('.container');
// fetch('https://randomuser.me/api/?results=50')
// .then(res => res.json());
// .then (res => {
//     const userData = res.results.map(createPerson).map(createAvatar);
//     userData.forEach( (el) => container.appendChild(el));
// })
// addLetters();
// letterContainer.addEventListener('click', filterListByLetter);



/*
We are going to create an Employee address book.  We will
use the existing "avatar" code to add employees to the screen
1)  Update the JavaScript code to read all of the user data from
    the people.js file and show all the users on the page
2)  Add a filter to the data to only return users whose last
    name start with a given letter
*/