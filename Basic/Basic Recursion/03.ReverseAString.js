
/*
Given an input string as an array of characters, write a function that reverses the string.
Input : s = ["h", "e", "l", "l", "o"]
Output : ["o", "l", "l", "e", "h"]
Input : s = ["b", "y", "e" ]
Output : ["e", "y", "b"]
Constraints:
1 <= s.length <= 103
s consist of only lowercase and uppercase English characters.

T.C is O(n) S.C is O(n). n is length of string.
*/
class Solution {
    reverseString(s) {
        //solved on own in revision
        
        let end=s.length-1;
        let start=0;
        function rev(s,start,end){
           if(start>=end){
            return;
        }
        [s[start],s[end]]=[s[end],s[start]];    
        return rev(s,start+1,end-1)
        }
        rev(s,start,end);
           return s;       
    }
}
// Main function to test the solution
const solution = new Solution();
const s = ['h', 'e', 'l', 'l', 'o'];

// Function call to reverse the given string
const reversed_s = solution.reverseString(s);
console.log(reversed_s);//[ 'o', 'l', 'l', 'e', 'h' ]

