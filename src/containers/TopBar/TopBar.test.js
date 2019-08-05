import React from 'react';
import { TopBar } from './TopBar';

describe('<TopBar/>', () => {
  it('should render without crashing', function() {
    const component = shallow(<TopBar />);
    expect(component).toMatchSnapshot();
  });
  it('should correct root node', function() {
    const component = shallow(<TopBar />);
    expect(component.props().className).toEqual('TopBar');
  });
  it('should show title correct', function() {
    const title = 'title';
    const component = shallow(<TopBar />);
    expect(component.find('.title').text()).toEqual('');
    component.setProps({ title });
    expect(component.find('.title').text()).toEqual(title);
  });
});
