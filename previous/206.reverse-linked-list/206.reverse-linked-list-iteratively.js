/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 * Time Complexity: O(n)
 * Space Complexity: O(1), 額外兩 pointer temp, current
 * Note: one-pass Linked List, 遍歷順便反轉整個 Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let current = null,
		temp = null;

	while (head) {
		temp = head;
		head = head.next;
		temp.next = current;
		current = temp;
	}

	return current;
};
// @lc code=end
