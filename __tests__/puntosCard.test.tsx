import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import PuntosCard from '../src/components/puntosCard';

it('renders content', () => {
  const component = render(<PuntosCard mes={'Enero'} totalPuntos={'1,000'} />);

  component.getByText('Enero');
  component.getByText('1,000 pts');
});
