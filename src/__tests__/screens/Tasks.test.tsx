  
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Tasks from '@screens/Tasks';
import {store} from '../../store';

describe('Tasks', () => {
  jest.useFakeTimers();
  const pageTree = (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
  it('should renders correctly', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});