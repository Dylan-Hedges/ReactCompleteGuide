import React, { Component } from 'react';
import './App.css';
//Components should always start with an uppercase letter
import Person from './Person/Person'
//Creates a JS class and inherit from the Component class (from the 'react' library)
class App extends Component {
	//render() - React will call this method to render something to the screen, <div> this is JSX not HTML; className - we use this instead of "class" (for CSS) bcause we use "class" when defining our component; <div className="App"> - everything must be wrapped in one root element
	render() {
		return (
			<div className="App">
				<h1>Hi im a react app </h1>
				<Person name="Tim" age="28"/>
				<Person name="Tom" age="127"/>
				<Person name="John" age="29"/>
			</div>
		);
	}
}

//export default - if you import the whole file you import this class (ES6 feature)
export default App;
