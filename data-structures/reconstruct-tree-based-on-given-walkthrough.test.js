const postfixOrderFrom = (prefix = '', infix = '') => {
  if (prefix === '') {
    return ''
  }
  const root = prefix[0]
  const leftSubtreeLength = infix.indexOf(root)

  const leftSubtreePrefix = prefix.substring(1, leftSubtreeLength + 1)
  const leftSubtreeInfix = infix.substring(0, leftSubtreeLength)

  const rightSubtreePrefix = prefix.substring(1 + leftSubtreeLength)
  const rightSubtreeInfix = infix.substring(1 + leftSubtreeLength)

  return (
    postfixOrderFrom(leftSubtreePrefix, leftSubtreeInfix) +
    postfixOrderFrom(rightSubtreePrefix, rightSubtreeInfix) +
    root
  )
}

describe('suffix order from prefix and infix', () => {
  it('returns suffix order when prefix and infix were given', () => {
    const prefix = 'abecfg' // Root, Left, Right
    const infix = 'beafcg' // Left, Root, Right
    expect(postfixOrderFrom(prefix, infix)).toEqual('ebfgca')
  })
})
