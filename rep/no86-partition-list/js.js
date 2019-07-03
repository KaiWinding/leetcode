/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	const right = new ListNode('head'), left = new ListNode('head')

	let curRight = right, curLeft = left, cur = head

	while (cur) {
		if (cur.val >= x) {
			curRight.next = new ListNode(cur.val)
			curRight = curRight.next
		} else {
			curLeft.next = new ListNode(cur.val)
			curLeft = curLeft.next
		}

		cur = cur.next
	}

	curLeft.next = right.next

	return left.next
}
