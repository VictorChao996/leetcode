#
# @lc app=leetcode id=409 lang=python3
#
# [409] Longest Palindrome
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> int:
        dic = {}
        # Count Char in S
        for c in s:
            dic[c] = dic.get(c, 0) + 1

        result = 0
        middle = False
        for k,v in dic.items():
            result += v
            # 策略：除了第一個基數, 其他的都進行替換 (中間對稱點)
            if dic[k] % 2  == 1:
                if middle is False:
                    middle = True
                else:
                    result -= 1
        return result
# @lc code=end

# Test Case
# "abccccdd"
# "a"
# "abc"
# "abb"
# "aba"
# "abbccc"
# "abccddd"

# Concept: 替換策略, 除了第一個基數之外, 剩餘遇到的所有都將中間對稱點換掉。偶數則無條件加入
# Time: O(s), space: O(s)