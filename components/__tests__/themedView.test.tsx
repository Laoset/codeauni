import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedView } from '../themedView.component';

describe('ThemedView', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<ThemedView testID='themed-view' />);
    const view = getByTestId('themed-view');

    expect(view).toBeTruthy();
    expect(view.type).toBe('RNCSafeAreaView');
  });

  it('should apply default flex: 1 style', () => {
    const { getByTestId } = render(<ThemedView testID='themed-view' />);
    const view = getByTestId('themed-view');

    const combinedStyles = Object.assign({}, ...view.props.style);
    expect(combinedStyles).toMatchObject({ flex: 1 });
  });

  it('should accept additional styles', () => {
    const customStyle = { backgroundColor: 'red', padding: 10 };

    const { getByTestId } = render(
      <ThemedView testID='themed-view' style={customStyle} />
    );
    const view = getByTestId('themed-view');

    const combinedStyles = Object.assign({}, ...view.props.style);
    expect(combinedStyles).toMatchObject(customStyle);
  });
});
