import React from "react";
import Row from "../Row";

function Table(){
  return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Employee #</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone #</th>
          <th scope="col">Email</th>
          <th scope="col">Office #</th>
          <th scope="col">Dept</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        <Row></Row>
      </tbody>
    </table>
  )
}

export default Table;