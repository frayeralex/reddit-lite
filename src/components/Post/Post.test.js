import React from 'react';
import Post from './Post';
import posts from '__fixtures__/posts';

jest.mock('moment', () => () => ({ fromNow: () => '16 hours ago' }));

describe('<Post/>', () => {
  it('should render without crushing ', () => {
    const [{ data }] = posts;
    const component = shallow(<Post data={data} />);
    expect(component).toMatchSnapshot();
  });
  it('should render thumbnail if it exist', function() {
    const { data } = posts.find(
      item => item.data.thumbnail && item.data.thumbnail.includes('http'),
    );
    const component = shallow(<Post data={data} />);
    expect(component).toMatchSnapshot();
  });
  it('should passed correct data to moment function and call fromNow', function() {
    const fromNow = jest.fn(() => '16 hours ago');
    const moment = jest.fn(() => ({ fromNow }));
    const [{ data }] = posts;
    shallow(<Post data={data} moment={moment} />);
    expect(moment).toHaveBeenCalledWith(Number(`${data.created_utc}000`), 'x');
    expect(fromNow).toHaveBeenCalled();
  });
});
