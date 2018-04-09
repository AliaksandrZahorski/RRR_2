import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Blog from './Blog';

const mockStore = configureMockStore([thunk]);

describe('Table', () => {
  it('render correctly', () => {
    const storeStateMock = {
    };
    const data = {
    };
    const store = mockStore(storeStateMock);
    const component = shallow(
      <Blog
        store={store}
        data={data}
      />
    ).shallow();
    expect(component).toMatchSnapshot();
  });
}); 