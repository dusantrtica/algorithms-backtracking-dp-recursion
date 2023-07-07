const solveSudoku = (input) => {
    const BOARD_SIZE = 9;
    const BOX_SIZE = 3;

    const isValid = (row, col, number) => {
        for (let i = 0; i < BOARD_SIZE; i++) {
            if (input[row][i] === number || input[i][col] === number) {
                return false;
            }
        }

        const boxRowOffset = Math.floor(row / BOX_SIZE);
        const boxColOffset = Math.floor(col / BOX_SIZE);

        for (let i = 0; i < BOX_SIZE; i++) {
            for (let j = 0; j < BOX_SIZE; j++) {
                const x = boxRowOffset * BOX_SIZE + i;
                const y = boxColOffset * BOX_SIZE + j;
                if (input[x][y] === number) {
                    return false;
                }
            }
        }
        return true;
    }

    const solve = (row, col) => {
        if (row === BOARD_SIZE) {
            if (col === BOARD_SIZE) {
                return true;
            } else {
                col += 1;
            }
            row = 0;
        }
        if (input[row][col] !== 0) {
            return solve(row + 1, col);
        }
        for (let number = 1; number <= 9; number++) {
            if (input[row][col] == 0 && isValid(row, col, number)) {
                input[row][col] = number;
                if (solve(row + 1, col)) {
                    return true;
                } else {
                    console.log(`backtracking, as ${number} is not possible for ${row} and ${col}`)
                    input[row][col] = 0;
                }
            }
        }
        return false;
    }

    if (solve(0, 0)) {
        return input;
    }

    return false;
}

describe('Sudoku', () => {
    it('solves sudoku', () => {
        const sudoku = [
            [3, 0, 6, 5, 0, 8, 4, 0, 0],
            [5, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 7, 0, 0, 0, 0, 3, 1],
            [0, 0, 3, 0, 1, 0, 0, 8, 0],
            [9, 0, 0, 8, 6, 3, 0, 0, 5],
            [0, 5, 0, 0, 9, 0, 6, 0, 0],
            [1, 3, 0, 0, 0, 0, 2, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 4],
            [0, 0, 5, 2, 0, 6, 3, 0, 0]
        ]

        const solvedSudoku = solveSudoku(sudoku);
        expect(solvedSudoku).toBeTruthy();
    });
});