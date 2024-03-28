const grayCode = (m, k, digits = []) => {
  if (m === 0) {
    return
  }

  if (k < Math.pow(2, m - 1)) {
    digits.push('0')
    grayCode(m - 1, k, digits)
  } else {
    digits.push('1')
    grayCode(m - 1, Math.pow(2, m) - 1 - k, digits)
  }
}

const grayCodeIter = (n, k) => {
  const digits = []

  while (n > 0) {
    if (k < 1 << (n - 1)) {
      digits.push('0') // if we are in the first half of numbers k
    } else {
      digits.push('1')

      k = Math.pow(2, n) - 1 - k
    }
    n--
  }

  return digits
}

describe('Gray Code', () => {
  let digits = []

  beforeEach(() => {})
  afterEach(() => {
    digits = []
  })
  it('returns gray 1st gray code of size 3', () => {
    grayCode(3, 0, digits)
    expect(digits.join('')).toEqual('000')
    expect(grayCodeIter(3, 0)).toEqual(digits)
  })
  it('returns gray 2nd gray code of size 3', () => {
    grayCode(3, 1, digits)
    expect(digits.join('')).toEqual('001')
    expect(grayCodeIter(3, 1)).toEqual(digits)
  })
  it('returns gray 3rd gray code of size 3', () => {
    grayCode(3, 2, digits)
    expect(digits.join('')).toEqual('011')
    expect(grayCodeIter(3, 2)).toEqual(digits)
  })
  it('returns gray 4th gray code of size 3', () => {
    grayCode(3, 3, digits)
    expect(digits.join('')).toEqual('010')
    expect(grayCodeIter(3, 3)).toEqual(digits)
  })
  it('returns gray 5th gray code of size 3', () => {
    grayCode(3, 4, digits)
    expect(digits.join('')).toEqual('110')
    expect(grayCodeIter(3, 4)).toEqual(digits)
  })
  it('returns gray 6th gray code of size 3', () => {
    grayCode(3, 5, digits)
    expect(digits.join('')).toEqual('111')
    expect(grayCodeIter(3, 5)).toEqual(digits)
  })
  it('returns gray 7th gray code of size 3', () => {
    grayCode(3, 6, digits)
    expect(digits.join('')).toEqual('101')
    expect(grayCodeIter(3, 6)).toEqual(digits)
  })
  it('returns gray 8th gray code of size 3', () => {
    grayCode(3, 7, digits)
    expect(digits.join('')).toEqual('100')
    expect(grayCodeIter(3, 7)).toEqual(digits)
  })
})
