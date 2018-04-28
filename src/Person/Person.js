//React - we import this so we can call React.createElement() to transform the JSX to HTML; We dont need {Component} because we are not using "class App extends Component" we are only creating a function
import React from 'react';

//Functional Component - Use where possible, only renders something to the DOM, doesn't mutate state (containers/class-based components mutate state), this is important when the application gets big, the function name is typically lower case and the same name as your file; this JSX syntax is transformed to HTML using "React.createElement()"; {Math.floor(Math.random() * 30)} - if we use { } everything inside will be executed as JS code, if we dont use { } everything inside will be displayed as text; "(props)" - attributes (e.g age="28") passed into this component are known as props (properties);
const person = (props) => {
  //{props.name} - this is the syntax for functional components, for class-based components we use "this.props" (we use "props" for functional components and "state" for class-based components), in additon to this we cannot call/edit state e.g "this.setState()" as it is not class based component (it does not "extends Component" and as a result does not know the ".setState()" method); {props.children} - reserved keyword, it returns whatever is inbetween our component tags "<Person> </Person>", this could be anything (even other React components); onClick={props.click} - this is a method that was passed in from the App.js App container, this method is passed into the props of this component, we can use the method by accessing the props -> switchNameHandler (by doing this we can change the state via the container, its still not changed in this component)
  return (
    <div>
      <p onClick={props.click}>Hello i am {props.name} i am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
