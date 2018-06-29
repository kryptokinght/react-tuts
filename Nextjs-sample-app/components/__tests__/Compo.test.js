import React from 'react';
import Compo from '../Compo';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'; //removes unnecessary JSON from snapshot

describe('<Compo />', () => {
    it('should be defined', () => {
        expect(Compo).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<Compo />);
        expect(shallowToJson(wrapper))
        .toMatchSnapshot();
    });
    it('should contain minanshu', () => {
        const wrapper = mount(<Compo text="minanshu"/>);
        expect(wrapper.props().text).toEqual("minanshu");        
    });
});