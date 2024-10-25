const subsets = (array = [], n, visit = (arr =[]) => {}) => {
    visit(array);

    const start = array.length === 0 ? 0 : array[array.length-1] + 1;
    for(let i =start; i < n; i++ ){
        array.push(i);
        subsets(array, n, visit);

        array.pop()
    }
}

describe('Subset', () => {
    it('returns subset of items', ()=> {
        const input =[]
        subsets(input, 3, console.log);
    })
})