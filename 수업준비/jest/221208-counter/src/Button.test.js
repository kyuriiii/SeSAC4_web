import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('<CountButtons />', () => {
  test('+ 버튼과 - 버튼 확인하기', () => {
    render(<Button />);
    const increaseBtn = screen.getByTestId('increaseBtn');
    const decreaseBtn = screen.getByTestId('decreaseBtn');

    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
  });

  test('+ 버튼과 - 버튼 눌러보기', () => {
    const increase = jest.fn();
    const decrease = jest.fn();
    render(
      <Button increase={increase} decrease={decrease} />
    );
    const increaseBtn = screen.getByTestId('increaseBtn');
    const decreaseBtn = screen.getByTestId('decreaseBtn');

    fireEvent.click(increaseBtn);
    fireEvent.click(decreaseBtn);

    expect(increase).toBeCalled();
    expect(decrease).toBeCalled();
  });
});