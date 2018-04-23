import React, { Component } from 'react';
import './App.css';

//Creates a JS class and inherit from the Component class (from the 'react' library)
class App extends Component {
	//render() - React will call this method to render something to the screen, <div> this is JSX not HTML
	render() {
		return (
			<div className="App">
				<h1>Hi im a react app </h1>
			</div>
		);
	}
}

//export default - if you import the whole file you import this class (ES6 feature)
export default App;
