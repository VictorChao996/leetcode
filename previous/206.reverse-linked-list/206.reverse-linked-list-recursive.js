/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 * Time Complexity: O(n)
 * Space Complexity: O(1), constant space (newHead, head.next.next)
 * Note: 將問題轉換成子問題, 並找到 recurrsive 開始點, 即可反轉整個字串
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
	if (!head) return null;
	let newHead = head;

	if (head.next) {
		newHead = reverseList(head.next);
		head.next.next = head;
	}
	head.next = null;

	return newHead;
};
// @lc code=end
