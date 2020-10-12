import React, { useState } from 'react';

const Generate = (props) => {
	let [message, setMessage] = useState('');

	const generateMessage = () => {
		const randomCompany = props.companies[Math.floor(Math.random() * props.companies.length)];
		const randomUser = props.users[Math.floor(Math.random() * props.users.length)];
		const message = `Well, it's like ${randomCompany}, but for ${randomUser}!`;
		setMessage(message);
	};

	return (
		<main className='main'>
			<div className='generate'>
				<p className='generate__text'>"Hey! I got this great idea for a start-up!"</p>
				<p className='generate__text'>"Yeah? What's it about?"</p>
				<button className='generate__btn' onClick={generateMessage}>
					Generate
				</button>
				<p className='generate__text'>{message}</p>
			</div>
		</main>
	);
};

export default Generate;
