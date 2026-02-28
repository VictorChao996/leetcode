#
# @lc app=leetcode id=57 lang=python3
#
# [57] Insert Interval
#

# @lc code=start
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        
        result = []
        i = 0
        
        # 前段 - 完全在 newInterval 之前的 interval
        while i < len(intervals) and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1
        # 中段 - 有交疊的合併處理
        while i < len(intervals) and intervals[i][0] <= newInterval[1]:
            newInterval[0] = min(newInterval[0], intervals[i][0])
            newInterval[1] = max(newInterval[1], intervals[i][1])
            i += 1
        result.append(newInterval) # 合併完不要忘記加入
        # 後段 - 完全在 newInterval 之後的
        while i < len(intervals):
            result.append(intervals[i])
            i += 1
        return result
# @lc code=end

# Concept: 
# one pass, 一邊遍歷一邊處理, Time: O(n), Space: O(1)
# Time: O(n) , Space: O(1)

# Test Case
# [[1,3],[6,9]]
# [2,5]
# [[1,2],[3,5],[6,7],[8,10],[12,16]]
# [4,8]
# [] - len 0
# [5,7]
# [[1,2]] - len 1
# [6,8]
# [[2,3],[5,7]]
# [0,6]

