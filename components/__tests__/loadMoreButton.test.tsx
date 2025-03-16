import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LoadMoreButton } from '../atoms/loadMoreButton.component';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';

jest.mock('../../hooks/useThemeColor.hooks.ts');

describe('LoadMoreButton', () => {
  beforeEach(() => {
    (useThemeColor as jest.Mock).mockReturnValue({
      backgroundSecondary: 'gray',
      title: 'blue',
    });
  });

  it('should not render if hasNextPage is false', () => {
    const { queryByTestId } = render(
      <LoadMoreButton
        fetchNextPage={jest.fn()}
        isFetchingNextPage={false}
        hasNextPage={false}
      />
    );

    expect(queryByTestId('load-more-button')).toBeNull();
  });

  it('should not render if hasNextPage is undefined', () => {
    const { queryByTestId } = render(
      <LoadMoreButton fetchNextPage={jest.fn()} isFetchingNextPage={false} />
    );

    expect(queryByTestId('load-more-button')).toBeNull();
  });

  it('should render if hasNextPage is true', () => {
    const { getByTestId } = render(
      <LoadMoreButton
        fetchNextPage={jest.fn()}
        isFetchingNextPage={false}
        hasNextPage={true}
      />
    );

    expect(getByTestId('load-more-button')).toBeTruthy();
  });

  it('should display ActivityIndicator when isFetchingNextPage is true', () => {
    const { getByTestId } = render(
      <LoadMoreButton
        fetchNextPage={jest.fn()}
        isFetchingNextPage={true}
        hasNextPage={true}
      />
    );

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should display "Cargar más" text when isFetchingNextPage is false', () => {
    const { getByText } = render(
      <LoadMoreButton
        fetchNextPage={jest.fn()}
        isFetchingNextPage={false}
        hasNextPage={true}
      />
    );

    expect(getByText('Cargar más')).toBeTruthy();
  });

  it('should call fetchNextPage when pressed', () => {
    const fetchNextPageMock = jest.fn();

    const { getByTestId } = render(
      <LoadMoreButton
        fetchNextPage={fetchNextPageMock}
        isFetchingNextPage={false}
        hasNextPage={true}
      />
    );

    fireEvent.press(getByTestId('load-more-button'));

    expect(fetchNextPageMock).toHaveBeenCalledTimes(1);
  });
});
