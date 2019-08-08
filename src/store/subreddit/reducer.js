import * as types from './types';
import { DEFAULT_SUB_REDDIT } from 'constants/api';

const initialState = {
  pending: false,
  fetched: false,
  current: DEFAULT_SUB_REDDIT || '',
  before: null,
  after: null,
  postsLimit: 25,
  posts: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PENDING:
      return {
        ...state,
        pending: action.payload,
      };
    case types.SET_POSTS_LIMIT:
      return {
        ...state,
        postsLimit: action.payload,
      };
    case types.SET_POSTS:
      return {
        ...state,
        pending: false,
        fetched: true,
        posts: action.payload.children,
        after: action.payload.after,
        before: action.payload.before,
      };
    case types.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        posts: [],
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
