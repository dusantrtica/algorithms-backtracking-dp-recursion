const ringLocator = (ringWidths = [], point) => {
  const ringDiameters = [...ringWidths]
  for (let i = 1; i < ringDiameters.length; i++) {
    ringDiameters[i] = ringDiameters[i - 1] + ringDiameters[i]
  }

  let low = 0
  let high = ringDiameters.length - 1

  while (true) {
    const midIndex = Math.floor(low + (high - low) / 2)
    if (ringDiameters[midIndex] <= point && point <= ringDiameters[midIndex + 1]) {
      return midIndex + 1
    } else if (ringDiameters[midIndex + 1] < point) {
      low = midIndex
    } else {
      high = midIndex
    }
  }
}

describe('Ring locator', () => {
  it('retrns first ring to which the point belongs to', () => {
    const ringWidths = [1, 2, 1, 3]
    const point = 3.5

    expect(ringLocator(ringWidths, point)).toEqual(2)
  })

  it('retrns first ring to which the point belongs to', () => {
    const ringWidths = [1, 2, 1, 3, 1, 2]
    const point = 7.5

    expect(ringLocator(ringWidths, point)).toEqual(4)
  })
})
