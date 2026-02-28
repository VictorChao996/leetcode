#
# @lc app=leetcode id=56 lang=python3
#
# [56] Merge Intervals
#

# @lc code=start
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        result = []
        
        # sort intervals by startIndex
        intervals.sort(key=lambda x: x[0])
        currentInterval = intervals[0]
        for i, interval in enumerate(intervals, start=1):
            # boarder not overlap
            if interval[0] > currentInterval[1]:
                # add the internval into result & update next check interval
                result.append(currentInterval)
                currentInterval = interval
            # boarder is overlap
            else: 
                currentInterval[1] = max(currentInterval[1], interval[1]) # update endIndex
        result.append(currentInterval)
        return result
# @lc code=end

# Concept: 先排序 start, 這樣就可以利用排序的特性,每次只紀錄與比較 end 邊界了
# Time: O(nlogn), Space: O(n) - return result

# Test Case
# [[1,3],[2,6],[8,10],[15,18]]
# [[1,4],[4,5]]
# [[4,7],[1,4]] - overlap
# [[1,2], [3,7]] - non overlap
# [[3,4], [1,7]] - subset


