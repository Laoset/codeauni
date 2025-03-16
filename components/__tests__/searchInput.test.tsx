import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor.hooks';
import { SearchInput } from '../atoms/searchInput.component';
jest.mock('@/hooks/useThemeColor');

describe('SearchInput', () => {
  beforeEach(() => {
    (useThemeColor as jest.Mock).mockReturnValue({
      backgroundSecondary: 'white',
      text: 'gray',
    });
  });

  it('should render correctly', () => {
    const { getByTestId } = render(
      <SearchInput value='' onChangeText={jest.fn()} placeholder='Buscar...' />
    );
    expect(getByTestId('search-input-container')).toBeTruthy();
  });

  it('should display initial value in TextInput', () => {
    const { getByTestId } = render(
      <SearchInput
        value='React Native'
        onChangeText={jest.fn()}
        placeholder='Buscar...'
      />
    );

    expect(getByTestId('search-text-input').props.value).toBe('React Native');
  });

  it('should call onChangeText when typing', () => {
    const mockOnChangeText = jest.fn();
    const { getByTestId } = render(
      <SearchInput
        value=''
        onChangeText={mockOnChangeText}
        placeholder='Buscar...'
      />
    );

    fireEvent.changeText(getByTestId('search-text-input'), 'Nuevo texto');

    expect(mockOnChangeText).toHaveBeenCalledWith('Nuevo texto');
  });

  it('should clear text when pressing the X button', () => {
    const mockOnChangeText = jest.fn();
    const { getAllByTestId } = render(
      <SearchInput
        value='React Native'
        onChangeText={mockOnChangeText}
        placeholder='Buscar...'
      />
    );
    const clearButtons = getAllByTestId('clear-button');
    fireEvent.press(clearButtons[0]);
    expect(mockOnChangeText).toHaveBeenCalledWith('');
  });
});
