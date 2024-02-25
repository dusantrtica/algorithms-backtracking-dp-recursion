const routerLocation = (buildings = []) => {
  const n = buildings.length

  let cablesLength = 0
  let left = 0
  let right = 0

  for (let i = 0; i < n; i++) {
    cablesLength += buildings[i] * i
    right += buildings[i]
  }

  let minLength = cablesLength

  for (let i = 1; i < n; i++) {
    left += buildings[i - 1]
    right -= buildings[i - 1]
    cablesLength += left - right
    if (cablesLength < minLength) {
      minLength = cablesLength
    }
  }

  return minLength
}

describe('Router location', () => {
  it('calculates router location so that cables lenght is minimal', () => {
    expect(routerLocation([3, 2, 4, 1, 3])).toEqual(15)
  })
})
