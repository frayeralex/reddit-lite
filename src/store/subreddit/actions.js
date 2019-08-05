import * as types from './types';
import { subbredditService } from 'services';

export const setPosts = (payload) => ({
  type: types.SET_POSTS,
  payload: payload
});

export const setError = (error) => ({
  types: types.SET_ERROR,
  payload: error,
});

export const fetchPosts = (options) => async (dispatch, getState) => {
  try {
    const { subreddit } = getState();
    const params = {
      ...options,
      limit: subreddit.postsLimit,
    };
    const response = await subbredditService.posts.getAll(subreddit.current, params);
    dispatch(setPosts(response.data.data));
  } catch (e) {
    console.log({ e });
    setError(e);
  }
};
