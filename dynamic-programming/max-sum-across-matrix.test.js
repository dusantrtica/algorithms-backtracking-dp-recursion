
const generateEmptyTable = (n) => {
    table = []
    for (let i = 0; i < n; i++) {
        row = []
        for (j = 0; j < n; j++) {
            row.push(0);
        }
        table.push(row)
    }
    return table;
}

const maxSumInMatrix = (input = []) => {
    const n = input.length;
    const dp = generateEmptyTable(n)
    dp[0][0] = input[0][0]

    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + input[i][0]
        dp[0][i] = dp[0][i - 1] + input[0][i]
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + input[i][j];
        }
    }

    return dp[n-1][n-1];
}

describe('Maximal sum in matrix', () => {
    it('returns maximal sum in matrix', () => {
        const input = [
            [4, 3, 5, 7, 5],
            [1, 9, 4, 1, 3],
            [2, 3, 5, 1, 2],
            [1, 3, 1, 2, 0],
            [4, 6, 7, 2, 1]
        ]

        expect(maxSumInMatrix(input)).toBe(38);
    })
})