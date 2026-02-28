#
# @lc app=leetcode id=977 lang=python3
#
# [977] Squares of a Sorted Array
#

# @lc code=start
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        squared = [x**2 for x in nums]
        return sorted(squared)
# @lc code=end

# Concept：暴力解, 計算後再排序
# 若 len(nums) = n
# Time: O(nlogn), Space: O(n)

