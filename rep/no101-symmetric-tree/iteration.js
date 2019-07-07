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

	const leftStack = [], rightStack = []
	let curLeft = root.left, curRight = root.right

	while ((curLeft || curRight) || leftStack.length > 0) {
		while (curLeft || curRight) {
			if ((!curLeft && curRight) || (curLeft && !curRight)) return false
			if (curLeft.val !== curRight.val) return false

			leftStack.push(curLeft)
			rightStack.push(curRight)
			curLeft = curLeft.left
			curRight = curRight.right
		}

		if (leftStack.length > 0) {
			curLeft = leftStack.pop()
			curRight = rightStack.pop()

			curLeft = curLeft.right
			curRight = curRight.left
		}
	}

	return true
}
