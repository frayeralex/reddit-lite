import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

const setInterval = jest.fn();
const clearInterval = jest.fn();

global.setInterval = setInterval;
global.clearInterval = clearInterval;
global.localStorage = localStorageMock;
global.mount = mount;
global.shallow = shallow;
