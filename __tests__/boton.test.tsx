import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Boton from '../src/components/boton';

it('renders content', () => {
  const component = render(
    <Boton
      label={'Press me'}
      labelSize={16}
      onPress={() => console.log('press')}
    />,
  );

  component.getByText('Press me');
});
