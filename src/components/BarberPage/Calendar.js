import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar() {
  const [startDate, setStartDate] = useState(null);
  function onChange(event) {
    setStartDate(event);
    const year = event.getFullYear();
    const day = event.getDay();
    const month = event.getMonth();
    const date = `${month}/${day}/${year}`;
    const typedate = new Date(date);
  }
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 3)}
      />
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className="notVisible"
      />
    </>
  );
}

export default Calendar;
