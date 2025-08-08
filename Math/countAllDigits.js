 function countDigit(n) {
        let count=0;
        if(n==0){
            return 1;
        }
   while(n>=1){
     count++;
     n=n/10;
    
   }
   return count;
}
console.log(countDigit(12813));