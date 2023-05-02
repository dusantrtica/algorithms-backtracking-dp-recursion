const { log } = require("console");

const binarySearch = (container, item, low = 0, high = container.length) => {
    if(low > high) {
        log({low, high})
        return -1;
    }

    const mid = Math.round((low + high)/2);
    if(container[mid] === item) {
        return mid;
    } else if (container[mid] < item) {
        return binarySearch(container, item, mid + 1, high);
    } else {
        return binarySearch(container, item, low, mid-1);
    }
}

describe('Binary Search', () => {
    it('empty array case', () => {
        expect(binarySearch([], 1)).toBe(-1);
    });

    it('single item case array, item found', () => {
        expect(binarySearch([1], 1)).toBe(0);
    });

    it('single item case, item not found', () => {
        expect(binarySearch([1], 2)).toBe(-1);
    });

    it('array, item found', () => {
        expect(binarySearch([1,2,3,4,5], 3)).toBe(2);
    });

    it('left edge case', () => {
        expect(binarySearch([1,2,3,4], 1)).toBe(0);
    });

    it('right edge case', () => {
        expect(binarySearch([1,2,3,4], 4)).toBe(3);
    });
});