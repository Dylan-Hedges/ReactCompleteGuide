import React from 'react';
import classes from './Cockpit.css';
//Alternative to <div> - blank wrapping component (no styling) that we put our JSX inside; in React 16.2 you can use "<>" "</>" which achives the same result
import Aux from '../../hoc/Aux_file';


const cockpit = (props) => {
  //String of our App.css classes - Takes our App.css classes and puts them in a list
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = classes.Red;
  }
  //If there are 2 people or less - apply red
  if (props.persons.length <=2){
    assignedClasses.push(classes.red); //['red']
  }
  //If there is 1 person or less - apply bold
  if (props.persons.length <=1){
    assignedClasses.push(classes.bold); //['red', 'bold']
  }
  //"{props.appTitle}" this is passed in from "index.js" -> "app.js" -> "cockpit.js" (under the "(props)" object)
  return (
    <Aux>
      <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button
          className={btnClass}
          onClick={props.clicked}>Switch Name
        </button>
      </div>
    </Aux>
  );
};

export default cockpit;
