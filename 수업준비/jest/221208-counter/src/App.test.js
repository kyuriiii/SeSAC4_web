import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('Counter 과 Button 잘 가져오는지 확인', () => {
    render(<App />);
    const view = screen.getByText('현재 숫자: 0');
    const buttons = screen.getAllByRole('button');

    expect(view).toBeInTheDocument();
    expect(buttons.length).toBe(2); // 버튼이 2개인지
  });
});