# LeetCode 七天衝刺計畫 - QA (SDET) 面試準備

## 目標
針對 **QA (SDET) 職位**面試，用 **Python** 在七天內快速建立 LeetCode 解題能力。

- 每日投入時間：3.5 小時
- 使用語言：Python 3
- 難度範圍：Easy ~ Medium（不碰 Hard）
- 預計完成：40 題（重寫 18 題 + 新題 22 題）

### 目標調整
- 衝刺目標緩和, 改成每天持續至少有寫 1 題即可。
- 不求看到題目能直接解完, 而是以建立 Python 手感為目標去寫。
  - 沒概念直接看 Hint

## 面試資訊
- 職位：QA / SDET
- 重點技能：Automation Framework、API Testing、CI/CD、HTTP/REST/MQTT

## 核心策略

> 不是從零學演算法，而是用 Python 重新內化已經會的東西 + 補齊高頻考題

- **重寫題（~40%）**：已用 JS 解過的題目，用 Python 重新實作，建立語法直覺
- **新題（~60%）**：補齊 SDET 面試高頻題型
- **Python 優先**：每題都刻意使用 Python 慣用寫法和標準庫，而非翻譯 JS 邏輯
- **QA 思維**：每題都要主動考慮 edge case、注重程式碼可讀性、練習口述解題

## Python 原生資料處理 API 速查

解題時優先使用 Python 內建函式與方法，不需要 import，養成 Pythonic 習慣：

### 內建函式（Built-in Functions）

| 函式 | 用途 | 範例 |
|---|---|---|
| `len()` | 取長度 | `len([1,2,3])` → `3` |
| `sum()` | 加總 | `sum([1,2,3])` → `6` |
| `min()` / `max()` | 最小/最大值 | `max([3,1,2])` → `3` |
| `min(a, key=)` | 自訂比較取最小值 | `min(words, key=len)` |
| `abs()` | 絕對值 | `abs(-5)` → `5` |
| `sorted()` | 排序（回傳新 list） | `sorted([3,1,2])` → `[1,2,3]` |
| `sorted(key=lambda)` | 自訂排序 | `sorted(intervals, key=lambda x: x[0])` |
| `reversed()` | 反轉迭代器 | `list(reversed([1,2,3]))` → `[3,2,1]` |
| `enumerate()` | 同時取 index + value | `for i, v in enumerate(nums)` |
| `zip()` | 平行迭代多個序列 | `for a, b in zip(list1, list2)` |
| `map()` | 對每個元素套用函式 | `list(map(int, ["1","2"]))` → `[1,2]` |
| `filter()` | 過濾元素 | `list(filter(lambda x: x>0, nums))` |
| `any()` / `all()` | 任一/全部為 True | `any(x > 5 for x in nums)` |
| `range()` | 數字序列 | `range(0, 10, 2)` → `0,2,4,6,8` |
| `isinstance()` | 型別檢查 | `isinstance(x, int)` |
| `int()` | 字串轉整數 | `int("42")` → `42`、`int("1010", 2)` → `10` |
| `divmod()` | 同時取商和餘數 | `divmod(7, 3)` → `(2, 1)` |

### List 方法

| 方法 | 用途 | 範例 |
|---|---|---|
| `append(x)` | 尾端新增 | `nums.append(5)` |
| `pop()` / `pop(i)` | 移除並回傳末端/指定位置 | `nums.pop()` / `nums.pop(0)` |
| `insert(i, x)` | 指定位置插入 | `nums.insert(0, 99)` |
| `sort()` | 原地排序 | `nums.sort()` / `nums.sort(reverse=True)` |
| `reverse()` | 原地反轉 | `nums.reverse()` |
| `index(x)` | 找元素位置 | `nums.index(5)` |
| `count(x)` | 計算出現次數 | `nums.count(3)` |
| `extend(iter)` | 合併另一個序列 | `nums.extend([4,5,6])` |
| slicing | 切片操作 | `nums[1:3]`、`nums[::-1]`、`nums[::2]` |
| `[x for x in ...]` | List comprehension | `[x**2 for x in nums if x > 0]` |

### String 方法

| 方法 | 用途 | 範例 |
|---|---|---|
| `split()` | 分割字串 | `"a b c".split()` → `["a","b","c"]` |
| `join()` | 組合字串 | `" ".join(["a","b"])` → `"a b"` |
| `strip()` | 去除頭尾空白 | `" hi ".strip()` → `"hi"` |
| `replace(a, b)` | 取代子字串 | `"hello".replace("l","r")` → `"herro"` |
| `find(sub)` | 找子字串位置（-1 if 無） | `"hello".find("ll")` → `2` |
| `startswith()` / `endswith()` | 前綴/後綴判斷 | `"hello".startswith("he")` → `True` |
| `isdigit()` | 是否全為數字 | `"123".isdigit()` → `True` |
| `isalpha()` | 是否全為字母 | `"abc".isalpha()` → `True` |
| `isalnum()` | 是否為字母或數字 | `"a1".isalnum()` → `True` |
| `lower()` / `upper()` | 大小寫轉換 | `"Hi".lower()` → `"hi"` |
| `count(sub)` | 子字串出現次數 | `"hello".count("l")` → `2` |
| `ord()` / `chr()` | 字元 ↔ ASCII 碼 | `ord("a")` → `97`、`chr(97)` → `"a"` |

### Dict 方法

| 方法 | 用途 | 範例 |
|---|---|---|
| `get(k, default)` | 取值（key 不存在不報錯） | `d.get("x", 0)` |
| `keys()` / `values()` / `items()` | 取所有 key/value/pair | `for k, v in d.items()` |
| `setdefault(k, v)` | key 不存在時設預設值 | `d.setdefault("x", []).append(1)` |
| `update(other)` | 合併另一個 dict | `d.update({"a": 1})` |
| `pop(k)` | 移除並回傳指定 key 的值 | `d.pop("x")` |
| `in` | 檢查 key 是否存在 | `if "x" in d` |
| `{k: v for ...}` | Dict comprehension | `{v: i for i, v in enumerate(nums)}` |

### Set 方法與運算

| 方法 / 運算 | 用途 | 範例 |
|---|---|---|
| `add(x)` | 新增元素 | `s.add(5)` |
| `remove(x)` / `discard(x)` | 移除（remove 會報錯，discard 不會） | `s.discard(5)` |
| `a & b` | 交集 | `{1,2,3} & {2,3,4}` → `{2,3}` |
| `a \| b` | 聯集 | `{1,2} \| {3,4}` → `{1,2,3,4}` |
| `a - b` | 差集 | `{1,2,3} - {2}` → `{1,3}` |
| `in` | O(1) 查找 | `if x in seen` |
| `{x for x in ...}` | Set comprehension | `{x for x in nums if x > 0}` |

### 常用語法技巧

| 語法 | 用途 | 範例 |
|---|---|---|
| 多重賦值 | 同時指定多個變數 | `a, b = 0, 1` |
| swap | 交換兩個變數 | `a, b = b, a` |
| 三元運算 | 一行 if-else | `x = a if a > b else b` |
| `float('inf')` / `float('-inf')` | 正負無限大（不用 import） | `min_val = float('inf')` |
| unpacking | 解包 | `first, *rest = [1,2,3,4]` |
| `_` 佔位 | 忽略不需要的值 | `for _ in range(5)` |
| f-string | 格式化字串 | `f"index={i}, val={v}"` |

## 資料夾結構

```
leetcode/
├── README.md              ← 你正在看的這份計畫
├── readme.deprecated.md   ← 舊的 README
├── previous/              ← 之前的練習題目（JS 為主）
└── 7-day-sprint/          ← 本次衝刺練習（Python）
    ├── day1/
    ├── day2/
    ├── ...
    └── day7/
```

---

## [Day 1｜Python 武器庫 + Array 暖身（3.5h）](7-day-sprint/day1/plan.md)

## [Day 2｜String 處理 + Hash Table（3.5h）](7-day-sprint/day2/plan.md)

## [Day 3｜Two Pointers + Sorting（3.5h）](7-day-sprint/day3/plan.md)

## [Day 4｜Stack / Queue + Sliding Window（3.5h）](7-day-sprint/day4/plan.md)

## [Day 5｜Binary Search + Matrix（3.5h）](7-day-sprint/day5/plan.md)

## [Day 6｜Linked List + Tree + DP 入門（3.5h）](7-day-sprint/day6/plan.md)

## [Day 7｜模擬面試 + 總複習（3.5h）](7-day-sprint/day7/plan.md)

---

## 總覽統計

| | 重寫題 | 新題 | 合計 |
|---|--------|------|------|
| Day 1 | 3 | 3 | 6 |
| Day 2 | 2 | 4 | 6 |
| Day 3 | 2 | 4 | 6 |
| Day 4 | 2 | 4 | 6 |
| Day 5 | 2 | 4 | 6 |
| Day 6 | 4 | 2 | 6 |
| Day 7 | 3 | 1 | 4 |
| **Total** | **18** | **22** | **40** |

---

## QA/SDET 面試提醒

1. **Edge Case 是你的武器**：面試官會看你是否主動考慮空陣列、null、邊界值 — 這是 QA 核心能力
2. **程式碼可讀性 > 炫技**：變數命名清楚、適當分段，SDET 面試看重 code quality
3. **練習口述解題**：SDET 面試比 SWE 更重視溝通。解題時先說思路、再寫 code
4. **善用 Python 原生 API**：面試時主動使用 `sorted(key=lambda)`、`dict.get()`、`set` 運算、`enumerate()` 等內建功能展現 Python 熟練度

---

## 進度追蹤

- [x] Day 1 完成（6/6 題）
- [x] Day 2 完成（6/6 題）
- [x] Day 3 完成（6/6 題）
- [x] Day 4 完成（6/6 題）
- [ ] Day 5 完成（___/6 題）
- [ ] Day 6 完成（___/6 題）
- [ ] Day 7 完成（___/4 題 + 複習）
