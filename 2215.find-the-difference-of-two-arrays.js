/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 * Time: O(N+M), N is len of nums1, M is len of nums2
 * Space: O(N+M)
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const m1 = new Map(), m2 = new Map();
    const result = [];
    const len1 = nums1.length, len2 = nums2.length;

    for(let i=0; i<len1; i++){
        if(!m1.get(nums1[i]))
            m1.set(nums1[i], 1);
    }
    for(let i=0; i<len2; i++){
        if(!m2.get(nums2[i]))
            m2.set(nums2[i], 1);
    }
    let temp = [], temp2 = [];
    for(const [key, value] of m1){
        console.log(key, value);
        if(!m2.get(key))
            temp.push(key);

    }
    result.push(temp);
    for(const [key, value] of m2){
        console.log(key, value);
        if(!m1.get(key))
            temp2.push(key);
    }
    result.push(temp2);
    return result;
};
// @lc code=end

