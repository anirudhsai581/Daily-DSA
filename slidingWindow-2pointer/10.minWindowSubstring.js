 /*
Given two strings s and t. Find the smallest window substring of s that includes all characters in t (including duplicates) , in the window. Return the empty string "" if no such substring exists.
Input : s = "ADOBECODEBANC" , t = "ABC"
Output : "BANC"
Input : s = "a" , t = "a"  Output : "a"
Input : s = "aAbBDdcC" , t = "Bc"
Output:"BDdc"
Constraints:
1 <= n , m <= 105
n = s.length
m = t.length
string s and t consist of uppercase and lowercase letters.
similar Problems
 */
 //brute force : generate all the substrings , we have the hash array where each character frequency is stored for array t. then we iterate from i=0 to i<n , each time for outerloop we reset the hash array changes(using slice we take the duplicate copy for each i).we iterate over the substring(j=i to j<n), then current j character frequency in hash is more than 0 (which means this element was  present in array t).we decrease the frequency by one and increment count,if count equals m (which means we have counted all the items of array t , so we found the substring matching our condition we update minLen,and store starting index of this substring(later we can return substring based on startidx and its length) once we found our substring startig with this 'i'no need to increase length further(j++) and check ,we can break and move to i++ and repeat) .


 //complexity : O(n**2);
 
 
 function bruteMinWindow(s, t) {
        //your code goes here

        let n=s.length;let m=t.length;let count=0;let startIdx=0;
        let minLen=Infinity;
        let  hash = new Array(256).fill(0);
           for(let j=0;j<m;j++){
            hash[t.charCodeAt(j)]++;
           };
           
        for(let i=0;i<n;i++){
            count=0;
           let currentHash=hash.slice();
           for(let j=i;j<n;j++){
            if(currentHash[s.charCodeAt(j)]>0){
                count++;
                currentHash[s.charCodeAt(j)]--;
            }
            if(count==m){
                if(j-i+1<minLen){
                    minLen=j-i+1;
                    startIdx=i;
                break;
            }
                }
                
           }
        }
        if(minLen==Infinity){
            return '';
        }

        let end=startIdx+minLen;
       
        return s.slice(startIdx,end);
    }
    
//we can use sliding window and do this in single loop, we have l,r , hash array is  created and  all characters frequency of array t is stored,and check loop r<n ;so inside for each r,if the frequency of that in hash array is >0 then count increment(we found char of arrray t) and we reduce the frequency of hash by one (as we found this we decrement this occurence),and we increase window by moving r ahead , once count ===m this means our window found all chars of array t, 
// we update minLen with min of this window size and minLen and we need to store starting index(to return substring at the end);we dont use Math.min(minlen,windowsize) here because we need to store start index only if window size is min we need to have this condition checked and then update startidx, so we place the min updating conditon and startidx both inside if block.
//our current windowis valid window but we want as min size as possible,so once we updated minLen, we will try to shrink the current window,
//we shrink using while loop as long as our count===m (valid window) we can shrink,so current element at l we increase its frequency in hashmap (it can be in negative if previously multiple of these found in our window.),if after increase its greater than 0 that means this char was in t ,which we counted and but now uncounted, so count--;now the condition will break(count===m) now we have decreased window size ,we again increase r and move right and repeat process till r reaches end.

function optimalMinWindow(s,t){

        let n=s.length; let minLen=Infinity;
        let m=t.length; let l=0;let r=0; let count=0; let startIdx=-1;
        let hash =new Array(256).fill(0);
        for(let i=0;i<m;i++){
              hash[t.charCodeAt(i)]++;
        }
        while(r<n){
            if(hash[s.charCodeAt(r)]>0){
                count++;
            }
            hash[s.charCodeAt(r)]--;
        
        while(count==m){
            if((r-l+1)<minLen){
                minLen=(r-l+1);
                startIdx=l;
            }
            
             hash[s.charCodeAt(l)]++;
             if(hash[s.charCodeAt(l)]>0){
                count--;
            }
             l++;
        }
        r++;
        }
         return  startIdx==-1 ? '' : s.slice(startIdx,minLen+startIdx)
    }
  


let s='ADOBECODEBANC'
let t='ABC'
    console.log(bruteMinWindow(s,t));
    console.log(optimalMinWindow(s,t));