const euclidian = (a, b) => {
    if(a % b == 0) {
        return b;
    }
    return euclidian(b, a % b);
}

describe('Euclidian Algo for GCD', () => {
    it('should work for 45 and 10', () => {
        expect(euclidian(45, 10)).toBe(5);
    });

    it('should work for co-prime', () => {
        expect(euclidian(9, 8)).toBe(1);
    });

    it('should work for another one example', () => {
        expect(euclidian(24, 9)).toBe(3);
    });
});