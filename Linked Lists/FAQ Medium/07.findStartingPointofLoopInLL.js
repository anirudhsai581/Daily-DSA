/* Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists. Return
the starting node if a loop exists; otherwise, return null.

A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally,
pos denotes the index (0-based) of the node from where the loop starts.

Note that pos is not passed as a parameter. 
Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1

Output(value of the returned node is displayed): 2

Explaination: The tail of the linked list connects to the node at 1st index.
Input: head -> 6 -> 3 -> 7, pos = 0
Output:
6
Constraints:
0 <= number of nodes in the cycle <= 10**5
0 <= ListNode.val <= 104
pos is -1 or a valid index in the linked list*/
/* class Solution {
  findStartingPoint(head) {
    brute force: 
    return this.detectLoop(head);
  }
  detectLoop(head) {
    let map = new Map();
    let curr = head;
    while (curr != null) {
      if (map.has(curr)) {
        return curr;
      }
      map.set(curr,1);
      curr=curr.next
    }
    return curr;
  }
}
 */
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Solution {
  findStartingPoint(head) {
    //Time Complexity:O(n)- as overall slow will move n times , S.C is O(1)
    //optimal using fast and slow pointers
    /* distance from head to when slow entered loop(starting point) is L1 then distance of the slow(when at starting point) to fast
is also L1 (as fast moved twice of slow) now distance between fast and slow lets take 'd' so the cycle length will be "L1+d" now d
has to be reduced to 0 when slow meets fast ,at every iteration d reduced by 1 they meet after d iterations, slow travels by 1 in
each iteration this means from starting point slow travelled d length to get to meeting point(fast==slow) that means now the
distance between starting point and meeting point is d, total loop length is L1+d as seen before now the distance between fast/slow
and starting point will be L1 so if we take one of them and place at head and move each one step then after L1 distace both will
meet at starting point (so the starting point will be where they meet now ) */
    if (!head || !head.next) {
      return null;
    }
    let node = this.detectloop(head);
    if (node != null) {
      let fast = head,
        slow = node;
      while (fast != slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    } else {
      return null;
    }
  }
  detectloop(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast == slow) {
        return slow;
      }
    }
    return null;
  }
}

// Create a sample linked list with a loop
let node1 = new ListNode(1);
let node2 = new ListNode(2);
node1.next = node2;
let node3 = new ListNode(3);
node2.next = node3;
let node4 = new ListNode(4);
node3.next = node4;
let node5 = new ListNode(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;

// Set the head of the linked list
let head = node1;

// Create an instance of the Solution class
const solution = new Solution();

// Detect the loop in the linked list
let loopStartNode = solution.findStartingPoint(head);

if (loopStartNode) {
  console.log(
    "Loop detected. Starting node of the loop is:",
    loopStartNode.val
  );
} else {
  console.log("No loop detected in the linked list.");
}
