import React from 'react';
import Layout from './Layout';
import { TopBar } from 'containers';

describe('<Layout/>', function() {
  it('should render without crashing', function() {
    const component = shallow(<Layout />);
    expect(component).toMatchSnapshot();
  });
  it('should contain TopBar', function() {
    const component = shallow(<Layout />);
    expect(component).toMatchSnapshot();
    component.setProps({ header: <TopBar title="title" /> });
    expect(component).toMatchSnapshot();
  });
});
