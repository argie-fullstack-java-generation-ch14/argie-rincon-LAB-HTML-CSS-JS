const h1 = document.querySelector('h1');

const counter = 3;
const countdown = document.createElement('div');

countdown.innerHTML = `
  <p class="extra-p">El texto de arriba 👆 cambiará en ⏳...
  <b id="number">${counter}</b>
  </p>
`;

h1.after(countdown);
const number = document.getElementById('number');

setTimeout(() => {
  number.innerText = "2";
}, 1000);

setTimeout(() => {
  number.innerText = "1";
}, 2000);

const h3 = document.querySelector('h3');

setTimeout(() => {
  h1.innerText = "Adiós";
  h1.style.color = "red";
  h3.style.color = "orange";
  countdown.remove();
}, 3000);

const warning = document.createElement('div');
warning.innerHTML = `
  <p class="extra-p">HAZ CLIC EN EL TEXTO DE ARRIBA PARA QUE CAMBIE SU COLOR A MARRON</b>
  </p>
`;

const h5 = document.querySelector('h5');
h5.after(warning);

h5.addEventListener('click', () => {
  h5.style.color = "brown";
});