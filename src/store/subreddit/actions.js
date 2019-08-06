import * as types from './types';
import { subredditService } from 'services';

export const setPosts = payload => ({
  type: types.SET_POSTS,
  payload: payload,
});

export const setPostsLimit = payload => ({
  type: types.SET_POSTS_LIMIT,
  payload: payload,
});

export const setCurrent = payload => ({
  type: types.SET_CURRENT,
  payload: payload,
});

export const setPending = payload => ({
  type: types.SET_PENDING,
  payload: payload,
});

export const setError = error => ({
  type: types.SET_ERROR,
  payload: error,
});

export const fetchPosts = options => async (dispatch, getState) => {
  try {
    dispatch(setPending(true));
    const { subreddit } = getState();
    const params = {
      ...options,
      limit: subreddit.postsLimit,
    };
    const response = await subredditService.posts.getAll(
      subreddit.current,
      params,
    );
    dispatch(setPosts(response.data.data));
  } catch (e) {
    dispatch(setError(e));
  }
};
