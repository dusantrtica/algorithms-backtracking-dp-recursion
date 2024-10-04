const maxSumSegments = (input = []) => {
  let max = 0
  const n = input.length
  for (let i = 0; i < n; i++) {
    let zbir = 0
    let j
    for (j = i; j < n; j++) {
      zbir += input[j]
      if (zbir < 0) {
        break
      }
      if (zbir > max) {
        max = zbir
      }
    }
    i = j
  }
  return max
}

describe('Maximal sum of all segments', () => {
  it('returns ', () => {
    expect(maxSumSegments([2, 3, -2, -4, -8, 5, -1, 4, 2, -6])).toBe(10)
  })
})
