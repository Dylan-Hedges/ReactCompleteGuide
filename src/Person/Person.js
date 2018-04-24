//React - we import this so we can call React.createElement() to transform the JSX to HTML; We dont need {Component} because we are not using "class App extends Component" we are only creating a function
import React from 'react';

//Function name is typically lower case and the same name as your file; this JSX syntax is transformed to HTML using "React.createElement()"; {Math.floor(Math.random() * 30)} - if we use { } everything inside will be executed as JS code, if we dont use { } everything inside will be displayed as text; "(props)" - attributes (e.g age="28") passed into this component are known as props (properties);
const person = (props) => {
  //{props.name} - this is the syntax for functional components, for class-based components we use "this.props"; {props.children} - reserved keyword, it returns whatever is inside our component tags "<Person> </Person>", this could be anything (even other React components)
  return (
    <div>
      <p>Hello i am {props.name} i am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
