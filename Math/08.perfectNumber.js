//perfect number if sum of its divisors is itself without including itself in sum
function isPerfect(n) {
        let sum=0;
 for(let i=1;i*i<n;i++){
    if(n%i==0){
        sum+=i;
        sum+=n/i;
    }
 }
    if(sum==n*2){
        return true;
    }
    else{
    return false;
    }
 }
 console.log(isPerfect(6)); // true
 console.log(isPerfect(28)); // true
 console.log(isPerfect(12)); // false