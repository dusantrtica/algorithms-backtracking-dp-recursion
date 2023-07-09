const fib = (n) => {
    const dp = new Array(n).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n - 1]
}

describe('Fibonacci numbers', () => {
    it('calculates 5th number ', () => {
        expect(fib(9)).toBe(34)
    })
});