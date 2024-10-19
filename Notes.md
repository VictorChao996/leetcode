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

### 11. Container With Most Water
- 說明：
  - 給一個一維 array 表示柱子的柱高, 求任意兩柱子可圍成的最大含水量
- 解題方法：
  - [two pointer O(n)](./11.container-with-most-water.js): 兩個 pointer 一前一後選擇往中心選擇可能圍成更大容積的柱子前進, 持續將 max area of water 紀錄 & 更新, 直到兩柱子相會 
- 小記 & 心得：
  - 經典 two pointer 題目, 還記得大學跟其他人一起解的時候卡很久
  - 重點在於找出如何移動 two pointer 的方法
- Tags: *two-ponter*
- 難度：Medium

### 15. 3 Sum
- 說明：
  - 給一個一維數字陣列, 找出所有 ３ 個相加為 0 的組合並放在 array 中返回, 順序沒限制,但組合不能重複
- 解題方法：
  - [將其拆成數個 2 sum 問題](./15.3-sum/15.3-sum.js): 將陣列 sort 後就變成數個 2 sum sorted array （題目：167.two-sum-ii-input-array-is-sorted）加上一點 edge case 處理
- 小記 & 心得：
  - two sum 有想到, 但是處理 duplicate 的方式卡了很久
- Tags: *array, two-pointer, sorting*
- 難度：Medium

### 36. Valid Sudoku
- 說明：
  - 給一個二維陣列表示數獨的樣貌, 求該數獨是否合法
- 解題方法：
  - [迴圈遍歷三次](./36.valid-sudoku/36.valid-sudoku.js)
  - one pass 解
- 小記 & 心得：
  - 看了網路上的 one pass 解, 不是很懂要如何使用 JS 重現
- Tags: *array, hash-table*
- 難度：Medium

### 42. Trapping Rain Water
- 說明：
  - 給一個一維數字陣列表示像素高, 求像素圖所能裝買的的最大水量
- 解題方法：
  - [Two Array (maxLeft & maxRight)](./42.trapping-rain-water/42.trapping-rain-water.js): 單位格子水能困住的水量為: min(左側最高點, 右側最高點) - 當前柱高, 用兩陣列分別計算出每一格的 maxLeft & maxRight 後, 再依序計算將加總即為解答。 Space: O(n)
  - two pointer 解：TODO, Space O(1)
- 小記 & 心得：
  - 第一個 Hard 題目, 被 two pointer 誤導, 沒想到用兩個陣列就能解
  - two pointer 題目找時間再寫, 滿 tricky 的
- Tags: *two-pointer*
- 難度：Hard

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

### 125 Valid Palindrome
- 說明：
  - 給一個 string, 若該 string 的所有字母 & 數字字元從頭與尾一一比對相同的話, 此 string 為 palindrome 返回 true, 反之則回 false
- 解題方法：
  - [回圈解 O(n)](./125.valid-palindrome.js)
- 小記 & 心得：
  - 這題滿單純的, 就是要知道怎麼轉換大寫字母為小寫, 並過濾掉所有非數字 ＆ 英文字母的字元 (ASCII), 每個語言提供的轉換函式不同, 用到在查, 不用死記硬背
- Tags:
- 難度：Easy

### 167 Two Sum II - Input Array is Sorted
- 說明：
  - 給一個已經 sort 過的 (asc) 的 一維數字陣列, 求和為 target 的位置
- 解題方法：
  - [two pointer O(n)](./167.two-sum-ii-input-array-is-sorted.js): 跟 11 題 container-with-most-water 類似, 都是用 two pointer 一前一後向中間移動解
- 小記 & 心得：
  - 重點是如何選擇要移動 two pointer 中的哪一個 pointer
- Tags: *two-pointer*
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

### 271 Encoded And Decode Strings
- 說明：
  - 寫一個 encode 的 function 讓包含任意 UTF-8 字元的 string array 可以被轉換成純字串, decoded function 將字串轉回 string array
- 解題方法：
  - [紀錄長度](./271.encode-and-decode-strings.js)：因為可以包含任意 UTF-8 字元, 所以只用 #, % 等當作分隔符號在 decode 的時候會拆錯字, 可以將各個字串的長度作為資訊放到 encode string 中, 這樣在 decode 時就不會拆錯
- 小記 & 心得：
  - 還以為是要用比較複雜的 separater 去解, 沒想到有這種方法
- Tags: *string*
- 難度：Medium

### 347 Top K Frequent Element
- 說明：
  - 給兩個 input： num array & k, 求 array 中的數量前 k 筆的數字並返回陣列, 題目保證輸入只有唯一解
```
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]
```  
- 解題方法：
  1. [Map 解](./347.top-k-frequent-element/347.top-k-frequent-elements.js)：遍歷 array 並建立數字統計的 map，最後再找出統計前 k 筆並返回陣列結果
  2. Heap 解： 使用 heap 來找出前 k 筆, Time: O(nlogk)
  3. [類似 heap 的 bucket 解](./347.top-k-frequent-element/347.top-k-frequent-elements_bucket.js)： Time: O(n)
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


