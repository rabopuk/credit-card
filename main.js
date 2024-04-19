/* eslint-disable max-len */
import { createElements } from './modules/createElements.js';
import { initDatepicker } from './modules/datePicker.js';
import { initListeners } from './modules/listeners.js';


document.addEventListener('DOMContentLoaded', () => {
  createElements();

  const expirationDateInput = document.getElementById('expirationdate');
  const svgexpire = document.getElementById('svgexpire');

  initDatepicker(expirationDateInput, svgexpire);
  initListeners();
});
