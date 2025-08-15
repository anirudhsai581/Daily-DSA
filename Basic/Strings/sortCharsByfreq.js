/*
You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
If two or more characters have same frequency then arrange them in alphabetic order.
Input : s = "tree" Output : ['e', 'r', 't' ]
Explanation : The occurrences of each character are as shown below :
e --> 2
r --> 1
t --> 1.
The r and t have same occurrences , so we arrange them by alphabetic order.
Constraints:
1 <= s.length <= 10**5
s consist of only lowercase English characters.
*/


//optimal : the following is optimal ,inline comments added , basically store freq in to array ,then new array 
// which is array of arrays where each element has an array of [char and freq] and now we sort by freq if freq same
//sort by alphabetical order.
//T.C is O(n + k log k) where n is the length of the string and k is the constant 26 for the alphabet
//S.C is The space complexity is O(k), where k is the constant 26 for the frequency array.

function frequencySort(s) {
        //idea came to store freq and to sort but did nt know how to sort (as we lose index and thereby cannot back track to char)
        //then from chatgpt got to know we have to use one more array with array of arrays char and freq mapped
        //then later got introduced to new sorting "local compare" on basis of some condition
        let n=s.length;let res=[];
        let freqArr = new Array(26).fill(0);
        for(let i=0;i<n;i++){
            freqArr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        }
        //we stored freq of all chars as we know only 26 lowercase letters
        //better to use hash array than hash map as it will do slightly more
        //time for hash lookups.

        //once we got frequencies we then store a new array of Arrays
        //where each index has an array of [char,freq]
        let charFreqPairs = [];
         for (let i = 0; i < 26; i++) {
            if (freqArr[i] > 0) {
                charFreqPairs.push([String.fromCharCode(i + 'a'.charCodeAt(0)), freqArr[i]]);
            }
         }
         //instead of 'a'.charCodeAt(0) we can simply replace it with  97 its ascii
       
       // now we need to sort based on frequencies we could have simply accessed freq 
    //   let say each element is a then a[1] represents freq and a[0] the corresponding character
    //so we would have passed sort a function like .sort((a[1],b[1])=>b[1]-a[1]) for descending

    //but when freq are same we need to sort them alphabetically so when a[1]==b[1] we mention special condition
    //a[0].localeCompare(b[0]) //This compares characters alphabetically.
     //'a'.localeCompare('b') → -1 (means 'a' comes before 'b').
      charFreqPairs.sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    //to extract only characters 
     return charFreqPairs.map(pair => pair[0]);
    }
console.log(frequencySort("bbccddaaa"))
