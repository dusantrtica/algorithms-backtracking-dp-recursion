const createMatrix = (n, m = n) => {
    const matrix = Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = Array(m);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
        matrix[i][0] = 1; // 0 is always possible to reach using no number out of i numbers;
    }

    return matrix;
}

const subsetSum = (N, numbers) => {
    const dpMatrix = createMatrix(numbers.length + 1, N + 1);

    for (let number = 1; number <= numbers.length; number++) {
        for (let sum = 1; sum <= N; sum++) {
            if (dpMatrix[number - 1][sum]) {
                dpMatrix[number][sum] = 1;
            } else {
                numberValue = numbers[number - 1];
                dpMatrix[number][sum] = dpMatrix[number - 1][sum - numberValue];
            }
        }
    }

    return dpMatrix[numbers.length][N] === 1;
}
describe('Subset Sum', () => {
    it('returns true if possible to sum to 9', () => {
        expect(subsetSum(9, [5, 2, 1, 3])).toBe(true);
    });

    it('cannot find sub array that sums to 12', () => {
        expect(subsetSum(12, [5, 2, 1, 3])).toBe(false);
    });

    it('cannot find a sub array that adds up to 9', () => {
        expect(subsetSum(9, [4, 3, 3])).toBe(false);
    })
});