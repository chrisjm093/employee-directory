import React from "react";
import UserTable from "../UserTable";
import API from "../utils/API";
import SearchForm from "../SearchForm";
import {Container, Card} from "react-bootstrap"


class Directory extends React.Component{
  state = {
    name: "",
    role: "",
    manager: "",
    users: [],
    search: "",
    sort: ""
  }
  
  updateSearch = (search) =>{
    this.setState({ search });
  }

  updateSort = (sort) =>{
    this.setState({sort});
  }

  componentDidMount() {
    API
      .getUsers()
      .then( res => this.setState( {users: res.data.results} ))
  }
  render(){
    return (
     <Container>
       <Card body>
        <SearchForm updateSearch ={this.updateSearch} />
        </Card>   
        <h2>Employees</h2>
          <UserTable 
          users={this.state.users} 
          search={this.state.search} 
          sort={this.state.sort}
          updateSort={this.updateSort}
        />
      </Container>
    )
  }
}

export default Directory