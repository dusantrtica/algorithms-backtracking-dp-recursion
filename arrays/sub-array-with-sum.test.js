const subArraysWithSum = (input = [], z = 0) => {
  const n = input.length

  const prefixSumsMap = {}

  let numOfIntervals = 0
  // Generate prefix sums
  let x = 0
  for (let i = 0; i < n; i++) {
    x += input[i]
    prefixSumsMap[x] = (prefixSumsMap[x] || 0) + 1
    if (prefixSumsMap[x - z]) {
      numOfIntervals++
    }
  }

  return numOfIntervals
}

describe('Sub arrays with a sum', () => {
  it('returns 3 when there are 3 segments which add up to z = 1', () => {
    expect(subArraysWithSum([1, 3, 2, -4, 3, -2], 1)).toBe(3)
  })
})
