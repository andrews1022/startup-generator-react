import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from './../../test/testUtils';
import Generate from './Generate';

describe('Testing Generate Component', () => {
	// create a wrapper before each test
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Generate />)));

	// check component renders without error
	test('renders without error', () => {
		const generateComponent = findByTestAttribute(wrapper, 'component-generate');
		expect(generateComponent.length).toBe(1);
	});

	// check that 'message' state is rendered without error
	test('renders message state without error', () => {
		const messageElement = findByTestAttribute(wrapper, 'state-message');
		expect(messageElement.length).toBe(1);
	});

	// check that starting message state is empty string
	test('starting message state is an empty string', () => {
		const message = findByTestAttribute(wrapper, 'state-message').text();
		expect(message).toBe('');
	});

	// check clicking on the generate button generates a message (non-0 length string)
	test('clicking on the button generates a message', () => {
		// grab button element
		const buttonElement = findByTestAttribute(wrapper, 'state-generate');

		// simulate click
		buttonElement.simulate('click');

		// gran and check message length
		const message = findByTestAttribute(wrapper, 'state-message').text();
		expect(message.length).toBeGreaterThan(0);
	});
});
