const fibHead = (n) => {
    if(n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    return fibHead(n-1) + fibHead(n-2);
}

const fibTail = (n, acc1 = 0, acc2 = 1) => {
    if (n == 0) return acc1;
    if (n == 1) return acc2;

    return fibTail(n-1, acc2, acc1+acc2);
}

describe('fib', () => {
    it('should return correct fibonacci nth number', () => {
        expect(fibHead(10)).toBe(55);
    });

    it('should work properly for tail recursion as well', () => {
        expect(fibTail(10)).toBe(55);

    });
});