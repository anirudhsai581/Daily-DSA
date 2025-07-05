/*
Given a string, S. Find the length of the longest substring without repeating characters.
Examples:Input : S = "abcddabac"  Output : 4
Input : S = "aaabbbccc"    Output : 2
1 <= S.length <= 5*104
S contains only English lowercase letters.

*/
//brute force : we generate all the substrings and check for the max length, we maintain a hash array of size 256(meant for any type of char in string tho here only lowercase eng letters)
//we iterate in the innerloop from i to end with starting char as i , which will be first char initially and then we find all the substrings starting with it , whenever we encounter a repeat char we start finding substrings starting with next character,this way we cover all substrings and parallely find the max length after each char is added to the substring.
//after every inner iteration we reinitiate has map as we need to rember new occurences.similarly substring is intiated to empty


/* ***this code contains a mistake but still works because of js nature of treating arrays as objects 

when we are accesing hash array with hash[s[j]] this is wrong as s[j] is char like 'b' etc we are not accessing the ascii value of b and storing in that index , instead we are treating array as object and key instead of j now will be s[j], and everytime we are accesing the value of s[j] so logic wise this may work here but this is complete wrong way of using array storing. so we need to use  " hash[s.charCodeAt(j)]"  to store at index of the characters ascii value , this is must for optimal approach logic there we have used it correctly.

 */

let s ="abcddabac"
function BrutelongetSubstringNoRepeat(s) {
        //your code goes here
        let n =s.length;
        let sub='';let max=0;
    
       for(let i=0;i<n;i++){
            sub='';
      let hash =new Array(256).fill(0);
        for(let j=i;j<n;j++){
          if(hash[s[j]]==1){
            break;
          }
          sub+=s[j];
          max=Math.max(sub.length,max);
          hash[s[j]]=1;
        }
       }
       return max;
    }


// console.log(BrutelongetSubstringNoRepeat(s));

// optimal approach is , whenever we encounter a repeat char we remove l from the window 

function optimalLongestSubstringNoRepeat(s){
     let n=s.length;
        let l=0;let r=0; let maxLen=0;
        let hash = new Array(256).fill(-1);
        while(r<n){
          if(s.charCodeAt(r)!=-1){
            // we are basically updating to l to next index of where we found repeating character, the logic we are using is by checking if hash index of that char is not -1, suppose we have already crossed that element and updated its index in hash, also now we have moved l ahead and we have different window, and we found some characted which has its index already updated from initital -1 but our window is already ahead of it (we moved ahead due to encounter of some other repeat char)since  our l is already crossed that element and ahead we wont update with that elements next index as l now. we will retain the current l
            // this can also be written as  if((s.charCodeAt(r)!=-1)&& >=l)
            l=Math.max(hash[s.charCodeAt(r)]+1,l);
          }
          
          maxLen=Math.max(maxLen,r-l+1);
          hash[s.charCodeAt(r)]=r;
          r++;
        }
       return maxLen;
    }

console.log(optimalLongestSubstringNoRepeat(s));
