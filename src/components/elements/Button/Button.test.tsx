import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Button } from '.';

describe('Button render', () => {
  test('display button', () => {
    render(
      <Button color='dark' size='md'>
        Button
      </Button>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders as an anchor tag when href is provided', () => {
    render(
      <Button href='/sample' color='dark' size='md'>
        Link
      </Button>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('Button interactions', () => {
  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(
      <Button color='dark' size='md' onClick={handleClick}>
        Button
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button color='dark' size='md' onClick={handleClick} disabled>
        Button
      </Button>,
    );
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

test('Button snapshot', () => {
  const tree = renderer
    .create(
      <Button color='dark' size='md'>
        Button
      </Button>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
