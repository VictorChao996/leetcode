#
# @lc app=leetcode id=75 lang=python3
#
# [75] Sort Colors
#

# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        red, white, blue = 0, 0, 0
        # count the number each
        for n in nums:
            if n == 0:
                red += 1
            elif n == 1:
                white += 1
            elif n == 2:
                blue += 1
        # update the nums in-place
        for i, n in enumerate(nums):
            if red != 0:
                nums[i] = 0
                red -= 1
            elif white != 0:
                nums[i] = 1
                white -= 1
            else:
                nums[i] = 2
                blue -= 1
        
# @lc code=end

# Concept: Two pass array, counting the color each and then update it (Bucket Sort)
# Time: O(2n) = O(n), Space: O(1)

