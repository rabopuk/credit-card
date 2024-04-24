import { number } from 'card-validator';
import { el, mount } from 'redom';
import { createSvgElements } from './createElements.js';

export const validateCardNumber = cardNumber => {
  const validationResult = number(cardNumber);
  return validationResult;
};

export const displayCardBrandLogo = cardNumber => {
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

    const { creditCard } = createSvgElements(color);
    const oldSvgContainer = document.querySelector('.container');

    oldSvgContainer.innerHTML = '';
    mount(oldSvgContainer, creditCard);

    const ccsingle = document.getElementById('ccsingle');

    if (ccsingle) {
      const iconUrl = `https://logo.clearbit.com/${type}.com?size=60`;
      const logoImg = el('img.ccicon', {
        src: iconUrl,
        alt: `${type} logo`,
      });

      ccsingle.innerHTML = '';
      mount(ccsingle, logoImg);
    }
  } else {
    const ccsingle = document.getElementById('ccsingle');
    ccsingle.innerHTML = 'logo';

    const { creditCard } = createSvgElements('grey');
    const oldSvgContainer = document.querySelector('.container');

    oldSvgContainer.innerHTML = '';
    mount(oldSvgContainer, creditCard);
  }
};
