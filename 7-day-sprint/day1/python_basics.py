"""
Day 1 - Python 必備語法練習
完成以下題目，每題直接在 TODO 下方寫出答案
執行方式: python python_basics.py
"""

# ============================================================
# Q1. List Slicing
# 給定 nums，不使用迴圈完成以下操作
# ============================================================
nums = [10, 20, 30, 40, 50, 60, 70, 80]

# (a) 取出前三個元素 → [10, 20, 30]
print(nums[0:3])

# (b) 取出最後兩個元素 → [70, 80]
print(nums[-2:])

# (c) 反轉整個 list → [80, 70, 60, 50, 40, 30, 20, 10]
print(nums[::-1])

# (d) 取出偶數 index 的元素 → [10, 30, 50, 70]
print(nums[0::2])


# ============================================================
# Q2. List Comprehension + 內建函式
# 給定一組考試成績，完成以下操作
# ============================================================
scores = [55, 82, 91, 43, 78, 66, 95, 30, 88, 72]

# (a) 用 list comprehension 篩選出及格（>= 60）的成績
print([x for x in scores if x >= 60])

# (b) 用 list comprehension 將所有成績轉成 "PASS" / "FAIL" 字串
#     預期: ["FAIL", "PASS", "PASS", "FAIL", "PASS", "PASS", "PASS", "FAIL", "PASS", "PASS"]
print(["PASS" if x >= 60 else "FAIL" for x in scores])

# (c) 用一行算出：及格人數、最高分、最低分、全班平均（用 len, max, min, sum）
print((len([x for x in scores if x >= 60]), max(scores), min(scores), sum(scores)/len(scores)))


# ============================================================
# Q3. enumerate + zip
# ============================================================
names = ["Alice", "Bob", "Charlie", "Diana"]
ages = [25, 30, 35, 28]

# (a) 用 enumerate 印出每個人的 index 和名字
#     預期: "0: Alice", "1: Bob", ...
for i, name in enumerate(names):
    print(f"{i}: {name}")
# (b) 用 zip 將 names 和 ages 組成一個 dict → {"Alice": 25, "Bob": 30, ...}
d = {k: v for k,v in zip(names, ages)}
print(d)

# (c) 用 sorted + key=lambda 將上面的 dict 按年齡由小到大排序，回傳 list of tuple
#     預期: [("Alice", 25), ("Diana", 28), ("Bob", 30), ("Charlie", 35)]
result = sorted(d.items(), key=lambda x: x[1])
print(result)


# ============================================================
# Q4. Dict 操作
# 給定一個單字列表，統計每個單字出現的次數
# ============================================================
words = ["apple", "banana", "apple", "cherry", "banana", "apple", "date"]

# (a) 用 dict.get() 搭配迴圈統計詞頻
#     預期: {"apple": 3, "banana": 2, "cherry": 1, "date": 1}
dict = {}
for w in words:
    dict[w]  = dict.get(w, 0) + 1
print(dict)

# (b) 用 dict.setdefault() 將單字按首字母分組
#     預期: {"a": ["apple", "apple", "apple"], "b": ["banana", "banana"], "c": ["cherry"], "d": ["date"]}
d2 = {}
for w in words:
    d2.setdefault(w[0], []).append(w)
print(d2)

# (c) 用 dict comprehension 反轉一個 dict 的 key 和 value
sample = {"x": 1, "y": 2, "z": 3}
#     預期: {1: "x", 2: "y", 3: "z"}
print({v:k for k, v in sample.items()})


# ============================================================
# Q5. Set 運算
# 兩個班級的學生名單，找出交集、聯集、差集
# ============================================================
class_a = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
class_b = {"Charlie", "Diana", "Frank", "Grace"}

# (a) 兩班都有的學生（交集）
print(class_a & class_b)

# (b) 所有不重複的學生（聯集）
print(class_a | class_b)

# (c) 只在 A 班的學生（差集）
print(class_a - class_b)

# (d) 給定一個 list，用 set 的 in 來快速判斷 "Bob" 是否在 A 班
## 把 list 轉換成 set 加速搜索, O(n) -> O(1)
print("Bob" in class_a)


# ============================================================
# Q6. 語法技巧綜合
# ============================================================

# (a) swap：交換 a 和 b 的值（一行完成）
a, b = 10, 20
a,b = b, a
print(a, b)
# 驗證: print(a, b) → 20 10

# (b) 整除與餘數：將 total_seconds = 3725 轉成 "1 小時 2 分 5 秒" 格式
total_seconds = 3725
print(f"{total_seconds // 60 // 60} 小時 {total_seconds // 60 % 60} 分 {total_seconds % 60 % 60} 秒")

# (c) unpacking：從 data 中拆出第一個和最後一個，中間的放一個 list
data = [100, 200, 300, 400, 500]
print(data[0], data[1:-1], data[-1])

# 驗證: print(first, middle, last) → 100 [200, 300, 400] 500

# (d) 用 float('inf') 找出 list 中的最小值（不用 min()，手動迴圈）
values = [34, 12, 78, 5, 56, 23]
minValue = float('inf')
for n in values:
    if n < minValue:
        minValue = n
print(minValue)


# ============================================================
# Q7. 綜合應用
# 給定一組學生的 (名字, 分數) 資料，完成以下操作
# 盡量每步都用一行完成
# ============================================================
students = [
    ("Alice", 85),
    ("Bob", 72),
    ("Charlie", 95),
    ("Diana", 68),
    ("Eve", 91),
    ("Frank", 55),
]

# (a) 用 list comprehension 篩選出及格（>= 60）的學生名字
#     預期: ["Alice", "Bob", "Charlie", "Diana", "Eve"]
a = [x for (x,y) in students if y >= 60]
print(a)

# (b) 用 sorted + key=lambda 按分數由高到低排序
b = sorted(students, key=lambda x : -x[1])
print(b)
# (c) 用 enumerate 印出排名（從 1 開始）
#     預期: "1. Charlie - 95", "2. Eve - 91", ...
c = sorted(students, key=lambda x: -x[1])
print([f"{i}. {n[0]} - {n[1]}" for i, n in enumerate(c)])

# (d) 用 dict comprehension 建立 {名字: 分數} 的 dict
print({k:v for (k, v) in students})

# (e) 用 zip 將排序後的學生拆成兩個獨立的 list: names 和 scores
e = sorted(students, key=lambda x: -x[1])
names, scores = map(list, zip(*e))
print(names, scores)
