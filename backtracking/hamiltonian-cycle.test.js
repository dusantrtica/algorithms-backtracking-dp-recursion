const hamiltonianPath = (graph, start) => {
    const solve = (position) => {
        if (position === n) {
            return true;
        }

        for (let vertex = 1; vertex < n; vertex++) {
            if (graph[position][vertex] === 1 && !path.includes(vertex)) {
                path.push(vertex);
                if (solve(position + 1)) {
                    return true;
                }

                // backtrack
                path.pop();
            }
        }

        // we considered all the vertices and didn't returned true so so far
        return false;
    }

    const path = [];
    const n = graph.length;
    path.push(start);

    if (solve(1)) {
        return path;
    } else {
        return null;
    }


}

describe('Hamiltonian Path', () => {
    it('prints path for case 1', () => {
        const graph = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ]

        const path = hamiltonianPath(graph, 0);
        console.log(path);
    });

    it('calculates path from the middle node', () => {
        const graph = [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
        ]

        const path = hamiltonianPath(graph, 0);
        console.log(path);
    });

    it('draws an open envelope', () => {
        const graph = [
            [0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [0, 0, 1, 0, 1],
            [0, 1, 1, 1, 0]
        ]

        const path = hamiltonianPath(graph, 0);
        console.log(path);
    });

    it('calculates a path from th emiddle node', () => {
        const graph = [
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 0]
        ]

        const path = hamiltonianPath(graph, 0);
        console.log(path);
    })
});