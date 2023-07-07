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

const isQueenPositionValid = (table, row, col) => {
    const n = table.length;

    for (let i = 0; i < col; i++) {
        if (table[row][i] == 1)
            return false
    }
    for (i = col; i >= 0; i--) {
        if (table[row][i] === 1) {
            return false
        }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (table[i][j] === 1) {
            return false;
        }
    }

    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (table[i][j] === 1) {
            return false;
        }
    }

    return true;
}

const solve = (table, column) => {
    const n = table.length;
    if (column === n) {
        return true;
    }

    for (let row = 0; row < n; row++) {
        if (isQueenPositionValid(table, row, column)) {
            table[row][column] = 1

            if (solve(table, column + 1)) {
                return true;
            }

            // backtrack
            table[row][column] = 0
        }
    }

    return false;
}

const nQueens = (tableSize, queensCount) => {
    table = generateEmptyTable(tableSize);
    const queensPositions = [];

    if (solve(table, 0)) {
        return table;
    }
    console.log('We cannot place queens without attacking each other');
    return false;

};

describe('isQueenPositionValid', () => {
    it('returns false if 2 queens are in the same row or column', () => {
        const table = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 1, 0]
        ]

        expect(isQueenPositionValid(table, 0, 2)).toBe(false);
        expect(isQueenPositionValid(table, 1, 2)).toBe(false);
        expect(isQueenPositionValid(table, 2, 2)).toBe(false);

    })

    it('returns true if 2 queens dont fight each other', () => {
        const table = [
            [0, 0, 0],
            [1, 0, 0],
            [0, 0, 0]
        ]

        expect(isQueenPositionValid(table, 0, 1)).toBe(false);
        expect(isQueenPositionValid(table, 0, 2)).toBe(true);
        expect(isQueenPositionValid(table, 2, 2)).toBe(true);
        expect(isQueenPositionValid(table, 2, 1)).toBe(false);
        expect(isQueenPositionValid(table, 1, 1)).toBe(false);
    })
});

describe('generateEmptyTable', () => {
    it('renders table of size 1', () => {
        expect(generateEmptyTable(1)).toEqual([[0]]);
    })

    it('generates table of size 2', () => {
        expect(generateEmptyTable(2)).toEqual(
            [
                [0, 0],
                [0, 0]
            ]
        )
    });

    it('generates table of size 4', () => {
        expect(generateEmptyTable(4)).toEqual(
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        )
    });
});

describe('n-queens', () => {
    it('renders 4x4', () => {
        const table = nQueens(4, 4);
    });

    it('cannot solve in 3x3 with 3 queens', () => {
        const table = nQueens(3, 3);
        expect(table).toBe(false);
    });
});