#
# @lc app=leetcode id=35 lang=python3
#
# [35] Search Insert Position
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = (l + r) // 2
            if nums[m] == target:
                return m
            elif nums[m] > target:
                r = m - 1
            else:
                l = m + 1
        
        return l
# @lc code=end

# @lc code=end

# Concept: Binary Search
# Time: O(logn), Space: O(1)

# Test Case
# [1,3,5,6]
# 5
# [1,3,5,6]
# 2
# [1,3,5,6]
# 7
# [1] - 找到
# 1
# [1] - 找不到並且大於 mid
# 2
# [1] - 找不到並且小於 mid
# 0