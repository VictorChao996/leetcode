import Node from "./binary_tree.js";

/**
 * binary tree DFS implement using stack (JS list)
 * * 註: list 與 queue 在 Time Complexity 還是有差異
 * @param {Node} node
 * @returns
 */
function dfs(node) {
	const result = [];
	if (!node) return result;
	const stack = [node];

	while (stack.length > 0) {
		let n = stack.pop();
		result.push(n.val);

		//Note: 因為 stack 的特性, 所以加入的時候順序要反過來
		if (n.right) stack.push(n.right);
		if (n.left) stack.push(n.left);
	}
	return result;
}

function dfs_recurrisive(node) {
	if (!node) return [];

	const result2 = [];
	function traverse(node) {
		result2.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}

	traverse(node);
	return result2;
}

const tree = Node.getExampleTree();
console.log("dfs_iterative", dfs(tree));
console.log("dfs_recurrisive", dfs_recurrisive(tree));
