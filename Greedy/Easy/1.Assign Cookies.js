/* Consider a scenario where a teacher wants to distribute cookies to students, with each student receiving at most one cookie.
Given two arrays, student and cookie, the ith value in the Student array describes the minimum size of cookie that the ith student 
can be assigned. The jth value in the Cookie array represents the size of the jth cookie. If Cookie[j] >= Student[i], the jth cookie 
can be assigned to the ith student.
Maximize the number of students assigned with cookies and output the maximum number.

Input : student = [1, 2, 3] , cookie = [1, 1] Output :1
Explanation : You have 3 students and 2 cookies.
The minimum size of cookies required for students are 1 , 2 ,3.
You have 2 cookies both of size 1, So you can assign the cookie only to student having minimum cookie size 1.So your answer is 1.
Input : student = [1, 2] , cookie = [1, 2, 3]
Output : 2
Input : student = [4, 5, 1] , cookie = [6, 4, 2]
Output:3
1 <= student.length <= 3*10**4
0 <= cookie.length <= 3*10**4
1 <= student[i] , cookie[j] <= 2**31 - 1
*/

/* Logic: To maximise no.of students get the cookie, we should greedily assign the least size cookie that can satisfy a particular student 
starting from least size demanding student, so if least demanding one gets the least that could be possible then we have better chances of maximising
the cookies assigned to rem students. To know least expecting student we need to sort student array and to know least cookie size we need to sort the 
cookies arr as well. and then a while loop with two pointers to two arrays if student can be satisfied we move to next cookie and next student 
else we just move to next bigger cookie and remain at the same student , we exit while loop either if we run out of cookies or students.
T.C : to sort :O(nlogn)+ O(mlogm) and then O(m)) for while loop (as at max we go only till end of cookies even if students are more,even if students are less
we may traverse whole cookies array if any student expectation can not be satisfied by any cookie)
so overall: O(nlogn+mlogm+m),S.C is O(1) Aux Space */
class Solution {
  findMaximumCookieStudents(Student, Cookie) {
    //your code goes here
    let n = Student.length;
    let m = Cookie.length;
    Student.sort((a, b) => a - b);
    Cookie.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let count = 0;
    while (i < n && j < m) {
      if (Student[i] <= Cookie[j]) {
        count++;
        i++;
      }
      j++;
    }
    return count;
  }
}
// Example input
const Student = [1, 2];
const Cookie = [1, 2, 3];

// Create a Solution object
const solution = new Solution();

// Call the findMaximumCookieStudents function
const result = solution.findMaximumCookieStudents(Student, Cookie);

// Output the result
console.log("Number of students satisfied:", result);
