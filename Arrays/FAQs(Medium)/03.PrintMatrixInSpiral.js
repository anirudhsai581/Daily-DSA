/*
Given an M * N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the 
order of their appearance when printed in a spiral manner.
Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]] Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5
Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]] Output: [1, 2, 3, 4, 8, 7, 6, 5]
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
*/
//only one optimal way to solve this, implementation type problem , we can slightly change our code but approach will
//ultimately be printing these in this order traversing in multiple loops.
//T.C is O(m*n), S.C is O(1)// as ans array is not considered which is O(m*n);
function spiralOrder(matrix) {
    
      //mistake i did first did not recognise pattern of rectangles was trying to find
      //pattern in how m and n are decreasing , manipulating m,n in loops was big blunder
      //always take extra variables,once i saw hint to use rectangle ,I have taken only two extra variables
      // so was unable to handle  changes for subsequent rectangles .once second hint of 4 variables ,able to solve quickly
      //then was failing for an edge case based on knowing my output and expected output for
      //that testcase was able to figure out when top==bottom we have single row in this we are going left to right
      //and again RTL creating duplicates, and viceversa case for left==right, introduced breaks to solve.
      //Keypoints: Use more and sufficient extra variables to handle more cases easily. 
      //check for edge cases without looking testcase which failed (imp for interviews)

      /*
      to properly do this instead of checking left==right and bottom ==top and break we can make 
      top++ after top row is done ,right -- after right column is done, bottom -- or bottom row is done
      and left++ after left column is done, this way we dont need to handle when they become
      equal cases and in loop too we can dont need to start with top+1,right-1 etc .

      */
  
      let m=matrix.length; let n=matrix[0].length;
     let res =[];
     let top=0;let left=0;let right=n-1;let bottom=m-1;
     
     while((top<=bottom)&&(left<=right)) {
        for(let i=top;i<=right;i++){
          res.push(matrix[top][i]);
        }
        if(top==bottom){
          break;
        }
        for(let i=top+1;i<=bottom;i++){
          res.push(matrix[i][right])
        }
        if(left==right){
          break;
        }
        for(let i=right-1;i>=left;i--){
           res.push(matrix[bottom][i])
        }
        for(let i=bottom-1;i>top;i--){
          res.push(matrix[i][left]);
        }
        top++;left++;right--;bottom--;
    }
     
     return res;
    }
let matrix= [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
console.log(spiralOrder(matrix));//[1,2,3,6,9,8,7,4,5];