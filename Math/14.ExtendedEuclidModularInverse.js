/* 
Given two integers n and m. You have to find the smallest modular multiplicative inverse of n under modulo m. if it 
does not exist then return -1.
Input: n = 3, m = 11
Output: 4
Explanation: Since (4 × 3) mod 11 = 1, 4 is the modulo inverse of 3 under mod 11.
Constraints:
1 ≤ n ≤ 104
1 ≤ m ≤ 105
*/

class Solution {
  modInverse(n, m) {
    // code here
    const { gcd, x } = this.extendedgcd(n, m);
    if (gcd !== 1) {
      return -1;
    } else {
      return ((x % m) + m) % m;
    }
  }
  extendedgcd(n, m) {
    //nx+my=gcd(n,m);
    if (m === 0) {
      return { gcd: n, x: 1, y: 0 };
    }
    let res = this.extendedgcd(m, n % m);
    let gcd = res.gcd;
    let x1 = res.x;
    let y1 = res.y;
    const q = Math.floor(n / m);

    let x = y1;
    let y = x1 - q * y1;
    return { gcd, x, y };
  }
}
