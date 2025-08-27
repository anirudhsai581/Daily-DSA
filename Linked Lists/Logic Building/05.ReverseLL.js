/*
Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.
Input: head -> 1 -> 2 -> 3 -> 4 -> 5

Output: head -> 5 -> 4 -> 3 -> 2 -> 1
Input: head -> 6 -> 8

Output: head -> 8 -> 6
Constraints:
0 <= number of nodes in the Linked List <= 105
0 <= ListNode.val <= 104

*/
//optimal iterative: store a prev node initiated with null, then curr starts from head and iterates till last element each time we store next of curr
//inside a temp node and change link of curr.next to point towards prev and we move curr to its next by making curr=temp;
//T.C is O(n) S.C is O(1)
//solved on own
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  reverseList(head) {
    let curr = head;
    let prev = null;
    while (curr != null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }
}
/*
optimal:recursive:Tail recursion:
T.C is O(n) S.C is O(n) (recursive call stack)
class Solution {
    reverseList(head) {
         let curr=head;
       function  recRev(curr,prev){
            if(curr==null){return prev };
            let temp=curr.next;
            curr.next=prev
           return recRev(temp,curr)
        }
       
        return recRev(curr,null);
        
    }
}

//head recursion T.C is O(n) S.C is O(n)
Interesting case here is Head Recursion which maybe asked more in interview to test backtracking
 reverseList(head) {
        function revList(head){
            if(!head ||!head.next) {return head}
            let newHead=revList(head.next); // suppose 1->2->3 when at last node backtracking starts
//revList(3) returns 3 which we store in newhead and return everytime
             head.next.next=head;//now we will be at 3 should point to 2, so we target 3 by head.next then we 
            //(head.next).next that means 3.next  should be head which is 2, 2.next.next=2;
              head.next=null;//so we made previous node point to this in before step,here we will make current node to point
              //to null 
            return newHead;//we return the tail in all backtracks passing on to first call and making sure this is returned at last
        }
        return revList(head)
    }
*/
// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.val + " ");
    temp = temp.next;
  }
  console.log();
}

// Create a linked list with
// Values 1, 3, 2, and 4
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(4);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Solution instance
const solution = new Solution();
// Reverse the linked list
head = solution.reverseList(head);

// Print the reversed linked list
console.log("Reversed Linked List: ");
printLinkedList(head);
