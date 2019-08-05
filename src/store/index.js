import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import subreddit from './subreddit';

export {
  subreddit,
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    subreddit: subreddit.reducer,
  });
