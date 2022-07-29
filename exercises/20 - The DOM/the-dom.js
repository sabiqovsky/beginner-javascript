// const p = document.querySelector('p');
// const pAll = document.querySelectorAll('p')
// console.log(p);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList);

// pizzaList.textContent = `${pizzaList.textContent} %`;
// pizzaAdd = document.createElement('div')
// pizzaList.insertAdjacentElement('afterbegin', pizzaAdd);
// pizzaList.insertAdjacentText('beforebegin', '$')
// pizzaList.insertAdjacentText('beforebegin', '$')

const pic = document.querySelector('.cool');
pic.classList.add('open');
console.log(pic);

function toggling() {
    pic.classList.toggle('rotate');
}
pic.addEventListener('click', toggling)

const custom = document.querySelector('.custom')
console.log(custom);

function customData() {

}
