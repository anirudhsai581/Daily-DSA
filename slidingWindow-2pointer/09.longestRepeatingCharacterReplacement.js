/*
Given an integer k and a string s, any character in the string can be selected and changed to any other uppercase English character. This operation can be performed up to k times. After completing these steps, return the length of the longest substring that contains the same letter.
input : s = "BAABAABBBAAA" , k = 2
Output : 6
Input : s = "AABABBA" , k = 1
Output : 4
Constraints:
1 <= s.length <= 105
0 <= k <= s.length
s contains only English uppercase letters.
*/



//iterating over three loops , first through all elements then loop x will generate all substrings starting with i ,we need loop k because the repeating alphabet can be anything of the substring not only first alphabet ,so one more loop we take possibility of repeating alphabet to be anyone of the string.

// we can have O(n*n) brute force if we use a hash map and considering the point sizeofsubstring -maxfreq should be less than equal to count

function BruteForceCharacterReplacement(s, k) {
  //your code goes here
  let n = s.length; let alp; let maxLen = 0

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      alp = s[j]; let count = k;
      for (let x = i; x < n; x++) {
        if (s[x] == alp) {
          maxLen = Math.max(maxLen, x - i + 1)
        }
        else if (count > 0) {
          count--;
          maxLen = Math.max(maxLen, x - i + 1)
        }
        else {
          break;
        }

      }
    }
  }
  return maxLen;
}


//sliding window technique 

function BetterCharacterReplacement(s, k) {
 
 
      //your code goes here

      let n = s.length; let maxLen = 0;
      let l = 0; let r = 0;
      let hash = new Array(26).fill(0);
      let maxFreq = 0;
     

      while (r < n) {
        hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;
        maxFreq = Math.max(maxFreq, hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]);

        while ((r - l + 1) - maxFreq > k) {
          hash[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
          
          // we recalcualte the max freq again by making it 0 and looping through all the current hashmap after decrement the frequency of the removed element 
          maxFreq = 0;

          for (let i = 0; i < (26); i++) {
            maxFreq = Math.max(maxFreq, hash[i]);
          }
          l = l + 1;
        }
        //check if window is valid with this while loop after that we can update max length by making it valid.
        maxLen = Math.max(maxLen, (r - l + 1));
        r++;
      }
      return maxLen;
    }
 

//calculating the max frequency is not necessary as we are checking if size-maxfreq < k ,since we are substracting maxfreq from size , decreasing the max freq will not be useful to us any way if we want to find better than current max length then our size should be bigger than current, that will happen if and only if our max frequenecy is greater than current so we dont need to decrease it (even tho decreased value is correct) we can just check it with current value 

function OptimisedCharacterReplacement(s, k) {

  //your code goes here

  let n = s.length; let maxLen = 0;
  let l = 0; let r = 0;
  let hash = new Array(26).fill(0);
  let maxFreq = 0;
  let count = k;

  while (r < n) {

    hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;
    maxFreq = Math.max(maxFreq, hash[s.charCodeAt(r) - 'A'.charCodeAt(0)]);
// also while loop is not necessary , decreasing one character is enough as we are already at some size and max length would be that so we have to find a size bigger than current , so we will keep this size constant(increased r and decreased l by one will keep the next window size as current window size and dont go down further) and then check further
    if ((r - l + 1) - maxFreq > count) {
      hash[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
      l = l + 1;

    }
    //check if window is valid with this while loop after that we can update max length by making it valid.
    maxLen = Math.max(maxLen, (r - l + 1));
    r++;
  }
  return maxLen;
}
let s='AABABBA' ;let k=1;
console.log(BruteForceCharacterReplacement(s,k));
console.log(BetterCharacterReplacement(s,k));
console.log(OptimisedCharacterReplacement(s,k));