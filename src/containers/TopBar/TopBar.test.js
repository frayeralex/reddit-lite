import React from 'react';
import { TopBar } from './TopBar';
import { DEFAULT_POST_LIMIT } from 'constants/api';

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
  it('should hide Prev button', function() {
    const props = {
      beforePostId: 'beforePostId',
      afterPostId: 'afterPostId',
    };
    const component = shallow(<TopBar {...props} />);
    expect(component).toMatchSnapshot();
    component.setProps({ beforePostId: null });
    expect(component).toMatchSnapshot();
    component.setProps({ afterPostId: null });
    expect(component).toMatchSnapshot();
  });
  it('should handle Prev Next button clicks', function() {
    const props = {
      beforePostId: 'beforePostId',
      afterPostId: 'afterPostId',
      fetchNextPage: jest.fn(),
      fetchPrevPage: jest.fn(),
    };
    const component = shallow(<TopBar {...props} />);
    expect(props.fetchPrevPage).not.toHaveBeenCalled();
    component
      .find('button')
      .at(0)
      .simulate('click');
    expect(props.fetchPrevPage).toHaveBeenCalled();
    expect(props.fetchNextPage).not.toHaveBeenCalled();
    component
      .find('button')
      .at(1)
      .simulate('click');
    expect(props.fetchNextPage).toHaveBeenCalled();
  });
});
