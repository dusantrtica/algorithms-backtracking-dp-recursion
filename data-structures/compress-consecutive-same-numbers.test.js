const compressConsecutiveSameNumbers = (input = [], k = 0) => {
  const queue = []
  const n = input.length

  const checkStackAndRemoveOccurences = () => {
    let j = queue.length - 1
    let kk = 1
    while (j > 0 && queue[j] === queue[j - 1]) {
      kk++
      j--
    }
    if (kk >= k) {
      while (kk > 0) {
        queue.pop()
        kk--
      }
    }
  }

  queue.push(input[0])
  let lastAdded = input[0]
  for (let i = 1; i < n; i++) {
    if (input[i] !== lastAdded) {
      checkStackAndRemoveOccurences()
    }

    queue.push(input[i])
    lastAdded = input[i]
  }
  checkStackAndRemoveOccurences()
  return queue
}

describe('Remove consecutive numbers', () => {
  const input = [1, 1, 2, 2, 2, 2, 1, 3, 4, 4, 5, 5, 5, 4, 4, 3, 2, 1, 1, 1]
  const k = 3
  it('removes elements ', () => {
    expect(compressConsecutiveSameNumbers(input, k)).toEqual([3, 3, 2])
  })
})
