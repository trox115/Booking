import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Table from '../containers/table';

function Booking({barbers}) {
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
      for (let i = 0; i < booking.length; i += 1) {
        const jsDate = new Date(booking[i].book_time);

        const year = jsDate.getFullYear();
        const day = jsDate.getDate();
        const month = jsDate.getMonth() + 1;

        const date = `${year}/${month}/${day}`;
        const hour = jsDate.getHours();
        console.log(booking[i])
        array.push({ id: booking[i].id, date, hour, barberId: booking[i].barber_id});
      }
      console.log(array)
      setBks(
        array.map(bookings => (
          <Table key={bookings.id} date={bookings.date} hour={bookings.hour} barber={getNameFromId(bookings.barberId,barbers)}/>
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
function getNameFromId(id,barbers){
      const barberName = barbers.find(barber => barber.id === id);
          console.log(id)
      console.log(barberName)
      return barberName.name
}


function mapStateToProps(state) {
  return{
  barbers: state.barber,
  }
}

export default connect(mapStateToProps)(Booking);
