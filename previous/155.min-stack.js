/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function () {
	this.stack = [];
	this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val);
	let lastMin;
	if (this.minStack.length == 0) lastMin = val;
	else lastMin = this.minStack[this.minStack.length - 1];

	val = Math.min(val, lastMin);
	this.minStack.push(val);
	return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	this.minStack.pop();
	return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
