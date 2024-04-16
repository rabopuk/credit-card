/* eslint-disable object-curly-spacing */
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { el, setChildren } from 'redom';


document.addEventListener('DOMContentLoaded', () => {
  const wrapper = el('.wrapper');
  const card = el('.card');
  const secure = el('p.secure', 'Secure Checkout');
  const creditCard = el('.credit-card');
  const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
  const cardPersonal = el('.card__personal');
  const cardName = el('span.card__name', 'Name Surname');
  const cardDate = el('span.card__date', 'MM/YY');
  const form = el('form.form', { action: '#' });
  const inputWrapHolder = el('.form__input-wrap.form__input-wrap_holder');
  const holderLabel = el('label.form__label.form__holder-label', 'Card Holder');
  const inputHolder = el('input.input.input__holder',
    { type: 'text', placeholder: 'NAME SURNAME' });
  const inputWrapNumber = el('.form__input-wrap.form__input-wrap_number');
  const numberLabel = el('label.form__label.form__number-label', 'Card Number');
  const inputNumber = el('input.input.input__number',
    { id: 'cardNumber', placeholder: 'XXXX XXXX XXXX XXXX' });
  const inputWrapDate = el('.form__input-wrap.form__input-wrap_date');
  const dateLabel = el('label.form__label.form__date-label', 'Card Expiry');
  const inputDate = el('input.input.input__date',
    { type: 'text', placeholder: 'MM/YY', readonly: true });
  const inputWrapCvv = el('.form__input-wrap.form__input-wrap_cvv');
  const cvvLabel = el('label.form__label.form__cvv-label', 'CVV');
  const inputCvv = el('input.input.input__cvv',
    { type: 'text', placeholder: 'XXX' });
  const formButton = el('button.form__button', 'CHECK OUT');

  setChildren(wrapper, card);
  setChildren(card, [secure, creditCard, form]);
  setChildren(creditCard, [cardNumber, cardPersonal]);
  setChildren(cardPersonal, [cardName, cardDate]);
  setChildren(form, [
    inputWrapHolder,
    inputWrapNumber,
    inputWrapDate,
    inputWrapCvv,
    formButton,
  ]);
  setChildren(inputWrapHolder, [holderLabel, inputHolder]);
  setChildren(inputWrapNumber, [numberLabel, inputNumber]);
  setChildren(inputWrapDate, [dateLabel, inputDate]);
  setChildren(inputWrapCvv, [cvvLabel, inputCvv]);

  document.body.append(wrapper);

  inputHolder.addEventListener('input', () => {
    if (/[^a-zA-Z\s]/.test(inputHolder.value)) {
      alert('Please use Latin characters only');
    }

    inputHolder.value =
      inputHolder.value.replace(/[^a-zA-Z\s]|(.*\s.*)\s.*/g, '$1');

    const formattedValue =
      inputHolder.value
        .toLowerCase()
        .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    cardName.textContent = formattedValue;
  });

  inputNumber.addEventListener('input', () => {
    if (/[^\d\s]/.test(inputNumber.value.replace(/ /g, ''))) {
      alert('Please enter numbers only');
    }

    inputNumber.value = inputNumber.value.replace(/\D/g, '');

    if (inputNumber.value.length > 16) {
      inputNumber.value = inputNumber.value.slice(0, 16);
    }

    const formattedValue = inputNumber.value.replace(/(\d{4})/g, '$1 ').trim();

    inputNumber.value = formattedValue;
    cardNumber.textContent = formattedValue;
  });

  new AirDatepicker(inputDate, {
    view: 'months',
    minView: 'months',
    minDate: new Date(),
    startDate: new Date(),
    dateFormat: date => {
      let month = date.getMonth() + 1;
      const year = date.getFullYear().toString().slice(2);

      if (month < 10) month = '0' + month;

      return `${month}/${year}`;
    },
    onSelect: ({ formattedDate, datepicker }) => {
      inputDate.value = formattedDate;
      cardDate.textContent = formattedDate;
      datepicker.hide();
    },
  });


  inputCvv.addEventListener('input', () => {
    if (/\D/.test(inputCvv.value)) {
      alert('Please enter numbers only');
    }

    inputCvv.value = inputCvv.value.replace(/\D/g, '');

    if (inputCvv.value.length > 3) {
      inputCvv.value = inputCvv.value.slice(0, 3);
    }
  });
});
