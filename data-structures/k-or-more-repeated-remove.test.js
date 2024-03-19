/**
 * Given the array, and K > 0 transform it so that
 * every k or more consectuive occurence of the same element is erased
 * E.g. array: 1,1,2,2,2,2,1,3,4,4,5,5,5,4,4,3,2,1,1,1 =>
 * 1,1,(2 is removed 1, 3, 4, 4, (5 is removed), 4, 4, 3, 2 =>
 * 3, 3, 2
 */

const transform = (array = [], k) => {
  const queue = []
  let i = 0
  const n = array.length
  queue.push(array[i])
  for (i = 1; i < n; i++) {
    if (array[i] !== array[i - 1]) {
      let j = queue.length - 1
      let qK = 1
      while (j >= 0 && queue[j] === queue[j - 1]) {
        qK++
        j--
      }
      if (qK >= k) {
        while (qK >= 0) {
          queue.pop()
          qK--
        }
      }
    }
    queue.push(array[i])
  }
  return queue
}

describe('Condense', () => {
  it('removes elements ', () => {
    const array = [1, 1, 2, 2, 2, 2, 1, 3, 4, 4, 5, 5, 5, 4, 4, 3, 2, 1, 1, 1]
    const k = 3
    expect(transform(array, k)).toEqual([3, 3, 2])
  })
})
