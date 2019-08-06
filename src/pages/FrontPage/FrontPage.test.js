import React from 'react';
import { FrontPage } from './FrontPage';
import posts from '../../__fixtures__/posts';

describe('<FrontPage/>', function() {
  it('should render without crushing', function() {
    const component = shallow(<FrontPage />);
    expect(component).toMatchSnapshot();
  });
  it('should call fetchPosts after mounted and updates', function() {
    const fetchPosts = jest.fn();
    const component = shallow(<FrontPage fetchPosts={fetchPosts} />);
    expect(fetchPosts).toHaveBeenCalledTimes(1);
    component.setProps({ currentSubreddit: 'currentSubreddit' });
    expect(fetchPosts).toHaveBeenCalledTimes(2);
  });
  it('should render Post list if post exist', function() {
     const component = shallow(<FrontPage posts={[posts[0], posts[1]]} />);
    expect(component).toMatchSnapshot();
  });
});
