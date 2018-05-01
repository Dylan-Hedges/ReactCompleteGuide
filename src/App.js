import React, { Component } from 'react';
import './App.css';
//Components should always start with an uppercase letter
import Person from './Person/Person'
//Creates a JS class and inherit from the Component class (from the 'react' library);
class App extends Component {
	//"state" - props are set and passed in from the outside into a component (e.g name, age -> Person component), state is only available inside the component and only available in components that "extends Component" (not availble in functional components); "persons" - we create a property consistsing of an array inside the state object (properties are essentially variables attached to the class), when we change the state the DOM is re-rendered
	state = {
		persons: [
			{ name: 'John', age: 28},
			{ name: 'Tim', age: 24},
			{ name: 'Tom', age: 29}
		],
		otherstate: 'This will not be changed by the onClick event handler',
		showPersons: false
	}

//Deletes clicked on person
deletePersonHandler = (personIndex) => {
	//Creates a new "persons array" - Fetches the persons array and stores in a variable, "..." the spread JS operator takes the elements from the "persons" piece of state (an array), turns it into a list of elements, then adds it to a new array ("const persons"), it is important we use this method (create a copy first) and not mutate the original state directly as it can cause isses when developing our app
	const persons = [...this.state.persons];
	//Removes 1 element from the new array
	persons.splice(personIndex, 1);
	//Updates the state ("persons") with the new array - component is rerendered
	this.setState({persons: persons})
}

//Changes the name when typing in the input field - "(event)" - default object that is automatically passed into the function by React; "event.target.value" - the input the user has typed
nameChangedHandler = (event) => {
	this.setState({
		persons: [
			{ name: 'Max', age: 38},
			{ name: event.target.value, age: 54},
			{ name: 'Jane', age: 31}
		]
	});
}
//Toggles "showPersons" between true and false - applied to button, if it is true change to false and vice versa; If we dont use the arrow funcion we may have issues with the .this keyword
togglePersonsHandler = () => {
	const doesShow = this.state.showPersons;
	this.setState({showPersons: !doesShow});
}
	//"render()" - React will call this method to render something to the screen, "<div>" this is JSX not HTML; "className" - we use this instead of "class" (for CSS) bcause we use "class" when defining our component; "<Person> </Person>" - everything side of our component tags will be passed as "children" to our component; <div className="App"> - everything must be wrapped in one root element; "this.state.persons[0].name" - refers to the class "App" -> state property (object) -> persons array -> index 0 -> name ('Max'); "onClick()" - in JSX we use a captial "C" for click; //"this.switchNameHandler" - we dont include (), if we did it would mean React would execute it immediately after the DOM was rendered; click={this.switchNameHandler} - this is a method that we pass to the functional component in Person.js, we can then use this method in Person.js by accessing its props;
	//"this.switchNameHandler.bind(this, 'Max!')" - pass in value to our function to change the name, ".bind(this, )" resolves the ".this" issue, needed so that our "switchNameHandler" function ".this" refers to the "render(){}""; "() => this.switchNameHandler()" - alternative method (not preferred) to passing values to our function, executes a function and returns the result (a name in this case), a "return" keyword will be automatically added if the function is written all in 1 line
	render() {
		//Inline styling
		const style = {
			backgroundColor: 'white',
			font: 'inhert',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		//Determines if names should be displayed on screen - As React rerenders the component on a state change (e.g if we click a buttton), it will execute this if statement again
		let persons = null;
		if (this.state.showPersons) {
			//Turns are state into JSX - maps every element in an array into something else, executes a method on every element in an array, takes the value of each element as input, does something to it (e.g turn it into JSX) and returns a new array; (person, index) - passes content of element AND index number to the function, if you use more than one argument in an ES6 arrow function you have to wrap in "()"
			persons = (
				<div>
					{this.state.persons.map ((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}/>
					})}
				</div>
			);
		}
		// return () - everything inside of the return statement is JSX code; {} - by wrapping the JSX in curley braces we can execute simple JS statements (not block statements e.g if statements); this.state.showPersons === true ? : null - ternary expression, if show persons is true, display the JSX, if not show nothing (null)
		return (
			<div className="App">
				<h1>Hi im a react app </h1>
				<button
				 	style={style}
					onClick={this.togglePersonsHandler}>Switch Name
				</button>
				{persons}
			</div>
		);
	}
}

//export default - if you import the whole file you import this class (ES6 feature)
export default App;
