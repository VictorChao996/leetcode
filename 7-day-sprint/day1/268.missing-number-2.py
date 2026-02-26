#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#
# Concept: Two set XOR
# input case:
# [0] or [1]
# [0,1] [0,2]

# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        l1 = list(range(0, len(nums) + 1))
        result = list(set(l1) ^ set(nums))
        
        return result[0]
            

# @lc code=end

