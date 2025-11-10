function LCM(n1, n2) {
          function GCD(n1 ,n2){
             if(n2===0){
                return n1;
             }
             return GCD(n2,n1%n2);
          }
          return n1*n2/GCD(n1,n2);
    }