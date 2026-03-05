#
# @lc app=leetcode id=33 lang=python3
#
# [33] Search in Rotated Sorted Array
#

# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) -1

        while l <= r:
            m = (l+r) // 2
            if nums[m] == target:
                return m
            # 先判斷 左邊 or 右邊有序
            if nums[m] < nums[l] and nums[m] < nums[r]: # 右邊有序
                if target <= nums[r] and target > nums[m]:
                    l = m + 1
                else:
                    r = m - 1
            else: # 左邊有序
                if target < nums[m] and target >= nums[l]:
                    r = m - 1
                else:
                    l = m + 1

        return -1
# @lc code=end

# Thought
## 1. mid 分開的左右兩半其中有一半一定是有序的
### -> 若 mid < left & right -> pivot 必在左, 反之若 mid 較大則 pivot 在右半邊

### -> 當 pivot 在左邊時, 若 target > nums[r], target 必在左半邊, 若 target < nums[r], target 在右半邊
## 近一步思考
## 若左邊有序: target 落在左半邊時滿足 < nums[m] && >= nums[l], 反之若 < nums[l] 必定在右半邊
## 若右邊有序：target 落在右半邊時滿足 <= nums[r] && > nums[m], 反之若 > nums[r] 時必定出現在左半邊
# -> 簡單來講：判斷在右側 m+1 ~ r , 判斷在左側 l ~ m-1

# 6,7,0,1,2,3,4,5
# 3,4,5,6,7,0,1,2
# [1]
# [1,2]
# [2,1]
# [1,2,0] -> 