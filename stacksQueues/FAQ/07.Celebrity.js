/* A celebrity is a person who is known by everyone else at the party but does not know anyone in return. Given a square
/* matrix M of size N x N where M[i][j] is 1 if person i knows person j, and 0 otherwise, determine if there is a
/* celebrity at the party. Return the index of the celebrity or -1 if no such person exists.
Note that M[i][i] is always 0.
Input: M = [ [0, 1, 1, 0], [0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0] ]
Output: 1
Explanation: Person 1 does not know anyone and is known by persons 0, 2, and 3. Therefore, person 1 is the celebrity.
Input: M = [ [0, 1], [1, 0] ]
Output: -1
Explanation: Both persons know each other, so there is no celebrity.
Input: M = [ [0, 1, 0], [0, 0, 0], [0, 1, 0] ]
Output:1
Constraints:
  1 <= N <= 3000
  0 <= M[][] <= 1
 */
/* There can only exist one celebrity because : Logic: there can only be one celebrity , since celebrity should be known by all if exists then will be known by all others eliminating the
chance of others to be celebrity  */
/* My Naive Solution : Dont refer this in revision very bad bruteforce not proper , but just to know how thinking is done initially
celebrity(M) {
     //SOlved on own traverse whole matrix but in a bad way
     Logic Used: so we know that if row of matrix is  all zeroes then only it could be potential celebrity and second condition is to check 
     if all others know this index , so first we store in an array called store that which all indices have whole row 0  O(n**2)time and O(n) space 
     , then we iterate through store array and for every index with value 1 we iterate the M matrix n times fixing this as 'J'if every other index
     know this M[i][j]==1 except when i==j then we declare this is the celebrity . this loop runs O(n**2) in worst. so total 2*n**2 T.C and O(n) 
     space complexity. 
     we iterate over this array and whenever we have row 0 then for that ele
     
     let n=M.length;let row0=false;
     if(n==1){return 0}
     let store=new Array(n).fill(0);
     for(let i=0;i<n;i++){
        let flag=true;
        for(let j=0;j<M[i].length;j++){
            if(M[i][j]==1){flag=false;}
        }
        if(flag){store[i]=1;row0=true}
     }
     if(!row0){return -1};
     for(let i=0;i<n;i++){
        if(store[i]==1){
            let flag=true;
            for(let j=0;j<n;j++){
                if(i==j){continue}
                if(M[j][i]==0){flag=false;}
            }
            if(flag){return i};  
        }
     }
        return -1;
    } */
/* Best Bruteforce:
Idea: instead of traversing the nested loops two times , we do only once and we maintain two lists no.of persons know a person and no.of persons the person know
in two arrays we check this for each index, so two arrays of size n js needed. lets call them IKnow and KnowMe and we know that for 
a index to be celebrity its value in IKnow should be 0 and KnowMe should be n-1 ,as its own knowme will be 0.(n-1 others not counting itself) 
so we iterate o-n-1 and check index with KnowMe n-1 and Iknow 0 if found return that celebrity 
T.C is O(n**2+O(n)) => O(n**2) S.C is O(n+n) => O(n)*/
/*  celebrity(M) {
    // Better Naive SOlved after watching editorial idea 
    let n=M.length;
    if(n==1){return 0}
    let KnowMe=new Array(n).fill(0);
    let IKnow=new Array(n).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<M[i].length;j++){
            if(M[i][j]==1){
                IKnow[i]++;
                KnowMe[j]++;
            }
        }
    }
    for(let i=0;i<n;i++){
        if(KnowMe[i]==n-1&&IKnow[i]==0){
            return i;
        }
    }
    return -1;
    } */
/* Optimal: Keep two pointers one at 0 and other at n-1 ,so we check if top knows down then top cannot be celeb we move top and down knows top then
down cannot be celeb we decrease down(move up) if neither knows each then it means both cannot be celeb move both so eventually they will both point to
a index which can be a celeb  ,if there is no celeb then top will cross down, if top==down then for this we check this index row and this index column then index row all 0's and index column all 1's except
when index,index then this is celeb ,  T.C is O(n), S.C is O(1) */
class Solution {
  celebrity(M) {
    let n = M.length;
    let top = 0;
    let down = n - 1;
    while (top < down) {
      if (M[top][down] == 1) {
        top++; //top knows down top cannot be a celeb
      } else if (M[down][top] == 1) {
        down--; //down knows top down cannot be a celeb
      } else {
        top++;
        down--; //top doesnt know down => down cannot be celeb
        //like wise down also doesnt know top=>top cannot be a celeb
      }
    }
    //by end of this loop if top crosses down it means we checked all and none qualifies
    //as celeb . but if top==down then we have potential celeb which we have to
    //confirm by checking its row and its column as we have nt checked every
    //M[top][index] and every M[index][top]
    if (top > down) {
      return -1;
    }
    for (let i = 0; i < n; i++) {
      if (i == top) {
        continue;
      }
      if (M[top][i] != 0) {
        return -1;
      }
      if (M[i][top] != 1) {
        return -1;
      }
    }
    return top;
  }
}
/* There is one better solution using stack  */
