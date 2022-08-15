import { render, screen } from '@testing-library/react';
import App from './App';
import { add, multiplication, minus ,divide } from './calculator'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name : "리액트 배우기" });
  expect(linkElement).toBeInTheDocument();
});

describe('사칙 연산 테스트', ()=>{
  const randomNumber1 = Math.round(Math.random() * 10)
  const randomNumber2 = Math.round(Math.random() * 10)
  test('덧셈', ()=>{
    expect(add(randomNumber1, randomNumber2)).toBe(randomNumber1 + randomNumber2)
  })

  test('뺄셈', () => {
    expect(minus(randomNumber1, randomNumber2)).toBe(randomNumber1 - randomNumber2)
  })

  test('나눗셈', () => {
    expect(divide(randomNumber1, randomNumber2)).toBe(randomNumber1 / randomNumber2)
  })

  test('곱셈', () => {
    expect(multiplication(randomNumber1, randomNumber2)).toBe(randomNumber1 * randomNumber2)
  })

})