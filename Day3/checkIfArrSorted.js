 //array is sorted if its ascending/increasing/non-decreasing order
 
 function arraySortedOrNot(arr, n) {
      
      for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
          return false;
        }
    }
        return true;
}

console.log(arraySortedOrNot([1, 2, 3, 4, 5], 5)); // true
console.log(arraySortedOrNot([1, 3, 2, 4, 5], 5)); // false
console.log(arraySortedOrNot([1, 2, 3, 4, 5, 6], 6)); // true