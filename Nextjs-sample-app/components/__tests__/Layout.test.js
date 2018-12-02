import React from 'react';
import Layout from '../Layout';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot

describe('<Layout />', () => {
    it('should be defined', () => {
        expect(Layout).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<Layout />);
        expect(shallowToJson(wrapper))
        .toMatchSnapshot();
    });
});