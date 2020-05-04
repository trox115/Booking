import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths, setHours, setMinutes } from 'date-fns';
import createBooking from '../../api/AllApi';

import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ ...props }) {
  let blockdays = [];
  let groupedData = null;
  const { userId, barberId } = props;
  const { dateTime } = props;
  const blockHours = [setHours(setMinutes(new Date(), 0), 10)];
  let all = null;
  function cToObject(bk) {
    if (bk !== null) {
      groupedData = bk.reduce((results, item) => {
        results[item.date] = results[item.date] || [];
        results[item.date].push(item.hour);

        return results;
      }, {});
    }
    for (let i = 0; i < Object.keys(groupedData).length; i += 1) {
      if (Object.values(groupedData)[i].length >= 8) {
        blockdays.push(new Date(Object.keys(groupedData)[i]));
      }
    }
    all = groupedData;
    return groupedData;
  }
  console.log(dateTime);
  cToObject(dateTime);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(
    setHours(setMinutes(new Date(), 0), 8),
  );

  useEffect(() => {
    const novaDaata = new Date(startDate);
    const year = novaDaata.getFullYear();
    const month = novaDaata.getMonth() + 1;
    const day = novaDaata.getDate();
    const newDate = `${year}/${month}/${day}`;
    if (all[newDate]) {
      for (let i = 0; i < all[newDate].length; i += 1) {
        blockHours.push(setHours(setMinutes(new Date(), 0), all[newDate][i]));
      }
    }
  }, [blockdays]);

  function onSubmit(event) {
    event.preventDefault();
    const novaDaata = new Date(startDate);
    const year = novaDaata.getFullYear();
    const month = novaDaata.getMonth() + 1;
    const day = novaDaata.getDate();
    const newDate = `${year}/${month}/${day}`;
    const hour = startTime.getHours();
    createBooking(newDate, hour, userId, barberId);
  }

  function handleChange(e) {
    setStartDate(e);
    blockdays = [];
  }
  console.log(props);
  return (
    <form onSubmit={onSubmit}>
      <DatePicker
        selected={startDate}
        onChange={date => handleChange(date)}
        excludeDates={blockdays}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 3)}
        dateFormat="yyyy-M-dd"
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
        excludeTimes={blockHours}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <button type="submit" onSubmit={onSubmit}>
        Book now
      </button>
    </form>
  );
}

export default Calendar;
