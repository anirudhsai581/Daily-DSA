/*
Given an integer r, return all the values in the rth row (1-indexed) in Pascal's Triangle in correct order.
In Pascal's triangle:
The first row has one element with a value of 1.
Each row has one more element in it than its previous row.
The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.
Input: r = 4 Output: [1, 3, 3, 1]
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
....
Thus the 4th row is [1, 3, 3, 1]
Input: r = 5 Output: [1, 4, 6, 4, 1]
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
....
Thus the 5th row is [1, 4, 6, 4, 1]
Input: r = 6 Output:[1, 5, 10, 10, 5, 1]
Constraints:
1 <= r <= 30
All values will fit inside a 32-bit integer.
*/
/*
Brute:
for given row r, we know there will be r elements , if we need to print row 4, we have 4 columns, also by formula we know 
each will be r-1Cc-1, we can compute each element of row with this formula
but the time complexity of finding nCk is O(k), if we had nth row then n elements
so brute force with that formula is 
for(let c=1;c<=n;c++){
console.log(funcNcR(n-1,c-1)) ;    //row is n
} T.C is O(N*r) where n is row number (also equals no.of elements in row) and r is r of ncr Function
*/
/*
Optimal: T.C is O(r).
we are using formula repeatedly for each element in row , that we can optimise if we observe the formula pattern.
suppose pascals 6th row(1 based index) : 1 5 10 10 5 1 
for 1 elements its 1 , for 2nd col using formula we know 5/1 , 3rd 5/1 * (4/2) , 4th is 5/1 * 4/2 *(3/1) 
if we observe each time denominator we multiply by (col-1),numerator by (row-(col-1));and first is 1;
(we could maintain c as 0-based index for more simpler formula below.)
as the loop now runs for r times for given r its O(r).
/earlier(direct formula for each element) its like O(r*r) as each element with formula takes O(r) in worst case.
*/
function pascalTriangleII(r) {
  //c=r
  let res = [1]; //if r=6 ,6 columns(1 based indexing)
  for (let c = 2; c <= r; c++) {
    res[c - 1] = (res[c - 2] * (r - (c - 1))) / (c - 1);
  }
  return res;
}
console.log(pascalTriangleII(6)); //[ 1, 5, 10, 10, 5, 1 ]

/* While loop version of the same pattern:
     suppose for 5th row we can see 1 4 6 4 1 can be found using pattern: 
     1*(4/1) then 4*(3/2) then 6*(2/3) then 4*(1/4) this way we ccan find for any row numerator will start with row number if 1 based indexing 
     then r-1, and will go on till 1, then similarly denominator will start from 1 and go till row number, so r-1 (1based indexing)
     ***Basically the logic is C(r-1, i) = C(r-1, i-1) × (r - i) / i
     T.C is O(r), S.c is O(1)
      pascalTriangleII(r) {
        let ans=[1];
        let num=r-1;let den=1;
        let x=1;
        while(num!=0){
            x=x*num/den; // use x=x*num ; x/=den; if needed , but dont use x*=(num/den;as this will calculate num/den first
            //  which will give float values
            ans.push(x);
            num--;den++;
        }
        return ans;
    }
*/
