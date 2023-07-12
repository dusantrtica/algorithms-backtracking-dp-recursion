const createMatrix = (n, m = n) => {
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

const rodCut = (values) => {
    const N = values.length; // Rod length;
    const dpMatrix = createMatrix(N + 1)

    for (let pcsCount = 1; pcsCount <= N; pcsCount++) {
        const cutValue = values[pcsCount - 1];
        for (let cutLength = 1; cutLength <= N; cutLength++) {
            let valueWithCurrPieces = 0;
            if (pcsCount <= cutLength) {
                valueWithCurrPieces = cutValue + dpMatrix[pcsCount][cutLength - pcsCount];
            }
            const valueWithoutCurrPiece = dpMatrix[pcsCount - 1][cutLength];
            dpMatrix[pcsCount][cutLength] = Math.max(valueWithCurrPieces, valueWithoutCurrPiece);
        }
    }

    return dpMatrix[N][N];

}
describe('Rod cut', () => {
    it('Calculates maximum price for rod of 4m len', () => {
        const values = [2, 5, 7, 3];
        expect(rodCut(values)).toBe(10);
    });

    it('calculates maximum price for for of 5m len', () => {
        const values = [2, 5, 7, 3, 9];
        expect(rodCut(values)).toBe(12);
    });
});