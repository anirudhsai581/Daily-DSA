 function minWindow(s, t) {
        //your code goes here

        let n=s.length;let m=t.length;let count=0;let startIdx=0;
        let minLen=Infinity;
        let  hash = new Array(256).fill(0);
           for(let j=0;j<m;j++){
            hash[t.charCodeAt(j)]++;
           };
           
        for(let i=0;i<n;i++){
            count=0;
           let currentHash=hash.slice();
           for(let j=i;j<n;j++){
            if(currentHash[s.charCodeAt(j)]>0){
                count++;
                currentHash[s.charCodeAt(j)]--;
            }
            if(count==m){
                if(j-i+1<minLen){
                    minLen=j-i+1;
                    startIdx=i;
                break;
            }
                }
                
           }
        }
        if(minLen==Infinity){
            return '';
        }

        let end=startIdx+minLen;
       
        return s.slice(startIdx,end);
    }

let s='ADOBECODEBANC'
let t='ABC'
    console.log(minWindow(s,t))