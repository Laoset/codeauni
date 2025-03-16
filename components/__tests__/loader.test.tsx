import React from 'react';
import { render } from '@testing-library/react-native';
import { Loader } from '../atoms/loader.component';

describe('Loader', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader-container')).toBeTruthy();
  });

  it('should contain an ActivityIndicator', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader-indicator')).toBeTruthy();
  });

  it('should have the correct ActivityIndicator size and color', () => {
    const { getByTestId } = render(<Loader />);
    const indicator = getByTestId('loader-indicator');

    expect(indicator.props.size).toBe('large');
    expect(indicator.props.color).toBe('#ffd700');
  });
});
