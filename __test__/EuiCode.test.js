import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EuiCode from '../src';

Enzyme.configure({ adapter: new Adapter() });

test('EuiCode should render correctly', () => {
  mount(<EuiCode />);
});

test('EuiCode props', () => {
  const EuiCode = shallow(<EuiCode className="test" />);
  expect(EuiCode.find('.eui-empty-data-content')).toBeTruthy();
});

