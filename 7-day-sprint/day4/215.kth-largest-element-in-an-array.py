#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# @lc code=start
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        
        def quickSelect(l, r):
            e = len(nums) - k # expected pos
            pivot = nums[r] # 取最後一個當 pivot 值
            j = l # actual pivot point

            for i in range(l, r):
                # left part - all values is less than or equal before j (actual pivot)
                if nums[i] <= pivot:
                    nums[j], nums[i] = nums[i], nums[j]
                    j += 1
            nums[j], nums[r] = nums[r], nums[j] #swap the pivot value to the actual pivot point

            if j == e:
                return nums[j]
            elif j > e: # kth 在 left part
                return quickSelect(l, j-1)
            else: # kth 在 right part
                return quickSelect(j + 1, r)
        return quickSelect(0, len(nums) - 1)
        
# @lc code=end

# Concept: QuickSeleting, 類似 quicksort 的概念

# Time: avg O(n), worst case O(n^2)
# Space: O(n)

# 注意：Leetcode case 44 會 TLE, 所以上面只能算參考解

