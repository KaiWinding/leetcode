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
var addTwoNumbers = function(l1, l2) {
	let curL1 = l1, curL2 = l2, carry = 0
	const newNode = new ListNode('head')

	while (curL1 || curL2) {
		if (!curL1) {
			addToTail(newNode, (curL2.val + carry) % 10)
			carry = curL2.val + carry >= 10 ? 1 : 0
			curL2 = curL2.next
		} else if (!curL2) {
			addToTail(newNode, (curL1.val + carry) % 10)
			carry = curL1.val + carry >= 10 ? 1 : 0
			curL1 = curL1.next
		} else {
			addToTail(newNode, (curL1.val + curL2.val + carry) % 10)
			carry = curL1.val + curL2.val + carry >= 10 ? 1 : 0
			curL1 = curL1.next
			curL2 = curL2.next
		}
	}

	if (carry > 0) addToTail(newNode, 1)

	return newNode.next
}

function addToTail(nodeList, val) {
	let curNode = nodeList

	while (curNode.next) {
		curNode = curNode.next
	}

	curNode.next = new ListNode(val)
}