import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ListaCard from '../src/components/listaCard';
import {Producto} from '../src/models/productoModel';

it('renders content', () => {
  const item = new Producto({
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: 1,
  });

  const component = render(<ListaCard producto={item} />);

  component.getByText('Handmade Metal Shoes');
  component.getByText('9 de diciembre, 2022');
  component.getByText('16434');
  component.getByText('+');
});
