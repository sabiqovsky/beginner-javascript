const wes = document.querySelector('.wes');
console.log(wes);

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.childNodes);

const paragraph = document.createElement('p');
paragraph.textContent = `I am will be removed`;
document.body.appendChild(paragraph);

paragraph.remove();