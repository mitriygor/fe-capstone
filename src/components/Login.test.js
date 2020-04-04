import React from 'react';
import { shallow } from '../enzyme';

import {LogIn} from './LogIn';

describe('LogIn tests', () => {

    it('renders LogIn', () => {
        const wrapper = shallow(<LogIn />);

        expect(wrapper.find('.header')).toBeDefined();
    });
});
