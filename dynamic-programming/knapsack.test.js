const createMatrix = (n, m) => {
    const matrix = Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = Array(m);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }

    return matrix;
}
const knapsack = (M, weights, values) => {
    const n = values.length;
    const matrix = createMatrix(values.length + 1, M + 1);

    for (let item = 1; item <= n; item++) {
        const itemWeight = weights[item - 1];
        const itemValue = values[item - 1];
        for (let currWeight = 1; currWeight <= M; currWeight++) {
            const maxValueWithoutCurrItem = matrix[item - 1][currWeight];
            let valueWithCurrItem = 0;

            if (itemWeight <= currWeight) {
                valueWithCurrItem = itemValue + matrix[item - 1][currWeight - itemWeight];
            }

            const maxValue = Math.max(
                maxValueWithoutCurrItem, valueWithCurrItem)

            matrix[item][currWeight] = maxValue;

        }
    }

    return matrix[values.length][M];
}


const knapsackRecursive = (M, weights, values, n = values.length - 1) => {
    if (M <= 0 || n <= 0) {
        return 0;
    }

    const maxValueWithouthNthItem = knapsackRecursive(M, weights, values, n - 1);
    const maxValueWithNthItem = values[n] + knapsackRecursive(M - weights[n], weights, values, n - 1);

    return Math.max(maxValueWithNthItem, maxValueWithouthNthItem);
}
describe('Knaspack', () => {
    it('calculates maximum value with recursive approach', () => {
        const weights = [4, 2, 3];
        const values = [10, 4, 7];
        const M = 5;
        expect(knapsackRecursive(M, weights, values)).toBe(11)
    });
    it('calculates maximum with iterative approach', () => {
        const weights = [4, 2, 3];
        const values = [10, 4, 7];
        const M = 5;
        expect(knapsack(M, weights, values)).toBe(11)
    })
});