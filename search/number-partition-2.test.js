const allPartitions = []
const partitions = (n, maxAddition, partition = []) => {
  if (n === 0) {
    allPartitions.push([...partition])
    return
  }
  if (maxAddition > 1) {
    partitions(n, maxAddition - 1, partition)
  }
  if (maxAddition <= n) {
    partition.push(maxAddition)
    partitions(n - maxAddition, maxAddition, partition)
    partition.pop()
  }
}

describe('numberPartition', () => {
  it('return all partitions for number 5', () => {
    n = 5
    partition = []
    partitions(5, 5, partition)

    expect(allPartitions).toEqual([
      [1, 1, 1, 1, 1],
      [2, 1, 1, 1],
      [2, 2, 1],
      [3, 1, 1],
      [3, 2],
      [4, 1],
      [5]
    ])
  })
})
