/*
Given the head of a singly linked list and an integer X, delete the node with value X and return the head of 
the modified list.
Input: head -> 3 -> 4 -> 5, X = 5 Output: head -> 3 -> 4
Input: head -> 3 -> 4 -> 5, X = 7 Output: head -> 3 -> 4 -> 5
Input: head -> 3 -> 4 -> 5, X = 3 Output:head -> 4 -> 5
Constraints:
n == number of nodes in the Linked list
1 <= n <= 1000
0 <= ListNode.val <= 100
0 <= X <= 100
Number of nodes with value X is either 0 or 1
*/

//Definiton of singly Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
/*
Optimal:Time Complexity:O(n) if X is not found in the node at most we travel n,S.C is O(1).
Interview Additional qn can be: if head is not accessible , only node with X value is given directly how will you delete
Ans: if given node is not the last node (node.next !=null) then we can overwrite this nodes value with next node value
node.val=node.next.val ;
node.next=node.next.next;// we delete the next element to node but copied its value to current node before deleting
it means curr node X is overwritten with its next node value and points now to next's next node.

*/

class Solution {
  deleteNodeWithValueX(head, X) {
    let curr = head;
    if (head == null) {
      return null;
    }
    if (head.val == X) {
      head = curr.next;
      return head;
    }
    while (curr.next != null) {
      if (curr.next.val == X) {
        curr.next = curr.next.next;
        break;
      }
      curr = curr.next;
    }

    return head;
  }
}
