import httpClient from './HttpClient';

describe('HttpClient', () => {
  it('should has request and common http methods', () => {
    expect(httpClient.request).toBeInstanceOf(Function);
    expect(httpClient.get).toBeInstanceOf(Function);
    expect(httpClient.post).toBeInstanceOf(Function);
    expect(httpClient.put).toBeInstanceOf(Function);
    expect(httpClient.delete).toBeInstanceOf(Function);
  });
  it('should has correct baseUrl', function() {
    expect(httpClient.defaults.baseURL).toBe('https://www.reddit.com');
  });
});
