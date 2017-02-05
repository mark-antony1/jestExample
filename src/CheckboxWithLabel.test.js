import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './CheckboxwithLabel';

test('CheckboxWithLabel changes the text after click', () => {
	const checkbox = shallow(
		<CheckboxWithLabel labelOn='On' labelOff='off' />
	);

	expect(checkbox.text()).toEqual('off');

	checkbox.find('input').simulate('change');

	expect(checkbox.text()).toEqual('On');
})