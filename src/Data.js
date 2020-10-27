import React from 'react';
import './Data.css';

export default function Data(pr){
  return(
    <td
    onClick={() => {
      let newValue = prompt("Enter an activity:\n");
      if(newValue !== null){
        pr.changeData(newValue, pr.row, pr.col);
      }
    }}>
      {pr.data}
    </td>
  );
}
