 /*
Given N cards arranged in a row, each card has an associated score denoted by the cardScore array. Choose exactly k cards. In each step, a card can be chosen either from the beginning or the end of the row. The score is the sum of the scores of the chosen cards.
Return the maximum score that can be obtained.
Input : cardScore = [1, 2, 3, 4, 5, 6] , k = 3
Output : 15
Input : cardScore = [5, 4, 1, 8, 7, 1, 3 ] , k = 3
Output : 12
 */
 

/*
This means we need to pick k cards but in each step we can select one from either ends.
we can use constant window size technique, as we always have k elements in window. so the idea is first we add first k elements from left and find its sum. Then from l=k-1 we will start removing an element and move l left immediately adding one from right end .when we remove all left elemenets from sum (we have all k right sum) we have checked all possibilities.
*/
 
 
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