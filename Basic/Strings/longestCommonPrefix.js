/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Input : str = ["flowers" , "flow" , "fly", "flight" ] Output : "fl"
Input : str = ["dog" , "cat" , "animal", "monkey" ] Output : ""
1 <= str.length <= 200
1 <= str[i].length <= 200
str[i] contains only lowercase English letters.

*/
/*
better approach: to sort the array and then compare the first and last strings character by char. this would be 
of T.C :sort + loop to compare first and last string char by char 
sorting takes: O(N*logN*M);where M is avg length of strings/maxlength of strings. (added for comparisions while sorting)
loop to compare takes: O(m) here m is minlength of first and last strings .(overall min will also be this as sorted)

optimal:we compare the first character of first string with all strings first character then second char
and so on once mismatch we break .
so time complexity is O(n*m), as we check one char in O(n)*m ,here 
m is length of longestcommonprefix till that many times we iterate whole array  .
S.C is : we need O(m) space to store longest comm prefix
*/

function longestCommonPrefix(str) {
    //solved on own

    let ans = "";

 //we could have calculated min length and keep j<min length , but that will take O(n)extra time
  // to iterate loop, instead we can just use str[0].length

    let j = 0;
    while (j < str[0].length) {
         const char =str[0][j];
      for (let i = 0; i < str.length; i++) {
        if (str[i][j] !=char ) {
            return ans;
        }
      }
      ans += str[0][j];
      j++;
    }
    return ans;
  }
  let str=["flowers" , "flow" , "fly", "flight"];
  console.log(longestCommonPrefix(str));