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
		otherstate: 'This will not be changed by the onClick event handler'
	}

	//Defines the function that will be called when clicking the button, this is a method of the class, it is assigned to the class as a property (as a variable), if we dont use this syntax there will be issues when calling "this.switchNameHandler" as "this" wont refer to the class ("App") -> property ("switchNameHandler"); this.state.persons[0].name = 'Sam'; - we are not allowed to mutate state like this
	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 38},
				{ name: 'Tim', age: 54},
				{ name: 'Jane', age: 31}
			]
		});
	}

	//"render()" - React will call this method to render something to the screen, "<div>" this is JSX not HTML; "className" - we use this instead of "class" (for CSS) bcause we use "class" when defining our component; "<Person> </Person>" - everything side of our component tags will be passed as "children" to our component; <div className="App"> - everything must be wrapped in one root element; "this.state.persons[0].name" - refers to the class "App" -> state property (object) -> persons array -> index 0 -> name ('Max'); "onClick()" - in JSX we use a captial "C" for click; //"this.switchNameHandler" - we dont include (), if we did it would mean React would execute it immediately after the DOM was rendered; click={this.switchNameHandler} - this is a method that we pass to the functional component in Person.js, we can then use this method in Person.js by accessing its props;
	//"this.switchNameHandler.bind(this, 'Max!')" - pass in value to our function to change the name, ".bind(this, )" resolves the ".this" issue, needed so that our "switchNameHandler" function ".this" refers to the "render(){}""; "() => this.switchNameHandler()" - alternative method (not preferred) to passing values to our function, executes a function and returns the result (a name in this case), a "return" keyword will be automatically added if the function is written all in 1 line
	render() {
		return (
			<div className="App">
				<h1>Hi im a react app </h1>
				<button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!')}/>Hobby: Diving
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}/>
			</div>
		);
	}
}

//export default - if you import the whole file you import this class (ES6 feature)
export default App;
