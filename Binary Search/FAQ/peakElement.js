/*Given an array arr of integers. A peak element is defined as an element greater than both of its neighbors.
Formally, if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i].
Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index 
of any peak number.
Note:As there can be many peak values, 1 is given as output if the returned index is a peak number, otherwise 0.
Input : arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1] Output: 7
Explanation: In this example, there is only 1 peak that is at index 7.
Input : arr = [1, 2, 1, 3, 5, 6, 4] Output: 1
Explanation: In this example, there are 2 peak numbers at indices 1 and 5. We can consider any of them.
Input : arr = [-2, -1, 3, 4, 5] Output:4  //index of element 5 as arr[n] is considered as -inf
Constraints:
 1 <= arr.length <= 1000
 -231 <= arr[i] <= 231 - 1
 arr[i] != arr[i + 1] for all valid i.
For arr[0], its left element can be considered as -∞
For arr[n-1], its right element can be considered as -∞


*/
/*Bruteforce:we iterate from start to end of array and check each element is peak element or not, we first check 
boundary elements to not go out of bounds .T.C is O(n),S.C is O(1).*/

function  bruteFindPeakElement(arr) {
     //bruteforce,//solved on Own
     let n=arr.length;
     let low=1;let high=n-2;
     if(arr[0]>arr[1]){
        return 0;
     }
     if(arr[n-1]>arr[n-2]){
        return n-1;
     }
     for(let i=1;i<=high;i++){
        if((arr[i]>arr[i-1])&&(arr[i+1]<arr[i])){
            return i;
        }
     }
     return 0;
    }
    let arr=[-2, -1, 3, 4, 5];
    console.log(bruteFindPeakElement(arr));
/*Optimal:we first check boundary elements if they are not peak elements we know arr[1]>arr[0] and arr[n-2]>arr[n-1]
so the trend is /  rise at start and \ fall at end we know there will be atleast one peak element when there is rise
and fall at the point it starts falling , we take low as 1 and high as n-2 find mid and check if arr[mid-1]>arr[mid]
and arr[mid]>arr[mid+1](all distinct elements) so if true then mid is peak if not case1: arr[mid-1]>arr[mid] means
\ at here, / rise at start and fall at here means we move left as slope change will have a peak,case2:if arr[mid+1]>arr[mid] 
then trend is / rise here and at end it is \ fall so we will have peak here in right,
if both cases were true then we had peak on either side we can travel any direction.
//S.C is O(1) and T.C is O(logn).

pitfall in my original thinking("wrong approach" just mentioning why this would not work) :from half hint i got the idea of comparing mid to boundaries in first iteration once
idx 0 and idx n-1 were not answers then / and \ at ends , so if arr[mid]< arr[low] left has peak || arr[mid]<arr[high]
right half will have peak but if both of them are false it meand / mid \ so we would not know for sure which half will 
have peak like trend can be increasing till mid+2 then  decrease  (peak in right) or can increase till (mid-3) decrease then 
then again increase till mid-2 and from there decrease till low(peak in left) so we would not be sure ,neighbour comparision
will only be correct .
*/
function  optimalFindPeakElement(arr) {
        let n=arr.length;
        if(n==1)return 0;
        if(arr[0]>arr[1]) return 0;
        if(arr[n-1]>arr[n-2])return n-1;
     let low=1;let high=n-2;
     while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]<arr[mid+1]){
            low=mid+1;
        }
        else if (arr[mid]<arr[mid-1]){
            high=mid-1;
        }
        else{
            return mid;
        }
     }
     return -1;// there will definetly be peak before this statement  , but just a standard to return -1 .
    }
console.log(optimalFindPeakElement(arr));



