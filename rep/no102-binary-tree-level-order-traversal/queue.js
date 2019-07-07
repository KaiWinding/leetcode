/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) return []

	const tree  = [[root]], output = [[root.val]]

	while (tree[tree.length - 1].length > 0) {
		const len = tree.length
		tree.push([])
		output.push([])

		for (let i = 0; i < tree[len - 1].length; i++) {
			if (tree[len - 1][i].left) {
				tree[len].push(tree[len - 1][i].left)
				output[len].push(tree[len - 1][i].left.val)
			}
			if (tree[len - 1][i].right) {
				tree[len].push(tree[len - 1][i].right)
				output[len].push(tree[len - 1][i].right.val)
			}
		}
	}

	output.pop()

	return output
}
