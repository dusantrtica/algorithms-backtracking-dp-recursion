const reverse = (s) => {
    if (s.length > 1) {
        const firstChar = s[0];
        const lastChar = s[s.length - 1];
        return lastChar + reverse(s.slice(1, s.length - 1)) + firstChar;
    }
    return s;
}

const reverseWithAppending = (s) => {
    if(s == '') {
        return '';
    }

    return s[s.length-1] + reverseWithAppending(s.slice(0, s.length-1));
}

describe('reversing a string', () => {
    it('should reverse non empty string with even lenght', () => {
        expect(reverse('abcd')).toBe('dcba');
        expect(reverseWithAppending('abcd')).toBe('dcba');
    });

    it('should reverse non empty string with odd length', () => {
        expect(reverse('abc')).toBe('cba');
        expect(reverseWithAppending('abc')).toBe('cba');
    })

    it('should return empty string for empty string input', () => {
        expect(reverse('')).toBe('');
        
    });
});