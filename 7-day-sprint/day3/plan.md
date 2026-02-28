# Day 3｜Two Pointers + Sorting（3.5h）

> 面試高頻 pattern，SDET 也常考 interval 相關題

## 練題（3.5h）- 6 題

| # | 題目 | 難度 | 類型 | 目的 | 時間 |
|---|------|------|------|------|------|
| 1 | [167 Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | M | 重寫 | two pointer 基礎 | 15min |
| 2 | [977 Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) | E | **新題** | two pointer 基礎 | 20min |
| 3 | [15 3Sum](https://leetcode.com/problems/3sum/) | M | 重寫 | Python sort + dedup | 30min |
| 4 | [75 Sort Colors](https://leetcode.com/problems/sort-colors/) | M | **新題** | Dutch National Flag | 30min |
| 5 | [56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) | M | **新題** | **超高頻**，sorting + greedy | 30min |
| 6 | [57 Insert Interval](https://leetcode.com/problems/insert-interval/) | M | **新題** | 56 的延伸 | 30min |

> **Day 3 重點 API**：`sorted(key=lambda)`、`list.sort()`、`zip()`、`list comprehension`、`max()`/`min()`
>
> **Day 3 目標**：Two Pointer 和 Interval 題型能在 25 分鐘內穩定解出

---

## Completion Report

### Problems (6/6 completed)

| # | Problem | File | Status | Solution Approach |
|---|---------|------|--------|-------------------|
| 1 | 167 Two Sum II | 167.two-sum-ii-input-array-is-sorted.py | Done | Two pointer 左右夾擊，利用排序特性移動指標 |
| 2 | 977 Squares of a Sorted Array | 977.squares-of-a-sorted-array.py | Done | 暴力解：先平方再 sorted，O(n log n) |
| 3 | 15 3Sum | 15.3-sum.py | Done | Sort + 外層遍歷 + 內層 two pointer，skip duplicate |
| 4 | 75 Sort Colors | 75.sort-colors.py | Done | Two pass bucket sort：計數再覆寫 |
| 5 | 56 Merge Intervals | 56.merge-intervals.py | Done | Sort by start + 逐一比較 end 判斷重疊合併 |
| 6 | 57 Insert Interval | 57.insert-interval.py | Done | 找插入點插入 + 56 題 merge interval 邏輯 |

> Bonus: `977.squares-of-a-sorted-array-2.py`（Two pointer O(n) 解法）、`75.sort-colors-2.py`（Dutch National Flag one pass 解法）、`56.merge-intervals-2.py`（直接更新 result[-1] 優化版）、`57.insert-interval-2.py`（三階段 one pass 解法）

### Verdict: Done
