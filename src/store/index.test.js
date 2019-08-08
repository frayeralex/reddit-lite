import createRootReducer from './index';

describe('src/store/index.js', function() {
  it('should export function for create root reducer', function() {
    const history = {};
    const reducer = createRootReducer(history);
    expect(reducer).toBeInstanceOf(Function);
  });
});
