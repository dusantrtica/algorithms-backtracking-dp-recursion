const change = (coins = [], amountToReturn, memo = {}) => {
    if(amountToReturn === 0) {
        return 0;
    }

    if(memo[amountToReturn]) {
        return memo[amountToReturn];
    }

    let min = 1000000;
    for(let coin of coins) {
        if(coin <= amountToReturn) {
            min = Math.min(change(coins, amountToReturn-coin, memo), min);
            memo[amountToReturn] = min + 1;
        }
    }
    return min + 1;
}

const changeIter = (coins = [], amountToReturn = 0) => {
    const dp = [0];
    for(let k = 1; k <= amountToReturn; k++) {
        let min = 1000000;
        for(let coin of coins) {
            if(coin <= k) {
                min = Math.min(min, dp[k-coin])
            }
        }
        dp[k] = min + 1;
    }
    return dp[dp.length-1]
}

describe('change return', () => {
    it('returns minimal amount of coins needed', () => {
        expect(change([1,3,2], 7)).toBe(3);
    });
    it('returns minimal amount for non trivial example', () => {
        expect(change([1,15, 25], 30)).toBe(2);
    })
    it('returns for 200 number of coins', () => {
        expect(change([1,15,25], 200)).toBe(8);
    })

    it('returns minimal amount of coins needed', () => {
        expect(changeIter([1,3,2], 7)).toBe(3);
    });
    it('returns minimal amount for non trivial example', () => {
        expect(changeIter([1,15, 25], 30)).toBe(2);
    })
    it('returns mininal amount for 200', () => {
        expect(changeIter([1,15,25], 200)).toBe(8);
    })
})