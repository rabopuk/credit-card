export const validateLatinCharacters = input => {
  if (/[^a-zA-Z\s]/.test(input.value)) {
    alert('Please use Latin characters only');
  }
  return input.value.replace(/[^a-zA-Z\s]|(.*\s.*)\s.*/g, '$1');
};

export const validateNumbers = input => {
  if (/[^\d\s]/.test(input.value.replace(/ /g, ''))) {
    alert('Please enter numbers only');
  }
  return input.value.replace(/\D/g, '');
};
