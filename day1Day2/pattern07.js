/*
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Triangle.

Example:
Input: ‘N’ = 3

Output: 

  *
 ***
*****
*/
let n=3;

for(let i=1;i<n+1;i++){
    // process.stdout.write('a');
    for(let j=0;j<n-i;j++){
        process.stdout.write(' ');
    }
     for(let j=0;j<(2*i-1);j++){
        process.stdout.write('*');
    }
     for(let j=0;j<n-i;j++){
        process.stdout.write(' ');
    }
    console.log();
}