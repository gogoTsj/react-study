import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import MyForm from './MyForm'

function App() {
	return (
		 <div className="App">
			 <header className="App-header">
				 <img src={logo} className="App-logo" alt="logo" />
			 </header>
			 <my-form />
		 </div>
	);
}

export default App;
