const linearSearch = (container, item, index=0) => {
    if(index >= container.length) {
        return -1;
    }

    if(container[index] === item) {
        return index;
    }

    return linearSearch(container, item, index + 1);
}

describe('Linear Search', () => {
    it('should return index', () => {
        expect(linearSearch([2,4,1], 4)).toBe(1);
    });

    it('should return -1 if the item was not found', () => {
        expect(linearSearch([2,4,1,5], 9)).toBe(-1);
    })
});