import React, { useState } from 'react';
import Data from './Data';
import './Table.css';

var initData = JSON.parse(localStorage.getItem('data'));
if(initData === null){
  initData = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
  ];
}


export default function Table(){
  const [data, setData] = useState(initData);
  function changeData(newValue, row, col){
    let d = {};
    Object.assign(d, data);
    d[row][col] = newValue;
    setData(d);
    localStorage.setItem("data", JSON.stringify(data));
  }

  let data_view = [];
  let data_view_row;
  for(let i = 0; i < 7; i++){
    data_view_row = [];
    for(let j = 0; j < 8; j++){
      data_view_row.push(<Data data={data[i][j]} changeData={changeData} row={i} col={j}/>);
    }
    data_view.push(data_view_row);
  }

  return(
    <table>
      <tr>
        <th style={{fontSize:"1.7rem"}}>DT</th>
        <th> 08:00 </th>
        <th> 10:00 </th>
        <th> 12:00 </th>
        <th> 14:00 </th>
        <th> 16:00 </th>
        <th> 18:00 </th>
        <th> 20:00 </th>
        <th> 22:00 </th>
      </tr>
      <tr>
        <th> Saturday </th>
        {data_view[0]}
      </tr>
      <tr>
        <th> Sunday </th>
        {data_view[1]}
      </tr>
      <tr>
        <th> Monday </th>
        {data_view[2]}
      </tr>
      <tr>
        <th> Tuesday </th>
        {data_view[3]}
      </tr>
      <tr>
        <th> Wendsday </th>
        {data_view[4]}
      </tr>
      <tr>
        <th> Thursday </th>
        {data_view[5]}
      </tr>
      <tr>
        <th> Fridayday </th>
        {data_view[6]}
      </tr>
    </table>
  );
}
