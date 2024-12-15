/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Note: 遍歷一遍 Linked List 並將 value 存在 array 中, 再從 array 末端往前取出值來建立新的 Reverse Linked List
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
	const array = new Array();
	let temp, result;
	result = new ListNode();
	temp = result;
	while (head) {
		array.push(head.val);
		head = head.next;
	}

	for (let i = array.length - 1; i >= 0; i--) {
		temp.next = new ListNode(array[i], null);
		temp = temp.next;
	}

	return result.next;
};
// @lc code=end
