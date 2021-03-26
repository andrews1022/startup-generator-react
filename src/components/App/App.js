import React from 'react';
import Header from './../Header/Header';
import Generate from './../Generate/Generate';
import Footer from './../Footer/Footer';
import './../../scss/app.scss';

const App = () => {
	return (
		<div className='app' data-test='component-app'>
			<Header />
			<Generate />
			<Footer />
		</div>
	);
};

export default App;
