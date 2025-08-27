/* Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list. Return the head of
 the modified linked list.
The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, where ⌊x⌋ denotes the
 largest integer less than or equal to x.
 Input: head -> 1 -> 2 -> 3 -> 4 -> 5 Output: head -> 1 -> 2 -> 4 -> 5
Explanation: n = 5.
⌊n / 2⌋ + 1 = 3, therefore middle node has index 3 and so the node with value 3 was deleted.
Input: head -> 7 -> 6 -> 5 -> 4 Output: head -> 7 -> 6 -> 4
Expl﻿anation: n = 4.
⌊n / 2⌋ + 1 = 3, therefore middle node has index 3 and so the node with value 5 was deleted.
Constraints:
1 <= number of nodes in the Linked List <= 10**5
0 <= ListNode.val <= 10**4
 */

//brute force , to reach node befor middle we have to travel to floor(n/2) as middle here is floor(N/2)+1, So one iteration find the count
//next iteration find the florr of n/2 node the node.next=node.next.next and we are done.
//T.C is O(n+n/2),S.C is O(1)

//Optimal : Using fast and slow pointers.T.C is O(n/2) S.C is O(1)
//here we need to stop one before middle so to previpus finding middle we can do same and have an extra prev which tracks prev value of slow
//we can do it directly without prev also .by moving fast one iteration skipping slow updation and then rest follow same as finding middle
//this way slow will end up one before middle.

//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  deleteMiddle(head) {
    if (!head || !head.next) {
      return null;
    }
    let fast = head;
    let slow = head;

    fast = fast.next.next;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (!slow || !slow.next) {
      return head;
    }
    slow.next = slow.next.next;
    return head;
  }
}
/*
//my own intial version while this works perfectly we actually dont need to check if condition here we can directly do like above 
rest all same , so we can directly start slow with head.
 if(!head||!head.next){
            return null;
        }
        let fast=head; let slow=null;
        if(fast!=null&&fast.next!=null){
            fast=fast.next.next;
        }
        slow=head;
        while(fast!=null&&fast.next!=null){
            fast=fast.next.next;
            slow=slow.next;
        }
        if(!slow||!slow.next){
            return head;
        }
        slow.next=slow.next.next;
        return head;
    }
*/

// Function to print the linked list
function printLL(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.val + " ");
    temp = temp.next;
  }
  console.log();
}

// Creating a sample linked list:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Display the original linked list
process.stdout.write("Original Linked List: ");
printLL(head);

// Deleting the middle node
const solution = new Solution();
head = solution.deleteMiddle(head);

// Displaying the updated linked list
process.stdout.write("Updated Linked List: ");
printLL(head);
