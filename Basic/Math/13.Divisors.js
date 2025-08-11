function divisors(n) {
        let arr =[];
      for(let i=0;i<=n;i++){
        if(n%i==0){
            arr.push(i);
        }
      }
      return arr;
    }
    console.log(divisors(186));