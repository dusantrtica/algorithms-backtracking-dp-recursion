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

const lcs = (s1, s2) => {
    const n1 = s1.length;
    const n2 = s2.length;

    const dpMatrix = createMatrix(n1 + 1, n2 + 1);
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            const c1 = s1[i - 1];
            const c2 = s2[j - 1];

            if (c1 === c2) {
                dpMatrix[i][j] = 1 + dpMatrix[i - 1][j - 1]
            } else {
                dpMatrix[i][j] = Math.max(dpMatrix[i - 1][j], dpMatrix[i][j - 1])
            }
        }
    }

    const sequence = [];

    let i = n1;
    let j = n2;

    while (i >= 0 && j >= 0) {
        while (i > 0 && dpMatrix[i][j] === dpMatrix[i - 1][j]) {
            i--;
        }

        while (j > 0 && dpMatrix[i][j] === dpMatrix[i][j - 1]) {
            j--;
        }

        sequence.push(s1[i - 1]);
        i--;
        j--;
    }

    return sequence.reverse().join('');
}
describe('Longest Common Subsequence', () => {
    it('returns correct subsequence', () => {
        expect(lcs('abedgh', 'aidfhr')).toEqual('adh')
    });

    it('returns again correct susequence', () => {
        expect(lcs('abc', 'ab')).toEqual('ab');
    });

    it('returns correct sequence', () => {
        expect(lcs('abc', 'ac')).toEqual('ac');
    });
});