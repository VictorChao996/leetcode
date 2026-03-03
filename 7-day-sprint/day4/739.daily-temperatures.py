#
# @lc app=leetcode id=739 lang=python3
#
# [739] Daily Temperatures
#

# @lc code=start
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures) # 預設沒有 next greater value (pos)
        mon_stack = []

        for i in range(len(temperatures)-1, -1, -1):
            # monotonic stack pop 條件, 比當前溫度還低 (確保 stack 中只存在比當前還高的值 (next greater value))
            while len(mon_stack) > 0 and temperatures[mon_stack[-1]] <= temperatures[i]:
                mon_stack.pop()
            # 小於等於的都 pop 完了, 當前 stack top 為 next greater value (position)
            if len(mon_stack) > 0:
                res[i] = mon_stack[-1] - i # res 要存的是距離
            
            # 將當前的 value (pos) 加入到 mono stack 中 (前面的操作已經確保此時加入 mono 仍成立)
            mon_stack.append(i)

        return res
# @lc code=end

# Concept: Monotonic Stack 來記錄 next greater value 的 position.
# Time: O(n + n) = O(n) - 對於每一個 temperatures 中的值都最多經歷, 檢視、加入 stack、移出 stack
# Space: O(n) - 額外的 mon_stack 暫存狀態

# Test Case
# [89,62,70,58,47,47,46,76,100,70]
# [73,74,75,71,69,72,76,73]
# [30,40,50,60]
# [30,60,90]
# [30]
# [30,40]
# [40,30]