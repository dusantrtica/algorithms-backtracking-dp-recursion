const longestSubsequence = (a = []) => {
    const dp = [];
    const n = a.length;
    for(let i = 0; i < n; i++) {
        dp[i] = 1;
        for(let j = 0; j < i; j++) {
            if(a[j] < a[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }    
    return Math.max(...dp);
}

describe('Longest subsequence', () => {
    it('returns longest increasing subsequence', () => {
        expect(longestSubsequence([4,1,9, 3, 6,7, 12,4, 10, 5, 2])).toBe(5);
    })
})