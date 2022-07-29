const p = document.createElement('p');
p.textContent = 'I am good';

const img = document.createElement('img')
img.src = 'https://picsum.photos/1000'

const div = document.createElement('div');
div.classList.add('wrapper');

document.body.appendChild(div)

const list = document.createElement('ul');
const li = document.createElement('li');

div.appendChild(list);
list.appendChild(li);
div.appendChild(p);
div.appendChild(img)