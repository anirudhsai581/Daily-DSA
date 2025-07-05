/*
There is only one row of fruit trees on the farm, oriented left to right. An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.

The goal is to gather as much fruit as possible, adhering to the owner's stringent rules:
1) There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.
2) Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.
3) Once reaching a tree with fruit that cannot fit into any basket, stop.
Return the maximum number of fruits that can be picked.
Input : fruits = [1, 2, 1]
Output : 3
Input : fruits = [1, 2, 3, 4, 5]
Output:2
Constraints:
1 <= fruits.length <= 10**5
0 <= fruits[i] < fruits.length
*/
//the question basically means finding continous elements (subarray) which can have two different types of integers

/*
we maintain hash array to store all occurences, we have types variable to track if any newoccurence of char is found then sliding window approach to find max length of window, if the type is increased more than 2 we shrink and in shrink we have a while loop which runs as long as diff>2 and also we are increasing l to right in each cycle and reduce the occurence of element at l untill we find only two diff chars in our window.
since the elements of array can lie between 0 to length of array we take length of array for hash size if chars array we could have then taken 256 size for hash array.
*/

function totalFruits(fruits) {
    //your code goes here
        let l = 0;
        let r = 0;
        let n = fruits.length;
        let maxLen = 0;
    
        let hash = new Array(n).fill(0);
        let types = 0;
            while (r < n) {
                if (hash[fruits[r]] == 0) {
                    types++;
                }
                hash[fruits[r]]++;
                
                while (types > 2) {
                    hash[fruits[l]]--;
                    if (hash[fruits[l]] === 0) types--;
                    l++;
                }

                maxLen = Math.max(maxLen, r - l + 1);
                r++;
            }
            return maxLen;
  }

  let arr=[1, 2, 3, 2, 2];
  console.log(totalFruits(arr));