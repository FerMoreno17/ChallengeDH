import {jest} from '@jest/globals';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock('react-redux');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon');
