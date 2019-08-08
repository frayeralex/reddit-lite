import { httpClient } from 'utils';
import { SUB_REDDIT_PATH } from 'constants/api';

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
        url: `${SUB_REDDIT_PATH}/${sub}.json`,
        params,
      });
    },
  },
};

export default SubredditService;
