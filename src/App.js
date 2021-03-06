import React, {Component} from 'react';
import classes from './app.module.css';
import Person from './Person/Person';

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
        let btnClass = [classes.Button];

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

            btnClass.push(classes.Red);
        }

        const assignedClasses = [];
        if (this.state.people.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.people.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I am a React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;