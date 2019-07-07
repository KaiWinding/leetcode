/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
	if (preorder.length === 0) return null

	let root = new TreeNode('head')

	const fn = (node, order) => {
		if (order.length > 0 && preorder.length > 0) {
			node.val = preorder.shift()
		} else return

		let index = order.indexOf(node.val)

		if (index > 0) {
			node.left = new TreeNode('')
			fn(node.left, order.slice(0, index))
		}
		if (index < order.length - 1) {
			node.right = new TreeNode('')
			fn(node.right, order.slice(index + 1))
		}
	}

	fn(root, inorder)

	return root
}
