#
# @lc app=leetcode id=49 lang=python3
#
# [49] Group Anagrams
#

# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dic = {}
        results = []

        for string in strs:
            # 對每個字串做排序後再用 dict 確認屬於哪一組
            s = "".join(sorted(string))
            if s not in dic:
                dic[s] = []
            dic[s].append(string) # 注意：list.append() 是 in-place, 直接改就行不用重新 assign 給 dic[]

        for group in dic.values():
            results.append(group)

        return results
# @lc code=end

# Test Case
# ["eat","tea","tan","ate","nat","bat"]
# [""]
# ["a"]

# Concept: 對字串先做排序後在當作 Dict 的 Key, 分完組後在做出結果

# 設 n=len(strs), k 為最長字串長度, Time: (n * KlogK), Space: O(n*k)