function BarberReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_BARBER':
      return [...state, ...action.barber];

    default:
      return state;
  }
}

export default BarberReducer;
