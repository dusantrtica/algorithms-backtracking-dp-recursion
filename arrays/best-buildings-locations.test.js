/**
 * The best buildings position in those in which the minimal gap reaches its maximum
 * For example if buildings spots are: 2, 4, 6, 9, 10, 12, 14 and you have to build 3 houses
 * then the biggest gap between them is 5 which is considered the best way to put the houses in order
 */
const bestBuldingLocations = (availableLocations = [], numberOfBuildings = 0) => {
  const n = availableLocations.length
  const isGapPossible = (gap = 1) => {
    let location = availableLocations[0]
    let buildingsToBuild = numberOfBuildings - 1
    for (let i = 1; i < n && buildingsToBuild > 0; i++) {
      if (availableLocations[i] - location >= gap) {
        location = availableLocations[i]
        buildingsToBuild--
      }
    }

    return buildingsToBuild == 0
  }

  let l = 0
  let r = availableLocations[n - 1]
  let maxGap
  while (l <= r) {
    const gap = (r + l) / 2
    if (isGapPossible(gap)) {
      maxGap = gap
      l = gap + 1
    } else {
      r = gap - 1
    }
  }
  return maxGap
}

describe('bestBulidingLocations', () => {
  it('should return 5 for the example above', () => {
    const locations = [2, 4, 6, 9, 10, 12, 14]
    expect(bestBuldingLocations(locations, 3)).toBe(5)
  })
})
