/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 * Time Complexity: O(n*k), where n is the numbers of total nodes, k is length of the lists
 * Space Complexity: O(1), constant
 * Note: 執行數次 merge two linked List 的操作即可合併全部的 linked List, 每一次 merge 的平均時間複雜度為 O(m) （這邊的 m 指的是 list[i], list[i+1] 兩個 list 的 node 數量）, 總共要執行 K 次 (K 為 lists.len -1) = k*O(m) = O(k*m) <= O(k*n), 其中 n 為 total node 數量
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
	if (lists.length == 0) return null;
	let temp1 = lists[0],
		temp2 = new ListNode(),
		current = new ListNode();

	for (let i = 1; i < lists.length; i++) {
		let l1 = temp1;
		let l2 = lists[i];
		current = temp2;

		while (l1 && l2) {
			if (l1.val < l2.val) {
				current.next = l1;
				l1 = l1.next;
			} else {
				current.next = l2;
				l2 = l2.next;
			}
			current = current.next;
		}
		if (l1) {
			current.next = l1;
		}
		if (l2) {
			current.next = l2;
		}
		temp1 = temp2.next; //重設 temp (l1.head), 此時 temp1 表 merged list 的 head
		temp2.next = null; //將 temp2 歸零 (下一輪又是一個新的 dummy node)
	}

	return temp1;
};
// @lc code=end
