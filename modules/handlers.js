import { validateLatinCharacters, validateNumbers } from './validation';

export const onHolderInput = cardName => ({ target }) => {
  const input = target;
  input.value = validateLatinCharacters(input);

  const formattedValue =
    input.value
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  cardName.textContent = formattedValue;
};

export const onNumberInput = cardNumber => ({ target }) => {
  const input = target;
  input.value = validateNumbers(input);

  if (input.value.length > 16) {
    input.value = input.value.slice(0, 16);
  }

  const formattedValue = input.value.replace(/(\d{4})/g, '$1 ').trim();

  input.value = formattedValue;
  cardNumber.textContent = formattedValue;
};

export const onCvvInput = ({ target }) => {
  const input = target;
  input.value = validateNumbers(input);

  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
  }
};
