/**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    testCases = [
        ["abcd","efgh"],
        ["jar","jam"],
        ["racecar","carrace"]
    ]

    //Sorting
    function isAnagramSort(s, t) {
        if( s.length !== t.length) return false;

        const sortedS = s.split('').sort().join();
        const sortedT = t.split('').sort().join();

        return sortedS == sortedT;
    }

    //Hash Map
    function isAnagramMap(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
    
    //Hash Table (using Array)
    function isAnagramHashTable(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return count.every((val) => val === 0);
    }