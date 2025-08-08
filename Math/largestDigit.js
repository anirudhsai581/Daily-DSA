function largestDigit(n) {
       let max=0;   
   while(n>9){
    max=Math.max(n%10,max);
    n=(n-n%10)/10;
   }
   max=Math.max(n,max);
   return max;
    }
   console.log(largestDigit(1234864)); 
  