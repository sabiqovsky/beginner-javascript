console.log('Works');

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');
console.log(terms);
console.log(watch);

function obCallBack(payload) {
  console.log(payload);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('enabling button');
  } else button.disabled = true;
}

const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
