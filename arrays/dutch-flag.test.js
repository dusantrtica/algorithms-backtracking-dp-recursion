const swap = (input, i, j) => {
  const tmp = input[i]
  input[i] = input[j]
  input[j] = tmp
}
const dutchFlag = (input = []) => {
  let l = 0
  let i = 0
  let d = input.length - 1

  while (i < d) {
    if (input[i] <= 10) {
      swap(input, i, l)
      l++
    } else if (input[i] <= 20) {
    } else {
      swap(input, i, d)
      d--
    }
    i++
  }
}

describe('Dutch flag', () => {
  it('reorders numbers in one pass', () => {
    const input = [18, 24, 8, 19, 25, 17, 9]
    dutchFlag(input)

    expect(input).toEqual([8, 9, 18, 19, 17, 25, 24])
  })
})
