/* Given the head of a singly Linked List, return the middle node of the Linked List.
If the Linked List has an even number of nodes, return the second middle one.
Input: head -> 3 -> 8 -> 7 -> 1 -> 3
Output(value at returned node): 7
Explanation: There are 5 nodes, so the middle node is the 3rd Node, with value 7.
Input: head -> 2 -> 9 -> 1 -> 4 -> 0 -> 4
Output(value at returned node): 4
Constraints:
1 <= number of Nodes in the Linked List <= 10**5
-10**4 <= ListNode.val <= 10**4
 */

/*
Brute: find the count by traversing the array once then find the middle index based on even or odd ,actually if we take floor of count/2 and then add1
it will be the middle required for both odd and even as per question (2nd middle for even).
T.C is O(n+n/2), S.C is O(1).
/*Definition for Singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

//odd: 1 2 3 4 5 middle =floor (5/2) +1; 123456 middle ->floor of (6/2) +1
class Solution {// 123null
    middleOfLinkedList(head) {
        let count=0;let curr=head;
        while(curr!=null){
            curr=curr.next;count++;
        }
        curr=head;let index=Math.floor(count/2)+1;
        count=1;
        while(curr!=null){
           if(count===index){
            return curr;
           }
           curr=curr.next;count++;
        }
        
    }
}
*/
//optimal:T.C O(n/2) as fast pointer only traverses half the nodes , S.C is O(1). Using two pointers fast and slow moving fast two steps but slow one step

//Definition for Singly Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

//odd: 1 2 3 4 5 middle =floor (5/2) +1; 123456 middle ->floor of (6/2) +1

/*1 2 3 4 5 null
slow=1 fast=1 
slow=2 fast=3
slow=3 fast=5
when fast.next=null return slow  //odd case

//1 2 3 4 5 6 null
slow=1 fast=1 
slow=2 fast =3
slow=3 fast =5
slow=4 fast =null return slow // evem case 

*/
class Solution {
  middleOfLinkedList(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

// Utility Function to print the linked list
function printLinkedList(head) {
  let temp = head;

  // Traverse the linked list and print each node's value
  while (temp !== null) {
    process.stdout.write(temp.val + " ");
    temp = temp.next;
  }
  console.log();
}

// Creating a simple linked list
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Creating an object of Solution class
let sol = new Solution();

// Function call to get the middle node of linked list
let middleNode = sol.middleOfLinkedList(head);

printLinkedList(head);
console.log("The middle node is:", middleNode.val);
