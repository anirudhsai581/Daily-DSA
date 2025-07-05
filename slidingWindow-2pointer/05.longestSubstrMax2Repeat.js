/*
Longest Substring with At Most Two Distinct Characters
Input: s = "eceba" Output: 3
Input: s = "ccaabbb" Output: 5
Constraints:
1 <= s.length <= 10**5 ,s consists of English letters.
*/

/*
we maintain hash array to store all occurences, we have types variable to track if any newoccurence of char is found then sliding window approach to find max length of window, if the type is increased more than 2 we shrink and in shrink we have a while loop which runs as long as diff>2 and also we are increasing l to right in each cycle and reduce the occurence of element at l untill we find only two diff chars in our window.
since the elements of array can lie between any  chars array is of  256 size for hash array.

*/
function lengthOfLongestSubstringTwoDistinct(){
let n= s.length;
    let hash = new Array(256).fill(0);
    let l=0;let r=0;let diff =0; let maxLen=0;
    while(r<n){
        if(hash[s.charCodeAt(r)]==0){
            diff++;
        }
        hash[s.charCodeAt(r)]++;
        
       
            while(diff>2){
                hash[(s.charCodeAt(l))]--;
                if(hash[s.charCodeAt(l)]==0){
                    diff--;
                }
                 l++;
            }
            
             
        
     maxLen =Math.max(maxLen,r-l+1);
     r++;
    }
    return maxLen;
}

let s='ccaabbb';
console.log(lengthOfLongestSubstringTwoDistinct(s));
