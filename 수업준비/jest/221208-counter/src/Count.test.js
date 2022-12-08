import { render, screen } from '@testing-library/react';
import Count from './Count';

describe('<Count />', () => {
  test('현재 Count State 보여주기', () => {
    let sampleCount = 10;
    render(<Count count={sampleCount} />);
    const initState = screen.getByText('현재 숫자: 10');

    expect(initState).toBeInTheDocument();

    sampleCount = 5;
    render(<Count count={sampleCount} />);
    const countState = screen.getByText('현재 숫자: 5');

    expect(countState).toBeInTheDocument();
  });
});