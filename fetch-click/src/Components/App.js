import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = "https://randomuser.me/api/?results=1"

class App extends Component {
  state = {
    users: []
  }

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Błąd!!!")
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results
        this.setState(prevState => ({
          users: prevState.users.concat(user)   
        }))
      })
      .catch(error => console.log(error))

  }

  render() {
    const users = this.state.users;

    return (
      <>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </>
    );
  }
}

export default App;
