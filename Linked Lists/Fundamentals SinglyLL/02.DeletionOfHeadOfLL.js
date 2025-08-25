/*
Given the head of a singly linked list, delete the head of the linked list and return the head of the modified list.
The head is the first node of the linked list.
Input: head -> 1 -> 2 -> 3
Output: head -> 2 -> 3
Input: head -> 1
Output: head
Input: head -> 7 -> 8
Output:head -> 8
Constraints:
1 <= number of nodes in the Linked List <= 1000
0 <= ListNode.val <= 100
*/

//Definiton of singly Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

//optimal: directly assining head to it next ,so start of head is shifted , and also the older node will be garbage collected
// so we dont need to explictily free memory by deleting node like in CPP: let temp=head;delete temp; or free(temp).
//T.C is O(1) S.C is O(1).

class Solution {
  deleteHead(head) {
    //if list is null head.next -> null.next will give runtime error so we have to handle it explicitly
    if (head == null) {
      return null;
    }
    head = head.next;
    return head;
  }
}
