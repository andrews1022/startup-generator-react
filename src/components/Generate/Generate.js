import React, { useState } from 'react';
import companies from '../../data/companies';
import users from '../../data/users';
import './Generate.scss';

const Generate = () => {
	const [message, setMessage] = useState('');

	const generateMessage = () => {
		const randomCompany = companies[Math.floor(Math.random() * companies.length)];
		const randomUser = users[Math.floor(Math.random() * users.length)];
		const response = `Well, it's like ${randomCompany}, but for ${randomUser}!`;
		setMessage(response);
	};

	return (
		<div className='generate' data-test='component-generate'>
			<p className='generate__text'>"Hey! I got this great idea for a start-up!"</p>
			<p className='generate__text'>"Yeah? What's it about?"</p>
			<button className='generate__btn' onClick={generateMessage} data-test='state-generate'>
				Generate
			</button>
			<p className='generate__text' data-test='state-message'>
				{message}
			</p>
		</div>
	);
};

export default Generate;
