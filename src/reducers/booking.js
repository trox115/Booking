function BookingReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_BOOKING':
      return [...state, ...action.booking.data];

    default:
      return state;
  }
}

export default BookingReducer;
