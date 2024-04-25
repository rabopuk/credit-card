/* eslint-disable max-len */
import { createElements, createSvgElements } from './modules/createElements.js';
import { initDatepicker } from './modules/datePicker.js';
import { initListeners } from './modules/listeners.js';


document.addEventListener('DOMContentLoaded', () => {
  const { paymentTitle, formContainer } = createElements();
  const { container } = createSvgElements();

  document.body.append(paymentTitle, container, formContainer);
  // mount(document.body, [paymentTitle, container, formContainer]);

  const expirationDateInput = document.getElementById('expirationdate');
  const svgexpire = document.getElementById('svgexpire');

  initDatepicker(expirationDateInput, svgexpire);
  initListeners();
});
