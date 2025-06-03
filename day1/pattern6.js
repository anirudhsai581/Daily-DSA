/*
Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the Reverse N-Number Triangle.

Example:
Input: ‘N’ = 3

Output: 

1 2 3
1 2
1


*/

let n=5;
for(let i=n;i>0;i--){
    for(let j=1;j<i+1;j++){
        process.stdout.write(`${j}`);
    }
    console.log();
}