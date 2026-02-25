/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 * Time Complexity: O(n), one pass
 * Space Complexity: O(1), constant pointer (dummy,p1, p2, temp)
 * Note: 兩個指標 p1, p2 , 讓 p2 先走 n 步, 再讓 p1 & p2 同時移動, 直到 p2 觸底時, 此時 p1 的下一個 node 即為要被省略的
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
	let dummy = new ListNode(0);
	dummy.next = head;

	let p1 = dummy,
		p2 = dummy;

	for (let i = 0; i < n; i++) {
		p2 = p2.next;
	}

	while (p2.next) {
		p1 = p1.next;
		p2 = p2.next;
	}
	p1.next = p1.next.next;

	return dummy.next;
};
// @lc code=end
