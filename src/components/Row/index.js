import React from "react";
import "./style.css";
import API from "../utils/API"

function Row( props ){
  {props.users.map(user =>{

    return(

    <tr>
      <th scope="row"></th>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.location.city}, {user.location.state}</td>
    </tr>
    
    )})
  }
}

export default Row;