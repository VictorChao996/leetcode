#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#


# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        bucket = [0] * (len(nums) + 1)
        for n in nums:
            bucket[n] += 1

        for i, n in enumerate(bucket):
            if bucket[i] == 0:
                return i
            
        return None
            

# @lc code=end
# Concept: Count Value

# input case:
# [0] or [1]
# [0,1] [0,2]