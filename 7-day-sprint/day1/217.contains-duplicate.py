#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# Concept: Set count

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
# @lc code=end

