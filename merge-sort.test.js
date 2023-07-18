const mergeSort = (inputArray) => {
    const n = inputArray.length;
    if (n === 1) {
        return inputArray;
    } else if (n === 2) {
        // sorting 2 elements array, could be done in a better way, but this
        // is just for ilustration purposes
        const [one, two] = inputArray;
        inputArray = [Math.min(one, two), Math.max(one, two)]
        return inputArray;
    }

    const first = mergeSort(inputArray.slice(0, n / 2))
    const second = mergeSort(inputArray.slice(n / 2))

    const mergedArray = new Array(n).fill(0);
    let i = 0;
    let j = 0;
    let k = 0

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mergedArray[k++] = first[i++];
        } else {
            mergedArray[k++] = second[j++];
        }
    }

    while (i < first.length) {
        mergedArray[k++] = first[i++]
    }

    while (j < second.length) {
        mergedArray[k++] = second[j++];
    }

    return mergedArray;

}

describe('Merge Sort', () => {
    it('sorts array', () => {
        expect(mergeSort([4, 3, 6, 2, 8, 1, 9, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
});