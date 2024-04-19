export const handleNameInput = ({ target }) => {
  const svgname = document.getElementById('svgname');
  const svgnameback = document.getElementById('svgnameback');
  const inputHolder = target;

  if (/[^a-zA-Z\s]/.test(inputHolder.value)) {
    alert('Please use Latin characters only');
  }

  inputHolder.value =
    inputHolder.value.replace(/[^a-zA-Z\s]|(.*\s.*)\s.*/g, '$1');

  const formattedValue = inputHolder.value
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  svgname.textContent = formattedValue || 'Name Surname';
  svgnameback.textContent = formattedValue || 'Name Surname';
};


export const handleCardNumberInput = ({ target }) => {
  const svgnumber = document.getElementById('svgnumber');

  const inputNumber = target;

  if (/[^\d\s]/.test(inputNumber.value.replace(/ /g, ''))) {
    alert('Please enter numbers only');
  }

  inputNumber.value = inputNumber.value.replace(/\D/g, '');

  if (inputNumber.value.length > 16) {
    inputNumber.value = inputNumber.value.slice(0, 16);
  }

  const formattedValue = inputNumber.value.replace(/(\d{4})/g, '$1 ').trim();

  inputNumber.value = formattedValue;
  svgnumber.textContent = formattedValue || 'XXXX XXXX XXXX XXXX';
};


export const handleSecurityCodeInput = ({ target }) => {
  const svgsecurity = document.getElementById('svgsecurity');

  const inputCvv = target;

  if (/\D/.test(inputCvv.value)) {
    alert('Please enter numbers only');
  }

  inputCvv.value = inputCvv.value.replace(/\D/g, '');

  if (inputCvv.value.length > 3) {
    inputCvv.value = inputCvv.value.slice(0, 3);
  }

  svgsecurity.textContent = inputCvv.value || 'XXX';
};
