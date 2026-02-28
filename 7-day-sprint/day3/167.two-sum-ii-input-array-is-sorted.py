#
# @lc app=leetcode id=167 lang=python3
#
# [167] Two Sum II - Input Array Is Sorted
#

# @lc code=start
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1
        
        while(left <= right):
            if numbers[left] + numbers[right] == target:
                return [left + 1, right + 1]
            elif numbers[left] + numbers[right] > target:
                right -= 1
            else:
                left += 1

        return None
# @lc code=end

# Test Case
# [2,7,11,15]
# 9
# [2,3,4]
# 6
# [-1,0]
# -1

# Concept: Two pointer & Binary Search, 利用排序好的特性有策略的選擇 pointer 的移動
# Time: O(n), Space: O(1)