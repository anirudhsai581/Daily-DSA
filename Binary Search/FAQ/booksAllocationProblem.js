/*
Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book, 
and an integer m representing the number of students, allocate all the books to the students
 so that each student gets at least one book, each book is allocated to only one student, and the 
 allocation is contiguous.
Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized. 
If the allocation of books is not possible, return -1.
Input: nums = [12, 34, 67, 90], m=2 Output: 113
Explaination:The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books 
and the other will get the last one.
Input: nums = [25, 46, 28, 49, 24], m=4 Output: 71 Explanation: The allocation of books will 
be 25, 46 | 28 | 49 | 24.
Input: nums = [15, 17, 20], m=2 Output:32
Constraints:
  1 <= n, m <= 10**4
  1 <= nums[i] <= 10**5
//Difficulty:hard
*/

/*bruteforce: we know that minimum of maxnumber of pages will always be atleast max(nums),since we are allocating
every book ,so if there was only one student all books to him ,so max will be sum(nums),if students are more than 
the books we return -1.so idea is to search for each value in this range (max(nums)->sum(nums)) and check if its
valid maxpages allocated in a distribution,(we use function to determine if this is valid) and once we have a 
valid maxpages we can break and return As we want minimum of such maxnumber.
Now to check validity of any maxpages we have assumed, so we use function valid(nums,ans,m),so in this we keep 
allocating books as to one student as long as his total pages is less than our ans , this will make next student 
have as less remaining as possible, we first start with studencount=1, and give him as many oages as he can hold
(total pages <=our current maxnumber) if exceeded we increase student count ,we reset total as next student count 
starts from 0.now we can stop when we have student count >=m , we dont need to check the condition that all students
should have atleast a book, because we are just checking if max is valid if 1 student is satisfying max pages 
by taking all the books its valid max, (we can always reduce his books and distribute others if its valid maxpages)
T.C is O((sum-max)*n) , mutltiplied by n as in each case helper function takes O(n).
S.C is O(1).


Optimal: instead of traversing lineraly from (max(nums) to sum(nums)) our potential range,we traverse using binary
search and if our current maxpages (mid) is valid as we need to find mid we go left,high=mid-1, else we go
right if mid is not valid to increase maxpages to have a better chance, low=mid+1;

General binary search tip:
incases where our binary search have low and high initially where one end have the valid answer and other had not valid
like here we have max(nums) and sum(nums) since we know finding min means max(nums) is already our possible ans, 
and we are trying to make this invalid moving left and left will be trying to become valid, so when we stop
we know low will be having ans, so instead of storing ans we can use this logic and just return low.In opp case we
return high(not this problem) .so instead of having ans variable and updating it  we can use this logic .

T.C is O(log(sum-max)*n) , mutltiplied by n as in each case helper function takes O(n).
S.C is O(1).
*/

function  findPages(nums, m) {
        //Completely solved this hard problem on OWN
        // ( aggressive cows problem set the foundation to think this way)
        let n=nums.length;
        let sum=0;let max=0;
       for(let i=0;i<n;i++){
        sum=sum+nums[i];
        if(nums[i]>max){max=nums[i]};
       }
       if(m>n){
          return -1;
       }
    function validMaxSum(nums,mid,m){
      let pagesSum=0;let studentsCount=1;
      for(let i=0;i<n;i++){
        pagesSum+=nums[i];
        if(pagesSum>mid){
            studentsCount++;
            pagesSum=nums[i];
        }
      }
      if(studentsCount<=m){
        return true;
      }
      return false
    }


       let low=max;let high=sum;
       while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(validMaxSum(nums,mid,m)){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
       }
       return low;
    }
    let nums=[25, 46, 28, 49, 24];let m=4;
    console.log(findPages(nums,m));