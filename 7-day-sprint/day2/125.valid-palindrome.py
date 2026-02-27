#
# @lc app=leetcode id=125 lang=python3
#
# [125] Valid Palindrome
#

# @lc code=start
class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphanumeric = []
        for c in str:
            if 'A' < c < 'Z':
                alphanumeric.append(chr(ord(c) - ord('A') + ord('a')))
            elif 'a' < c < 'z':
                alphanumeric.append(chr(ord(c) - ord('a') + ord('1')))
            elif '0' < c < '9':
                alphanumeric.append(chr(ord(c) - ord('0') + ord('1')))

        for i in range(0, len(alphanumeric)):
            if alphanumeric[i] != alphanumeric[-1-i]:
                return False
            
        return True
             
# @lc code=end
# Test Case
# "A man, a plan, a canal: Panama"
# "race a car"
# " "
# "1221"
# "a"
# ":"

# Time: O(n), Space: O(1)