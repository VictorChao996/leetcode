#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#
# Concept: Math (1 + 2 + ... + n)
# input case:
# [0] or [1]
# [0,1] [0,2]

# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
       n = len(nums)
       total = n * (n + 1) // 2
       nums_total = sum(nums)

       return total - nums_total
            

# @lc code=end

