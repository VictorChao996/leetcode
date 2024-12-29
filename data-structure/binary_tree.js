/**
 * Binary Tree Node
 * @class
 * @param {Number} value
 */
export default class Node {
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
	//Note: return an sample binary tree
	/**
	 * Return An Sample Binary Tree (3 level)
	 * @returns {Node} root
	 */
	static getExampleTree() {
		const root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		root.right.left = new Node(6);
		root.right.right = new Node(7);

		return root;
	}
}
