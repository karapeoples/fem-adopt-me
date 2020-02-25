import React from 'react';
import Pet from './components/Pet';
import './App.css';
import SearchParams from './components/SearchParams';

const App = () => {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<SearchParams />
		</div>
	);
};

export default App;
