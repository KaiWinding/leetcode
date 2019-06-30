/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let newL, currentNode, currentL1 = l1, currentL2 = l2

	if (l1 === null) return l2
	if (l2 === null) return l1

	if (!currentL1 || currentL1.val > currentL2.val && currentL2) {
		newL = currentL2
		currentNode = newL
		currentL2 = currentL2.next
	} else if (!currentL2 || currentL1) {
		newL = currentL1
		currentL1 = currentL1.next
		currentNode = newL
	} else {
		return null
	}

	while (currentL1 || currentL2) {
		if (!currentL1 || (currentL2 && currentL1.val > currentL2.val)) {
			currentNode.next = currentL2
			currentNode = currentNode.next
			currentL2 = currentL2.next
		} else {
			currentNode.next = currentL1
			currentNode = currentNode.next
			currentL1 = currentL1.next
		}
	}

	return newL
}
