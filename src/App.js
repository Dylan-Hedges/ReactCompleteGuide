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
		]
	}

	//"render()" - React will call this method to render something to the screen, "<div>" this is JSX not HTML; "className" - we use this instead of "class" (for CSS) bcause we use "class" when defining our component; "<Person> </Person>" - everything side of our component tags will be passed as "children" to our component; <div className="App"> - everything must be wrapped in one root element;
	//"this.state.persons[0].name" - refers to the class "App" -> state property (object) -> persons array -> index 0 -> name ('Max')
	render() {
		return (
			<div className="App">
				<h1>Hi im a react app </h1>
				<button>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		);
	}
}

//export default - if you import the whole file you import this class (ES6 feature)
export default App;
