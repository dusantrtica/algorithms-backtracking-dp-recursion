const swap = (items, i, j) => {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

const kthElem = (input = [], k) => {
  const n = input.length

  let l = 0
  let d = n - 1
  let i = 0
  while (l <= d) {
    // partition
    let s = l
    for (i = l + 1; i <= d; i++) {
      if (input[i] < input[l]) {
        s++
        swap(input, i, s)
      }
    }
    swap(input, l, s)
    if (s < k) {
      l = s + 1
    } else if (s > k) {
      d = s - 1
    } else {
      return input[k]
    }
  }
  return 0
}

describe('K th element in a sorted array', () => {
  it('finds kth element in sorted array', () => {
    expect(kthElem([5, 2, 10, 3, 8], 3)).toBe(8)
  })
})
