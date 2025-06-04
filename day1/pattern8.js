/*
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the Reverse N-Star Triangle.
Example:
Input: ‘N’ = 3
Output: 

*****
 ***
  *


*/

let n=5;
for(let i=1;i<n+1;i++){
        for(let j=1;j<i;j++){
            process.stdout.write(' ');
        }
        for(let j=1;j<=(2*n-2*i+1);j++){
            process.stdout.write('*');
        }
        console.log();
      }