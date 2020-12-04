import React from 'react';
import Header from './components/Header';
import Generate from './components/Generate';
import Footer from './components/Footer';
import './styles/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<Generate />
			<Footer />
		</div>
	);
};

export default App;
