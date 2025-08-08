function reverseNumber(n) {
        let d=0;
        while(n>9){
         let c=n%10;
       d=d*10+c;
       n=Math.floor(n/10);
        }
        d=d*10+n;
        return d
    }
    console.log(reverseNumber(1234));