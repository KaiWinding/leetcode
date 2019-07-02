/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	if (!head || !head.next) return head

	let len = 1, curNode = head, tailNode

	while (curNode.next) {
		len++
		curNode = curNode.next
	}
	tailNode = curNode
	curNode.next = head

	let count = len - (k % len)

	while (count > 0) {
		head = head.next
		tailNode = tailNode.next

		count--
	}

	tailNode.next = null
	
	return head
}
