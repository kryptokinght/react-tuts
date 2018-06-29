import React from 'react';
import Navbar from '../Navbar';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot

describe('<Navbar />', () => {
    it('should be defined', () => {
        expect(Navbar).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<Navbar />);
        expect(shallowToJson(wrapper))
        .toMatchSnapshot();
    });
});