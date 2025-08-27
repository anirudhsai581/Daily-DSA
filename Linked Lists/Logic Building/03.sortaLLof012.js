/*
Given the head of a singly linked list consisting of only 0, 1 or 2. Sort the given linked list and return the head of the modified list. Do it 
in-place by changing the links between the nodes without creating new nodes.
Input: head -> 1 -> 0 -> 2 -> 0 -> 1
Output: head -> 0 -> 0 -> 1 -> 1 -> 2
Input: head -> 1 -> 1 -> 1 -> 0
Output: head -> 0 -> 1 -> 1 -> 1
Input: head -> 2 -> 2 -> 1 -> 2
Output:head -> 1 -> 2 -> 2 -> 2
Constraints:
0 <= number of nodes in the Linked List <= 105
0 <= ListNode.val <= 2
*/
//Brute:we can count no.of 0's and 1's and 2's in three iterations (total count-(0's+1's) in two iterations:0's and 1's )then iterating over linked list
//and updating first n nodes as 0  (n=count of 0's) similarly next count of 1's nodes as 1 and remaining as 2.
/*
//solved better on own 
Better: Iterating two times on linkedList once we sort 0's to first by maintaining node pointing to next of last seen zero and swapping the value of 
that with now seen zero and then move to next place of this current stored zero
Iterating two times to sort 0's once and 1's once so T.C is  O(2n)  S.C is O(1).
//Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    sortList(head) {
        let curr=head;let lastzero=head;
        
        while(curr!=null){
        if(curr.val==0){
            let temp=lastzero.val;
            lastzero.val=0;
            curr.val=temp;
            lastzero=lastzero.next; 
        }
        curr=curr.next;
        }
        curr=head;
        while(curr!=null){
        if(curr.val==1){
            let temp=lastzero.val;
            lastzero.val=1;
            curr.val=temp;
            lastzero=lastzero.next; 
        }
        curr=curr.next;
        } 
        return head;
    }
}


*/
//optimal:(got hint of using three pointers by chatgpt) we can simplify it using three pointers initially pointing to three dummy nodes
//T.C is O(n) single iteration, S.C is O(1).
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

//intial mistake did is tracking firstseen values and moving dummy to iterate but we have to keep head constant and we need last values ,also initially
//connected first of zero to firsrone and firstone to first2 which is blunder,also used of lot of nested if else at end to return head and connecting too
//after chatgpt's code fixed the mistakes to effieciently use ternary operator.
//Fix heads(dummy) of each 3 pointers ,for loop iteration start each pointer with head, then iterate.
//to connect ,connect next of zero to ,first 1 which is headof1's next : dummy1.next,similarly  next of one(lastone) to dummy2.next
class Solution {
  sortList(head) {
    let dummy0 = new ListNode(-1);
    let dummy1 = new ListNode(-1);
    let dummy2 = new ListNode(-1);
    let curr = head;
    let zero = dummy0,
      one = dummy1,
      two = dummy2;
    while (curr != null) {
      if (curr.val == 0) {
        zero.next = curr;
        curr = curr.next;
        zero = zero.next;
      } else if (curr.val == 1) {
        one.next = curr;
        curr = curr.next;
        one = one.next;
      } else {
        two.next = curr;
        curr = curr.next;
        two = two.next;
      }
    }
    zero.next = dummy1.next ? dummy1.next : dummy2.next; //if zero itself doesnot exist zero.next will be dummy0.next and we are checking if
    // atleast single one is prsent if neither dummy1.next or dummy2.next exists it means the right will be null, zero.next=null; which is valid
    one.next = dummy2.next; //if dummy2.next doesnt exist last of one will point to null
    two.next = null; //***** VERY IMPORTANT if this is not done the last occured two may be pointing to someother node after it in original data since
    //  its not guaranteed that in original 2 will be the last value of linked list , so if we didnt make this null those values will also be part of our sortedLL end*/
    return dummy0.next || dummy1.next || dummy2.next;
  }
}
