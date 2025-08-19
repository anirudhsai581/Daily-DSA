/* 
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
Input : num = 529 Output : 7 
Explanation : In first iteration the digits sum will be = 5 + 2 + 9 => 16
In second iteration the digits sum will be 1 + 6 => 7.
Now single digit is remaining , so we return it.
Constraints:
0 <= num <= 2**31 - 1
T.C is O(logn) and space Compelxity :O(logn), as each call will have reduced digit, we can also say around O(d),where d is no.of digits
also no.of digits is floor(logn)+1 so O(logn).
*/
class Solution {
  addDigits(num) {
    //your code goes here
    function sumDigits(num) {
      if (num == 0) {
        return 0;
      }
      return (num % 10) + sumDigits(Math.floor(num / 10));
    }
    let k = sumDigits(num);
    while (k > 9) {
      k = sumDigits(k);
    }
    return k;
  }
}
const solution = new Solution();
// Example number
const num = 529;
// Call the addDigits method and print the result
const result = solution.addDigits(num);
console.log("Sum of digits:", result);  //Sum of digits: 7


 function LatestAddDigits(num){
    //solved on own in revision
  function singleSum(num,sum){
        if(num==0){
             if(sum<10){
                return sum;
            }
             else{ return singleSum(sum,0)};
        }
        return singleSum(Math.floor(num/10),sum+num%10);
    }
  return singleSum(num,0);

}
console.log(LatestAddDigits(529));//7