#
# @lc app=leetcode id=383 lang=python3
#
# [383] Ransom Note
#

# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        d = {}
        for c in magazine:
            d[c] = d.get(c, 0) + 1

        for c in ransomNote:
            if d.get(c) == None or d.get(c) == 0:
                return False
            d[c] = d.get(c) - 1

        return True
# @lc code=end


# TC
# ("a", "b")
# ("aa", "ab")
# ("aa", "aab")

# Concept: Dict Count char

# Time: O(n), Space:O(n)

