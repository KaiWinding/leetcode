/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if ((!p && q) || (p && !q)) return false
	if (!p && !q) return true

	const fn = (p, q) => {
		if (p.val !== q.val) return false
		if ((!p.left && q.left) || (p.left && !q.left)) return false
		if ((!p.right && q.right) || (p.right && !q.right)) return false

		return (!p.right ? true : fn(p.right, q.right)) && (!p.left ? true : fn(p.left, q.left))
	}

	return fn(p, q)
}
