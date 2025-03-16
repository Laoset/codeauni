import React from 'react';
import { render } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';
import { ThemedText } from '../themedText.component';

jest.mock('@/hooks/useThemeColor');

describe('ThemedText', () => {
  it('should render with default styling', () => {
    (useThemeColor as jest.Mock).mockReturnValue({
      title: 'blue',
      text: 'black',
    });

    const { getByText } = render(
      <ThemedText type='default'>Hello World</ThemedText>
    );

    const text = getByText('Hello World');

    expect(text.props.style).toContainEqual({ color: 'black' });
  });

  it('should render with title styling', () => {
    (useThemeColor as jest.Mock).mockReturnValue({
      title: 'blue',
      text: 'black',
    });

    const { getByText } = render(
      <ThemedText type='title'>Title Text</ThemedText>
    );

    const text = getByText('Title Text');

    expect(text.props.style).toContainEqual({ color: 'blue' });
    expect(text.props.style).toContainEqual({ fontFamily: 'StarJedi' });
  });

  it('should render with subtitle styling', () => {
    (useThemeColor as jest.Mock).mockReturnValue({
      title: 'blue',
      text: 'black',
    });

    const { getByText } = render(
      <ThemedText type='subtitle'>Subtitle Text</ThemedText>
    );

    const text = getByText('Subtitle Text');
    const combinedStyles = Object.assign({}, ...text.props.style);

    expect(combinedStyles).toMatchObject({
      color: 'black',
      fontSize: 20,
      fontFamily: 'DinBold',
    });
  });

  it('should accept external styles', () => {
    (useThemeColor as jest.Mock).mockReturnValue({
      title: 'blue',
      text: 'black',
    });

    const { getByText } = render(
      <ThemedText style={{ fontSize: 30 }}>Styled Text</ThemedText>
    );

    const text = getByText('Styled Text');

    expect(text.props.style).toContainEqual({ fontSize: 30 });
  });
});
