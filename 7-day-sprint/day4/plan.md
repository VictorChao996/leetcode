# Day 4｜Stack / Queue + Sliding Window（3.5h）

## 練題（3.5h）- 6 題

| # | 題目 | 難度 | 類型 | 目的 | 時間 |
|---|------|------|------|------|------|
| 1 | [20 Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | E | 重寫 | Stack 基礎 | 10min |
| 2 | [232 Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | E | **新題** | 資料結構設計題（SDET 愛考） | 30min |
| 3 | [150 Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | M | **新題** | stack 經典 | 25min |
| 4 | [739 Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | M | **新題** | monotonic stack | 30min |
| 5 | [3 Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | M | 重寫 | sliding window 基礎 | 20min |
| 6 | [215 Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | M | **新題** | `sorted()` / partition 思維 / Heap | 30min |

> **Day 4 重點 API**：`list.append()`/`list.pop()` 當 stack、`dict.setdefault()`、`str.isdigit()`、`int()`
>
> **Day 4 目標**：Stack、Sliding Window 兩種 pattern 用 Python 能流暢實現

---

## Completion Report

### Problems (6/6 completed)

| # | Problem | File | Status | Solution Approach |
|---|---------|------|--------|-------------------|
| 1 | 20 Valid Parentheses | 20.valid-parentheses.py | Done | Stack + dict 配對括號，遇到右括號 pop 比對 |
| 2 | 232 Implement Queue using Stacks | 232.implement-queue-using-stacks.py | Done | 雙 stack 模擬：s1 負責 push，s2 反轉後負責 pop/peek |
| 3 | 150 Evaluate Reverse Polish Notation | 150.evaluate-reverse-polish-notation.py | Done | Stack 遇數字 push、遇運算子 pop 兩個計算後 push 回去 |
| 4 | 739 Daily Temperatures | 739.daily-temperatures.py | Done | Monotonic stack 從右往左遍歷，記錄 next greater 的 position |
| 5 | 3 Longest Substring Without Repeating | 3.longest-substring-without-repeating-characters.py | Done | Sliding window 雙指標 + set 維護不重複字元 |
| 6 | 215 Kth Largest Element in an Array | 215.kth-largest-element-in-an-array-3.py | Done | Min heap 維護大小為 k 的 heap，top 即為第 k 大 |

> Bonus: `3.longest-substring-without-repeating-characters-2.py`（set 優化 O(n) 版）、`215.kth-largest-element-in-an-array.py`（QuickSelect Lomuto 解法）、`215.kth-largest-element-in-an-array-2.py`（Max Heap 解法）

### Verdict: Done
