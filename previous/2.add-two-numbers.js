/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 * Time Complexity: O(m+n), m=l1.len, n=l2.len
 * Space Complexity: O(n) or O(1), depends on if return result space is count as additional space
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let carry = 0,
		dummy = new ListNode(0),
		temp = dummy;

	while (l1 || l2) {
		let val1 = l1 ? l1.val : 0;
		let val2 = l2 ? l2.val : 0;

		let sum = val1 + val2 + carry;
		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		} else {
			carry = 0;
		}
		temp.next = new ListNode(sum);
		l1 = l1?.next;
		l2 = l2?.next;
		temp = temp.next;
	}
	//若進位元還存在, 需要補上
	if (carry != 0) {
		temp.next = new ListNode(carry);
	}
	return dummy.next;
};
// @lc code=end
