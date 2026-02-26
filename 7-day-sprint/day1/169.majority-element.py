#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        d = {}
        maxN, count = float('-inf'), 0
        num = None
        for n in nums:
            d[n] = d.get(n, 0) + 1

        for k, v in d.items():
            if v >= maxN:
                maxN = v
                num = k
        return num
# @lc code=end

# Time: O(n), Space: O(n)
# Case
# [3,2,3]

# Concept: dict 計算數字, 並返回最大的

