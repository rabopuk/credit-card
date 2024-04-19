import { displayCardBrandLogo, validateCardNumber } from './cardValidation.js';
import {
  handleCardNumberInput,
  handleNameInput,
  handleSecurityCodeInput
} from './handlers.js';

export const initListeners = () => {
  const nameInput = document.getElementById('name');
  const cardNumberInput = document.getElementById('cardnumber');
  const securityCodeInput = document.getElementById('securitycode');
  const creditcard = document.querySelector('.creditcard');

  nameInput.addEventListener('input', handleNameInput);

  cardNumberInput.addEventListener('input', e => {
    handleCardNumberInput(e);
    const cardNumber = e.target.value;
    const validationResult = validateCardNumber(cardNumber);
    console.log('validationResult: ', validationResult);

    // if (validationResult) {
    if (validationResult.isValid) {
      displayCardBrandLogo(cardNumber);
    }
  });

  securityCodeInput.addEventListener('input', handleSecurityCodeInput);

  securityCodeInput.addEventListener('click', () => {
    creditcard.classList.toggle('flipped');
  });

  creditcard.addEventListener('click', () => {
    creditcard.classList.toggle('flipped');
  });
};
