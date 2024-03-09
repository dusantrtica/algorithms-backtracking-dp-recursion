const maxNumberOfPlayers = (weaponPowers = [], t = 0) => {
  weaponPowers.sort((a, b) => a - b)
  const n = weaponPowers.length
  console.log(weaponPowers)
  const canPlay = (k) => {
    for (let i = 0; i + k - 1 < n; i++) {
      if (k * (weaponPowers[i + k - 1] - weaponPowers[i]) <= t) {
        return true
      }
    }
    return false
  }

  let l = 0
  let d = n
  let k = 0
  while (l <= d) {
    const mid = Math.floor((d + l) / 2)
    if (canPlay(mid)) {
      k = mid
      l = mid + 1
    } else {
      d = mid - 1
    }
  }

  return k
}

describe('Max Number of Players', () => {
  it('returns max number', () => {
    expect(maxNumberOfPlayers([5, 4, 2, 7, 3], 15)).toBe(4)
  })

  it('returns max number for another threshold', () => {
    expect(maxNumberOfPlayers([5, 4, 2, 7, 3], 10)).toBe(3)
  })
})
