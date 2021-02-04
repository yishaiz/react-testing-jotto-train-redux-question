import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// run before each test

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
