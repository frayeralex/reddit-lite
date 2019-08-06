import httpClient from './HttpClient';

describe('HttpClient', () => {
  it('should has request method', () => {
    expect(httpClient.request).toBeInstanceOf(Function);
  });
});
