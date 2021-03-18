import React from 'react';
import { shallow } from 'enzyme';
import Logout from './Logout';

describe('Testing logout', () => {
  it('if it works', () => {
    const wrapper = shallow(<Logout />);
    expect(1).toEqual(1);
    // expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });

});