const colorGraph = (graph, numberOfColors) => {
    const n = graph.length;
    allColors = Array(numberOfColors).fill(0).map((_, index) => index);
    const vertexColors = Array(n).fill(-1); // -1 means no color has chosen yet

    vertexColors[0] = 0; // set 1st color to 1st vertex

    const isValidColorForNode = (node, color) => {
        for (let i = 0; i < n; i++) {
            if (graph[node][i] === 1 && vertexColors[i] === color) {
                return false;
            }
        }
        return true;
    }

    const solve = (node) => {
        if (node === n) {
            return true;
        }

        for (color of allColors) {
            if (isValidColorForNode(node, color)) {
                vertexColors[node] = color;
                if (solve(node + 1)) {
                    return true;
                } else {
                    vertexColors[node] = -1;
                }
            }
        }
        return false;
    }

    if (solve(1)) {
        return vertexColors;
    }

    return false;
}

describe('Coloring graph', () => {
    it('colors single node graph with one color', () => {
        const graph = [
            [0]
        ];
        expect(colorGraph(graph, 1)).toEqual([0])
    });
    it('colors fully connected graph with 3 colors', () => {
        const graph = [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
        ]

        const colors = colorGraph(graph, 3);
        expect(colors).toEqual([0, 1, 2]);
    });

    it('cannot color fully connected graph with 2 colors', () => {
        const graph = [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0],
        ]

        const colors = colorGraph(graph, 2);
        expect(colors).toBe(false);
    });


    it('colors graph with 2 colors when 1st and 3rd vertices arent connected', () => {
        const graph = [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ]

        const colors = colorGraph(graph, 2);
        expect(colors).toEqual([0, 1, 0]);
    });

    it('colors graph with 3 colors', () => {
        const graph = [
            [0, 1, 1, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 1],
            [1, 0, 1, 0]
        ]

        expect(colorGraph(graph, 3)).toEqual([0, 1, 2, 1])
        expect(colorGraph(graph, 2)).toBe(false);
    });
});