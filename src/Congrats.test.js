import React from 'react';

import { shallow } from 'enzyme';

import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps } from '../test/testUtils';

import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('render no text when `success` props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  const propsError = checkPropTypes(
    Congrats.propTypes,
    expectedProps,
    'props',
    Congrats.name
  );
  expect(propsError).toBeUndefined();
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
