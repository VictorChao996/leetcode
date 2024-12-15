/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 * *TODO
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Note:
 * 1. 解法：找出中間點並將其後的 List 做反轉, 再依序建立遍歷兩個 Linked List 建立 new order 即為答案
 * 2. 註1：因為直接用 new node 建立新的 order list, 所以 Space Complexity 為：O(n)
 * 3. 註2: 此題不能直接 override head, 從 printResult 來看有作用, 但是不知為何 result 結果不會套用（估計題目背後的程式擋下來了？）
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head.next) return head;
	let temp1, temp2, temp3, temp4, temp5;
	let midHead = findMidHead(head);
	let newMidHead = reverseList(midHead);
	temp1 = head;

	while (temp1.next && temp1.next != midHead) {
		temp1 = temp1.next;
	}
	temp1.next = null; //切斷 LinkedList

	//head(1)-2
	//newMidHead(4)-3

	temp2 = head;
	temp3 = newMidHead;
	temp4 = new ListNode(0); //dummy node
	temp5 = temp4;
	while (temp2 && temp3) {
		temp5.next = new ListNode(temp2.val);
		temp5.next.next = new ListNode(temp3.val);

		temp2 = temp2.next;
		temp3 = temp3.next;
		temp5 = temp5.next.next;
	}
	if (temp2) {
		temp5.next = temp2;
	} else {
		temp5.next = temp3;
	}
	//註：同等於 head = temp4.next, 但不知為何此題不能直接 override head 的值, 所以必須要這樣寫
	head.next = temp4.next.next;
	return;
};

var reverseList = function (head) {
	let current = null,
		temp1 = null,
		temp2 = head;
	while (temp2) {
		temp1 = temp2;
		temp2 = temp2.next;
		temp1.next = current;
		current = temp1;
	}

	return current;
};

var findMidHead = function (head) {
	let slow = head,
		fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
};
// @lc code=end
