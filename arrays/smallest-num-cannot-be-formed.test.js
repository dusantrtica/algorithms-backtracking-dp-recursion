/**
 *
 * @param {*} input sorted array of numbers
 * @returns
 */
const smallest = (input = []) => {
  let zbir = 0
  for (let x of input) {
    if (x > zbir + 1) {
      return zbir + 1
    }
    zbir += x
  }
}

describe('Smallest positive integer that cannot be formed', () => {
  it('returns smallest number that cannot be formed', () => {
    expect(smallest([1, 2, 3, 5, 14, 20, 27])).toBe(12)
  })

  it('returns 4 for a given array', () => {
    expect(smallest([1, 2, 5])).toBe(4)
  })
})
