# Day 1｜Python 武器庫 + Array 暖身（3.5h）

## 學習（45min）
熟悉 Python 刷題必備語法（全部不需要 import）：
- `list`：slicing `nums[1:]`、`nums[::-1]`、list comprehension `[x for x in nums if x > 0]`
- `dict`：`d.get(k, 0)`、`d.items()`、`d.setdefault(k, [])`、dict comprehension
- `set`：`set()`、集合運算 `&`、`|`、`-`、`in` O(1) 查找
- 內建函式：`len()`、`sum()`、`min()`/`max()`、`sorted(key=lambda)`、`enumerate()`、`zip()`
- 語法技巧：`a, b = b, a` swap、`//` 整除、`float('inf')`、unpacking `first, *rest = list`

## 練題（2.75h）- 6 題 Easy

| # | 題目 | 類型 | 目的 | 時間 |
|---|------|------|------|------|
| 1 | [217 Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | 重寫 | 熱身 | 10min |
| 2 | [268 Missing Number](https://leetcode.com/problems/missing-number/) | 重寫 | 熟悉 Python math/XOR | 15min |
| 3 | [283 Move Zeroes](https://leetcode.com/problems/move-zeroes/) | 重寫 | 練 in-place swap | 15min |
| 4 | [26 Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | **新題** | in-place + two pointer | 25min |
| 5 | [88 Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | **新題** | 高頻 Easy，反向 two pointer | 25min |
| 6 | [169 Majority Element](https://leetcode.com/problems/majority-element/) | **新題** | `dict.get()` 計數 / Boyer-Moore | 25min |

> **Day 1 重點 API**：`list slicing`、`enumerate()`、`set()`、`sum()`、`sorted()`
>
> **Day 1 目標**：寫 Python 不再需要查語法，手感建立起來

---

## Completion Report

### Learning
- [python_basics.py](7-day-sprint/day1/python_basics.py) — Done

### Problems (6/6 completed)

| # | Problem | File | Status | Solution Approach |
|---|---------|------|--------|-------------------|
| 1 | 217 Contains Duplicate | 217.contains-duplicate.py | Done | Set length comparison — `len(nums) != len(set(nums))` |
| 2 | 268 Missing Number | 268.missing-number.py | Done | Bucket counting array |
| 3 | 283 Move Zeroes | 283.move-zeroes.py | Done | Two-pointer in-place swap |
| 4 | 26 Remove Duplicates from Sorted Array | 26.remove-duplicates-from-sorted-array.py | Done | Two-pointer (slow/fast) |
| 5 | 88 Merge Sorted Array | 88.merge-sorted-array.py | Done | Reverse two-pointer merge from end |
| 6 | 169 Majority Element | 169.majority-element.py | Done | Dict frequency counting with `dict.get()` |

> Bonus: `268.missing-number-2.py` (set XOR approach), `268.missing-number-3.py` (math sum approach), `169.majority-element-2.py` (Boyer-Moore voting algorithm)

### Verdict: Done
