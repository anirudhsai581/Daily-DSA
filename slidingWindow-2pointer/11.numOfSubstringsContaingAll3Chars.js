/*Given a string s , consisting only of characters 'a' , 'b' , 'c'.Find the number of substrings that contain at least one occurrence of all these characters 'a' , 'b' , 'c'.
Input : s = "abcba" Output : 5
Input : s = "ccabcc" Output : 8
Constraints:
1 <= s.length <= 5*104
s consist only of characters 'a' , 'b' , 'c'.
*/
//we have 3 variables for tracking count of a,b,c at each iteration we are traversing all the substrings of the string , at each substring checking if it contains all three chars and it it does increasing the count;
function bruteNumOfSubstringsAll3(s){

        
        let countA=0,countB=0,countC=0,count=0;
        let n=s.length;
        let l=0;let r=0;
        for(let i=0;i<n;i++){
            countA=0;countB=0;countC=0;
            for(let j=i;j<n;j++){
                if(s[j]=='a'){
                    countA++;
                }
                else if(s[j]=='b'){
                    countB++;
                }
                else{
                    countC++;
                }
                if(countA>0&&countB>0&&countC>0){
                    count++;// can be optimised with count+=n-j;
                    //we can make an optimisation here , since we already have abc till this point of j, all subsequent iterations of this i will also have , so we can simply replace count++ with count +=n-j;
                }
                
            }
        }
        return count;
        }

/*
in optimal we iterate through all chars , and check all the valid substrings ending with this character, to find that first find valid substring ending with this character (valid substring is if by the time of this character(including this) all a,b,c must be seen means all last seen>-1, then we find the min of all a,b,c positions in this substring, which ever is low in the last seen from 0 to thatindex all the chars can be added one by one and will be a valid substring, so count+= 1(valid subsgtring min last seen to current index (which is valid) +min(lastseen), like wise we find all the substrings ending with i in loop and then wehenever valid substring ending with i is found then based on last seen array we can find min(all the chars belore this substring can be found with this) and add 1 to that((valid cunt foritself )
*/
        function optimalNumOfSubstringAll3(){
            
        //your code goes here

        let n=s.length;let count=0;
        let lastSeen=[-1,-1,-1];
        for(let i=0;i<n;i++){
            lastSeen[s.charCodeAt(i)-'a'.charCodeAt(0)]=i;
            if(lastSeen[0]>-1&&lastSeen[1]>-1&&lastSeen[2]>-1){
                count+=1+Math.min(lastSeen[0],lastSeen[1],lastSeen[2]);
            }
            
        }
        return count;
    }
        
        let s="abccba";
        console.log(bruteNumOfSubstringsAll3(s));
        console.log(optimalNumOfSubstringAll3(s));


