function isArmstrong(n) {
  
       function  countDigit(n) {
                let count=0;
                if(n==0){
                    return 1;
                }
        while(n>=1){
            count++;
            n=n/10;   
        }
        return count;
        } ;

    let k=n;
    let c = countDigit(n);
    let sum=0;
    for(let i=0;i<c;i++){
        sum+=Math.pow(n%10,c);
        n=Math.floor(n/10);
    }
    if(sum==k){
        return true;
    }
    else{
        return false;
    }
    }


   console.log(isArmstrong(153));
    console.log(isArmstrong(370));        
    console.log(isArmstrong(123));        
