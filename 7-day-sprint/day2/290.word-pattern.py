#
# @lc app=leetcode id=290 lang=python3
#
# [290] Word Pattern
#

# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        l = s.split()

        if len(l) != len(pattern):
            return False
        d1 = {}
        d2 = {}
        for p,s in zip(pattern, l):
            if d1.get(p) != None and d1.get(p) != s:
                return False
            if d2.get(s) != None and d2.get(s) != p:
                return False
            d1[p] = s
            d2[s] = p
        return True
# @lc code=end

# Test Case
# "abba"
# "dog cat cat dog"
# "abba"
# "dog cat cat fish"
# "aaaa"
# "dog cat cat dog"
# "a"
# "hello"
# "ab"
# "hello world"

# Concept: Two Dict Check 1-1 mapping
# Time: O(m+n), Space: O(d1+d2) -> O(26 + M)