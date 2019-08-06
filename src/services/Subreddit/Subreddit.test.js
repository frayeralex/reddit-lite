import Service from './Subreddit';
import { httpClient } from 'utils';

jest.mock('utils');

describe('SubredditService', function() {
  describe('posts', function() {
    describe('getAll()', function() {
      it('should correct path args in httpClient.request', function() {
        const sub = 'foo';
        const params = {
          limit: 25,
        };

        Service.posts.getAll(sub, params);

        expect(httpClient.request).toBeCalledWith({
          method: 'GET',
          url: `/r/${sub}.json`,
          params,
        });
      });
    });
  });
});
