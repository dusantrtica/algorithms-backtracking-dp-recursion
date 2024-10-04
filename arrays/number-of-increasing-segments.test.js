const numberOfIncSegments = (input = []) => {
  let cnt = 0
  const n = input.length
  let i = 0
  while (i < n) {
    let j = i + 1
    while (input[j - 1] < input[j] && j < n) {
      j++
    }
    const len = j - i
    i = j
    if (len > 1) {
      cnt += Math.floor((len * (len - 1)) / 2)
    }
  }
  return cnt
}
describe('Number of increasing segments', () => {
  it('returns number of increasing segments', () => {
    expect(numberOfIncSegments([1, 3, 4, -2, 10, 5, 7, 9, 11])).toEqual(10)
  })
})
