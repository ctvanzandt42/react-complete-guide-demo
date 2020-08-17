import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Curtis" age="26" />
        <Person name="Hannah" age="28">My Hobbies: Crocheting</Person>
        <Person name="Blitz" age="4"/>
      </div>
    );
  }
}

export default App;
