#
# @lc app=leetcode id=56 lang=python3
#
# [56] Merge Intervals
#

# @lc code=start
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # sort intervals by startIndex
        intervals.sort(key=lambda x: x[0])

        result = [intervals[0]]
        
        for i in range(1, len(intervals)):
            curr_start, curr_end = intervals[i]
            # boarder not overlap
            if curr_start > result[-1][1]:
                # add the internval into result & update next check interval
                result.append(intervals[i])
            # boarder is overlap
            else: 
                result[-1][1] = max(curr_end, result[-1][1])
        return result
# @lc code=end

# Concept: 
# 1. 先排序 start, 這樣就可以利用排序的特性,每次只紀錄與比較 end 邊界了
# 2. 1 的優化版, 直接更新 intervals[-1] 就不用回圈後還要做 append 的動作
# Time: O(nlogn), Space: O(n) - return result

# Test Case
# [[1,3],[2,6],[8,10],[15,18]]
# [[1,4],[4,5]]
# [[4,7],[1,4]] - overlap
# [[1,2], [3,7]] - non overlap
# [[3,4], [1,7]] - subset


