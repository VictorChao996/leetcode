#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
      # sol 2 - set
      return len(nums) != len(set(nums))

# @lc code=end



# Sol 1 - dict count
# def containsDuplicate(self, nums: List[int]) -> bool:
#         map = {}
#         for n in nums:
#             map[n] = map.get(n, 0) + 1
#         for k, v in map.items():
#             if v > 1:
#                 return True
#         return False


