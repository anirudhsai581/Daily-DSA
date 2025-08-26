/*
Given the head of a singly linked list and an integer k, delete the kth node of the linked list and return the head
 of the modified list.
Input: head -> 3 -> 4 -> 5, k = 2 Output: head -> 3 -> 5
Input: head -> 1 -> 2 -> 3, k = 1 Output: head -> 2 -> 3
Input: head -> 7 -> 7 -> 7, k = 3 Output:head -> 7 -> 7
Constraints:
n == number of nodes in the Linked list
1 <= n <= 1000
0 <= ListNode.val <= 100
1 <= k <= n
*/

//Definiton of singly Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
/*
traverse till the k-1 element ,once at that element to delete kth element i.e next element we have to do curr.next=curr.next.next
as long as k goes till n , no need to worry if k was n we stop at k-1 so curr.next.next is null so no issues if k goes beyond 'n'
it means we reach our loop condition curr.next==null so come out of loop and we can simply check if our curr.next is null if not we can
do curr.next=curr.next.next
T.C is O(min(k,n) S.C is O(1) note : we have solved for k beyond n ,so this T.C else its O(k)*/
//IN REVISION just do curr.next!=null instead of the whole , (count == k - 1 && curr.next != null),currently this becoz to know
//how we encountered corner cases due to doing just count==k-1 earlier.

class Solution {
  deleteKthNode(head, k) {
    let count = 1;
    let curr = head;
    if (head == null) {
      return null;
    }
    if (k == 1) {
      head = curr.next;
      return head;
    }

    while (curr.next != null) {
      if (count == k - 1) {
        break;
      }
      curr = curr.next;
      count++;
    }
    //if k was anything in between 1 to n count will be k-1 as we break at that point
    //else k will be >n, so in this problem constraint k will be 1-n but the below
    //check handles K beyond n too.
    //if we had just count==k-1 in below check we will end up taking k=n+1 case also as loop breaks
    //when n is at last(curr.next==null) and count will have k-1 then to avoid this we have
    //&& curr.next!= null actually this condition alone already checks count==k-1 too.
    if (count == k - 1 && curr.next != null) {
      curr.next = curr.next.next;
      return head;
    } else {
      return head;
    } //if k is given beyond n(no.of nodes) we can simply return
  }
}
