/*
Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.
Input : n = 3

Output : [ "((()))" , "(()())" , "(())()" , "()(())" , "()()()" ]
Input : 2

Output : [ "(())" , "()()" ]
Constraints:
1 <= n <= 8
*/
/*optimal or only solution approach: using recursion
time complexity : see we will have final result strings of length 2*n. we have 2 ways '(' or ')' to fill each place so 2*2*2...  2n times is total
possibilities i.e 2**(2n) which is 4**n so O(4**n) while this is loose bound  in reality we know due to pruning many branches terminate 
early so it is calculated to be , 
like  Cost to build one sequence of length 2n : You pay O(n) for appending/concatenating or filling a buffer . and total no.of valid sequences is 
the catalan number cn = 4**n/(n**(3/2))*(pi**(1/2)).so overall is => cost per one(O(n)) * total no.of valid(cn)=>O(n*(cn))where "cn" is catalan num
so O( 4**n/(n**(1/2)) ) this is the more accurate upper bound, 
S.C is at most one call per each paranthesis added ,for valid strings length is 2*n that means at most call stack will have 2n calls so O(2n) which 
is O(n) and "curr" string has length of O(2n) if we consider memory is reused for other recursions as at most only one O(2n) is used so total is O(n) auxilary space
 but if we also check  space for result array ,You produce Catalan number cn strings, each of length 2n. so O(n*cn) overall space which is also O( 4**n/(n**(1/2)) )


*/
class Solution {
    generateParenthesis(n) {
        //solved after watching editorial , kind of new to pattern and recursion
        let res=[];
        
         this.generate('',0,0,n,res)
         return res;
    }
/*the following code is pruning type of recursion, it works correctly but suppose when "open==n" we are making a open+1 call and then checking if open<n
similarly when close=open we make one more call and then check if close >open and then return ,this way we are making extra calls immedieatly returning after
checking conditions (pruning). we can avoid this by making calls after checking that is called gating style.
     generate (curr,open,close,n,res){
         if(open>n){
            return
         }    
         if(open<close){return};

           if(open+close==2*n){
            res.push(curr);
            return;
         } 
        this.generate(curr+'(',open+1,close,n,res);
        this.generate(curr+')',open,close+1,n,res);
         }
*/
//this is gating style this way we are not making open+1 call when open==n and not making close+1 call when open=close.
 generate(curr, open, close, n, res) {
    if (open + close == 2 * n) {
      res.push(curr);
      return;
    }
    if (open < n) {
      this.generate(curr + "(", open + 1, close, n, res);
    }
    if (open > close) {
      this.generate(curr + ")", open, close + 1, n, res);
    }
  }
        
}