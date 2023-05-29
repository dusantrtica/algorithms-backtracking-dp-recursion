const swap = (items, i, j) => {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

const partition = (items, pivotIndex, firstIndex, lastIndex) => {
    swap(items, pivotIndex, lastIndex);
    for (let i = firstIndex; i < lastIndex; i++) {
        if (items[i] < items[lastIndex]) {
            swap(items, i, firstIndex);
            firstIndex += 1;
        }
    }

    swap(items, firstIndex, lastIndex);
    return firstIndex;
}

const randomInRange = (start, end) => {
    return Math.floor(Math.random() * (end - start));
}

const kth = (items, k, start = 0, end = items.length) => {
    const pivotIndex = Math.floor(Math.random() * (end - start));
    const pivotIndexAfterPartition = partition(items, pivotIndex, start, end - 1)
    console.log({ pivotIndex, pivotIndexAfterPartition })
    console.log('array after part: ', items);

    if (pivotIndexAfterPartition === k) {
        return items[pivotIndexAfterPartition]
    }
    if (pivotIndexAfterPartition < k) {
        return kth(items, k, pivotIndexAfterPartition + 1, end)
    }
    if (pivotIndexAfterPartition > k) {
        return kth(items, k, start, pivotIndexAfterPartition - 1);
    }
}

describe('partition', () => {
    it('partitions array given the index is middle one', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 2;
        const pivotIdxAfterParition = partition(items, pivotIndex, 0, 5);

        expect(pivotIdxAfterParition).toBe(2);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([8, 7, 6]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2, 1]))
    })

    it('partitions array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 4;
        const pivotIdxAfterParition = partition(items, pivotIndex, 0, 5);
        expect(pivotIdxAfterParition).toBe(1);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([5, 8, 7, 6]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2]))
    });

    it('partitions array again', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 0;
        const pivotIdxAfterParition = partition(items, pivotIndex, 0, 5);
        expect(pivotIdxAfterParition).toBe(4);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([8]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2, 1, 5, 6]))
    });

    it('partitions according to rightmost element', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 5;
        const pivotIdxAfterParition = partition(items, pivotIndex, 0, 5);
        expect(pivotIdxAfterParition).toBe(3);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([8, 7]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2, 1, 5]))
    });

    it('partitions according to leftmost element', () => {
        const items = [7, -2, 5, 8, 1, 6];
        const pivotIndex = 0;
        const pivotIdxAfterParition = partition(items, pivotIndex, 0, 5);
        expect(pivotIdxAfterParition).toBe(4);
        expect(new Set(items.splice(pivotIdxAfterParition + 1))).toEqual(new Set([8]));
        expect(new Set(items.splice(0, pivotIdxAfterParition))).toEqual(new Set([-2, 1, 5, 6]))
    });
});

describe('k-th element in array', () => {
    it('returns the smallest element in the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 0)).toBe(-2);
    });

    it('returns the 3rd element in the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 3)).toBe(6);
    });

    it('returns the 4th the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 4)).toBe(7);
    });

    it('returns the 5th the array', () => {
        const items = [7, -2, 5, 8, 1, 6];
        expect(kth(items, 5)).toBe(8);
    });
});

describe('randomInRange', () => {
    it('should generate random numbers', () => {
        const allRandomNumbers = new Set();
        for (let i = 0; i < 10000; i++) {
            allRandomNumbers.add(randomInRange(0, 10));
        }
        console.log(allRandomNumbers)
    });
});