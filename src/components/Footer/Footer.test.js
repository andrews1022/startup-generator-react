import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from './../../test/testUtils';
import Footer from './Footer';

// check component renders without error
test('renders without error', () => {
	const wrapper = shallow(<Footer />);
	const footerComponent = findByTestAttribute(wrapper, 'component-footer');
	expect(footerComponent.length).toBe(1);
});
