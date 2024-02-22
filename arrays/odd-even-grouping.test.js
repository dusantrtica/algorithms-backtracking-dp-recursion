const isOdd = (n) => n % 2 === 1
const isEven = (n) => !isOdd(n)

const swap = (input, i, j) => {
    const temp = input[i]
    input[i] = input[j]
    input[j] = temp
}
/**
 * Given the array, reoder elements such that
 * odd numbers come first and then even ones.
 * @param {} input array 
 */
const oddEvenGrouping = (input = []) => {
    let i = 0
    let j = input.length - 1
    while(i < j) {
        if(isEven(input[j]))
            j--;
        else if(isOdd(input[i]))
            i++;
        else {
            swap(input, i , j)
        }
    }
}

describe('Odd Even Grouping', () => {
    it('Does not do anything if elements are in place', () => {
        const input = [1, 3, 5, 2, 4, 6]
        oddEvenGrouping(input)
        expect(input).toEqual([1, 3, 5, 2, 4, 6])
    })

    it('reorders elements so that odds come first', () => {
        const input = [1, 2, 3, 4, 5, 6]
        oddEvenGrouping(input)

        for(let i = 0; i < 3; i++) {
            expect(isOdd(input[i])).toBe(true)
        }

        for(let i = 3; i < 6; i++) {
            expect(isEven(input[i])).toBe(true)
        }
    })
})