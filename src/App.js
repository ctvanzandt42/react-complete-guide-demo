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

    deletePersonHandler = (personIndex) => {
        const people = this.state.people;
        people.splice(personIndex, 1);
        this.setState({people: people});
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

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.people.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
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