const factHead = (n) => {
    if(n == 0) {
        return 1;
    }

    const subResult = factHead(n-1);
    const result = subResult * n;
    return result;
}

const factTail = (n, acc=1) => {
    if(n == 1) {
        return acc;
    }

    return factTail(n-1, acc*n);
}
describe('factorial', () => {
    it('should work for n greated than 1', () => {
        expect(factHead(5)).toBe(120);
    });

    it('should work for n greated than 1 if we use tail', () => {
        expect(factTail(5)).toBe(120);
    });
});