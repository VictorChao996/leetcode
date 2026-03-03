#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        paraDict = {'(': ')', '[': ']', '{': '}'}

        for p in s:
            if p in paraDict:
                stack.append(p)
            elif len(stack) == 0 or paraDict[stack.pop()] != p:
                return False

        return True and len(stack) == 0
# @lc code=end

# Time: O(n), Space: O(n)

# Concept: Stack

# Test Case
# "()[]{}"
# "(]"
# "([])"
# "([)]"
# "}{)("
# ")" 
# "("