#
# @lc app=leetcode id=75 lang=python3
#
# [75] Sort Colors
#

# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        low, mid, high = 0, 0, len(nums) - 1
       
        while(mid <= high):
            if nums[mid] == 1:
                mid += 1
            elif nums[mid] == 0:
                # swap to correct area
                nums[low], nums[mid] = nums[mid], nums[low]
                # update red area
                low += 1
                mid += 1
            elif nums[mid] == 2:
                # swap to corrent area
                nums[mid], nums[high] = nums[high], nums[mid]
                # update blue area
                high -= 1
        
# @lc code=end

# Concept: One pass array, Dutch National Flag Problem
# 使用兩個邊界指標 (left & right) + 一個 current 指標來劃分 0, 1, 2 的區域。
# 根據 current 的數字進行交換並更新邊界指摽, 最終當 current 大於 right 時表示全部的數字皆以正確分類
# Time: O(n), Space: O(1)

