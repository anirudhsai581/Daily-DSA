/*

iven a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string)
 that is a substring of the given string s.
The number returned should not have leading zero's. But the given input string may have leading zero.
 (If no odd number is found, then return empty string.)
 Input : s = "5347" Output : "5347"
Input : s = "0214638" Output : "21463"
Constraints:
1 <= s.length <= 10**3
'0' <= s[i] <= '9'
//optimal: we are first checking index from end where its odd till that if we take from starting its largest odd,
also we dont want leading zeroes so we first check were non zero number is starting and store its index
then we return string including  both the indexes
T.C is O(n), S.C is O(n) aux space used is O(1) but if we consider string returned in worst case it will be O(n).
*/
function largeOddNum(s) {
        //solved on own
        let n=s.length;let idx2=-1;let idx1=0;
        for(let i=n-1;i>=0;i--){
            if(s[i]%2==1){
              idx2=i;
              break;
            }
        }
        if(idx2==-1){return ''};
        while((idx1<=idx2)&&(s[idx1]==='0')){idx1++};
       return s.slice(idx1,idx2+1);
    }