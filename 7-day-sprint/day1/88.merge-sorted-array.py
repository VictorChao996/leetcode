#
# @lc app=leetcode id=88 lang=python3
#
# [88] Merge Sorted Array
#

# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        p1, p2 = m-1, n-1
        for i in range(m + n - 1, -1, -1):

            if p2 < 0:
                break
            if p1 >= 0 and nums1[p1] >= nums2[p2]:
                nums1[i] = nums1[p1]
                p1 -= 1
            else:
                nums1[i] = nums2[p2]
                p2 -= 1
            
        
# @lc code=end


# Case
# [1,0] ,[2] -> m = n
# [1,1,0], [2] -> m > n
# [1,0,0], [2,3] -> m < n

# Concept: 因為 nums1 後面為 0 （不重要）, 所以可以從大的開始比 (從後開始 build list 才沒有覆蓋問題


# Time: O(m + n), Space: O(1)