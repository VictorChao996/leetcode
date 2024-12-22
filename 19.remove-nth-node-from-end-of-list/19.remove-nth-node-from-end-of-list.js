/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 * Time Complexity: O(n), two pass
 * Space Complexity: O(1), constant pointer (dummy & temp)
 * Note: 先遍歷一遍 Linked List 確認長度, 在計算需要被跳過的 node 即可
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let count = 0,
		dummy = new ListNode(0),
		temp = head;
	dummy.next = head;
	while (temp) {
		count++;
		temp = temp.next;
	}

	temp = dummy;
	for (let i = 0; i < count - n; i++) {
		temp = temp.next;
	}
	temp.next = temp.next.next;

	return dummy.next;
};
// @lc code=end
