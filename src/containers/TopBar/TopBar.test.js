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
  it('should show postsLimit prop in select value correctly', function() {
    const component = shallow(<TopBar />);
    expect(component.find('select').prop('value')).toEqual(25);
    component.setProps({ postsLimit: 50 });
    expect(component).toMatchSnapshot();
  });
  it('should handle post limit selector change correctly', function() {
    const setPostsLimit = jest.fn();
    const component = shallow(<TopBar setPostsLimit={setPostsLimit} />);
    const select = component
      .find('.select-container select[name="postsLimit"]')
      .first();
    select.simulate('change', { target: { value: '100' } });
    expect(component).toMatchSnapshot();
    expect(setPostsLimit).toHaveBeenCalledWith(100);
  });
});
