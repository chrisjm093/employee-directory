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
    search: ""
  }

  updateSearch = (search) =>{
    this.setState({ search });

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
          <UserTable users={this.state.users} search={this.state.search} />
      </Container>
    )
  }
}

export default Directory