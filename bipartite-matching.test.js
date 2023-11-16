const findMatching = (graph) => {
    const nodesAdded = {};
    const matching = []
    for (let u in graph) {
        nodesAdded[u] = true;
        const v = graph[u]
        for (idx in v) {
            const node = v[idx];
            if (!nodesAdded[node]) {
                matching.push([u, node])
                nodesAdded[node] = true;
                break;
            }
        }
    }

    return matching;
}

const getNodesFromGraph = (graph) => {
    const u = new Set();
    const v = new Set();

    for (let x in graph) {
        u.add(x);
        for (let idx in graph[x]) {
            v.add(graph[x][idx])
        }
    }

    return {
        u,
        v
    }
}

const findUnmatchedNodes = (matching, { u, v }) => {
    const matchedNodes = matching.reduce((acc, [nodeFromU, nodeFromV]) => ({
        ...acc,
        [nodeFromU]: true,
        [nodeFromV]: true
    }), {});

    return {
        u: [...u].filter(u => !matchedNodes[u]),
        v: [...v].filter(v => !matchedNodes[v]),
    }
}

const directGraphFromMatching = (matching, graph) => { }

const optimalMatching = (graph) => {
    const matching = findMatching(graph);

    const unmatchedNodes = findUnmatchedNodes(matching, graph)


}

describe('Find Matching', () => {
    const graph = {
        a: [1, 2, 5],
        b: [1, 2, 6],
        c: [1, 2, 3, 7],
        d: [1, 2],
        e: [4],
        f: [5],
        g: [6]
    }

    it('finds one matching', () => {
        expect(findMatching(graph)).toEqual([
            ['a', 1], ['b', 2], ['c', 3], ['e', 4], ['f', 5], ['g', 6]
        ])
    });

    it('gets all nodes from graph', () => {
        expect(getNodesFromGraph(graph)).toEqual({
            u: new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g']),
            v: new Set([1, 2, 3, 4, 5, 6, 7])
        })
    })

    it('finds unmached nodes in a matching', () => {
        const allNodes = {
            u: new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g']),
            v: new Set([1, 2, 3, 4, 5, 6, 7])
        }

        const matching = [['a', 1], ['b', 2], ['c', 3], ['e', 4], ['f', 5], ['g', 6]]

        expect(findUnmatchedNodes(matching, allNodes)).toEqual({
            u: ['d'],
            v: [7]
        })
    });
});