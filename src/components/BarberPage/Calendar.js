import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths, setHours, setMinutes } from 'date-fns';
import createBooking from '../../api/AllApi';

import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ ...props }) {
  console.log(props);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(
    setHours(setMinutes(new Date(), 0), 8),
  );
  function onSubmit(event) {
    event.preventDefault();
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const day = startDate.getDay();
    const newDate = `${year}/${month}/${day}`;
    const hour = startTime.getHours();
    console.log(hour);
    console.log(newDate);
    createBooking(newDate, hour);
  }
  return (
    <form onSubmit={onSubmit}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 3)}
      />
      <DatePicker
        selected={startTime}
        onChange={time => setStartTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 8),
          setHours(setMinutes(new Date(), 0), 9),
          setHours(setMinutes(new Date(), 0), 10),
          setHours(setMinutes(new Date(), 0), 11),
          setHours(setMinutes(new Date(), 0), 12),
          setHours(setMinutes(new Date(), 0), 14),
          setHours(setMinutes(new Date(), 0), 15),
          setHours(setMinutes(new Date(), 0), 16),
          setHours(setMinutes(new Date(), 0), 17),
        ]}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <button type="submit" onSubmit="handleSubmit">
        Book now
      </button>
    </form>
  );
}

export default Calendar;
