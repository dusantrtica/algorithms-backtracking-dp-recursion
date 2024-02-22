const dominantElement = (input = []) => {
    input.sort()
    let elem = input[0]
    let count = 1
    let maxCount = 1
    let maxElem = input[0]
    const n = input.length

    for (let i = 1; i < n; i++) {
        if (input[i] === input[i - 1]) {
            count++
        } else {
            if (maxCount < count) {
                maxElem = elem
                maxCount = count
            }
            count = 1
            elem = input[i]

        }
    }

    return count > maxCount ? elem : maxElem
}

describe('dominantElement', () => {
    it('returns element which occurs most frequently', () => {
        const input = [3, 4, 3, 1, 4, 4, 2]
        expect(dominantElement(input)).toBe(4)
    })

    it('returns element which occurs most frequently 1', () => {
        const input = [3, 4, 3, 1, 3, 4, 2]
        expect(dominantElement(input)).toBe(3)
    })
})