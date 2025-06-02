/*
Sam is planting trees on the upper half region (separated by the left diagonal) of the square shared field.
For every value of ‘N’, print the field if the trees are represented by ‘*’.
Example:
Input: ‘N’ = 3
Output: 
* * *
* *
*

*/




let n=5;
for(let i=n;i>0;i--){
    for(let j=0;j<i;j++){
        process.stdout.write('* ');
    }
    console.log()
}