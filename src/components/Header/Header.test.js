import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from './../../test/testUtils';
import Header from './Header';

// check component renders without error
test('renders without error', () => {
	const wrapper = shallow(<Header />);
	const headerComponent = findByTestAttribute(wrapper, 'component-header');
	expect(headerComponent.length).toBe(1);
});
