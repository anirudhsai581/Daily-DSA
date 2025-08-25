/*

Given the head of a singly linked list and an integer n. Remove the nth node from the back of the linked List and
 return the head of the modified list. The value of n will always be less than or equal to the number of nodes in 
 the linked list.
Input: head -> 1 -> 2 -> 3 -> 4 -> 5, n = 2
Output: head -> 1 -> 2 -> 3 -> 5
Input: head -> 5 -> 4 -> 3 -> 2 -> 1, n = 5
Output: head -> 4 -> 3 -> 2 -> 1
Input: head -> 5 -> 4 -> 3 -> 2 -> 1, n = 5
Output: head -> 4 -> 3 -> 2 -> 1
Constraints:
1 <= number of nodes in the Linked List <= 10**5
0 <= ListNode.val <= 10**4
1 <= n <= number of nodes in the Linked List.
*/

/*

BruteForce: O(len)+O(len-n) we traverse two times first to find length then we have to travel to n+1th node from end
so that next node can be deleted this is length-nth node (1 based indexing) .so if n was equal to length we cannot travel
length-nth node (which is 0) so that means first node is to be deleted so directly do head =head.next and  return head 

//Definition for Singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
  removeNthFromEnd(head, n) {
    // 1 2 3 4 5 null
    //2nd from end == 4th from start we need to traverse till 3rd from starting to delete its next
    //3rd from start means (length-n);
    let count = 0;
    if (head == null) {
      return null;
    }
    let curr = head;
    while (curr != null) {
      count++;
      curr = curr.next;
    }
    curr = head;
    let res = count - n;
    if (res == 0) {
      head = head.next;
      return head;
    }
    while (curr != null) {
      if (res == 1) {
        break;
      }
      curr = curr.next;
      res = res - 1;
    }
    curr.next = curr.next.next;
    return head;
  }
}
*/

//Definition for Singly Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  removeNthFromEnd(head, n) {
    let second = head;
    let first = head;
    let count = 1;
    if (head == null) {
      return null;
    }
    // 1 2 3 4 5 null
    /*we start moving first pointer till n+1 postions then we start second pointer at head , now after this when first
    reaches null second will be at n+1 th node from end. which means the next node of second is to be deleted.
    if n was equal to length or more than that first would be at null after first loop only 
    in this question scenario our n will be at max length of the LL so we can just return head.next if first reaches
    null after first loop but here we also handled case that even after first reaching null if count was less than n+1
    then that means n was bigger than lentgh of node we cam directly return head without deleting anything.
    */
    while (first != null) {
      if (count == n + 1) {
        break;
      }
      first = first.next;
      count++;
    }
    if (count < n + 1) {
      return head; //(false n which cannot be deleted);
    }
    if (count == n + 1 && first == null) {
      head = head.next;
      return head;
    }
    second = head;
    while (first.next != null) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    return head;
  }
}
//the above can also be done by creating dummy node and also iterating first using for loop, these are to handle
//edge cases easily, lets do this way in free time or revision
// Function to print the linked list
function printLL(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " ");
    current = current.next;
  }
  console.log();
}

const arr = [1, 2, 3, 4, 5];
const N = 3;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);
head.next.next.next = new ListNode(arr[3]);
head.next.next.next.next = new ListNode(arr[4]);

// Solution instance
const solution = new Solution();
head = solution.removeNthFromEnd(head, N);
printLL(head);
