const binPacking = (items, bins) => {
    items.sort().reverse();

    while (items.length !== 0) {
        const item = items.shift();

        for (let i = 0; i < bins.length; i++) {
            if (item <= bins[i]) {
                bins[i] -= item;
                break;
            }
        }
    }

    return bins;

};

describe('Bin Packing', () => {
    it('packs items in the bin in first fit decreasing order', () => {
        const bins = [8, 8, 8, 8, 8]; // bins with capacity
        const items = [4, 2, 7, 5, 6, 3]; // items with weight

        const remainingCapacityInBins = binPacking(items, bins);
        expect(remainingCapacityInBins).toEqual([1, 0, 0, 4, 8])
    });
});