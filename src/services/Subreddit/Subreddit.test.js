import Service from './Subreddit';
import { httpClient } from 'utils';
import { SUB_REDDIT_PATH } from '../../constants/api';

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
          url: `${SUB_REDDIT_PATH}/${sub}.json`,
          params,
        });
      });
    });
  });
});
