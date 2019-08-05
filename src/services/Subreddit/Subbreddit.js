import { httpClient } from "utils";

const SubredditService = {
  posts: {
    getAll(sub, params = {}) {
      return httpClient.request({
        method: 'GET',
        url: `/r/${sub}.json`,
        params,
      });
    }
  }
};

export default SubredditService;
