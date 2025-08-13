/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.
Input : s = "abcde" , goal = "cdeab" Output : true
Explanation : After performing 2 shifts we can achieve the goal string from string s.
After first shift the string s is => bcdea
After second shift the string s is => cdeab
Input : s = "abcde" , goal = "adeac" Output : false
Constraints:
1 <= s.length <= 100
1 <= goal.length <= 100
s and goal consist of only lowercase English letters.

*/
/*
bruteforce: to rotate string 1 time ,2 times and so on till n times and check if goal is matching in any of the case
if yes then we break by returing true. 
time complexity: O(n) to rotate each time as we can use "rotate = s.slice(-i) + s.slice(0, n - i);" to rotate i times
so here time complexity if first slice is O(i) and second slice is O(n-i) together O(n),in worst case we check for 
all rotations so O(n),overall  O(n*n)=>O(n**2);S.C is O(n) as using extra rotate variable storing concatenation of slices 
which is of length total n , so its O(n) space in each iteration since memory discards and reuses after everyiteration
we count only once. Even if we dont use rotate var and directly check concatenation of slices still its creating that
much space in memory to store that parts so it will still be O(n).
*/
function bruterotateString(s, goal){
    let n = s.length;
    //Solved on own 
    if(s.length!==goal.length){return false};
    for (let i = 1; i <= s.length; i++) {
      let rotate = s.slice(-i) + s.slice(0, n - i);
      if (rotate == goal) {
        return true;
      }
    }
    return false;
  }
  let s="abcde"; let goal="cdeab"
console.log(bruterotateString(s,goal));

/*
optimal will be first checking if both lengths are same and then if same we concat s with itself =>s+s this will definetly
contain rotated part, so we just check if goal is included in this s+s , even if s has repetetions this works.
T.C is, for string concatenation its O(n) as in JS strings are immutable so it  creates new string s+s and copy each element  so O(2n) 
and O(n) for includes method, includes method compares substring chars to each possible position of main string, so worst case O(n)
so T.C is O(n) overall and Space Complexity is O(n) for (s+s)
*/
function rotateString(s, goal) {
    //solved after chatgpt revealed S+S idea 
    if(s.length!==goal.length){return false};
    s=s+s;
    if(s.includes(goal)){return true};
    return false;
  }
let goal2="edcaf"
console.log(rotateString(s,goal));
console.log(rotateString(s,goal2));
