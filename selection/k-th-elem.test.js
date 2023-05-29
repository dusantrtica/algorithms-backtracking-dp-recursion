const swap = (items, i, j) => {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

const partition = (items, pivotIndex, firstIndex = 0, lastIndex = items.length - 1) => {
    swap(items, pivotIndex, lastIndex);
    for(let i = firstIndex; i < lastIndex; i++) {
        if(items[i] < items[lastIndex]) {
            swap(items, i, firstIndex);
            firstIndex += 1;
        }
    }

    swap(items, firstIndex, lastIndex);
    return firstIndex;
}

const kth = (items, k, start = 0, end = items.length - 1) => {

}

describe('partition', () => {
    it('partitions array given the index is middle one', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 2;
        const pivotIdxAfterParition = partition(items, pivotIndex);

        expect(pivotIdxAfterParition).toBe(2);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([8, 7, 6]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2, 1]))
    })

    it('partitions array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 4;
        const pivotIdxAfterParition = partition(items, pivotIndex);
        expect(pivotIdxAfterParition).toBe(1);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([5, 8, 7, 6]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2]))
    });

});

describe.skip('k-th element in array', () => {
    it('returns the smallest element in the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 1)).toBe(-2);
    });

    it('returns the biggest element in the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 6)).toBe(8);
    });

});