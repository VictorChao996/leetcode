#
# @lc app=leetcode id=977 lang=python3
#
# [977] Squares of a Sorted Array
#

# @lc code=start
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        results = [0]*len(nums)

        left, right = 0, len(nums) - 1
        c = len(nums) - 1

        # 使用左右指標從左右開始判斷, 較大的數放到 results 的最後
        while(left <= right):

            if nums[left]**2 >= nums[right]**2:
                results[c] = (nums[left])**2
                left += 1
            else:
                results[c] = (nums[right])**2
                right -= 1
            c -= 1
        return results
# @lc code=end

# Concept：Two pointer
# 若 len(nums) = n
# Time: O(n), Space: O(n)

