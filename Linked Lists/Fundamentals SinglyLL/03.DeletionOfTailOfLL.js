/*
Given the head of a singly linked list, delete the tail of the linked list and return the head of the modified list.
The tail is the last node of the linked list.
Input: head -> 1 -> 2 -> 3
Output: head -> 1 -> 2s
Input: head -> 1
Output: head
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
//Optimal: if first node is null or only single node exist then return null else traverse till second last element
//T.C is O(n),S.C is O(1).
class Solution {
  deleteTail(head) {
    if (head == null || head.next == null) {
      return null;
    }
    let curr = head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
    return head;
  }
}

//below code to create linked list with testcase and then delete using this method

// Function to print the linked list
function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " ");
    current = current.next;
  }
  console.log();
}

// Function to insert a new node at the beginning of the linked list
function insertAtHead(head, data) {
  let newNode = new ListNode(data);
  newNode.next = head;
  return newNode;
}

// Main function
let head = null;
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);

console.log("Original list: ");
printList(head);

// Creating an instance of Solution class
let sol = new Solution();

// Function call to delete the tail node
head = sol.deleteTail(head);

console.log("List after deleting tail: ");
printList(head);
