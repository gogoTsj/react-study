import logo from './logo.svg';
import './App.css';
import React from 'react'
// import MyForm from './MyForm'
import ReduxPage from './lesson2/ReduxPage'

function App() {
	return (
		 <div className="App">
			 <header className="App-header">
				 <img src={logo} className="App-logo" alt="logo" />
			 </header>
			 <ReduxPage />
		 </div>
	);
}

export default App;
