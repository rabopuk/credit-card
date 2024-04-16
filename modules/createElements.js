import { el, setChildren } from 'redom';

export const createElements = () => {
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

  setChildren(wrapper, [card]);
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

  return {
    wrapper,
    card,
    secure,
    creditCard,
    cardNumber,
    cardPersonal,
    cardName,
    cardDate,
    form,
    inputWrapHolder,
    holderLabel,
    inputHolder,
    inputWrapNumber,
    numberLabel,
    inputNumber,
    inputWrapDate,
    dateLabel,
    inputDate,
    inputWrapCvv,
    cvvLabel,
    inputCvv,
    formButton,
  };
};
