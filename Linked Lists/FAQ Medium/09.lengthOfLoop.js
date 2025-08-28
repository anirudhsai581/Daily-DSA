/* Given the head of a singly linked list, find the length of the loop in the linked list if it exists. Return the length of the
loop if it exists; otherwise, return 0.

A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer. Internally,
pos is used to denote the index (0-based) of the node from where the loop starts.

Note that pos is not passed as a parameter. 
Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1

Output: 4

Explanation: 2 -> 3 -> 4 -> 5 - >2, length of loop = 4.
Input: head -> 1 -> 3 -> 7 -> 4, pos = -1

Output: 0

Explanation: No loop is present in the linked list.
Input: head -> 6 -> 3 -> 7, pos = 0

Output:3
Constraints:
0 <= number of nodes in the cycle <= 10**5
0 <= ListNode.val <= 10**4
pos is -1 or a valid index in the linked list
*/
/* //brute: hashmap;T.C is O(n) S.C is O(n).
        let map=new Map();
        if(!head||!head.next){return 0}
        let curr=head;let index=1;
        while(curr!=null){
            if(map.has(curr)){
                return index-map.get(curr);
            }
            map.set(curr,index);index++;
            curr=curr.next;
        }
        return 0; */
//optimal: use our loop detection using floyd logic and slow fast pointers, then once we identify the node they meet we can travel the
//loop counting till when it reaches again . T.C is O(n) we travel whole loop once and a bit extra inside (starting point to point where they meet)
//S.C is O(1)
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Solution {
  findLengthOfLoop(head) {
    let temp = this.detectloop(head);
    if (temp == 0) {
      return 0;
    }
    let curr = temp.next,
      count = 1;
    while (curr != temp) {
      curr = curr.next;
      count++;
    }
    return count;
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
    return 0;
  }
}

// Create a sample linked list with a loop
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);
const fifth = new ListNode(5);

// Create a loop from fifth to second
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = second;

const solution = new Solution();
const loopLength = solution.findLengthOfLoop(head);
if (loopLength > 0) {
  console.log("Length of the loop:", loopLength);
} else {
  console.log("No loop found in the linked list.");
}
