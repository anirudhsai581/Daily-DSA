/*
Given two integers r and c, return the value at the rth row and cth column (1-indexed) in a Pascal's Triangle.
In Pascal's triangle:
The first row contains a single element 1.
Each row has one more element than the previous row.
Every row starts and ends with 1.
For all interior elements (i.e., not at the ends), the value at position (r, c) is computed as the sum of the two elements 
directly above it from the previous row:
Pascal[r][c]=Pascal[r−1][c−1]+Pascal[r−1][c]
where indexing is 1-based
Input: r = 4, c = 2 Output: 3
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
....
Thus, value at row 4 and column 2 = 3
input: r = 5, c = 3   Output: 6
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
....
Thus, value at row 5 and column 3 = 6

Constraints:
1 <= r, c <= 30
c <= r
All values will fit inside a 32-bit integer.
*/


//1.Recusrive solution - Bad solution- T.C is 2**r, S.C is 2**r (callstack)
/*
     Not valid solution ,it will work for very small r and c,(<10) etc 
     very bad time complexity (2**r).
      if((r==c)||(c==1)){
        return 1;
       }
       else{
             return this.pascalTriangleI(r-1,c-1)+this.pascalTriangleI(r-1,c);
       }
//except at edges each call splits in to two more calls hence growing exponentially in power 2. recursion will have t.c of 2**r 
// which is not feasible for r of size 30 etc  so we need to iterative apporach for such questions.
*/
//2.Generate Whole pascal triangle like DP, from start and there by check whatever index we want , generating pascal
//triangle is O(n**2),space is O(n**2).
//we can follow either 0 based indexing in our arrays or follow 1 based as pascal triangle in qn is 1-based .
 //1-based indexing solution:
/*
    let triangle =[[]];
    for(let i=1;i<=r;i++){
        let row=[null];
        for(let j=1;j<=i;j++){
            if((j==1)||(j==i)){
                row.push(1);
            }
            else{
                row.push(triangle[i-1][j-1]+triangle[i-1][j])
            }
        }
        triangle.push(row);
    }
    return triangle[r][c];
*/
//0-based indexing solution: pros: no need to store null in 0 index of row and triangle
//just need to access at final given indexes -1 ,like triangle[r-1][c-1];
//easy when printing whole table too
   //this is brute force as we dont really require to have complete triangle .
  //we have a direct formula based for finding value at a position in pascals triangle
/*
        let triangle =[];
        for(let i=0;i<r;i++){
            let row=[];
            for(let j=0;j<=i;j++){
              if(j==0 || j==i){
                row[j]=1;//can also use row.push(1);
              }
              else{
                row[j]=triangle[i-1][j-1]+triangle[i-1][j];
              }
            }
            triangle.push(row);
        }
        return  triangle[r-1][c-1];

        */




//Best Optimal:using nCr;
  /*pascal triangle at r,c value is basically (r-1)C(c-1)(when 1-based indexing) so 
  to calculate nCr instead of n! /r!*(n-r)! we can observe aftercancallelation its just 
  like in 7C2  => 7*6/2*1 also 7C2 is 7C5 so we if r>n-r we take r=n-r, then
    //time complexity is O(min(k,n-k));k will be column number O(C-1,r-c);
    //in worst case will be when c=r/2; in terms of big O, O(r);
  */
function  pascalTriangleI(r, c) {

    function nCr (n,k){ //optimal way of calulating nCr instead of computing factorial entirely.
        if(k>n-k){k=n-k};
        let res=1;
        for(let i=0;i<k;i++){
           res=res*(n-i); //for numerator like 7*6 
           res=res/(i+1);//for denominator 1*2
           //we can combine both these like res=res*(n-i)/(i+1); above for readabiity.
        }
        return res;
    }
    return nCr(r-1,c-1);
 }
console.log(pascalTriangleI(4,2));//3
