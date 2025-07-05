/*
Given a string s and an integer k.Find the length of the longest substring with at most k distinct characters.
Input : s = "aababbcaacc" , k = 2 Output : 6
input : s = "abcddefg" , k = 3 Output : 4
Constraints:
1 <= s.length <= 10**5
1 <= k <= 26
*/
/*
we maintain hash array to store all occurences, we have types variable to track if any newoccurence of char is found then sliding window approach to find max length of window, if the type is increased more than 'k' we shrink and in shrink we have a while loop which runs as long as diff>k and also we are increasing l to right in each cycle and reduce the occurence of element at l untill we find only 'k' diff chars in our window.
since the elements of array can lie between any  chars array is of  256 size for hash array.


*/

function kDistinctChar(s, k) {
        //your code goes here
        let hash = new Array(256).fill(0);
        let n= s.length;
        let l=0;let r=0;let maxLen=0;
        let diff=0;
        while(r<n){
            if(hash[s.charCodeAt(r)]==0){
                diff++;
            }
            hash[s.charCodeAt(r)]++;

            while(diff>k){
                hash[s.charCodeAt(l)]--;
                if(hash[s.charCodeAt(l)]==0){
                    diff--;
                }
                l++;
            }
            maxLen=Math.max(maxLen,r-l+1);
            r++;
        }
        return maxLen;

    }
let s='abcddefg' ; let k=3;
console.log(kDistinctChar(s,k));