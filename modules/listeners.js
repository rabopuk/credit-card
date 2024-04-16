import { onHolderInput, onNumberInput, onCvvInput } from './handlers';

export const addListeners = elements => {
  elements.inputHolder
    .addEventListener('input', onHolderInput(elements.cardName));
  elements.inputNumber
    .addEventListener('input', onNumberInput(elements.cardNumber));
  elements.inputCvv
    .addEventListener('input', onCvvInput);
};
