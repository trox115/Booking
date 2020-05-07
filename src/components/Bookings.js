import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../containers/table';

function Booking() {
  const [booking, setBooking] = useState(null);
  const [bks, setBks] = useState(null);
  async function fetchData() {
    return axios
      .get('http://localhost:3001/show', {
        withCredentials: true,
      })
      .then(response => {
        const { data } = response;
        setBooking(data);
      });
  }
  useEffect(() => {
    if (booking === null) {
      fetchData();
    } else {
      const array = [];
      for (let i=0; i<booking.length;i+=1){
        const jsDate = new Date(booking[i].book_time)
           
          const year = jsDate.getFullYear();
    const day = jsDate.getDate();
        const month = jsDate.getMonth() + 1;

    const date = `${year}/${month}/${day}`;
    const hour = jsDate.getHours();
        array.push({id:booking[i].id, date, hour})
      }
      setBks(
        array.map(bookings => (
          <Table key={bookings.id} date={bookings.date} hour={bookings.hour} />
        )),
      );
    }
  }, [booking]);
  if (bks !== []) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>hour</th>
            </tr>
          </thead>
          <tbody>
          {bks}
          </tbody>
        </table>
      </>
    );
  }
  return <p>No appointments for this user</p>;
}

export default Booking;
