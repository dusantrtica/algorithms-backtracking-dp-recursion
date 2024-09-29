const numberOfPartitions = (n, maxAddition = n) => {
  if (n === 0) {
    return 1
  }

  let br = 0
  if (maxAddition > 1) {
    br += numberOfPartitions(n, maxAddition - 1)
  }
  if (maxAddition <= n) {
    br += numberOfPartitions(n - maxAddition, maxAddition)
  }
  return br
}

describe('Calculate number of partitions', () => {
  it('returns number of partitions for 5', () => {
    expect(numberOfPartitions(5)).toEqual(7)
  })
  it('returns number of partitions for 4', () => {
    expect(numberOfPartitions(4)).toBe(5)
  })
})
