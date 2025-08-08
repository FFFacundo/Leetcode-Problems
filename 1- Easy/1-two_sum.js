/*

*/

/**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

const numsList = [
    [3,4,5,6],
    [4,5,6],
    [1,2]
]
const targets = [7,10,4];

//Brute Force
const twoSumBrute = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if( i !==j && nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    throw new Error("No valid pair found");
}

for (let i = 0; i < numsList.length; i++) {
    try {
        const result = twoSumBrute(numsList[i], targets[i]);
        console.log(`Test case ${i + 1}:`, result);
    } catch (e) {
        console.error(`Test case ${i + 1}:`, e.message);
    }
}


//Sorting
const twoSumSort= (nums, target)=> {
        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }

        A.sort((a, b) => a[0] - b[0]);

        let i = 0,
            j = nums.length - 1;
        while (i < j) {
            let cur = A[i][0] + A[j][0];
            if (cur === target) {
                return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])];
            } else if (cur < target) {
                i++;
            } else {
                j--;
            }
        }
        return [];
    }

//Hash Map
const twoSumMap = (nums, target) => {
  const indices = {}; // val -> index

        for (let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (indices[diff] !== undefined && indices[diff] !== i) {
                return [i, indices[diff]];
            }
        }

        return [];  
}

//Hash Map (One Pass)
const twoSumMapOnePass = (nums, target) => {
    const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }
        throw new Error("No valid pair found");
}