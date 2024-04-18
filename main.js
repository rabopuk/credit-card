/* eslint-disable max-len */
import { createElements } from './modules/createElements.js';
import { handleCardNumberInput, handleNameInput, handleSecurityCodeInput, initDatepicker } from './modules/handlers.js';


document.addEventListener('DOMContentLoaded', () => {
  createElements();

  const creditcard = document.querySelector('.creditcard');
  const nameInput = document.getElementById('name');
  const cardNumberInput = document.getElementById('cardnumber');
  const expirationDateInput = document.getElementById('expirationdate');
  const svgexpire = document.getElementById('svgexpire');
  const securityCodeInput = document.getElementById('securitycode');

  nameInput.addEventListener('input', handleNameInput);
  cardNumberInput.addEventListener('input', handleCardNumberInput);
  initDatepicker(expirationDateInput, svgexpire);
  securityCodeInput.addEventListener('input', handleSecurityCodeInput);
  securityCodeInput.addEventListener('click', () => {
    creditcard.classList.toggle('flipped');
  });
});


// const name = document.getElementById("name");
// const cardnumber = document.getElementById("cardnumber");
// const expirationdate = document.getElementById("expirationdate");
// const securitycode = document.getElementById("securitycode");
// const ccicon = document.getElementById("ccicon");
// const ccsingle = document.getElementById("ccsingle");
// const svgname = document.getElementById("svgname");
// const svgnameback = document.getElementById("svgnameback");
// const lightcolor = document.querySelectorAll(".lightcolor");
// const darkcolor = document.querySelectorAll(".darkcolor");
// const creditcard = document.querySelector(".creditcard");

// Что-бы перевернуть карту используйте класс flipped для элемента с классом creditcard

// функция для смены цвета у карточки
// const swapColor = (color) => {
//   lightcolor.forEach((input) => {
//     input.className = "lightcolor " + color;
//   });
//   darkcolor.forEach((input) => {
//     input.className = "darkcolor " + color + "dark";
//   });
// };
