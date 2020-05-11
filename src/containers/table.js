import React from 'react';
import PropTypes from 'prop-types';

function Table({ date, hour, barber }) {
  return (
    <tr>
      <td>{date}</td>
      <td>
        {hour}
        :00h
      </td>
      <td>{barber}</td>
    </tr>
  );
}
Table.propTypes = {
  date: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  barber: PropTypes.string.isRequired,
};
export default Table;
