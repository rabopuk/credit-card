import { number } from 'card-validator';
import { el } from 'redom';

export const validateCardNumber = cardNumber => {
  const validationResult = number(cardNumber);
  return validationResult;
};

export const displayCardBrandLogo = (cardNumber) => {
  const ccsingle = document.getElementById('ccsingle');

  const validationResult = validateCardNumber(cardNumber);

  const type = validationResult?.card?.type;
  console.log('type: ', type);

  if (type) {
    const iconUrl = `https://logo.clearbit.com/${type.toLowerCase()}.com?size=60`;

    ccsingle.innerHTML = '';
    const logoImg = el('img.ccicon', {
      src: iconUrl,
      alt: `${type} logo`,
    });

    ccsingle.append(logoImg);
  } else {
    ccsingle.innerHTML = 'logo';
  }
};

// 2345 6789 0123 4560
