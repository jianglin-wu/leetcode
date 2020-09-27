/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (dict.has(nums[i])) {
      return [dict.get(nums[i])!, i];
    }
    dict.set(target - nums[i], i);
  }
  return []
};

// @lc code=end

