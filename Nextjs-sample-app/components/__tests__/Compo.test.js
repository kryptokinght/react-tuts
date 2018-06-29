import React from 'react';
import Compo from '../Compo';
import { render, shallow } from 'enzyme';

describe('<Compo />', () => {
    it('should be defined', () => {
        expect(Compo).toBeDefined();
    });
    it('should render', () => {
        const wrapper = shallow(<Compo />);
        expect(wrapper).toMatchSnapshot();
    });
});