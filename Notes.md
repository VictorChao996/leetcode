# Notes

## 題目說明

### 1. Two Sum
- 說明: 
  - 尋找陣列中兩數之和等於 target 並返回兩元素的位置陣列, 保證陣列中各數字只會使用一次且每題僅有唯一解
- 解題方法：
  1. [BF 解 O(n^2)](./1.two-sum/1.two-sum.js)
  2. [Map 解 O(n)](./1.two-sum/1.two-sum-improve.js)
  3. Map 解優化 (One pass): 邊檢查邊建立 hash map, 不用先掃一遍 array
- 小記 & 心得：
  - 上次寫這題是很久之前了,對 map 的使用不熟, 所以一直抓不到為何能夠 O(n) 解
  - 記住一個重點就行, map 查找複雜度為平均為 O(1), 最差為 O(n)
- Tags: *array, hash-table*
- 難度: Easy

### 49 Group Anagram
- 說明：
  - anagram (相同字母異序詞), 給定一個 input 字串陣列, 找出互為 anagram 的字串並將其放在同一個陣列中返回, order 不限, 字串可為空 ("")
```
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```
- 解題方法：
  1.  [sort 字串後找出 anagram 在陣列中的位置](./49.group-anagram/49.group-anagrams.js): Time: O(m * nlogn)
  2.  HashMap 解: 用 hashmap 找出 anagram , Time: O(m * n)
- 小記 & 心得：
  - 242-valid-anagram 的進階, 多了個尋找字串在陣列中的位置
  - 使用 JS object 替代 map 來寫需要注意, 因 JS object 非 iterable, 所以 keys & Values 要透過 JS 提供的 method 來取得
  - 也許有更好的解法, 暫時未知
- Tags: *array, hash table, string, sorting*
- 難度：Medium

### 217 Contain Duplicate
- 說明：
  - input 一個數字陣列, 若陣列中有重複的數字則 return true, 反之則 false
- 解題方法：
  1. BF 解： O(n^2) 遍歷 array 來檢查是否重複
  2. Sort 解：先 sort 陣列後再遍歷 sorted array, 相同數字會相鄰, 逐個兩兩比較即可。Time: O(nlogn)
  3. [Map 解一](./217.contains-duplicate/217.contains-duplicate.js)：遍歷一遍 array 並建立 map 紀錄 (key: nums[i], value: i), 最後再遍歷 array 檢查 map 中是否已經存在相同 key 但是 value 不同值
  4. [Map 解二](./217.contains-duplicate/217.contains-duplicate-improve.js): 跟 anagram 題類似, map 中儲存不同數字出現的次數, Time: O(n)
  5. Set 解: set 是一個不會包含重複資料的資料結構,遍歷 array 並建立 set, 最後再比較兩者的大小是否不同即可
- 小記 ＆ 心得：
  - 這題就一樣是在練習 map 結構的使用, 不過實作是用 JS object 來替代 map 
- Tags: array, hash table, sorting
- 難度：Easy

### 238 Product Of Array Expect Self
- 說明：
  - 給定一個數字陣列, 返回除了該位置外所有數字相乘的結果的陣列
  - leetcode 要求: 在不使用除法的狀況下, 寫出時間複雜度 O(n) 的解
```
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
- 解題方法：
  1. [BF 解 O(n^2)](./238.product-of-array-expect-self/238.product-of-array-except-self_bruteForce.js): leetcode time limt exceed, 這解法可忽略ｓ
  2. [除法 解 O(n)](./238.product-of-array-expect-self/238.product-of-array-except-self_division.js): 不符合 leetcode 要求, 但可當作參考
  3. [使用 prefix && suffix 解](./238.product-of-array-expect-self/238.product-of-array-except-self_prefix_suffix.js): Time: O(n), Space: O(n)
  4. [優化 prefix && suffix 解](./238.product-of-array-expect-self/238.product-of-array-except-self_prefix_suffix_improve.js): TimeL O(n), Space: O(1)
- 小記 & 心得：
  - 就算是**除法解**也不能無腦先相乘所有數字, 因為可能包含 0, 需要特別處理
  - prefix && suffix 解肯定是沒辦法靠自己想出來的特殊解法....
- Tags: array
- - 難度：Medium

### 242 Valid Anagram
- 說明：
  - input 兩個字串 a,b 判斷這兩個字串是不是 anagram （相同字母異序詞）
- 解題方法：
  1. [sort 解](./242-valid-anagram/242.valid-anagram.js): 講兩個字串先 sort 後再比對是否相同, Time: O(nlogn)
  2. [Map 解](./242-valid-anagram/242.valid-anagram-improve.js): 將字串中的字母存到 map 中統計, 這樣就不用先排序, Time Complexity: O(n)
- 小記：
  - sort 方法有借助 JS 的幾個 method, split(), sort(), join() 來處理字串排序
- Tags: hash table, sorting
- 難度：Easy

### 347 Top K Frequent Element
- 說明：
  - 給兩個 input： num array & k, 求 array 中的數量前 k 筆的數字並返回陣列, 題目保證輸入只有唯一解
```
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]
```  
- 解題方法：
  1. [Map 解](./347.top-k-frequent-element/347.top-k-frequent-elements.js)：遍歷 array 並建立數字統計的 map，最後再找出統計前 k 筆並返回陣列結果
  2. Heap 解： 使用 heap 來找出前 k 筆, Time: O(nlogk), TODO
  3. [類似 heap 的 bucket 解](./347.top-k-frequent-element/347.top-k-frequent-elements_bucket.js)： Time: O(n), TODO
- 小記 & 心得：
  - 在 Map 中找出前 K 筆最大的方式也許有更好的做法? 抑或是 map 的 key:value 儲存內容需要調整
- Tags: array, hash table, heap 
- 難度：Medium

### Template
- 說明：
- 解題方法：
- 小記 & 心得：
- Tags:
- 難度：


