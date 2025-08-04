
    /**
     * @param {number[]} nums
     * @return {boolean}
    */
   
   const testCases = [
       [1,2,3,4],
       [1,2,3,3],
       [5,3,4,5]
    ]
    
    // Brute Force
    function hasDuplicateForFor(nums) {
       for(let i = 0; i <nums.length; i++){
            for(let j = i+1; j<nums.length; j++){
                if(nums[i]==nums[j]){
                    return true
                }
            } 
       } 
            return false
    }
    // Sorting
    function hasDuplicateSort(nums) {
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] === nums[i + 1]) {
                return true;
            }
        }
        return false;
    }
    // Hash Set
    function hasDuplicateSet(nums) {
        let seen = new Set();
        for(let num of nums) {
            if(seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
    // Hash Set Length
    function hasDuplicateSetLength(nums) {
        return new Set(nums).size < nums.length;
    }
