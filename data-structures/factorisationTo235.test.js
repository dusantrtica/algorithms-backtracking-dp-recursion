/**
 *
 * Function returns first N numbers for which are 2, 3 and 5 factors.
 * More precisely it returns all x for such x = 2^a * 3^b * 5^c, for
 * a, b, c >= 0
 */
const firstNFactorsOf235 = (n = 0) => {
  const q1 = [2]
  const q2 = [3]
  const q3 = [5]

  const result = [1]
  let val = 0
  for (let i = 1; i < n; i++) {
    let val = Math.min(q1[0], q2[0], q3[0])

    result.push(val)
    q1.push(val * 2)
    q2.push(val * 3)
    q3.push(val * 5)

    if (val === q1[0]) q1.shift()
    if (val === q2[0]) q2.shift()
    if (val === q3[0]) q3.shift()
  }
  return result
}

describe('First N numbers which are contained only of factors of 2, 3 and 5', () => {
  it('returns first 15 numbers', () => {
    expect(firstNFactorsOf235(15)).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24])
  })
})
