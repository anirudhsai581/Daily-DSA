/*
You are given a string s. Return true if the string is palindrome, otherwise false. A string is called palindrome
 if it reads the same forward and backward.
 Input : s = "hannah" Output : true
 Input : s = "aabbaaa" Output : false
 Constraints:
1 <= s.length <= 105
s consist of only uppercase and lowercase English characters.
//better: use an extra string store the reverse in it by reversing the string and check if both are equal.
//optimal: two pointer approach , low as start and high as end and reduce each by one once its valid if not return
Time Complexity: O(n/2)=>O(n), as if its palindrome we have to traverse whole string reducing 2 each time total ~~n/2
iterations. S.C is O(1).
this is the most optimal in terms of time and space, we can use single iteration from 1 to n  and check first
and last that is indirectly same as two pointers, and one more is to use recursion and pass on low and high 
in to the recursion and check each time if they are same and call for low-1 and high-1 next time this will have 
space complexity is O(n/2)=>O(n) and T.C is O(n/2)=>O(n) as call stack will be making n/2 calls.
 */
//  



function palindromeCheck(s) {
        //solved on own
        let n=s.length;
        let low=0;let high=n-1;
        while(low<=high){
            if(s[low]==s[high]){
                low=low+1;high=high-1;
            }
            else{
                return false;
            }
        }
        return true;
    }

    let s = "hannah";
    let s2="abcdebca";
    console.log(palindromeCheck(s));
    console.log(palindromeCheck(s2));
