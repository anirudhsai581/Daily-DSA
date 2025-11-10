function  GCD(n1, n2) {
        if(n2==0){
            return n1;
        }
       return  this.GCD(n2,n1%n2);
    }