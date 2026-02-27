#
# @lc app=leetcode id=205 lang=python3
#
# [205] Isomorphic Strings
#

# @lc code=start
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        d = {}
        d2 = {}

        for c1, c2 in zip(s, t):
            # 確認同一個字母只有一種轉換
            if d.get(c1) != None and d.get(c1) != c2:
                return False
            # 確認字母只被唯一的字母映射
            if d2.get(c2) != None and d2.get(c2) != c1:
                return False
            d[c1] = c2
            d2[c2] = c1

        return True
# @lc code=end

# TC
# ("egg", "add")
# ("foo", "bar")
# ("paper", "title")
# ("badc", "baba")

# Concept: 2 Dict to record mapping (A->B), (B<-A)

# Time: O(n), Space:O(n)