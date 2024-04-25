import { number } from 'card-validator';
import { el, mount } from 'redom';
import { createSvgElements } from './createElements.js';

export const validateCardNumber = cardNumber => number(cardNumber);

const renderCardLogo = (type, containerId) => {
  const iconUrl = `https://logo.clearbit.com/${type}.com?size=60`;
  const logoImg = el('img', {
    src: iconUrl,
    alt: `${type} logo`,
    class: 'ccicon',
  });

  const container = document.getElementById(containerId);

  if (container) {
    container.innerHTML = '';
    mount(container, logoImg);
  }
};

export const displayCardBrandLogo = () => {
  const cardNameInput = document.getElementById('name');
  const cardNumberInput = document.getElementById('cardnumber');
  const expirationInput = document.getElementById('expirationdate');
  const securityCodeInput = document.getElementById('securitycode');

  const cardNumber = cardNumberInput.value || 'XXXX XXXX XXXX XXXX';
  const cardName = cardNameInput.value || 'Name Surname';
  const expiration = expirationInput.value || 'MM/YY';
  const securityCode = securityCodeInput.value || 'XXX';

  const cardTypeToColor = {
    'visa': 'lightblue',
    'mastercard': 'lime',
    'american-express': 'orange',
    'discover': 'cyan',
    'jcb': 'yellow',
    'unionpay': 'purple',
    'maestro': 'red',
    'mir': 'green',
  };

  const validationResult = validateCardNumber(cardNumber);
  const type = validationResult?.card?.type;
  console.log('type: ', type);

  if (type) {
    const color = cardTypeToColor[type] ?? 'grey';
    const { creditCard } =
      createSvgElements(color, cardNumber, cardName, expiration, securityCode);
    const oldSvgContainer = document.querySelector('.container');
    oldSvgContainer.innerHTML = '';
    mount(oldSvgContainer, creditCard);

    renderCardLogo(type, 'ccsingle');
    renderCardLogo(type, 'ccicon');
  } else {
    const ccsingle = document.getElementById('ccsingle');
    const ccicon = document.getElementById('ccicon');
    ccsingle.innerHTML = 'logo';
    ccicon.innerHTML = '';

    const { creditCard } =
      createSvgElements('grey', cardNumber, cardName, expiration, securityCode);
    const oldSvgContainer = document.querySelector('.container');
    oldSvgContainer.innerHTML = '';
    mount(oldSvgContainer, creditCard);
  }
};
