import Node from "./binary_tree.js";

/**
 * binary tree DFS implement using queue (JS list)
 * * 註: list 與 queue 在 Time Complexity 還是有差異
 * @param {Node} node
 * @returns
 */
function bfs(node) {
	const result = [];
	if (!node) return result;

	const queue = [node];

	while (queue.length > 0) {
		let n = queue.shift();
		result.push(n.val);

		if (n.left) queue.push(n.left);
		if (n.right) queue.push(n.right);
	}
	return result;
}

const tree = Node.getExampleTree();
console.log("bfs", bfs(tree));
