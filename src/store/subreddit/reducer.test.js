import reducer from './reducer';
import * as types from './types';
import posts from '../../__fixtures__/posts';

const initState = {
  pending: false,
  fetched: false,
  current: 'reactjs',
  before: null,
  after: null,
  postsLimit: 25,
  posts: [],
  error: null,
};

const fullState = {
  pending: false,
  fetched: true,
  current: 'reactjs',
  before: 't3_cmcq55',
  after: 't3_cmcq56',
  postsLimit: 50,
  posts: posts,
  error: null,
};

describe('src/store/subreddit/reducer.js', function() {
  it('should return init state', function() {
    expect(reducer(undefined, {})).toEqual(initState);
  });
  it('should return new state object', function() {
    expect(
      reducer(initState, { type: types.SET_PENDING }) !== initState,
    ).toBeTruthy();
  });
  it('should handle SET_PENDING correct', function() {
    const state = reducer(initState, {
      type: types.SET_PENDING,
      payload: true,
    });
    expect(state).toEqual({
      ...initState,
      pending: true,
    });
  });
  it('should handle SET_POSTS_LIMIT correct', function() {
    const state = reducer(initState, {
      type: types.SET_POSTS_LIMIT,
      payload: 100,
    });
    expect(state).toEqual({
      ...initState,
      postsLimit: 100,
    });
  });
  it('should handle SET_CURRENT correct', function() {
    const state = reducer(fullState, {
      type: types.SET_CURRENT,
      payload: 'current',
    });
    expect(state).toEqual({
      ...fullState,
      current: 'current',
      posts: [],
    });
  });
  it('should handle SET_ERROR correct', function() {
    const state = reducer(fullState, {
      type: types.SET_ERROR,
      payload: 'error',
    });
    expect(state).toEqual({
      ...fullState,
      error: 'error',
    });
  });
  it('should handle SET_POSTS correct', function() {
    const state = reducer(fullState, {
      type: types.SET_POSTS,
      payload: {
        children: [],
        after: 'after',
        before: 'before',
      },
    });
    expect(state).toEqual({
      ...fullState,
      fetched: true,
      pending: false,
      posts: [],
      after: 'after',
      before: 'before',
    });
  });
});
