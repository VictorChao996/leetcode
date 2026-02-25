#
# @lc app=leetcode id=1480 lang=python3
#
# [1480] Running Sum of 1d Array
#

# @lc code=start
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum = 0
        for i in range(0, len(nums)):
            temp = nums[i]
            nums[i] = sum + nums[i]
            sum += temp
        return nums
# @lc code=end

# Time: O(n), Space: O(1)