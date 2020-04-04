import React from 'react';
import { shallow } from '../enzyme';

import {NotFound} from './NotFound';

describe('NotFound tests', () => {

    it('renders NotFound', () => {
        const wrapper = shallow(<NotFound />);

        expect(wrapper.find('.header')).toBeDefined();
    });
});
