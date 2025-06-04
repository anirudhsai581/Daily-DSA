/*
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



    * 
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *


Print the pattern in the function given to you.

*/






let n=10;
/*
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
    for(let i=1;i<n+1;i++){
        for(let j=1;j<i;j++){
            process.stdout.write(' ');
        }
        for(let j=1;j<=(2*n-2*i+1);j++){
            process.stdout.write('*');
        }
        console.log();
      }
        */

      //the above code takes lot of time as printing each using process.stdout is costly interms of time
      //instead we can use string manipultaions to print all of these at once

      
    for(let i=1;i<n+1;i++){

        const spaces = ' '.repeat(n-i);
        const stars ='*'.repeat(2*i-1);
        console.log(spaces + stars);
    }

    for(let i=1;i<n+1;i++){
        
        const spaces=' '.repeat(i-1)
        const stars= '*'.repeat(2*(n-i)+1);
        console.log(spaces+stars);
      }

