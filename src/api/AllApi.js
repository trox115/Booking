import axios from 'axios';

const baseUrl = 'http://localhost:3001/barbers';

export function getBarbers() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response.data)
    .catch(erro => erro);
}

export default function createBooking(date, time) {
  return axios
    .post(
      'http://localhost:3001/bookings',
      {
        booking: {
          date,
          hour: time,
        },
      },
      { withCredentials: true },
    )
    .then(response => response)
    .catch(response => response);
}

export function getBookings() {
  return axios
    .get('http://localhost:3001/bookings', { withCredentials: true })
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
