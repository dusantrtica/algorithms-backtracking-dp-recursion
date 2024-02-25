/** Given the array, with the rotation which has the
 * biggest weight sum: z = 0*a0 + 1*a1+ ... + (n-1)*an-1
 */

/**
 * The idea is not to calculate weighted sum for a rotation but instead to calculate
 * current value based on the previsou value
 * zo = 0x + y + 2z + 3t
 * z1 = 0y + z + 2t + 3x
 * => z1 = z0 + val => val = z1 - z0 ....
 * zi = zi-1 + -z + n*input[i-1]
 */

const rotationWitBiggestWeightSum = (input = []) => {
  const n = input.length
  const z = input.reduce((acc, curr) => acc + curr, 0)
  let prevSum = input.reduce((acc, curr, idx) => {
    return acc + curr * idx
  }, 0)

  let maxSum = z
  for (let i = 1; i < n; i++) {
    currSum = prevSum - z + n * input[i - 1]
    if (currSum > maxSum) {
      maxSum = currSum
    }
    prevSum = currSum
  }
  return maxSum
}
describe('Given the ', () => {
  it('returns the greatest weighted rotation', () => {
    expect(rotationWitBiggestWeightSum([2, 1, 3])).toEqual(7)
  })
  it('returns for 3,1,2', () => {
    expect(rotationWitBiggestWeightSum([3, 1, 2])).toEqual(0 * 1 + 1 * 2 + 2 * 3)
  })

  it('returns correct value for 5, 4, 1', () => {
    expect(rotationWitBiggestWeightSum([5, 4, 1])).toEqual(13)
  })
})
