/*
Given an integer n, return the first n (1-Indexed) rows of Pascal's triangle.
In Pascal's triangle:
The first row has one element with a value of 1.
Each row has one more element in it than its previous row.
The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.
Input: n = 4 Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
1st Row has its value set to 1.
All other cells take their value as the sum of the values directly above them
Input: n = 5 Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
Explanation: The Pascal's Triangle is as follows:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1st Row has its value set to 1.
All other cells take their value as the sum of the values directly above them
Constraints:
1 <= n <= 30
All values will fit inside a 32-bit integer.
*/


//both the below method 1 and method 2 solutions works in T.C is O(n**2) and S.C  O(n**2) (to store  ans ).
  //one is in conitnuation to our pascalsII where each row generation is done
  //other is we generate whole pascal triangle from first row like DP.
function generateRow(r) {
    //c==r
    let res = [1]; //if r=6 ,6 columns(1 based indexing)
    for (let c = 2; c <= r; c++) {
      res[c - 1] = (res[c - 2] * (r - (c - 1))) / (c - 1);
    }
    return res;
  }
  
function  method1PascalTriangleIII(n) {
    let ans = [];
    for(let i=1;i<=n;i++){
        ans.push(generateRow(i));
    }
    return ans;
}

function  Method2PascalTriangleIII(n) {
    
        let r=n;
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
        return  triangle;
}
console.log(method1PascalTriangleIII(6));
console.log(Method2PascalTriangleIII(6));