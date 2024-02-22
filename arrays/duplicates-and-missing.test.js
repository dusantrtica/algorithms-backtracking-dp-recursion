/**
 * Given the array of size N which elements are from 0 to N-1, find
 * all duplicates and find missing elemenents
 *
 */

const swap = (input, i, j) => {
    const temp = input[i]
    input[i] = input[j]
    input[j] = temp
}

const duplicatesAndMissing = (input = []) => {
    const n = input.length
    let i = 0;

    for (let i = 0; i < n; i++) {
        if (input[i] !== i) {
            swap(input, i, input[i])
        }
    }

    const missing = []
    const duplicates = []

    for (let i = 0; i < n; i++) {
        if (input[i] !== i) {
            missing.push(i)
            duplicates.push(input[i])
        }
    }

    return { missing, duplicates: [...new Set(duplicates)] }
}

describe('duplicatesAndMissing', () => {
    it('finds all duplicates and missing numbers ', () => {
        const input = [5, 5, 0, 2, 1, 2, 2]
        expect(duplicatesAndMissing(input)).toEqual({
            missing: [3, 4, 6],
            duplicates: [2, 5]
        })
    })
    it('returns empty arrays when there are no missing and duplicated elements', () => {
        const input = [6, 5, 4, 3, 2, 1, 0]
        expect(duplicatesAndMissing(input)).toEqual({
            missing: [],
            duplicates: []
        })
    })

    it('returns missing and duplicates', () => {
        const input = [2,1,2]
        expect(duplicatesAndMissing(input)).toEqual({
            missing: [0],
            duplicates: [2]
        })
    })
})