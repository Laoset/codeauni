import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Card } from '../atoms/card.component';
describe('Card Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <Text>Contenido de prueba</Text>
      </Card>
    );

    expect(getByText('Contenido de prueba')).toBeTruthy();
  });

  it('applies horizontal styles when the prop is true', () => {
    const { getByTestId } = render(
      <Card horizontal>
        <Text>Contenido de prueba</Text>
      </Card>
    );

    const card = getByTestId('card-component');

    expect(card.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ flexDirection: 'row' }),
      ])
    );
  });

  it('applies vertical styles by default', () => {
    const { getByTestId } = render(
      <Card>
        <Text>Contenido de prueba</Text>
      </Card>
    );

    const card = getByTestId('card-component');

    expect(card.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ alignItems: 'center', width: '48%' }),
      ])
    );
  });
});
