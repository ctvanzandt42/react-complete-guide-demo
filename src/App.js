import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: "Curtis", age: 26 },
            { name: "Hannah", age: 28 },
            { name: "Blitz", age: 4 }
        ],
        otherState: "some other value"
    }

    switchNameHandler = () => {
        this.setState({
            people: [
                { name: "Curtis V", age: 26 },
                { name: "Hannah V", age: 28 },
                { name: "Blitz V", age: 4 }
            ]})
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
                <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Crocheting</Person>
                <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
            </div>
        );
    }
}

export default App;
