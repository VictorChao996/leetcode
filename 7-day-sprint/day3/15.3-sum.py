#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#

# @lc code=start
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()

        for i, n in enumerate(nums):
            # 若當前檢查數為正, 後面的數字比較大無法組
            if n > 0: 
                break
            # 若當前的 n 組合已經判過了, 直接跳過 (避免重複)
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i+1, len(nums) - 1
            # Two pointer - two sum problem (注：並非唯一解)
            while(l < r):
                # Judge if n + nums[l] + nums[r] == 0
                if nums[l] + nums[r] == -n:
                    result.append(list([n, nums[l], nums[r]]))
                    l += 1
                    r -= 1
                    # 更新指標後與再次確認指標是否與我移動前相同, 若相同則再次移動 (避免重複 case)
                    while(l < r and nums[l] == nums[l-1]):
                        l += 1
                    # 同上
                    while(l < r and nums[r] == nums[r+1]):
                        r -= 1
                elif nums[l] + nums[r] > -n:
                    r -= 1
                else:
                    l += 1
        return result
# @lc code=end

# Concept：
# multiple 2 pointer 2 sums problem (sorted array)
# 此題也可以使用 multiple 2 sums 解 (unsorted array), 不過會需要額外的 space
# Time: O(n^2) - n 個 2 sums problem, Space: O(1) - 若 return list 不算 additonal

# Test Case
# [-1,0,1,2,-1,-4]
# [0,1,1]
# [0,0,0]
# [-1,-1,0,1,1,2] - duplicate
# [-2, 0, 0, 2, 2] - duplicate
# [2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]
