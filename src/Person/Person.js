import React from "react";

export const Person = ( props ) => (
    <React.Fragment>
        <div>
            <p>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    </React.Fragment>
);

export default Person;