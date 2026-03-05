#
# @lc app=leetcode id=74 lang=python3
#
# [74] Search a 2D Matrix
#

# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        height, width = len(matrix), len(matrix[0])
        l, r = 0, (len(matrix) * len(matrix[0])) - 1

        while l <= r:
            m = (l + r) // 2
            i, j = m // width, m % width
            
            if matrix[i][j] > target:
                r = m - 1
            elif matrix[i][j] < target:
                l = m + 1
            else:
                return True
            
        return False
# @lc code=end

# Concept: Binary Search on Virtual flat 1D list
# 找出虛擬陣列座標與 2D 座標之間的關係

# Time: O(m*n), Space: O(1)

# Thought
# m = 11 -> i = 2 = 11//4, j = 3 = 11%4
# m = 8 -> i, j = 2, 0 =>  8//4, 8%4

# Test Case
# [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
# 3
# [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
# 13