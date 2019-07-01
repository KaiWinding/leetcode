/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	if (!head) return head

	let listLen
	
	const fn = (index, curNode) => {
		if (curNode.next) {
			fn(index + 1, curNode.next)
			if (listLen - n - 1 === index) {
				curNode.next = curNode.next.next
			}
		} else {
			listLen = index + 1
		}
	}

	fn(0, head)

	return listLen === n
		? head.next
		: head
}
