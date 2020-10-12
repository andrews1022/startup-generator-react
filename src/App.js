import React from 'react';
import Header from './components/Header';
import Generate from './components/Generate';
import Footer from './components/Footer';

const App = () => {
	const companies = ['Airbnb', 'Amazon', 'CodePen', 'Discord', 'GitHub', 'Reddit', 'Slack'];
	const users = ['accountants', 'pilots', 'nurses', 'sports fans', 'gardeners', 'programmers'];

	return (
		<div className='app'>
			<Header />
			<Generate companies={companies} users={users} />
			<Footer />
		</div>
	);
};

export default App;
