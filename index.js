import { createElements } from './modules/createElements';
import { initDatepicker } from './modules/datepicker';
import { addListeners } from './modules/listeners';

document.addEventListener('DOMContentLoaded', () => {
  const elements = createElements();
  addListeners(elements);
  initDatepicker(elements.inputDate, elements.cardDate);
});
