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
	if (!head) return head

	let curNode = head, pre = head.val

	while (curNode.next) {
		if (pre === curNode.next.val) {
			curNode.next = curNode.next.next
		} else {
			pre = curNode.next.val
			curNode = curNode.next
		}
	}

	return curNode
}