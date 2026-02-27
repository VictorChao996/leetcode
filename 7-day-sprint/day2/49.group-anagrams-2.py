#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
# Pythonic 寫法優化原題
#

# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        
        for string in strs:
            # 對每個字串做排序後再用 dict 確認屬於哪一組
            key = tuple(sorted(string))
            dic.setdefault(key, []).append(string)
        return list(dic.values())
# @lc code=end

# Test Case
# ["eat","tea","tan","ate","nat","bat"]
# [""]
# ["a"]

# Concept: 對字串先做排序後在當作 Dict 的 Key, 分完組後在做出結果

# 設 n=len(strs), k 為最長字串長度, Time: (n * KlogK), Space: O(n*k)