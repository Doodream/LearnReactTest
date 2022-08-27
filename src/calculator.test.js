import { add, multiplication, minus ,divide } from './calculator'

describe('사칙 연산 테스트', ()=>{
  const testNumber1 = 4
  const testNumber2 = 23
  test('덧셈', ()=>{
    expect(add(testNumber1, testNumber2)).toBe(testNumber1 + testNumber2)
  })

  test('뺄셈', () => {
    expect(minus(testNumber1, testNumber2)).toBe(testNumber1 - testNumber2)
  })

  test('나눗셈', () => {
    expect(divide(testNumber1, testNumber2)).toBe(testNumber1 / testNumber2)
  })

  test('곱셈', () => {
    expect(multiplication(testNumber1, testNumber2)).toBe(testNumber1 * testNumber2)
  })

})