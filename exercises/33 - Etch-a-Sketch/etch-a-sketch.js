const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// setup canvas
const {width, height} = canvas;

console.log(`Width is ${width}, height is ${height}`);

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

ctx.beginPath();
ctx.moveTo = (x, y);
ctx.lineTo = (x, y);
ctx.stroke();

function draw({ key }) {
    console.log(key);
    ctx.beginPath();
    ctx.moveTo = (x, y)
    x = x - 10;
    y = y - 10;
    ctx.lineTo = (x, y);
    ctx.stroke();
}

function handlekey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({
            key: e.key
        });
        console.log('Handling key...');
    }
}

window.addEventListener('keydown', handlekey);