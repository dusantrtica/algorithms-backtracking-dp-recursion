const isMoveValid = (matrix, i, j) => {
    n = matrix.length;
    return 0 <= i && i < n && 0 <= j && j < n && matrix[i][j] !== 0;
}
const solveMaze = (matrix) => {
    const n = matrix.length;
    const path = [];

    const isVisited = (move) => Boolean(path.find((visited) => visited[0] === move[0] && visited[1] === move[1]));

    const validMoves = (x, y) => {
        return [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
            .filter(move => isMoveValid(matrix, move[0], move[1]))
            .filter(move => !isVisited(move));
    }

    const isEnd = (x, y) => x === n - 1 && y === n - 1;

    const solve = (x, y) => {
        if (isEnd(x, y)) {
            return true;
        }

        for (move of validMoves(x, y)) {
            path.push(move)
            if (solve(move[0], move[1])) {
                return true;
            }
            path.pop();
        }
        return false;
    }

    if (solve(0, 0)) {
        return path;
    }
}

describe('Maze solver', () => {
    it('finds the way out from the maze', () => {
        const maze = [
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 1, 1],
        ]

        expect(solveMaze(maze)).toBeTruthy()
    });
    it('cannot find the way out from the maze', () => {
        const maze = [
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 1, 1],
        ]

        expect(solveMaze(maze)).toBeFalsy()
    });
});