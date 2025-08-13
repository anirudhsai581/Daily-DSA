/*
Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. 
The elements in the union must be in ascending order.
The union of two arrays is an array where all values are distinct and are present in either the first array,
the second array, or both.
Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7] Output: [1, 2, 3, 4, 5, 7];
Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8] Output: [1, 3, 4, 5, 6, 7, 8, 9];
Input: nums1 = [3, 4, 4, 4], nums2 = [6, 7, 7] Output:[3, 4, 6, 7]
Constraints:
1 <= nums1.length, nums2.length <= 1000
-10**4 <= nums1[i] , nums2[i] <= 10**4
Both nums1 and nums2 are sorted in non-decreasing order
*/
/*naive: using an set storing both nums1 and nums2 so now we have all unique values , then pushing them to an array
then sorting the array and return. 
T.C is O(n) for num1 to set, O(m) for nums2 to set and O(m+n)(thats worst case usually only unique of (m+n) lets say k ,
so k<=(m+n)) from set to array , array sort at last is O((m+n)log(m+n)),sum of all means O((m+n)log(m+n))
S.C : for set O(n+m),for array O(n+m), overall O(n+m).

function unionArray(nums1, nums2) {
        let result=[];
        let s =new Set();
        for(let num of nums1){
            s.add(num);
        }
        for(let num of nums2){
            s.add(num);
        }
        for(let val of s){
            result.push(val)
        }
        return result.sort((a,b)=>(a-b));
      
    }
*/
/*optimal:have two pointers i,j traverse both the arrays simultaneously whichever is pointer lower add it 
to result array and move that pointer left and if both are equal add one of them and move both pointers.
at every step check if previous element of that respective array is different or not ,if not it means we are at 
a duplicate element and dont add it just move pointer, 
Also as we are using js no need to handle 0 index case when we are check arr[i]!=arr[i-1] because arr[-1] will 
be undefined and this will not be equal anyway.But we shoud still handle for better readibility and proffesionalism.
we will not be able to handle this at start by comparing nums1[0] and nums2[0] because one of them we can find 
comes first but the other may not come now after all the first array elements also it can come(so we have to repeat 
actual process way loops for that also ).so we dont do that way simply add "i===0 ||nums1[i]!=nums1[i-1]" if i==0 
then second condition wont be checked.
At end loop will comeout when one of array limit is done ,then we iterate over array with elements remaining and push
all of them without duplicates in to ans.

Time ccomplexity:O(n+m)  iterating both the arrays fully.
Space Complexity :O(n+m)// array to store the result of union



*/

function unionArray(nums1, nums2)  {
     let i=0;let j=0;let n=nums1.length;let m=nums2.length;
    let res=[];
   
    while(i<n&&j<m){
        if(nums1[i]==nums2[j]){
           if(i==0 || nums1[i]!=nums1[i-1]) {
                res.push(nums1[i]);
           }
                i++;j++;
             
        }
       else if(nums1[i]>nums2[j]){
        if(j===0 || nums2[j]!=nums2[j-1]){
            res.push(nums2[j]);
        }
            j++;
        
            
        }
        else{
             if(i==0 || nums1[i]!=nums1[i-1]) {
                res.push(nums1[i]);
             }
                i++;
             
        }
    }
    while(i<n){
         if(i===0 ||nums1[i]!=nums1[i-1]) {res.push(nums1[i])}i++};
    while(j<m){if(j==0 || nums2[j]!=nums2[j-1]){res.push(nums2[j])}j++};
   return res;
    }
    let nums1=[3, 4, 6, 7, 9, 9] ;let nums2=[1, 5, 7, 8, 8];
console.log(unionArray(nums1,nums2));


