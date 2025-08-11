/*
Given an array nums of n integers, find the most frequent element in it i.e., the element that occurs the maximum number of times. If there are multiple elements that appear a maximum number of times, find the smallest of them.

Input: nums = [1, 2, 2, 3, 3, 3] Output: 3
Input: nums = [4, 4, 5, 5, 6] Output: 4
Input: nums = [2, 4, 3, 2, 5, 4] Output:2
*/
/*bruteforce: traverse whole array for each element(nested loop with both loops from first to last element) find its count store the num and its count in two vars, now if in any iteration if we  found bigger count update the num , this will be O(n*n);
*/
/*
Better(not recommended): to have an array(lets name it freq arr) of size to the max allowed nums[i] value like 10**5 here etc, then for each element increase the value at index=element of freq array, we can also find max of the array .at last iterate over frequency array till max element of array and then find which value is greatest that corresponding index is our max occured element.(update only if it's greater not equal to find smallest value of max-freq element),T.C is O(max(n,max(nums)) and S.C is O(10**5) here , we use hashmap to avoid using this much of space.
*/

/*Optimal (using hashmap): we use hashmap store each elemenet and its freq and then iterate over hashmap to find the max freq element .
*/

function mostFrequentElement(nums) {
        let freqMap = new Map();
        for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        let ele = null;
        let maxfreq = 0;
        for (let [key, value] of freqMap) {
            
        if (value>=maxfreq) {
            if(value==maxfreq){
                if(key<ele){
                    ele=key;
                }
            }
            else{
                maxfreq = value;
                ele = key;
            }
        
        }
        }
        return ele;
    }
let nums=[2, 4, 3, 2, 5, 4]
console.log(mostFrequentElement(nums));
