import axios from 'axios';

const baseUrl = 'https://antoniobarberapi.herokuapp.com/barbers';

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
      'https://antoniobarberapi.herokuapp.com/bookings',
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
    .get('https://antoniobarberapi.herokuapp.com/bookings', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function getMyBookings() {
  return axios
    .get('https://antoniobarberapi.herokuapp.com/show', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}

export function isLoggedIn() {
  return axios
    .get('https://antoniobarberapi.herokuapp.com/loggedin', {
      withCredentials: true,
    })
    .then(response => response)
    .catch(erro => erro);
}
export function deleteSession() {
  return axios
    .delete('https://antoniobarberapi.herokuapp.com/logout', { withCredentials: true })
    .then(response => response)
    .catch(erro => erro);
}
