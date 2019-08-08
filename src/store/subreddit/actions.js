import * as types from './types';
import { subredditService } from 'services';
import { DEFAULT_POST_LIMIT } from '../../constants/api';

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

const lastFetchedParams = {
  current: null,
  params: {},
};

export const reFetchPosts = () => async dispatch => {
  try {
    dispatch(setPending(true));
    const response = await subredditService.posts.getAll(
      lastFetchedParams.current,
      lastFetchedParams.params,
    );
    dispatch(setPosts(response.data.data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const fetchPosts = options => async (dispatch, getState) => {
  try {
    dispatch(setPending(true));
    const { subreddit } = getState();
    const params = {
      ...options,
      count: subreddit.postsLimit,
    };

    const response = await subredditService.posts.getAll(
      (lastFetchedParams.current = subreddit.current),
      (lastFetchedParams.params = params),
    );
    lastFetchedParams.current = subreddit.current;
    dispatch(setPosts(response.data.data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const fetchNextPage = () => async (dispatch, getState) => {
  try {
    dispatch(setPending(true));
    const { subreddit } = getState();
    const params = {
      count: subreddit.postsLimit,
    };
    if (subreddit.posts.length > 0) {
      params.after = (
        subreddit.posts[DEFAULT_POST_LIMIT - 1] ||
        subreddit.posts[subreddit.posts.length - 1]
      ).data.name;
    }
    const response = await subredditService.posts.getAll(
      (lastFetchedParams.current = subreddit.current),
      (lastFetchedParams.params = params),
    );
    dispatch(setPosts(response.data.data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const fetchPrevPage = () => async (dispatch, getState) => {
  try {
    dispatch(setPending(true));
    const { subreddit } = getState();
    const params = {
      count: subreddit.posts.length,
    };

    if (subreddit.posts.length > 0) {
      params.before = subreddit.posts[0].data.name;
    }

    const response = await subredditService.posts.getAll(
      (lastFetchedParams.current = subreddit.current),
      (lastFetchedParams.params = params),
    );
    dispatch(setPosts(response.data.data));
  } catch (e) {
    dispatch(setError(e));
  }
};
