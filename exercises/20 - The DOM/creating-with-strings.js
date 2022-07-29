console.log('It works!');

const width = 1000;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `This is the image description`;
const myHtml = 
`
    <div>
        <img src="${src}" alt="${desc}" />
    </div>
`;

// Turn a string to DOM
const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);