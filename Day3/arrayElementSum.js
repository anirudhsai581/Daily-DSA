
let arr=[1,2,3,4,5];
function sum(arr,n) {
     let ans=0;
     for(let i=0;i<n;i++){
        ans+=arr[i];
     }
     return ans;
    }
    console.log(sum(arr,5));