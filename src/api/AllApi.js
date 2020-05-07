import axios from 'axios';

const baseUrl = 'http://localhost:3001/barbers';

export function getBarbers() {
  return axios
    .get(baseUrl, { withCredentials: true })
    .then(response => response.data)
    .catch(erro => erro);
}

// eslint-disable-next-line camelcase
export default function createBooking(user, barber, book_time) {
  return axios
    .post(
      'http://localhost:3001/bookings',
      {
        booking: {
          user_id: user,
          barber_id: barber,
          book_time,
        },
      },
      { withCredentials: true },
    )
    .then(response => response)
    .catch(response => response);
}

export function getBookings() {
  return axios
    .get('http://localhost:3001/bookings', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function getMyBookings() {
  return axios
    .get('http://localhost:3001/show', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function isLoggedIn() {
  return axios
    .get('http://localhost:3001/loggedin', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}
export function deleteSession() {
  return axios
    .delete('http://localhost:3001/logout', { withCredentials: true })
    .then(response => response)
    .catch(erro => erro);
}
