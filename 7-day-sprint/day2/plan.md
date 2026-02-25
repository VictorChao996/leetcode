# Day 2｜String 處理 + Hash Table（3.5h）

> QA/SDET 高度相關：字串比對、資料驗證、pattern matching

## 學習（20min）
Python 字串技巧（不需要 import）：
- `s.isalnum()`、`s.lower()`、`''.join()`、`s.split()`
- `dict.get(k, 0)` 搭配迴圈做字元統計
- `ord()` / `chr()` 字元 ↔ ASCII 碼轉換

## 練題（3h）- 6 題

| # | 題目 | 難度 | 類型 | 目的 | 時間 |
|---|------|------|------|------|------|
| 1 | [125 Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | E | 重寫 | Python 字串處理 | 15min |
| 2 | [383 Ransom Note](https://leetcode.com/problems/ransom-note/) | E | **新題** | `dict.get()` 字元計數 | 20min |
| 3 | [205 Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | E | **新題** | mapping 驗證（類 API schema 驗證思維） | 25min |
| 4 | [290 Word Pattern](https://leetcode.com/problems/word-pattern/) | E | **新題** | 同上強化版 | 25min |
| 5 | [49 Group Anagrams](https://leetcode.com/problems/group-anagrams/) | M | 重寫 | `dict.setdefault()` + `tuple` as key | 25min |
| 6 | [409 Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | E | **新題** | dict 計數 + `values()` 應用 | 20min |

> **Day 2 重點 API**：`str.isalnum()`、`str.lower()`、`''.join()`、`dict.get()`、`dict comprehension`、`ord()`
>
> **Day 2 目標**：能用 Python 快速處理字串 + hash table 題型
