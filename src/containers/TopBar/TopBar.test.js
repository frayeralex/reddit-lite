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
  it('should handle input state changes correct', function() {
    const component = shallow(<TopBar />);
    component.setState({ current: 'current' });
    expect(component).toMatchSnapshot();
    component.setState({ current: '' });
    expect(component).toMatchSnapshot();
  });
  it('should handle form submit correct', function() {
    const setCurrent = jest.fn();
    const preventDefault = jest.fn();
    const component = shallow(<TopBar setCurrent={setCurrent} />);
    component.setState({ current: 'current' });
    const form = component.find('form').first();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(setCurrent).toHaveBeenCalledWith('current');
  });
});
