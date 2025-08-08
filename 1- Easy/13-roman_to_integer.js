/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/

const testCases = [
    "III",
    "IV",
    "IX",
    "LVIII",
    "MCMXCIV",
    "MMXXIII",
    "XLII"
]

const romanToInt = (s) => {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let resultInteger=0;
    for(i=0; i<s.length; i++){
        const current = romanMap[s[i]];
        const next = romanMap[s[i+1]];
        // (i+1) Determines if it is the second to last num
        // (romanMap[s[i]] < romanMap[s[i+1]]) determines if a smaller numeral comes b4 a larger one.
        if(i+1 < s.length && current < next){
            resultInteger -= current;
        }else{
            resultInteger += current;
        }
    }
        return resultInteger;
}

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test case ${i + 1} (${testCases[i]}):`, romanToInt(testCases[i]));
}


// Better version

const testCasesWithNotRomans = [
    "III",
    "IV",
    "",
    "IX",
    "LVIII",
    "MCMXCIV",
    "MMXXIIII",
    "MMXXIII",
    "XLII",
    "A"
]

const romanToIntWithValidations = (s) =>{
    if(typeof s !== 'string' || s.length === 0) {
        throw new Error("Input must be a non-empty string");
    }
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    for(let char of s) {
        if(!romanMap.hasOwnProperty(char)) {
            throw new Error(`Invalid Roman numeral character '${char}'`);
        }
    }
    const validRomanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!validRomanRegex.test(s)) {
        throw new Error(`Malformed Roman numeral: '${s}'`);
    }
    
    let resultInteger=0;
    for(i=0; i<s.length; i++){
        const current = romanMap[s[i]];
        const next = romanMap[s[i+1]];
        // (i+1) Determines if it is the second to last num
        // (romanMap[s[i]] < romanMap[s[i+1]]) determines if a smaller numeral comes b4 a larger one.
        if(next > current){
            resultInteger += next - current;
            i++;
        }else{
            resultInteger += current;
        }
    }
        return resultInteger;   
}

for (let i = 0; i < testCasesWithNotRomans.length; i++) {
    try {
        console.log(`Test case ${i + 1} (${testCasesWithNotRomans[i]}):`, romanToIntWithValidations(testCasesWithNotRomans[i]));
    } catch (error) {
        console.error(`Error in test case ${i + 1}:`, error.message);
    }
}

