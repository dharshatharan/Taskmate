import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import Schedule from '@screens/Schedule';
import {store} from '../../store';

describe('Schedule', () => {
  jest.useFakeTimers();
  const pageTree = (
    <Provider store={store}>
      <Schedule />
    </Provider>
  );
  it('should renders correctly', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});