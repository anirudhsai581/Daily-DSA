/*
Given the head of a singly Linked List. Traverse the entire Linked List and return its elements in an array in the
 order of their appearance.
 Input: head -> 5 -> 4 -> 3 -> 1 -> 0 Output: [5, 4, 3, 1, 0]
 Input: head -> 1 Output: [1]
 Input: head -> 0 -> 2 -> 5 Output:[0, 2, 5]
 Constraints:
0 <= number of nodes in the Linked List <= 10**5
0 <= ListNode.val <= 10**4
*/

//Definition of singly linked list:

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

//optimal:Traversing node by node , untill reaching null.
// T.C is O(n) where n is no.of nodes in LL, S.C is O(1)
function LLTraversal(head) {
  let arr = [];
  let temp = head;
  while (temp !== null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  return arr;
}

//Manual creation of nodes
let y1 = new ListNode(2);
let y2 = new ListNode(5);
let y3 = new ListNode(8);
let y4 = new ListNode(7);

//Linking the nodes
y1.next = y2;
y2.next = y3;
y3.next = y4;

// Calling LLTraversal function to get the values
let result = LLTraversal(y1);

console.log("Linked List Values:");
for (let val of result) {
  console.log(val + " ");
}
