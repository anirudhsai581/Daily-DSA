function isPrime(n) {
          //your code goes here
          if(n==1){
            return false;
          }
          for(let i=2;i*i<=n;i++){
            if(n%i==0){
                return false;
            }
          }
          return true;
    }
    console.log(isPrime(11)); // true
    console.log(isPrime(4));  // false                                  