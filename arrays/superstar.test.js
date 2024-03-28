/** A person is a superstar if, on a party that person knows no one but everyone else know who that person is
 * A matrix of people at the party: m[i][j] === 1 if person i knows person j, otherwise 0
 * Function returns the superstar if the one exists
 */

const superstar = (m = [[]]) => {
  const n = m.length
  let potentialStar = 0
  for (let i = 1; i < n; i++) {
    if (m[potentialStar][i]) {
      potentialStar = i
    }
  }

  // check if potential star is really a star
  let isStar = true

  for (let i = 0; i < n; i++) {
    if (i !== potentialStar && !m[i][potentialStar]) {
      isStar = false
      break
    }
    if (m[potentialStar][i] && i !== potentialStar) {
      isStar = false
      break
    }
  }
  return isStar ? potentialStar : undefined
}

describe('Superstar', () => {
  it('returns a superstar for given party of 3 people', () => {
    expect(
      superstar([
        [1, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
      ])
    ).toEqual(1)
  })

  it('returns a superstar for a given party of 5 people', () => {
    expect(
      superstar([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [0, 0, 0, 0, 1]
      ])
    ).toEqual(4)
  })
  it('returns undefined as there is no superstar in the group', () => {
    expect(
      superstar([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [0, 0, 0, 1, 1]
      ])
    ).toBeUndefined()
  })
})
