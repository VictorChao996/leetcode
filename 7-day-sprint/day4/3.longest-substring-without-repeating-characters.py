#
# @lc app=leetcode id=3 lang=python3
#
# [3] Longest Substring Without Repeating Characters
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # edge case
        if len(s) == 0 or len(s) == 1:
            return len(s)
        maxV = 1
        l, r = 0, 0

        while(r < len(s)):
            # 持續移動 left pointer 使得窗口符合 longest substring without duplicate characters
            while(len(set(s[l:r+1])) != len(s[l:r+1])):
                l += 1
            # 更新 result
            if r-l+1 > maxV:
                maxV = r-l+1
            r += 1 # 擴展 windown

        return maxV


# @lc code=end

# Concept: Sliding Window, 雙指標移動來維持最長不重複字串的 window, 在過程中持續更新 result
# Time: O(n^2) ~ O(n^3) - 內層 while 迴圈包含 len & slicing 的操作實際上複雜為 n
# Space: O(n) - substing & set 都是額外空間

# Test Case
# "" - 0
# "a" - 1
# "aa" - 1
# "aba" - 2
# "abcabcbb" - 3

