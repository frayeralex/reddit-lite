import React from 'react';
import { FrontPage } from './FrontPage';

describe('<FrontPage/>', function() {
  it('should render without crushing', function() {
    const component = shallow(<FrontPage />);
    expect(component).toMatchSnapshot();
  });
});
