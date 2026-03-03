#
# @lc app=leetcode id=215 lang=python3
#
# [215] Kth Largest Element in an Array
#

# @lc code=start
import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        max_heap = []
        nth_largest_val = None
        for n in nums:
            heapq.heappush(max_heap, -n)
        for i in range(0, k):
            nth_largest_val = -heapq.heappop(max_heap)

        return nth_largest_val
        
        
# @lc code=end

# Concept: 使用 Max Heap 結構, 注：python heapq 模組是 min-heap,
# 做負數存入與取出的動作便可轉為 max-heap

# Time: O(nlogn) - 每個元素 push 一次, 每次 O(logn)
# Space: O(n) - heap 存全部元素


