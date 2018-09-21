import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(<App />)

  expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1)
});
