import React from "react";
import Row from "../Row";
import { Table } from "react-bootstrap";
import SearchForm from "../SearchForm";


function UserTable( props ){

    //props.search
  const filterBySearch = user =>{
    const fullName = `${user.name.first} ${user.name.last}`

    return !props.search || fullName.toLowerCase().includes( props.search.toLowerCase() )
  }
  return(
    
    <Table className="table table-hover">
      <thead>
        <tr>
          
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone #</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          
        </tr>
      </thead>

      <tbody>
      
      {props.users.filter( filterBySearch ).map(user =>{

      return(

        <tr key={ user.id.value }>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{user.location.city}, {user.location.state}</td>
        </tr>

        )})
        }
    
        {/* <Row></Row> */}
      </tbody>
    </Table>
    
  )
}

export default UserTable;