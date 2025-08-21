

/*

*/
//BruteForce: we multiply x each time and reduce the n by one till n becomes 0 . As we have a call stack for recursion with n number of calls, if n is 10**9 we will have call stack size of that much and that will result in stackoverflow/runtime errors directly in online platforms.so this is not a good solution at all. 
// S.C is O(n), T.C is O(n) each recursive call does O(1) and n recursive calls hence O(n) this is each for posPower and negPower as we only execute one based on n ,we will have one O(n).
   function brutemyPow(x, n) {
         //your code goes here
         function posPower(x,n){
            if(n==0){
                return 1;
                    }
         return x*posPower(x,n-1);
            }
            function negPower(x,n){
                if(n==0){
                return 1;
                    }           
                return (1/x)*negPower(x,n+1);
            }
         if(n>0){
           return  posPower(x,n);            
         }else{
            return negPower(x,n);
         }
    }
    console.log(brutemyPow(5,50));
    console.log(brutemyPow(2,10));

//Optimal: we know that (a**m)*(a**n)=(a**(m+n)), so if Given N can be broken down in to sum of values and if we find the given number power those value and multiply them then we will have the same result.This is the first idea. Then we also know that any number can be written as sum of powers of 2 using  their binary represenation.Like 27 =16+8+2+1, as 27 in binary is 11011.
// so x**27 will be (x**16)*(x**8)*(x**0)*(x**2)*(x**1). As we know x, x**2 is x*x and then squaring that gives x**4 and squaring that gives x**8 ....so we come from right end whenever bit is 1 we multiply x then as we notice if next bit is also 1 we multiply by x**2 so every time we move to next bit we are multiplying with square of previous x .when bit is 1 we dont multiply x,rather x**0 but x has to be squared in this step too.
//so iterary version of optimal code will be :
/*
 let result = 1;
    let exp = Math.abs(n);

    while (exp > 0) {
        if (exp % 2 === 1) {  // if last bit is 1
            result *= x;
        }
        x *= x;        // square the base
        exp = Math.floor(exp / 2); // shift right in binary
    }

    return n >= 0 ? result : 1 / result;
}
*/
//recursive version:
//T.C is O(logn) as instead if multiplying n times we are now performing only logn multiplications, as binary digits is logn , we are reducing n to n/2 each step so logn.
//S.C is O(logn) as these number of call stack calls are required , also this is a non-tail recursion.
function myPow(x, n) {
         //solved on own with theory knowledge on iterative approach reducing power into binary exponentation form logic
         if(n<0) {
            return 1/myPow(x,-n);
         }
         if(n==0){
            return 1;
         }
         let half=myPow(x,Math.floor(n/2));
         if(n%2==0){
            return half*half;
         }
         else{
           return  half*half*x;
         }
    }
    console.log(myPow(5,50));
    console.log(myPow(2,10));
