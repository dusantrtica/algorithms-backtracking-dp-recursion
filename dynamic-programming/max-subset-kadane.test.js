const maxSubarraySum = (input) => {
    const n = input.length;
    const A = Array(n).fill(0);
    A[0] = input[0];
    let max = A[0];

    for (let i = 1; i < n; i++) {
        A[i] = Math.max(
            A[i - 1] + input[i],
            input[i]
        )
        max = Math.max(max, A[i]);
    }

    return max;

}

describe('Maximum Subarray Sum', () => {
    it('returns 7 for the input array', () => {
        expect(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
    });

    it('case 2', () => {
        expect(maxSubarraySum([2, -1, 3])).toBe(4);
    });

    it('case 3', () => {
        expect(maxSubarraySum([1, -2, 2, 3, 1])).toBe(6);
    });
});