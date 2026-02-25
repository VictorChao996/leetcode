#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:

    # Time: O(n), Space: O(n)
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i in range(len(nums)):
            if target-nums[i] in d:
                return [d[target-nums[i]], i]
            d[nums[i]] = i
        

        
# @lc code=end

# Time: O(n^2), Space: O(1)
# def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for i in range(len(nums)):
#             for j in range(i+1, len(nums)):
#                 if(nums[i] + nums[j] == target and i != j):
#                     return [i, j]