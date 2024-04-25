import { displayCardBrandLogo, validateCardNumber } from './cardValidation.js';
import {
  handleCardNumberInput,
  handleNameInput,
  handleSecurityCodeInput,
} from './handlers.js';

export const initListeners = () => {
  const nameInput = document.getElementById('name');
  const cardNumberInput = document.getElementById('cardnumber');
  const securityCodeInput = document.getElementById('securitycode');

  nameInput.addEventListener('input', handleNameInput);

  let currentCardType = null;

  cardNumberInput.addEventListener('input', e => {
    handleCardNumberInput(e);

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
  });

  securityCodeInput.addEventListener('input', handleSecurityCodeInput);

  document.addEventListener('click', ({ target }) => {
    const container = target.closest('.container');
    const securitycode = target.closest('#securitycode');
    const creditcard = document.querySelector('.creditcard');

    if (securitycode || container) {
      creditcard.classList.toggle('flipped');
    }
  });
};
