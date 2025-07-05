 function maxScore(cardScore, k) {
        //your code goes here
        let n=cardScore.length;
        let l=k-1 ; let r=n-1;
        
        let sum=0;
         for(let i=0;i<k;i++){
            sum+=cardScore[i];
         }
         let max=sum;
     while(l>-1){
         sum=sum-cardScore[l];
         sum=sum+cardScore[r];
         max=Math.max(sum,max);
         l--,r--
     }
     return max;
    }
    let cardScore=[1, 2, 3, 4, 5, 6];
    let k=3;
    console.log(maxScore(cardScore,k))