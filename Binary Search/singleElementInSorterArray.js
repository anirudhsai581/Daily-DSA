/*
Given an array nums sorted in non-decreasing order. Every number in the array except one appears twice. Find the single number in the array.

Input :nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]  Output:4
Input : nums = [1, 1, 3, 5, 5]  Output:3
*/


//brute force will be to traverse the arraty and find the element where element previous to it and next to it are not equal O(n) TC (we can handle boundary elements separately to avoid out of bounds)

//Optimal is to use binary search as array is sorted and use the following logic to find whether to move left half or right half
     
     /*1123344 By observation left side of single number the pairs will be 
     in pattern (even,odd) index right side of single num pairs will be in pattern of (odd,even )
     index. so this logic helps us when we are at an index we need to move left half or right half
     first confirm if mid can be solution or not by checking its left and right equal or not .

     then if we mid at odd index check if right of it is equal to mid if it is then single number is to its left 
     if we are at even index check if right of it is not equal then again single number will be left 

     As we know we have diff cases for even index and odd index we are checking when we will be moving to left in both the cases 
     so we can club them in if and remaining we can use else to move to right half
     also to avoid out of bounds better way is to keep search space index 1 to n-2 and handle index 0 and index n-1 separately
     */
function singleNonDuplicate(nums) {
    let low=1;let high=nums.length-2;
     if(nums[1]!==nums[0]) return nums[0];//handled first index
    if(nums[high+1]!=nums[high]) return nums[high+1];//handled last index
     while(low<=high){
        let mid=Math.floor((low+high)/2);
        if((nums[mid-1]!==nums[mid])&&(nums[mid]!=nums[mid+1])){
            return nums[mid];
        }//handled if nums[mid] is the single number
        if((mid%2==0)&&(nums[mid+1]!=nums[mid])
            ||((mid%2==1)&&nums[mid]==nums[mid+1])){
               high=mid-1;//move left  half 
        }
        else{
            low=mid+1; //move right half
        }
     
     }
    return -1;//we know return will surely happen in above while loop itself
    // but just a practice to have a return in function ,so dummy return -1 we have added.
}
let nums=[1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]  ; 
console.log(singleNonDuplicate(nums));