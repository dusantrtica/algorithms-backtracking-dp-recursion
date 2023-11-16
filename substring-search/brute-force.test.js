const search = (text, pattern) => {
    const n = text.length;
    const m = pattern.length;
    if (m > n) {
        return -1;
    }

    let i = 0;
    let j = 0;
    while (true) {

        if (i + m >= n) {
            console.log('exit as there is no need to try');
            return -1
        }
        while (text[i] === pattern[j] && i < n && j < m) {
            i++;
            j++;
        }

        if (j === m) {
            return i - m;
        }
        else if (i === n) {
            return -1;
        } else {
            j = 0;
            i++;
        }
    }


    return -1;
}
describe('Brute Force', () => {
    it('returns index where pattern is found to start at', () => {
        expect(search('abcdeefabcabcd', 'abcab')).toBe(7)
    })

    it('returns 0 if thats where pattern starts', () => {
        expect(search('abcdeefabcabcd', 'abcd')).toBe(0)
    });

    it('returns -1 if pattern was not found', () => {
        expect(search('abcdefgijkl', '123')).toBe(-1);
    })
});