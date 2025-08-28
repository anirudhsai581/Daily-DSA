/* Given the head of a singly linked list. Return true if a loop exists in the linked list or return false.

A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.

Internally, pos is used to denote the index(0-based) of the node from where the loop starts. Note that pos is not passed as a
parameter. 
Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
Output: true
Explanation: The tail of the linked list connects to the node at 1st index.
Input: head -> 1 -> 3 -> 7 -> 4, pos = -1
Output: false
Explanation: No loop is present in the linked list.
Input: head -> 6 -> 3 -> 7, pos = 0
Output:true
Constraints:
0 <= number of nodes in the cycle <= 105
0 <= ListNode.val <= 104
pos is -1 or a valid index in the linked list
*/
/* brute : using a map and finding if any node is repeated , if we reach null without any repeated node then it doesnot have the cycle
T.C is O(n),S.C is O(n)
class Solution {
    hasCycle(head) {
        let map=new Map();
        let curr=head;
        while(curr!=null){
            if(map.has(curr)){
                return true;
            }
            map.set(curr,1);
            curr=curr.next;
        }
       return false;
    }
} */
/*Optimal: Using fast and slow pointers(also called tortoise and hare algo), start both start and slow at head ,move fast by 2 positions slow by 1 position
//there diff is 2 everytime ,when both of them are part of the loop ,like when slow also enters the loop from that moment fast will be
travelling towards slow .this means fast moves 2times towards slow and slow moves one time away there diff reduces by 1 (-2 +1=>-1)
so they will eventually meet . so we find out if they meet then we have a cycle .
T.C is O(n) S.C is O(1).
*/
//initially tried reversing linked list but we will end up in loop wont work. then with hint of slow fast pointers somehow intutively
//though fast will cross slow (as fast moving 1step more than slow in loop)at one point fast.next will be slow that worked , it worked because
//the actual logic discussed above diff is one this also results in them being equal and one more step the slow will be next to fast.sometimes
//this may happen before them meeting but majority times they meet first then we can see slow crosses fast.
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Solution {
  hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }
}
// Main function to test the Solution
function main() {
  // Create a sample linked list
  // with a loop for testing

  let head = new ListNode(1);
  let second = new ListNode(2);
  let third = new ListNode(3);
  let fourth = new ListNode(4);
  let fifth = new ListNode(5);

  head.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;
  // Create a loop
  fifth.next = third;

  // Create an instance of the Solution class
  let solution = new Solution();

  // Check if there is a loop
  // in the linked list
  if (solution.hasCycle(head)) {
    console.log("Loop detected in the linked list.");
  } else {
    console.log("No loop detected in the linked list.");
  }
}

// Call the main function to execute the test
main();
