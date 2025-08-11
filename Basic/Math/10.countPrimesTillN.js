
function primeUptoN(n) {
        let count=0;
       let isPrime = Array(n+1).fill(true);
       for(let i=2;i<=n;i++){
        if(isPrime[i]){
            count++;
            for(let j=i*i;j<=n;j=j+i){
                isPrime[j]=false;
            }
        }
       }
       return count;
    }
