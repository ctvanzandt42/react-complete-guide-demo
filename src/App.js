import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: "Miley", age: 27 },
            { name: "Lily", age: 28 },
            { name: "Oliver", age: 24 }
        ],
        otherState: "some other value",
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            people: [
                { name: newName, age: 27 },
                { name: "Lily", age: 28 },
                { name: "Oliver", age: 24 }
            ]})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    nameChangedHandler = (event) => {
        this.setState({
            people: [
                { name: "Miley", age: 27 },
                { name: event.target.value, age: 28 },
                { name: "Oliver", age: 24 }
            ]})
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.people[0].name}
                        age={this.state.people[0].age}/>
                    <Person
                        name={this.state.people[1].name}
                        age={this.state.people[1].age}
                        click={this.switchNameHandler.bind(this, "Miley!!!")}
                        changed={this.nameChangedHandler}>My Hobbies: Singing</Person>
                    <Person
                        name={this.state.people[2].name}
                        age={this.state.people[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;