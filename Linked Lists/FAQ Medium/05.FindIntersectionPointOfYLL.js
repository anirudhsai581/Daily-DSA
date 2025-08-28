/* Given the heads of two linked lists A and B, containing positive integers. Find the node at which the two linked lists intersect.
If they do intersect, return the node at which the intersection begins, otherwise return null.

The Linked List will not contain any cycles. The linked lists must retain their original structure, given as per the input, after
the function returns.

Note: for custom input, the following parameters are required(your program is not provided with these parameters):

intersectVal - The value of the node where the intersection occurs. This is -1 if there is no intersected node. skipA - The number
of nodes to skip ahead in listA (starting from the head) to get to the intersected node(-1 if no intersection). skipB - The number
of nodes to skip ahead in listB (starting from the head) to get to the intersected node(-1 if no intersection). listA - The first
linked list. listB - The second linked list.
Input: listA: intersectVal = 4, skipA = 3, skipB = 2, head -> 1 -> 2 -> 3 -> 4 -> 5, listB: head -> 7 -> 8 -> 4 -> 5
Output(value at returned node is displayed): 4
      1 → 2 → 3
               \
                → 4 → 5
               /
      7 → 8
Intersection at node with value: 4
Explanation: The two lists have nodes with values 4 and 5 as their tails.

input: listA: intersectVal = -1, skipA = -1, skipB = -1, head -> 1 -> 2 -> 3, listB: head -> 8 -> 9
Output(value at returned node is displayed): null
Explanation: The two lists do not intersect.

Input: listA: intersectVal = 4, skipA = 0, skipB = 0, head -> 4 -> 5 -> 6, listB: head -> 4 -> 5 -> 6

      List A      List B
        ↓           ↓
        └──────→ [4] → [5] → [6]
        Output:4
Constraints:
m == number of nodes in listA.
n == number of nodes in listB.
1 <= m, n <= 5 * 10**4
0 <= ListNode.val <= 10**4
0 <= skipA < m
0 <= skipB < n
intersectVal, skipA, skipB is -1 if listA and listB do not intersect.
intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 */
////******Solved Brute+better+optimal after watching editorial*/
//Brute: using hashmap
//Definition of singly linked list:
/*
class Solution {
    getIntersectionNode(headA, headB) {
        /* Brute: Using a map to store all of one linked list finding the
        first match traversing other //
        let map=new Map();
        let curr=headA;
        while(curr!=null){
            map.set(curr,1);
            curr=curr.next;
        }
        let curr2=headB;
        while(curr2!=null){
            if(map.has(curr2)){
                return curr2;
            }
            curr2=curr2.next;
        }
        return null;
    }
}
*/
/*Better:suppose if they are of same length , then comparing first node in each and second node in each so on... will give us the
intersection node as we are moving them each time to have both at same level if there is intersection it has to be at same level
if not it will break the equal length precondition.so we move the larger next by no,of times of their difference so that now we can parallely compare
both equal level nodes and move them together.
T.C is O(n) -count A+O(m)-count B+O(max(n,m) moving these many steps. Overall T.C is O(n+m).
S.C is O(1).

class Solution {
  getlengthLL(head) {
    let count = 0;
    while (head != null) {
      count++;
      head = head.next;
    }
    return count;
  }
  getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    let currA = headA,
      currB = headB;
    let countA = this.getlengthLL(currA);
    let countB = this.getlengthLL(currB);
    let diff = Math.abs(countA - countB);
    if (countB > countA) {
      while (diff--) currB = currB.next;
    } else {
      while (diff--) currA = currA.next;
    }
    while (currA != null) {
      if (currA === currB) {
        return currA;
      }
      currA = currA.next;
      currB = currB.next;
    }
    return null;
  }
}
*/
//Optimal: Instead of counting ,we have coolest technique:
/* 1 2 3b 4 5 null
       8a 9 3 null
  suppose we have a traversing linkedlistA abd b traversing linkedListb if a and b are not of same length , we move both one step each
  parallely and once a reaches null we make it start at headb once b reaches null we make it start at heada , suppose there was initial
  diff of length as 2 by  making them go to heads of others once they encounter null we are making them at same position in both of the
  linked list from here they will together reach null sametime.
  we are esentially making both of them travel n+m since they are both traveling n+m they will end up with null together after n+m travel
  T.C is O(n+m) ,S.C is O(1)     
       
       
       */

//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  getIntersectionNode(headA, headB) {
    /* 1 2 3b 4 5 null
                 8a 9 3 null*/
    let currA = headA,
      currB = headB;
    if (!headA || !headB) {
      return null;
    }

    while (currA !== currB) {
      currA = currA ? currA.next : headB; //if currA is null then headB
      currB = currB ? currB.next : headA; //if currB is null then headA
    } //While loop will automatically terminate after n+m even if no intersection is found as both of them will end up at null ater n+m.
    return currA;
  }
}
