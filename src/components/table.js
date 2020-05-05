import React, { useEffect, useState } from 'react';

function Table({ key, date, hour }) {
  return (
    <tbody>
      <tr key>
        <td key={key}>{date}</td>
        <td key={key}>{hour}</td>
      </tr>
    </tbody>
  );
}

export default Table;
