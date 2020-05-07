import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Table from '../containers/table';

function getNameFromId(id, barbers) {
  const barberName = barbers.find(barber => barber.id === id);
  return barberName.name;
}

function Booking({ barbers }) {
  const [booking, setBooking] = useState(null);
  const [bks, setBks] = useState(null);

  async function fetchData() {
    return axios
      .get('https://antoniobarberapi.herokuapp.com/show', {
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
      for (let i = 0; i < booking.length; i += 1) {
        const jsDate = new Date(booking[i].book_time);

        const year = jsDate.getFullYear();
        const day = jsDate.getDate();
        const month = jsDate.getMonth() + 1;

        const date = `${year}/${month}/${day}`;
        const hour = jsDate.getHours();

        array.push({
          id: booking[i].id,
          date,
          hour,
          barberId: booking[i].barber_id,
        });
      }

      setBks(
        array.map(bookings => (
          <Table
            key={bookings.id}
            date={bookings.date}
            hour={bookings.hour}
            barber={getNameFromId(bookings.barberId, barbers)}
          />
        )),
      );
    }
  }, [booking, barbers]);
  if (bks !== []) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hour</th>
              <th>Barber Name</th>
            </tr>
          </thead>
          <tbody>{bks}</tbody>
        </table>
      </>
    );
  }
  return <p>No appointments for this user</p>;
}

function mapStateToProps(state) {
  return {
    barbers: state.barber,
  };
}
Booking.propTypes = {
  barbers: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps)(Booking);
