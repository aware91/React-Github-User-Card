import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard"
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // name = "",
      // username = "",
      // location = "",
      // profile = "",
      // followers= "",
      // following= "",
      // bio = ""
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/aware91')
    .then(res => res.json())
    .then(data => {
      this.setState({ user: data});
      console.log(this.state.user);
    });
    fetch('https://api.github.com/users/aware91/followers')
      .then(res2 => res2.json())
      .then(data => {
        this.setState({ followers: data });
        console.log(this.state.followers);
      })
    }

  render() {
  return (
    <div>
      <div>
        <Title>Github User Cards with Class Components</Title>
        <UserCard users={this.state.user} followers={this.state.followers} />
      </div>
    </div>
  );
};
}

export default App;