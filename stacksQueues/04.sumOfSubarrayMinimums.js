/* Given an array of integers arr of size n, calculate the sum of the minimum value in each (contiguous) subarray of
 arr. Since the result may be large, return the answer modulo 109 +7. Input: arr = [3, 1, 2, 5]

Output: 18

Explanation: The minimum of subarrays: [3], [1], [2], [5], [3, 1], [1, 2], [2, 5], [3, 1, 2], [1, 2, 5], [3, 1, 2, 5]
are 3, 1, 2, 5, 1, 1, 2, 1, 1, 1 respectively and their sum is 18. Input: arr = [2, 3, 1]

Output: 10 Explanation: The minimum of subarrays: [2], [3], [1], [2,3], [3,1], [2,3,1] are 2, 3, 1, 2, 1, 1 respectively
and their sum is 10.
 
 
 */
/* 
BruteForce:Time Complexity: O(n**2) S.C is O()
        sumSubarrayMins(arr) {

        // 1.brute:find all subarrays in each track min ,then add to finalsum
        reset local sum at every inner loop 
        let n=arr.length;let total=0
        for(let i=0;i<n;i++){
            let sum=arr[i];
            for(let j=i;j<n;j++){
                sum=Math.min(sum,arr[j])
                total+=sum;
            }
        }
        return total;
    } */
class Solution {
  sumSubarrayMins(arr) {
    let total = 0;
    let n = arr.length;
    let left, right;
    const nse = this.NSE(arr);
    const psee = this.PSEE(arr);
    const mod = 1e9 + 7;
    for (let i = 0; i < n; i++) {
      left = i - psee[i];
      right = nse[i] - i;
      let freq = left * right;
      let val = (freq * arr[i]) % mod;
      total = (total + val) % mod;
    }
    return total;
  }

  NSE(arr) {
    let n = arr.length;
    let ans = new Array(n).fill(0);
    let st = [];
    for (let i = n - 1; i >= 0; i--) {
      let curr = arr[i];
      while (arr[st[st.length - 1]] >= curr && st.length != 0) {
        st.pop();
      }
      if (st.length == 0) {
        ans[i] = n;
      } else {
        ans[i] = st[st.length - 1];
      }
      st.push(i);
    }
    return ans;
  }
  //analyse why array filled with 0 how that wont impact our index
  PSEE(arr) {
    let n = arr.length;
    let ans = new Array(n).fill(0);
    let st = [];
    for (let i = 0; i < n; i++) {
      const currEle = arr[i];
      while (st.length > 0 && arr[st[st.length - 1]] > currEle) {
        st.pop();
      }
      ans[i] = st.length > 0 ? st[st.length - 1] : -1;
      st.push(i);
    }
    return ans;
  }
}
