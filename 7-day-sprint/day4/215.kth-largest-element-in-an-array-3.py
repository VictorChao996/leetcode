#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# @lc code=start
import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_heap = []
        for i in range(0, len(nums)):
            if i < k:
                heapq.heappush(min_heap, nums[i])
            else:
                heapq.heappushpop(min_heap, nums[i])
        

        return heapq.heappop(min_heap)
        
        
# @lc code=end

# Concept: 使用 Min Heap 結構, 維護一個大小為 k 的 min-heap, 
# 當 nums 檢視完畢時, min heap top 極為 kth largest element

# Time: O(nlogk) - 每個元素 push 一次, 每次 O(logk)
# Space: O(k) - heap 只存 k 個元素


