import React from 'react';

// testing
import { shallow } from 'enzyme';
import { findByTestAttribute } from './../../test/testUtils';

// components
import App from './App';
import Header from './../Header/Header';
import Generate from './../Generate/Generate';
import Footer from './../Footer/Footer';

describe('Testing App Component', () => {
	// create a wrapper before each test
	let wrapper;
	beforeEach(() => (wrapper = shallow(<App />)));

	// check component renders without error
	test('renders app component without error', () => {
		const appComponent = findByTestAttribute(wrapper, 'component-app');
		expect(appComponent.length).toBe(1);
	});

	// check header child component was rendered without error
	test('renders header child component without error', () => {
		expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
	});

	// check generate child component was rendered without error
	test('renders generate child component without error', () => {
		expect(wrapper.containsMatchingElement(<Generate />)).toEqual(true);
	});

	// check footer child component was rendered without error
	test('renders footer child component without error', () => {
		expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
	});
});
