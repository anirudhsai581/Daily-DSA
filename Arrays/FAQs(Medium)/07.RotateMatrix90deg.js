 /*
Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.
The rotation must be done in place, meaning the input 2D matrix must be modified directly.
Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]
Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
Input: matrix = [[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]
Output: matrix = [[5, 4, 2, 0], [6, 5, 0, 1], [7, 0, 3, 1], [0, 5, 1, 2]]
Constraints:
n == matrix.length.
n == matrix[i].length.
1 <= n <= 100.
-104 <= matrix[i][j] <= 104


Brute force: take extra matrix of equal space , 2d arrays . we cannot access 2d arrays without initialising all the array with arrays 
we cannot use Array(n).fill([]) because here same array reference is given to all indices one update will make all of them update.
the best way is to use Array.from like below code
Time complexity O(n**2) space complexity :O(n**2) we have to do this in inplace so in optimal version should be O(1).
 */
 
 
 
 function rotateMatrix(matrix) {
    let n = matrix.length;

    let ans = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        ans[j][n - 1 - i] = matrix[i][j];
      }
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            matrix[i][j]=ans[i][j];
        }
    }
    return matrix;

  }
  let matrix1=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(rotateMatrix(matrix1));

  /*
Optimal:Time complexity is O(n**2) , S.C is O(1). //inplace 
1. easiest pattern is recognising if we transpose matrix and reverse each row then its our answer
2.layer pattern:
other way if we observe there is one more pattern (other than transpose) each corner is swapped with next corner, like topleft to topright to bottomright to bottomleft 
if we write down all pairs from each column top to down then we can see the above corner pattern extension to all elements ,cycle 4 rotation
matrix[r][c] → ans[c][n-1-r] this we know by observation even we solved in bruteforce method extension of this and cyclic 4 rotation is the key for the next
pattern :(i, j) → (j, n-1-i) → (n-1-i, n-1-j) → (n-1-j, i) → back to (i, j)

A square matrix can be seen as concentric square rings:
Outer ring (first row, last column, last row, first column).
Inner ring (second row to second-last row), etc.


i → Which layer we are in.
Goes from 0 to n/2 - 1 because after half the size, you’d just be repeating swaps.
j → Which element in that layer’s row we are rotating.
Starts at i (left boundary of layer).
Ends at n - i - 1 (right boundary of layer).
We stop before the last element because that’s the corner already handled when we rotate the group of 4.

for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      // save top
      let temp = matrix[i][j];

      // left -> top
      matrix[i][j] = matrix[n - 1 - j][i];

      // bottom -> left
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];

      // right -> bottom
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];

      // top -> right
      matrix[j][n - 1 - i] = temp;
    }
  }
  */
function  OptimalRotateMatrix(matrix) {
  //solved code on own after knowing from discussion tab about transpose+row reverse idea
  //if we swap all i,j  ended up with original matrix ,then got the idea to  only swap when i<j .
        let n=matrix[0].length;
        //transpose of matrix , if we dont swap only for i<j array will be backto
        //original matrix only
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(i<j){
                 [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
                }
                
            }
        }
        //after transpose if each row is rotated then thats our output 90 degree rotation
        for(let i=0;i<n;i++){
             matrix[i].reverse();
        }
    return matrix;
  }
  let matrix2=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(OptimalRotateMatrix(matrix2));