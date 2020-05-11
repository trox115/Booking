import React, { useState, useEffect, useCallback, useRef } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { addMonths, setHours, setMinutes } from 'date-fns';
import createBooking from '../api/AllApi';

import 'react-datepicker/dist/react-datepicker.css';

function Calendar({ history, ...props }) {
  let blockdays = [];
  const groupedData = useRef(null);
  const { barberId, userId, dateTime } = props;
  const blockHours = [];
  const all = useRef(null);

  const cToObject = useCallback(
    bk => {
      if (bk !== null) {
        groupedData.current = bk.reduce((results, item) => {
          if (item.barber_id === barberId) {
            const jsDate = new Date(item.book_time);

            const year = jsDate.getFullYear();
            const day = jsDate.getDate();
            const month = jsDate.getMonth() + 1;

            const newDate = `${year}/${month}/${day}`;
            const hour = jsDate.getHours();
            // eslint-disable-next-line no-param-reassign
            results[newDate] = results[newDate] || [];
            results[newDate].push(hour);
            // eslint-disable-next-line no-param-reassign
            results[item.date] = results[item.date] || [];
            results[item.date].push(item.hour);
          }

          return results;
        }, {});
      }
      for (let i = 0; i < Object.keys(groupedData.current).length; i += 1) {
        if (Object.values(groupedData.current)[i].length >= 8) {
          blockdays.push(new Date(Object.keys(groupedData.current)[i]));
        }
      }
      all.current = groupedData;
      return groupedData;
    },
    [barberId, blockdays],
  );

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(
    setHours(setMinutes(new Date(), 0), 8),
  );

  useEffect(() => {
    cToObject(dateTime);
    const novaDaata = new Date(startDate);
    const year = novaDaata.getFullYear();
    const month = novaDaata.getMonth() + 1;
    const day = novaDaata.getDate();
    const newDate = `${year}/${month}/${day}`;

    const allBokkings = all.current.current[newDate];
    if (allBokkings) {
      for (let i = 0; i < allBokkings.length; i += 1) {
        blockHours.push(setHours(setMinutes(new Date(), 0), allBokkings[i]));
      }
    }
  }, [blockdays, blockHours, cToObject, dateTime, all, startDate, groupedData]);

  function onSubmit(event) {
    event.preventDefault();
    const finalBooking = setHours(
      setMinutes(new Date(startDate), 0),
      startTime.getHours(),
    );
    createBooking(userId, barberId, finalBooking)
      .then(() => {
        history.push('/bookings');
      })
      .catch(error => error);
  }

  function handleChange(e) {
    setStartDate(e);
    blockdays = [];
  }
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
Calendar.propTypes = {
  barberId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  dateTime: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Calendar;
