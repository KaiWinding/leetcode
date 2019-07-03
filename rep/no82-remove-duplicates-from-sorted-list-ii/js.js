/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	if (!head || !head.next) return head

	let newHead = new ListNode('head')

	newHead.next = head

	let	temp = head.val,
		count = 1
		curNode = newHead.next,
		preNode = newHead

	while (curNode.next) {

		if (temp !== curNode.next.val) {
			temp = curNode.next.val

			if (count === 1) {
				preNode = curNode
			} else {
				preNode.next = curNode.next
			}

			count = 1
		} else {
			count++
		}

		curNode = curNode.next
	}

	if (count > 1) preNode.next = null
	
	return newHead.next
}
