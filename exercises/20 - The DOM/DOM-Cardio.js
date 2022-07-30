// Make a div

const div = document.createElement('div');

// add a class of wrapper to it

div.classList.add('wrapper');

// put it into the body

document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;

div.innerHTML = ul;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
img.src = 'https://picsum.photos/500/';
img.width = 250;
img.classList.add('cute');
img.alt = `Cute Puppy`;

div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const div2 = `
<div class="myDiv">
    <p>Lorem ipsum</p>
    <p>Lorem ipsum2</p>
</div>
`;

const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', div2);

// add a class to the second paragraph called warning
// remove the first paragraph

const p2 = document.querySelector('.myDiv');
p2.children[1].classList.add('warning');
p2.firstElementChild.remove();

console.log(p2);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
    return `
    <div class="card">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old.</p>
        <button class="remove" type="button">&times Delete</button>
    </div>
    `;
}

console.log(generatePlayerCard('Sabiq', 12, 50));

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
console.log(divCards);

// make 4 player cards using generatePlayerCard

const player1 = generatePlayerCard('Mosto', 15, 125);
const player2 = generatePlayerCard('Abbi', 19, 125);
const player3 = generatePlayerCard('Henna', 19, 125);
const player4 = generatePlayerCard('Gilla', 19, 125);
const cardsAllHTML = player1 + player2 + player3 + player4;

// append those cards to the div

divCards.innerHTML = cardsAllHTML;

// put the div into the DOM just before the wrapper element

div.insertAdjacentElement('beforebegin', divCards);

// select all the buttons!

const buttons = document.querySelectorAll('.remove');

function deleteCard(event) {
    console.log('Deleting cards...');
    const clickedButton = event.target;
    clickedButton.parentElement.remove();
}

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// make out delete function
// loop over them and attach a listener

buttons.forEach(button => button.addEventListener('click', deleteCard));