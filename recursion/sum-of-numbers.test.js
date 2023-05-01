const sum = (n) => {
    if(n > 0) {
        return n + sum(n-1)
    }
    return 0;
}

describe('sum-of-numbers', () => {
    it('should work fine for n > 0', () => {
        expect(sum(5)).toBe(15);
    })
});