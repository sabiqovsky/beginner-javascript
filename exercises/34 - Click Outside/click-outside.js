const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // get image src
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
  console.log(desc);
  console.log(name);
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" 
    alt="${name}">
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    modalOuter.classList.remove('open');
  }
});
