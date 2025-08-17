/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all
 the original letters exactly once.
Input : s = "anagram" , t = "nagaram" Output : true
Input : s = "dog" , t = "cat" Output : false
Constraints:
1 <= s.length , t.length <= 5*104
s and t consist of only lowercase English letters
Bruteforce: check if same lengths and then  sort the strings and compare each letter once diff return false; 
T.C is for split :O(n),for join:O(n) for sort:O(nlogn) for traversal O(n) overall :O(n);
S.C is O(1).
function anagramStrings(s, t) {
        //solved on own bruteforce approach +optimal idea 
        if(s.length!=t.length){return false};
        s=s.split("").sort().join("");
        t=t.split("").sort().join("");

        let n=s.length;
        
        for(let i=0;i<n;i++){
            if(s[i]!=t[i]){
                return false;
            }
        }
        return true;
    }

Optimal : use anything to store the hash of all the first string then reduce the string in second iteration for second 
string characters parallely check if its 0 if not reduce once for each char in second string since we already eliminated unequal lengths
if we are able to reduce 1 each time and still not found anything with freq 0 after all chars then return true;
Time Complexity:O(n)+O(n) to iterate both string chars so O(n) overall
Space Complexity : in general O(k) (for k unique chars) here its always lowercase english alphabets so 26 always 
so its O(1).
*/
function anagramStrings(s, t) {
        //solved on own bruteforce approach +optimal idea 
        // we can use object or hasharray or hashmap for this
        //lets do with object
        let hash= {};
        if(s.length!=t.length){return false};
        for(let ch of s){
            
            hash[ch]=(hash[ch]||0)+1;
        }
        for(let ch of t){
            if(!hash[ch]){return false};
            hash[ch]--;
        }
        return true;
    }



