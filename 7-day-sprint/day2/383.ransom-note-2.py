#
# @lc app=leetcode id=383 lang=python3
#
# [383] Ransom Note
#

# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        bucket = [0]*26

        for c in magazine:
            bucket[ord(c)-ord('a')] += 1

        for c in ransomNote:
            if bucket[ord(c)-ord('a')] <= 0:
                return False
            bucket[ord(c)-ord('a')] -= 1

        return True
# @lc code=end


# TC
# ("a", "b")
# ("aa", "ab")
# ("aa", "aab")

# Concept: Bucket Count

# Time: O(n), Space:O(26) -> O(1)

