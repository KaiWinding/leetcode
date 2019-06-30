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
	if (!l1) return l2
	if (!l2) return l1

	let currentL1 = l1, currentL2 = l2
	const newNodeList = new ListNode('head')

	while (currentL1 || currentL2) {
		if (!currentL1 || (currentL2 && currentL1.val > currentL2.val)) {
			addToTail(newNodeList, currentL2.val)
			currentL2 = currentL2.next
		} else {
			addToTail(newNodeList, currentL1.val)
			currentL1 = currentL1.next
		}
	}

	return newNodeList.next
}

function addToTail(nodeList, val) {
	let curretnNode = nodeList

	while (curretnNode.next) {
		curretnNode = curretnNode.next
	}

	curretnNode.next = new ListNode(val)
}
