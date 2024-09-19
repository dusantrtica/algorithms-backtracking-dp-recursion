const maxStockRevenue = (l, r, input = [], result = {}) => {
  if (l == r) {
    result.minValue = input[l]
    result.maxValue = input[l]
    return 0
  }
  const s = Math.floor((l + r) / 2)

  const leftMinMax = {}
  const leftResult = maxStockRevenue(l, s, input, leftMinMax)

  const rightMinMax = {}
  const rightResult = maxStockRevenue(s + 1, r, input, rightMinMax)

  result.maxValue = Math.max(leftMinMax.maxValue, rightMinMax.maxValue)
  result.minValue = Math.min(leftMinMax.minValue, rightMinMax.minValue)

  return Math.max(leftResult, rightResult, rightMinMax.maxValue - leftMinMax.minValue)
}
describe('Max stock revenue', () => {
  it('returns max value for a given input', () => {
    const input = [3, 5, 8, 4, 2, 6, 9]
    minMax = {}
    expect(maxStockRevenue(0, input.length - 1, input, minMax)).toBe(7)
  })
})
