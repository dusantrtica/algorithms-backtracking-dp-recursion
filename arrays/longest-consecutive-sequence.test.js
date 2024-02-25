/**
 * Given the input array of numbers, find the longest
 * sequence of consectutive numbers
 * @param {input} input array of numberes
 * @returns
 */
const longestConsecutive = (input = []) => {
  input.sort((a, b) => a - b)
  const n = input.length
  let i = 1
  let currSequence = [input[0]]
  let maxSequence = [input[0]]

  for (i = 1; i < n; i++) {
    if (input[i] === input[i - 1]) {
      continue
    }
    if (input[i] === input[i - 1] + 1) {
      currSequence.push(input[i])
    } else {
      if (maxSequence.length < currSequence.length) {
        maxSequence = currSequence
      }
      currSequence = [input[i]]
    }
  }
  console.log(currSequence, maxSequence)
  return currSequence.length > maxSequence.length ? currSequence : maxSequence
}
describe('Longest Consecutive', () => {
  it('returns the longest sequence', () => {
    const input = [8, 5, 5, 1, 8, 3, 1, 0, 4, 9, 6, 10]
    expect(longestConsecutive(input)).toEqual([3, 4, 5, 6])
  })
})
