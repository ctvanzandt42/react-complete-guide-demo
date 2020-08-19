import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

export const App = props => {
    const [ peopleState, setPeopleState ] = useState({
        people: [
            { name: 'Curtis', age: 26 },
            { name: 'Hannah', age: 28 },
            { name: 'Blitz', age: 4 },
        ],
        otherState: "some other value"
    });

    console.log(peopleState);

    const switchNameHandler = () => {
        setPeopleState({
            people: [
                { name: "Curtis V", age: 26 },
                { name: "Hannah V", age: 28 },
                { name: "Blitz V", age: 4 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I am a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={peopleState.people[0].name} age={peopleState.people[0].age}/>
            <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>My Hobbies: Crocheting</Person>
            <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
        </div>
    );
}



export default App;

// state = {
//     people: [
//         { name: "Curtis", age: 26 },
//         { name: "Hannah", age: 28 },
//         { name: "Blitz", age: 4 }
//     ],
//     otherState: "some other value"
// }
//


