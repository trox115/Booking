import React from 'react';
import PropTypes from 'prop-types';

function Table({ key, date, hour }) {
  return (
    <tbody>
      <tr key>
        <td key={key}>{date}</td>
        <td key={key}>
          {hour}
          :00h
        </td>
      </tr>
    </tbody>
  );
}
Table.propTypes = {
  key: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
};
export default Table;
