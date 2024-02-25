/**
 * Given the input of numbers, count how many numbers
 * have occured even number of times
 */

const numberOfEvenOccurences = (input = []) => {
  input.sort((a, b) => b - a)
  let numberOfEvenOccs = 0
  let currOccNo = 1
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      currOccNo += 1
    } else {
      if (currOccNo % 2 === 0) {
        numberOfEvenOccs += 1
      }
      currOccNo = 1
    }
  }
  return numberOfEvenOccs
}

describe('Number of even occurences', () => {
  it('returns number with even occurences', () => {
    expect(numberOfEvenOccurences([4, 3, 1, 2, 1, 4, 1, 3, 4, 4])).toBe(2)
  })
})
