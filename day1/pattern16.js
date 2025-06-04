
let n=5;

   let code=65;
    let a='A';
for(let i=0;i<n;i++){
    let str='';
    for(let j=0;j<i+1;j++){
         str+=`${a}`;    
    }
    console.log(str);
    code++;
    a=String.fromCharCode(code); 
}

