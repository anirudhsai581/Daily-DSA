/* Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of
the number, with the 1st node containing the leftmost digit of the number and so on. Check whether the linked list values form a
palindrome or not. Return true if it forms a palindrome, otherwise, return false.
A palindrome is a sequence that reads the same forward and backwards. 
nput: head -> 3 -> 7 -> 5 -> 7 -> 3
Output: true
Explanation: 37573 is a palindrome.
Input: head -> 1 -> 1 -> 2 -> 1
Output: false
Explanation: 1121 is not a palindrome.
Constraints:
1 <= number of nodes in the Linked List <= 10**5
0 <= ListNode.val <= 9
The number represented does not contain any leading zeroes.
*/
/*

//Bad + better : This is not actually O(n) solution as we are concatenating string every time in since in JS string are immutable it creates a new
string every time so in worst case this can be O(n**2) , so instead of this if we stored in array and used two pointer , then it woukd have
been time compllexity of O(n+n/2), S.C is O(n)

    isPalindrome(head) {
     let str1="";
     let curr=head;
     while(curr!=null){
        str1+=curr.val;
        curr=curr.next;
     }
     let start=0 ,end=str1.length-1;
     while(start<end){
        if(str1[start]!=str1[end]){
            return false;
        }
        start++;end--;
     }
     return true;
    }

*/
/*Optimal : to use O(1) space and best time complexity is O(n/2) to find middle O(n/2) to reverse second half O(n/2) to comapre both halfs
total T.C is O(n) and S.C is O(1)
note: after reversing like for odd case: 1->2->3->4->5 slow will be at 3(middle) then reversing 5->4->3->null so the reverse will return 
second half head now which is 5, when we compare we start with firsthalf head (1) then second half head (5) 1-5 compared next 2-4 next 3-3
note in first half 2 is still pointing to node 3. we didnot change that link.its absolutely fine that there can be multiple nodes pointing to 
same node like here both 2 and 4 are pointing to 3.

*/
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  isPalindrome(head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let secondHalf = this.reverseLL(slow);
    let firstHalf = head;
    while (secondHalf != null) {
      if (firstHalf.val != secondHalf.val) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    return true;
  }
  reverseLL(curr) {
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
