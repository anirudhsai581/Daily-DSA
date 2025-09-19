## Recurrence for loop-style DFS — Notes

## Problem

Count the number of recursive calls made by a loop-style DFS that enumerates subsets of an array of length `n`.

- to solve this recurrence equation its hard as summation of series is present (iteration) so the trick is to simplify by substracting i+1 from i
  Define

$$
T(i) = \text{number of calls started at index } i \quad(\text{including the current call}).
$$

The recurrence derived from the loop-style DFS is:

$$
T(i) = 1 + \sum_{j=i}^{n-1} T(j+1),
$$

with base case

$$
T(n) = 1.
$$

---

## Solution (step-by-step)

1. **Shift the summation index**

$$
T(i) = 1 + \sum_{k=i+1}^{n} T(k).
$$

2. **Write the same recurrence for** $i+1$

$$
T(i+1) = 1 + \sum_{k=i+2}^{n} T(k).
$$

3. **Subtract the two equations (aligned)**

$$
\begin{aligned}
T(i) - T(i+1) &= \Big(1 + \sum_{k=i+1}^{n} T(k)\Big) - \Big(1 + \sum_{k=i+2}^{n} T(k)\Big) \\
&= T(i+1).
\end{aligned}
$$

Therefore:

$$
T(i) = 2\,T(i+1).
$$

4. **Unroll the simple recurrence**

Starting from $T(n)=1$ we obtain

$$
T(i) = 2^{\,n-i}.
$$

In particular:

$$
T(0) = 2^{n}.
$$

---

## Intuition (Σ view)

The summation form shows that each call at index `i` accounts for the current call (the `1`) plus all recursive calls started from later indices. Subtracting two consecutive summation expressions cancels overlapping tails of the sums and reveals the multiplicative doubling.

You can also view the growth as repeated doubling: each position gives two choices in the subset enumeration (include or exclude), producing the factor $2$ per index and hence $2^{n}$ total.

---

## Example (n = 3)

$$
\begin{aligned}
T(3) &= 1,\\
T(2) &= 2^{3-2} = 2,\\
T(1) &= 2^{3-1} = 4,\\
T(0) &= 2^{3-0} = 8.
\end{aligned}
$$

So the top-level call spawns 8 calls in the worst case, matching enumeration of all subsets.

---

## Final result & complexity

- **Exact worst-case call count:** $T(0) = 2^{n}$.
- **Time complexity:** $O(2^{n})$.
- **Space complexity:** $O(n)$ recursion depth.

---

## Final result & complexity

- **Exact worst-case call count:** `T(0) = 2^{n}`.
- **Time complexity:** `O(2^n)`.
- **Space complexity:** `O(n)` recursion depth.

---

## Caveats

- If you add pruning like `if (sum > k) return` **and** all numbers are non-negative, many branches are cut and the practical runtime can be much smaller than `2^n` depending on input values.
- If negative numbers are present, the `sum > k` pruning is invalid (negative numbers can later reduce the sum), so you must remove that pruning and the worst-case remains exponential.

---

## Alternative approaches (to improve worst-case behavior)

- **Memoization / DP** on `(start, sum)` — a pseudo-polynomial solution: roughly `O(n * K)` time and `O(n * K)` space where `K` is the range of reachable sums (e.g., `k` when all numbers are non-negative).
- **Meet-in-the-middle** — split the array into two halves, compute subset sums for each half, and combine them. This reduces complexity to about `O(2^{n/2})` and is useful when `n` is up to \~40.

---

## Quick summary

The original loop-style recurrence simplifies to `T(i)=2 T(i+1)` and solves to `T(0)=2^{n}`, so the enumeration is exponential in `n`. Practical pruning helps only under additional constraints (like non-negative inputs) or with different algorithmic approaches (DP, meet-in-the-middle).

---
