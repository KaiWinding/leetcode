/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	if (!root) return true

	const fn = (f1, f2) => {
		if (!f1 && !f2) return true
		if (!f1 || !f2) return false
		if (f1.val !== f2.val) return false

		return fn(f1.left, f2.right) && fn(f1.right, f2.left)
	}

	return fn(root.left, root.right)
}
