import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

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
