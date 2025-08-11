/*
Given an array of n integers, find the second most frequent element in it.
If there are multiple elements that appear second most frequent times, find the
smallest of them.If second most frequent element does not exist return -1.
Input: arr = [1, 2, 2, 3, 3, 3] Output: 2
Input: arr = [4, 4, 5, 5, 6, 7] Output: 6
Input: arr = [10, 9 ,7, 7] Output:9
Constraints:
1 <= n <= 10**5
1 <= arr[i] <= 10**4
*/
/*brute force: nested loops iterating whole array for each element and finding its freq and remaining first and second element updating logic
same as optimal. T.C is O(n**2) ,S.C is O(1)/* 
/* better :Using frequency array with size of maximum possible element input, here 10**5, and then storing each element count at freqarray
index value equaling the element and then iterating over freq array we may also find max value of the array and iterate over freq array
till that point, so T.C is O(max(n,maxVal(nums))) S.C is O(10**5) not ideal S.C. so we use hashmap.
/*Optimal : Using hash map , code explained with inbetween comments. Basically having four variables for maxfreq and its element
 and second maxfreq and its element  T.C is O(n) and S.C is O(n) (in worst case if there are no duplicates we will end up storing n values)*/
function secondMostFrequentElement(nums) {
    //solved completely own
    let freqMap = new Map();
    for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    let maxcount1 = -1;
    let maxcount2 = -1;
    let second = Infinity;let first=Infinity;

    //we have 4 variables to store max frequency and its element then second max freq and its element 
    for (let [key, value] of freqMap) {
    //first we find if a freq is greater than max1 freq if so we update maxfreq and first.then whatever in max freq 
    // that will be now second max freq and first will be assigned to second.
    //to store older first value in second , we do this operation ahead then update first
      if (value > maxcount1) {
        maxcount2=maxcount1;
        second=first;
        maxcount1 = value;
        first=key;
      }
      //there can be case like where value is equal to maxcount , in future if this goes to second (when value>maxcount1) 
      // we need to ensure smallest value should go , so even when they are equal if key is smaller than current first 
      // then we update first with this key
      else if (value==maxcount1){
         if(key<first){
            first=key;
         }
      } 
      //now we handle when value is not greater and not equal to maxcount1 but greater or equal to maxcount 2
      else if (value >= maxcount2) {
        if (value == maxcount2) {
          if (key < second) {
            second = key;
          }
        }
         else {
          maxcount2 = value;
          second = key;
        }
      }
    }
     return second==Infinity?-1:second;
  }

  let nums=[1,3,3,2,2,4,4,4,5,5,5];
  console.log(secondMostFrequentElement(nums));

