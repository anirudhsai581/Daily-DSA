/* Given a string s, return true if the string is palindrome, otherwise false.
A string is called palindrome if it reads the same forward and backward. 
Input : s = "hannah"
Output : true
input : s = "aabbaaa"
Output : false
Constraints:
1 <= s.length <= 10**3
s consist of only uppercase and lowercase English characters.

*/
class Solution {
  palindromeCheck(s) {
    //solved on own in revision
    let start = 0;
    let end = s.length - 1;
    function check(s, start, end) {
      if (start > end) {
        return true;
      }
      if (s[start] !== s[end]) {
        return false;
      }
      return check(s, start + 1, end - 1);
    }
    return check(s, start, end);
  }
}
   const solution = new Solution();
    console.log(solution.palindromeCheck("hannah"));  // Output: true
    console.log(solution.palindromeCheck("aabbaaa"));  // Output: false
    console.log(solution.palindromeCheck("aba"));      // Output: true

