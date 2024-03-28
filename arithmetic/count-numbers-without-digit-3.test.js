/**
 * Function which count number of numbers in interval [0,..., n] which dont contain digit 3
 * n = 2435
 * split into intervals:
 * [0, 2435] = [0, 999] U [1000, 9999] U [2000, 2435]
 * @param {n} n input
 * f(cn) =
 * 1. c < 3 => f(cn) = c*f(9...9) + f(n)
 * 2. c = 3 => f(cn) = c*f(9...9)
 * 3. c > 3 => f(cn) = (c-1) * f(9...9) + f(n)
 */
const countWithoutDigit = (n = '') => {
  const digitsCnt = n.length
  if (digitsCnt === 0) {
    return 1
  }
  const c = parseInt(n[0])
  const nines = new Array(digitsCnt - 1).fill(9).join('')
  const remainder = n.substring(1)
  if (c < 3) {
    return c * countWithoutDigit(nines) + countWithoutDigit(remainder)
  } else if (c === 3) {
    return c * countWithoutDigit(nines)
  } else {
    return (c - 1) * countWithoutDigit(nines) + countWithoutDigit(remainder)
  }
}
describe('Numbers without digit 3', () => {
  it('returns number of digits', () => {
    expect(countWithoutDigit('2435')).toEqual(1728)
  })
})
