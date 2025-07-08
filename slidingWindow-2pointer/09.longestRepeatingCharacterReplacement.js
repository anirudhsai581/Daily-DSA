function BruteForceCharacterReplacement(s, k) {
        //your code goes here
        let n=s.length;let alp;let maxLen=0

        for(let i=0;i<n;i++){
          for(let j=i;j<n;j++){
               alp=s[j]; let count=k;
            for(let x=i;x<n;x++){
              if(s[x]==alp){
                maxLen=Math.max(maxLen,x-i+1)
              }
              else if(count>0){
                count--;
                maxLen=Math.max(maxLen,x-i+1)
              }
              else{
                break;
              }
              
              }
            }
          }
          return maxLen;
        }