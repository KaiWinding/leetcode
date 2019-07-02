/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if (!head || !head.next) return false

	let firstNode = head.next, secondNode = head

	while (firstNode.next && firstNode.next.next) {
		if (firstNode.next === secondNode.next || firstNode.next.next === secondNode.next) {
			return true
		} else {
			secondNode = secondNode.next
			firstNode = firstNode.next.next
		}
	}

	return false
}
