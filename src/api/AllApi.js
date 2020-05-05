import axios from 'axios';

const baseUrl = 'https://antonio-barber-api.herokuapp.com/barbers';

export function getBarbers() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response)
    .catch(erro => erro);
}

export default function createBooking(date, time, user, barber) {
  return axios
    .post(
      'https://antonio-barber-api.herokuapp.com/bookings',
      {
        booking: {
          date,
          hour: time,
          user_id: user,
          barber_id: barber,
        },
      },
      { withCredentials: true },
    )
    .then(response => response)
    .catch(response => response);
}

export function getBookings() {
  return axios
    .get('https://antonio-barber-api.herokuapp.com/bookings', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function getMyBookings() {
  return axios
    .get('https://antonio-barber-api.herokuapp.com/show', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

// export default function createBooking(date, time) {
//   const bookings = {
//     booking: {
//       date: date,
//       hour: time,
//     },
//   };
//   return fetch('http://localhost:3001/bookings', {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(bookings),
//   });
// }
