/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (hash[target - temp] !== undefined) {
      return [hash[target - temp], i];
    }
    hash[temp] = i;
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
