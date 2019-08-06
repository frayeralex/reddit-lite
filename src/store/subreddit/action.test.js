import * as types from './types';
import * as actions from './actions';
import { subredditService } from 'services';

jest.mock('services');

describe('src/store/subreddit/action.js', function() {
  describe('action creator functions', function() {
    it('setPosts should create correct action', function() {
      const payload = {};
      expect(actions.setPosts(payload)).toEqual({
        type: types.SET_POSTS,
        payload,
      });
    });
    it('setError should create correct action', function() {
      const payload = {};
      expect(actions.setError(payload)).toEqual({
        type: types.SET_ERROR,
        payload,
      });
    });
    it('setPending should create correct action', function() {
      const payload = {};
      expect(actions.setPending(payload)).toEqual({
        type: types.SET_PENDING,
        payload,
      });
    });
    it('setCurrent should create correct action', function() {
      const payload = {};
      expect(actions.setCurrent(payload)).toEqual({
        type: types.SET_CURRENT,
        payload,
      });
    });
    it('setPostsLimit should create correct action', function() {
      const payload = {};
      expect(actions.setPostsLimit(payload)).toEqual({
        type: types.SET_POSTS_LIMIT,
        payload,
      });
    });
  });

  describe('async business', function() {
    describe('fetchPosts', function() {
      const subreddit = {
        current: 'current',
        postsLimit: 25,
      };
      const getState = () => ({ subreddit });
      const options = {
        limit: 10,
      };

      it('should handle success result correct', async () => {
        subredditService.posts.getAll = jest.fn(() =>
          Promise.resolve({
            data: { data: {} },
          }),
        );
        const dispatch = jest.fn();
        const handler = actions.fetchPosts(options);
        expect(handler).toBeInstanceOf(Function);
        await handler(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({
          payload: true,
          type: types.SET_PENDING,
        });
        expect(subredditService.posts.getAll).toHaveBeenCalledWith(
          subreddit.current,
          {
            ...options,
            limit: subreddit.postsLimit,
          },
        );
        expect(dispatch).toHaveBeenCalledWith({
          payload: {},
          type: types.SET_POSTS,
        });
      });
      it('should handle failed result correct', async () => {
        subredditService.posts.getAll = jest.fn(() =>
          Promise.reject({
            error: {},
          }),
        );
        const dispatch = jest.fn();
        const handler = actions.fetchPosts(options);
        expect(handler).toBeInstanceOf(Function);
        await handler(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith({
          payload: true,
          type: types.SET_PENDING,
        });
        expect(subredditService.posts.getAll).toHaveBeenCalledWith(
          subreddit.current,
          {
            ...options,
            limit: subreddit.postsLimit,
          },
        );
        expect(dispatch).toHaveBeenCalledWith({
          payload: {
            error: {},
          },
          type: types.SET_ERROR,
        });
      });
    });
  });
});
