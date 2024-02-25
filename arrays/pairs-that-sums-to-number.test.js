/**
 * Given an array of numbers and a number
 * find all pairs of elems. of array that sum to the given number
 */

const pairsThatSumToN = (input = [], N) => {
  input.sort((a, b) => a - b)
  const n = input.length
  let i = 0
  let j = n - 1
  const pairs = []
  while (i < j) {
    const sum = input[i] + input[j]
    if (sum === N) {
      pairs.push([input[i], input[j]])
      i++
      j--
    } else if (sum < N) {
      i++
    } else {
      j--
    }
  }
  return pairs
}

describe('Pairs that sum to the number', () => {
  it('finds all pairs', () => {
    input = [5, 3, 2, 6, 1, 4, 0]
    N = 6
    expect(pairsThatSumToN(input, N)).toEqual([
      [0, 6],
      [1, 5],
      [2, 4]
    ])
  })
})
