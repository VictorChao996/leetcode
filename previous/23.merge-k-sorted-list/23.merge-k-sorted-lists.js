/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 * Time Complexity: O(nlogn) (depends on sorting)
 * Space Complexity: O(n), build result with additional space
 * Note: 先遍歷所有的 linked List 並將 node 值存在 array 中, sort 過後再直接複製建立一份 Linked List 即為 result
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	const a = new Array();

	//put all the node (value) in the array
	for (let i = 0; i < lists.length; i++) {
		let temp = lists[i];
		while (temp) {
			a.push(temp.val);
			temp = temp.next;
		}
	}
	//sort the array
	a.sort((a, b) => {
		return a - b;
	});

	//bulid the new linked list node from array value
	let dummy = new ListNode(),
		temp = dummy;

	for (let i = 0; i < a.length; i++) {
		temp.next = new ListNode(a[i]);
		temp = temp.next;
	}
	return dummy.next;
};
// @lc code=end
