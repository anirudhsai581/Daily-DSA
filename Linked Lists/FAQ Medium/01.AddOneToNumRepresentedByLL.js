/* Given the head of a singly linked list representing a positive integer number. Each node of the linked list represents a digit of 4
the number, with the 1st node containing the leftmost digit of the number and so on. The task is to add one to the value represented by
 the linked list and return the head of a linked list containing the final value.
The number will contain no leading zeroes except when the value represented is zero itself. 
Input: head -> 1 -> 2 -> 3
Output: head -> 1 -> 2 -> 4
Input: head -> 9 -> 9
Output: head -> 1 -> 0 -> 0
Input: head -> 9
Output:head -> 1 -> 0
Constraints:
0 <= number of nodes in the Linked List <= 105
0 <= ListNode.val <= 9
No leading zeroes in the value represented.
*/
/*
Optimal:iterative: T.C O(3n) i.e O(n)  S.C is O(1)
//solved completely on own both iterative and recursive
we have to add 1 from tail and if any carry add it to next. since we have to add from end .we first rev linked list and iterate again adding 1
from start if at end we still have carry ,we first reverse the LL again and add that carry as head to this.and return this new node as head.
in second iteration we can return early if carry is 0 at anypoint no need to change remaining numbers.

//Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
    addOne(head) {
        let revhead=this.revLL(head);
        let curr=revhead;let carry=0;
        let x=1;
        while(curr!=null){
             x += (curr.val+carry);
             carry=Math.floor(x/10);
             curr.val=x%10;
             curr=curr.next;
             x=0;    
        }
        head=this.revLL(revhead);
        if(carry){
            let newHead=new ListNode(carry);
            newHead.next=head;
             return newHead;
        }
        

        return head;
    }
    revLL(head){
        let curr=head; let prev=null;
        while(curr!=null){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        return prev;
    }
}

*/

/*
recursive : no need of reversing single traversal we utilise backtracking to add carry and first recusrively reach tail and from their return
carry in each turn and add it to curr val and find carry and return .at last carry will be retrned if its not 0 we create node with value 1 and 
add it as head and return this .
T.C is O(n),S.C is O(n) as we must call till tail and then comeback.
//solved on own completely


*/
//Definition of singly linked list:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  addOne(head) {
    function FindAddCarry(curr) {
      if (!curr) {
        return 1;
      }
      let x = FindAddCarry(curr.next);
      x = x + curr.val;
      curr.val = x % 10;
      return Math.floor(x / 10);
    }
    let carry = FindAddCarry(head);
    if (carry) {
      let node = new ListNode(carry);
      node.next = head;
      return node;
    }
    return head;
  }
}

// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  // Traverse the linked list and print each node's value
  while (temp !== null) {
    process.stdout.write(temp.val + " ");
    temp = temp.next;
  }
  console.log();
}

// Create a linked list with values 9, 9, 9 (999 + 1 = 1000)
let head = new ListNode(9);
head.next = new ListNode(9);
head.next.next = new ListNode(9);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Add one to the linked list
const solution = new Solution();
head = solution.addOne(head);

// Print the modified linked list
console.log("Linked List after adding one: ");
printLinkedList(head);
