import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/table';

function Booking() {
  const [booking, setBooking] = useState(null);
  const [bks, setBks] = useState(null);
  async function fetchData() {
    await axios
      .get('https://antonio-barber-api.herokuapp.com/show', {
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
      setBks(
        booking.map(bookings => (
          <Table key={bookings.id} date={bookings.date} hour={bookings.hour} />
        )),
      );
    }
  }, [booking]);
  if (bks !== []) {
    console.log(bks);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>hour</th>
            </tr>
          </thead>
          {bks}
        </table>
      </>
    );
  }
  return <p>No appointments for this user</p>;
}

export default Booking;
