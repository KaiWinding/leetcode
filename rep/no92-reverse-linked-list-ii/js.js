/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	const newNodeList = new ListNode('head')
	let curNode = newNodeList
	let tailNode

	const fn = (i, node) => {
		if (i < m) {
			curNode.next = new ListNode(node.val)
			curNode = curNode.next
		}

		if (i === n) {
			tailNode = node.next

			curNode.next = new ListNode(node.val)
			curNode = curNode.next

			return
		}

		if (node.next) {
			fn(i + 1, node.next)
		}

		if (i >= m) {
			curNode.next = new ListNode(node.val)
			curNode = curNode.next
		}
	}

	fn(1, head)

	curNode.next = tailNode

	return newNodeList.next
}
