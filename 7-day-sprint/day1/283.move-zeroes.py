#
# @lc app=leetcode id=283 lang=python3
#
# [283] Move Zeroes
#

# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        swap_pos = 0
        for i in range(0, len(nums)):
            if nums[i] != 0:
                nums[swap_pos], nums[i] = nums[i], nums[swap_pos]
                swap_pos += 1
        
# @lc code=end

# case
# [0,1,0]
# [0,0,1]
# [1,1,0]
# [0]
# [1]

