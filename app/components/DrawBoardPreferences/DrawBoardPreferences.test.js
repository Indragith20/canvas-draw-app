import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrawBoardPreferences from './DrawBoardPreferences';

// Mock the CSS import
jest.mock('./DrawBoardPreferences.css', () => ({}));

describe('DrawBoardPreferences Component', () => {
  const mockOnChange = jest.fn();

  const mockPreferences = {
    strokeColor: {
      displayName: 'Stroke Color',
      type: 'color',
      value: '#ff0000',
    },
    strokeStyle: {
      displayName: 'Stroke Style',
      type: 'dropdown',
      value: 'dashed',
      options: [
        { value: 'solid', label: 'Solid' },
        { value: 'dashed', label: 'Dashed' },
        { value: 'dotted', label: 'Dotted' },
      ],
    },
    darkMode: {
      displayName: 'Dark Mode',
      type: 'checkbox',
      checked: true,
    },
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders color picker correctly', () => {
    render(<DrawBoardPreferences preferences={mockPreferences} onChange={mockOnChange} />);
    const colorPickerLabel = screen.getByText('Stroke Color');
    expect(colorPickerLabel).toBeInTheDocument();

    // Input type=color might not be directly queryable by role or a more specific label by default with RTL depending on exact HTML structure
    // Let's find it by its current value or a test-id if we add one.
    // For now, let's check if an input element is present after the label.
    const colorInput = colorPickerLabel.nextElementSibling; // Assuming input is the next sibling
    expect(colorInput).toBeInTheDocument();
    expect(colorInput.tagName).toBe('INPUT');
    expect(colorInput).toHaveAttribute('type', 'color');
    expect(colorInput).toHaveValue('#ff0000');
  });

  test('renders dropdown correctly', () => {
    render(<DrawBoardPreferences preferences={mockPreferences} onChange={mockOnChange} />);
    const dropdownLabel = screen.getByText('Stroke Style');
    expect(dropdownLabel).toBeInTheDocument();

    const selectInput = dropdownLabel.nextElementSibling; // Assuming select is the next sibling
    expect(selectInput).toBeInTheDocument();
    expect(selectInput.tagName).toBe('SELECT');
    expect(selectInput).toHaveValue('dashed');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveValue('solid');
    expect(options[1]).toHaveValue('dashed');
    expect(options[2]).toHaveValue('dotted');
  });

  test('calls onChange for color picker when value changes', () => {
    render(<DrawBoardPreferences preferences={mockPreferences} onChange={mockOnChange} />);
    const colorPickerLabel = screen.getByText('Stroke Color');
    const colorInput = colorPickerLabel.nextElementSibling;

    fireEvent.change(colorInput, { target: { value: '#00ff00' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('#00ff00', 'strokeColor', 'value');
  });

  test('calls onChange for dropdown when value changes', () => {
    render(<DrawBoardPreferences preferences={mockPreferences} onChange={mockOnChange} />);
    const dropdownLabel = screen.getByText('Stroke Style');
    const selectInput = dropdownLabel.nextElementSibling;

    fireEvent.change(selectInput, { target: { value: 'dotted' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('dotted', 'strokeStyle', 'value');
  });

  test('renders checkbox correctly and calls onChange', () => {
    render(<DrawBoardPreferences preferences={mockPreferences} onChange={mockOnChange} />);
    const checkboxLabel = screen.getByText('Dark Mode');
    expect(checkboxLabel).toBeInTheDocument();

    // For checkbox, the input is often within another span or structure
    // Let's find it by role if possible, assuming it's properly labeled or use a more robust selector
    const checkboxInput = screen.getByRole('checkbox'); // This might need adjustment based on actual DOM
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toBeChecked();

    fireEvent.click(checkboxInput);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(false, 'darkMode', 'checked'); // It was true, so clicking makes it false
  });
});
