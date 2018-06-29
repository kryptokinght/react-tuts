import React from 'react';
import Names from '../Names';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot

describe('<Names />', () => {
    it('should be defined', () => {
        expect(Names).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<Names />);
        expect(shallowToJson(wrapper))
        .toMatchSnapshot();
    });
});