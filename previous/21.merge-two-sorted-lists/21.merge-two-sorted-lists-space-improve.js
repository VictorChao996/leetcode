/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 * Time ComplexityL O(m+n)
 * Space Complexity: O(1)
 * Note: 用一個 temp pointer 暫存指向下一個要接的位置, 便能不需要新的 node space
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let head = new ListNode();
	let current = head;

	while (list1 && list2) {
		if (list1.val > list2.val) {
			current.next = list2;
			list2 = list2.next;
		} else {
			current.next = list1;
			list1 = list1.next;
		}
		current = current.next;
	}

	if (list1) {
		current.next = list1;
	}
	if (list2) {
		current.next = list2;
	}
	return head.next;
};
// @lc code=end
