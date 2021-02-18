import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
  
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
`;

class App extends Component {
    state = {
        people: [
            { id: 'asaf1', name: "Miley", age: 27 },
            { id: 'ssasdd', name: "Lily", age: 28 },
            { id: 'asd3', name: "Oliver", age: 24 }
        ],
        otherState: "some other value",
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.people.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.people[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.people];
        persons[personIndex] = person;

        this.setState({people: persons});
    }

    deletePersonHandler = (personIndex) => {
        const people = [...this.state.people];
        people.splice(personIndex, 1);
        this.setState({people: people});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        let persons = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.people.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.people.length <= 2) {
            classes.push('red');
        }
        if (this.state.people.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledButton>
                {persons}
            </div>
        );
    }
}

export default App;