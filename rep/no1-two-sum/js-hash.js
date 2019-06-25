/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for (i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i]
        }
        
        if (map.get(nums[i]) === undefined) {
            map.set(nums[i], i)      
        }
    }
}
