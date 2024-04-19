import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export const handleNameInput = (event) => {
  const svgname = document.getElementById('svgname');
  const svgnameback = document.getElementById('svgnameback');
  const inputHolder = event.target;

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


export const handleCardNumberInput = (event) => {
  const svgnumber = document.getElementById('svgnumber');

  const inputNumber = event.target;

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


export const initDatepicker = (inputDate, cardDate) => {
  new AirDatepicker(inputDate, {
    view: 'months',
    minView: 'months',
    minDate: new Date(),
    startDate: new Date(),
    dateFormat: 'MM/yy',
    multipleDatesSeparator: '/',
    onSelect: ({ formattedDate, datepicker }) => {
      inputDate.value = formattedDate;
      cardDate.textContent = formattedDate;
      datepicker.hide();
    },
  });
};


export const handleSecurityCodeInput = (event) => {
  const svgsecurity = document.getElementById('svgsecurity');

  const inputCvv = event.target;

  if (/\D/.test(inputCvv.value)) {
    alert('Please enter numbers only');
  }

  inputCvv.value = inputCvv.value.replace(/\D/g, '');

  if (inputCvv.value.length > 3) {
    inputCvv.value = inputCvv.value.slice(0, 3);
  }

  svgsecurity.textContent = inputCvv.value || 'XXX';
};
