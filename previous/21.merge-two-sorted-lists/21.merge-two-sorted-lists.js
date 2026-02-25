/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 * Time ComplexityL O(m+n)
 * Space Complexity: O(m+n)
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
			current.next = new ListNode(list2.val, null);
			list2 = list2.next;
		} else {
			current.next = new ListNode(list1.val, null);
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
