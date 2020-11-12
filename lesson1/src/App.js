import logo from './logo.svg';
import './App.css';
import React from 'react'
// import MyForm from './MyForm'
import RouterPage from './lesson4/RouterPage'

function App() {
	return (
		 <div className="App">
			 <header className="App-header">
				 <img src={logo} className="App-logo" alt="logo" />
			 </header>
			 <RouterPage />
		 </div>
	);
}

export default App;
