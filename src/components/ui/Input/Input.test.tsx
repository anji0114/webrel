import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Input } from '.';

describe('Input interactions', () => {
  test('calls onChange handler when input', async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'Hello');
    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});

test('Input snapshot', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
