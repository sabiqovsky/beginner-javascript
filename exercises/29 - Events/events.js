const butts = document.querySelector('.button');
const hooray = document.querySelector('.hooray');
const buyButtons = document.querySelectorAll('.buy');

function handleClick() {
    return alert('Hey Jude!');
}

const hoorayFn = () => {
    console.log('Hooray!');
}

butts.addEventListener('click', function name() {
    console.log('It works...');
});

hooray.addEventListener('click', hoorayFn);

// // Anonymous Func
// buyButtons.forEach(function(buyButton) {
//     console.log('Buy this item');
//     buyButton.addEventListener('click', function() {
//         alert('Go buy...');
//     });
// });

// // Arrow Func 
// buyButtons.forEach((buyButton) => {
//     buyButton.addEventListener('click', () => {
//         alert('Go Buy...');
//     })
// })

function handleBuyButtons(event) {
    console.log('Buy item.');
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtons)
});

window.addEventListener('click', event => {
        console.log(event);
        console.log(event.target);
        event.stopPropagation();
});

const picEl = document.querySelector('.photo');

picEl.addEventListener('mouseover', (e) => {
    console.log(e.target);
    picEl.classList.add('hovered');
    picEl.src = 'https://picsum.photos/600'
});

picEl.addEventListener('mouseleave', (e) => {
    console.log(e);
    picEl.classList.remove('hovered');
    img = document.querySelector('img');
    picEl.classList.remove('photo')
    picEl.src = img.src;
});

