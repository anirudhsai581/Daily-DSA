 function isPalindrome(n) {
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
     let rev= reverseNumber(n);
    if(n===rev){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome(1221));