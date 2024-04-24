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

  let currentCardType = null;

  cardNumberInput.addEventListener('input', e => {
    handleCardNumberInput(e);

    // const ccsingle = document.getElementById('ccsingle');

    const cardNumber = e.target.value;
    const validationResult = validateCardNumber(cardNumber);
    const type = validationResult?.card?.type;

    if (type && type !== currentCardType) {
      currentCardType = type;
      displayCardBrandLogo(cardNumber);
    } else if (!type) {
      currentCardType = null;
      displayCardBrandLogo(cardNumber);
    }

    // if (validationResult.card && validationResult.card.type) {
    //   displayCardBrandLogo(cardNumber);
    // } else {
    //   ccsingle.innerHTML = 'logo';
    // }
  });

  securityCodeInput.addEventListener('input', handleSecurityCodeInput);

  securityCodeInput.addEventListener('click', () => {
    creditcard.classList.toggle('flipped');
  });

  creditcard.addEventListener('click', () => {
    creditcard.classList.toggle('flipped');
  });
};
