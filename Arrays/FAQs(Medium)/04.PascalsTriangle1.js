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

 
 OPTIMAL Logic (code below this section):        */

/* Logic of ncr in general and for this problem, 
  generally ncr means chose r items from n where order doesnt matter,it means a b c and b c a  and c a b etc are all equal 
  as this is just selection. so whenever we are filling r slots from n items first one we can choose n, next n-1 , next n-2
  like this for r items it is n*(n-1)*(n-2)*(n-3)*(n-4)*....(n-(r-1)), suppose we have to chose 2  from a,b,c,d,e we have 
ab;ba;ac;ad;ae;ca;da;ea;bc;bd;be;cb;db;eb;cd;ce;dc;ec;de;ed total 20, since we know ab is same as ba in selection so we consider similar pairs as equal
so we divide by 2! (r!) to avoid extra counting, like each r items can be of r! arrangements. so now we have (n*(n-1)*(n-2)*....(n-(r-1)))/r!) this is ncr
in similarly in our pascal triangle, think of pascal triangle has a sequence of moves to reach any point from top, Each unique sequence of moves = one unique path.
if we think of pascal triangle as grid coordinates :
Row 1:        (1,1)

Row 2:      (2,1) (2,2)

Row 3:    (3,1) (3,2) (3,3)

Row 4:  (4,1) (4,2) (4,3) (4,4)
and allowed moves are down-left or down-right  similar to how we are generating each number as each number contributing to down-left and down-right
To go from (1,1) yp (4,2) 
Row 1 → Row 4:Total moves = 3
To end at Column 2:You must move right exactly 1 time
The rest must be left  So: Moves = L L R (in some order). we can have R L L , L R L so 3 unique paths, (4,2) will be 3.
this is same as chosing 2 rights (column 2) in a possible path length of n(no.of rows above)   (ncr) is (3c2). which is 3.
since in our problem this is 1 based indexing so we can do n-1 c r-1.also we know that nCr is same as nCn-r, so we can select min one 

    
        */

//Best Optimal:using nCr;
/*pascal triangle at r,c value is basically (r-1)C(c-1)(when 1-based indexing) so 
  to calculate nCr instead of n! /r!*(n-r)! we can observe aftercancallelation its just 
  like in 7C2  => 7*6/2*1 also 7C2 is 7C5 so we if r>n-r we take r=n-r, then
    //time complexity is O(min(k,n-k));k will be column number O(C-1,r-c);
    //in worst case will be when c=r/2; in terms of big O, O(r);
  */
function pascalTriangleI(r, c) {
  function nCr(n, k) {
    //optimal way of calulating nCr instead of computing factorial entirely.
    if (k > n - k) {
      k = n - k;
    }
    let res = 1;
    for (let i = 0; i < k; i++) {
      res = res * (n - i); //for numerator like 7*6
      res = res / (i + 1); //for denominator 1*2
      //we can combine both these like res=res*(n-i)/(i+1); above for readabiity.
    }
    return res;
  }
  return nCr(r - 1, c - 1);
}
console.log(pascalTriangleI(4, 2)); //3
