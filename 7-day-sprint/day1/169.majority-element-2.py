#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        result = nums[0]
        count = 1

        for i in range(1, len(nums)):
            if nums[i] == result:
                count += 1
            else:
                count -= 1

            if count == 0:
                result = nums[i]
                count += 1

        return result
# @lc code=end

# Concept: 1 v 1 消消樂
# Time: O(n), Space: O(1)

# Case
# [1]
# [3,2,3]
# [1,1,1]

