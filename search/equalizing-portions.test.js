const nextPartition = (partition = []) => {
  let i = partition.length - 1
  while (i >= 0 && partition[i] === 1) {
    partition[i] = 0
    i--
  }
  if (i < 0) {
    return false
  }

  partition[i] = 1
  return true
}

const equalize = (values = []) => {
  const partition = new Array(values.length).fill(0)

  let minDiff = values.reduce((acc, curr) => acc + curr, 0)

  do {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < values.length; i++) {
      if (partition[i] === 0) {
        sum1 += values[i]
      } else {
        sum2 += values[i]
      }
    }

    minDiff = Math.min(minDiff, Math.abs(sum1 - sum2))
  } while (nextPartition(partition))

  return Number(minDiff.toFixed(2))
}

describe('Next partition', () => {
  it('returns true and moves to the next number for 000', () => {
    const input = [0, 0, 0]
    const result = nextPartition(input)
    expect(result).toBe(true)
    expect(input).toEqual([0, 0, 1])
  })
  it('returns true and moves to the next input for 010', () => {
    const input = [0, 1, 0]
    const result = nextPartition(input)

    expect(result).toBe(true)
    expect(input).toEqual([0, 1, 1])
  })
  it('returns false once there is no next binary number', () => {
    const input = [1, 1, 1]
    const result = nextPartition(input)

    expect(result).toBe(false)
  })
})

describe('Equalize Portions', () => {
  it('returns minimal difference between two portions', () => {
    expect(equalize([3.5, 1.7, 8.0, 1.2])).toEqual(1.6)
  })
})
