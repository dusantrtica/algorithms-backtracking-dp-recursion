/**
 * An array with the following property is given:
 * for each element, all elements prior it are either greater
 * or all the elemeents are smaller than the element
 * E.g: 5, 8, 12, 4, 2, 13, 19, 1
 * Sort such an array in O(n) time
 */

const sort = (array = []) => {
  const queue = [array[0]]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      queue.push(array[i])
    } else {
      queue.unshift(array[i])
    }
  }
  return queue
}

describe('All before, bigger than', () => {
  it('sorts the array with the described property', () => {
    expect(sort([5, 8, 12, 4, 2, 13, 19, 1])).toEqual([1, 2, 4, 5, 8, 12, 13, 19])
  })
})
