const biggestRepeatedNum = (input = []) => {
  const numbers = new Set()
  let biggest = input[0]
  for (elem of input) {
    if (numbers.has(elem) && elem > biggest) {
      biggest = elem
    }
    numbers.add(elem)
  }

  return biggest
}

describe('Biggest repeated', () => {
  it('returns biggest repeated number', () => {
    expect(biggestRepeatedNum([3, 2, 1, 4, 2, 4, 3, 8, 9])).toBe(4)
  })
})
