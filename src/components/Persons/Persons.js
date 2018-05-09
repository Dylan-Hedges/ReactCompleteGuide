import React, {Component} from 'react';
import Person from './Person/Person';

//Previously a Functional Component (dont need to manage state) - In ES6 if your function is on 1 line you can omit the return statement, no need for "=> { return( ); }", we dont need to wrap the code in () as its JS code
//Turns are state into JSX - maps every element in an array into something else, executes a method on every element in an array, takes the value of each element as input, does something to it (e.g turn it into JSX) and returns a new array; (person, index) - passes content of element AND index number to the function, if you use more than one argument in an ES6 arrow function you have to wrap in "()"; key={index} - helps React in deciding what to rerender, whenever we have a list React expects a key, React has a virtual DOM (what the DOM will look like once the methods etc. have been executed) this is compared to the DOM, when differences are found React knows to only rerender those components (keys make it easier for React to identify and compare elements for rerendering)
class Persons extends Component {
    render() {
      return this.props.persons.map( (person, index) => {
        return <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)}
              />
        });
    }
}



export default Persons;
