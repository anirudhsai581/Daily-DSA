 
 let n=1235792;
 function countOddDigit(n) {
        let count=0;
  while(n>9){
    if((n%10)%2==1){
        count++;
    }
    n=Math.floor(n/10);
  }
  if(n%2==1){
     count++;
  }
  return count;
    }
    console.log(countOddDigit(n));