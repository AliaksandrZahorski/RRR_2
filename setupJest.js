require('raf/polyfill');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
Date.now = jest.genMockFunction().mockReturnValue(0);
