/* Each lemonade at a booth sells for $5. Consumers are lining up to place individual orders, following the billing order. Every consumer
 will purchase a single lemonade and may pay with a $5, $10, or $20 bill. Each customer must receive the appropriate change so that the net 
 transaction is $5. Initially, there is no change available.
Determine if it is possible to provide the correct change to every customer. Return true if the correct change can be given to every customer, and false otherwise.
Given an integer array bills, where bills[i] is the bill the ith customer pays, return true if the correct change can be given to every customer, and false otherwise. 

Input : bills = [5, 5, 10, 5, 20]
Output : true
Input : bills = [5, 5, 10, 10, 20]
Output : false


*/
/* Logic is we have to check if change can be returned to each customer in the given order, if there are 5's as cost of lemonade is 5 no need of change.
if its 10 there is only one way return one five and increase one ten at us, if its 20 we have two ways either return three 5's or return a
one 5 and one 10, here we have to greedily choose least 5's returned as 5 is lesser value so future transactions can be possible like if a 10 comes 
we can return 5 , so we first check if we can return a 10+5 if not we check for 5+5+5.
T.C is O(n) traversing the given array 
S.C is O(1) Aux space as we just need two variables to keep track of 5 and 10 count 
Greedypoint: we try to give change using larger denominations so that lesser denominations can be saved more for later as its needed more than 10 later */

class Solution {
  lemonadeChange(bills) {
    const n = bills.length;
    let five = 0,
      ten = 0;
    for (let i = 0; i < n; i++) {
      if (bills[i] === 5) {
        five++;
      } else if (bills[i] === 10) {
        if (five > 0) {
          five--;
          ten++;
        } else {
          return false;
        }
      } else if (bills[i] === 20) {
        if (ten > 0 && five > 0) {
          ten--;
          five--;
        } else if (five > 2) {
          five -= 3;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
// Example usage
const bills = [5, 5, 5, 10, 20];
console.log("Queues of customers: " + bills.join(" "));
const solution = new Solution();
const ans = solution.lemonadeChange(bills);
if (ans) console.log("It is possible to provide change for all customers.");
else console.log("It is not possible to provide change for all customers.");
