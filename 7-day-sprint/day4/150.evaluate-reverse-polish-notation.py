#
# @lc app=leetcode id=150 lang=python3
#
# [150] Evaluate Reverse Polish Notation
#

# @lc code=start
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        s = {'+', '-', '*', '/'}
        stack = []
        for t in tokens:
            if t not in s:
                stack.append(int(t))
            else:
                t1 = stack.pop() if len(stack) > 0 else None
                t2 = stack.pop() if len(stack) > 0 else None
                temp = 0
                match t:
                    case '+':
                        temp = t1 + t2
                    case '-':
                        temp = t2 - t1
                    case '*':
                        temp = t1 * t2
                    case '/':
                        temp = math.trunc(t2 / t1)
                stack.append(temp)

        return stack[-1]
# @lc code=end

# Concept: Stack
# Time: O(n), Space: O(n)