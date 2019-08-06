import { httpClient } from 'utils';

const SubredditService = {
  posts: {
    /**
     * @param {String} sub
     * @param {Object} params
     * @return {Promise<AxiosResponse<T>>}
     */
    getAll(sub, params = {}) {
      return httpClient.request({
        method: 'GET',
        url: `/r/${sub}.json`,
        params,
      });
    },
  },
};

export default SubredditService;
