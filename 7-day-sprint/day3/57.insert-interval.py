#
# @lc app=leetcode id=57 lang=python3
#
# [57] Insert Interval
#

# @lc code=start
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        # insert newInterval in intervals
        insertPos = len(intervals) # 預設插入在最末端 (這樣可以不用處理 edge cases)
        for i in range(len(intervals)):
            # 從前面開始比, 若較小則找到插入點 (想像：一個人要加入比年紀大小的排隊列中)
            if newInterval[0] < intervals[i][0]: 
                insertPos = i
                break
        # build the new intervals
        newList = intervals[:insertPos] + [newInterval] + intervals[insertPos:]

        # merge interval (56 題的 merge interval 邏輯)
        result = [newList[0]]
        for i in range(1, len(newList)):
            curr_start, curr_end = newList[i]
            if curr_start > result[-1][1]:
                result.append(newList[i])
            else:
                result[-1][1] = max(result[-1][1], curr_end)
        return result
# @lc code=end

# Concept: 
# 先找到插入點插入 newInterval, 插入完畢後就是 56 題的 merge interval 了。
# 進階解法延伸：one pass, 一邊遍歷一邊處理, Time: O(n), Space: O(1), ˋ 之後有多餘的時間再寫
# Time: O(n)*3 , Space: O(n) - 額外 newList

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

