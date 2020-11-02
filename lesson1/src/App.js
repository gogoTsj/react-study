import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyForm from './MyForm'

function App() {
	return (
		 <div className="App">
			 <header className="App-header">
				 <img src={logo} className="App-logo" alt="logo" />
			 </header>
			 <MyForm />
		 </div>
	);
}

export default App;
