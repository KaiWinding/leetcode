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
var swapPairs = function(head) {
	if (!head || !head.next) return head

	const temp = head

	head = head.next
	temp.next = head.next
	head.next = temp

	let pre = head, cur = head.next.next
	let isEven = false

	while (cur && cur.next) {
		isEven = !isEven
		cur = cur.next
		pre = pre.next

		if (cur && isEven) {
			const temp = pre.next

			pre.next = cur
			temp.next = cur.next
			cur.next = temp
			cur = cur.next
		}
	}

	return head
}
