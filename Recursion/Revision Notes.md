<!-- ===================== -->
<!--      Recursion     -->
<!-- ===================== -->

# 📚 My Learning Notes

# 📌 Basics:

1. Recursion: function calling itself. Types: 1.Direct recursion 2.Indriect recursion
   Direct: fun1 calls fun1 2.Indirect:fun1 calls fun2 and fun2 calls fun1
2. Base case is important in recursion otherwise we will end up in infinite loop
3. We have two types of recursion styles 1.Tail Recursion 2.Head Recursion
   1.Tail Recursion: recursive call will be the last step, In some languages this helps in TCO (tail call optimisation , which means the same stack frame can be reused for subsequent calls as no need of remembering func calls in stack once next recursive call is made)
   In JS we dont have any TCO and head recursion and tail recursion takes up same memory and time
   (but head recursion is little implicit , as stack carries the current state and while returning(unwinding) we perform the operations )
   In tail we carry forward our state with help of extra variables , more direct way of calculations.instead of backtracking like in head recusrsion
   2.Head recursion: we will still have some operations to be done after recursive function call is returned.
   (when unwinding calls(backtracking) the logic happens which returns to previous call and so on )

4. Every Recursion can be written as iterative solution and every iterative as recursive , problems of
   recursive nature can be written in less lines easily in recursive way compared to their alternate iterative versions thats why we use recursion.(In fact in husky and some languages we dont have loops and rely completely on recursion)

# Function Parameters in JavaScript

## 1. Primitives

- Types: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Passed **by value** → a new copy of the value is made.
- Changes inside the function do **not** affect the original.

```js
function change(x) {
  x = x + 10;
  console.log("Inside:", x);
}

let num = 5;
change(num);
console.log("Outside:", num); // 5 → unchanged
```

## 2. Objects (arrays, objects, functions)

- Passed as **copy of reference** → both point to the same object in memory.
- **Mutating** the object inside the function affects the original.
- **Reassigning** the parameter only changes the local copy of the reference, original is untouched.

```js
function test(arr) {
  // Mutating (affects original)
  arr.push(99);
  console.log("Inside after mutation:", arr);

  // Reassigning (only local variable changes)
  arr = [100, 200];
  console.log("Inside after reassignment:", arr);
}

let nums = [1, 2, 3];
test(nums);

console.log("Outside after function:", nums);
Inside after mutation: [1, 2, 3, 99]
Inside after reassignment: [100, 200]
Outside after function: [1, 2, 3, 99]
```

# 📘 Recursion Patterns – Notes

Recursion problems often fall into **4 major patterns**.  
Mastering these patterns helps in solving most recursive & backtracking problems in DSA.

---

# Prerequisite:

### Subarray vs Subsequence vs Subset

### 1. Subarray / Substring

- **Contiguous only** (continuous block of elements).
- Example (array `[1,2,3,4]`):
  - Valid: `[1,2]`, `[2,3,4]`
  - Invalid: `[1,3]` (not contiguous)

### 2. Subsequence

- **Order preserved**, but not necessarily contiguous.
- Example (array `[1,2,3,4]`):
  - Valid: `[1,3,4]`, `[2,4]`
  - Invalid: `[4,2]` (order changed)

### 3. Subset

- Pure set theory concept, **order doesn’t matter**.
- Example (set `{1,2,3}`):
  - `{1,2}` and `{2,1}` are the **same subset**
  - Subsets: `{}`, `{1}`, `{2}`, `{3}`, `{1,2}`, `{1,3}`, `{2,3}`, `{1,2,3}`

---

## 1. **Subsequence / Choice Pattern**

**Definition:**  
At each step, we have a **choice**: either **include** the current element or **exclude** it.  
This leads to problems where we explore all possible combinations of elements.

**Key Idea:**

- For element at index `i`:
  - **Include it** in the current solution and recurse.
  - **Exclude it** and recurse.

**Examples:**

- Print all subsequences (power set).
- Subset sum problem.
- Target sum (count subsets with given sum).
- Combination sum problems (LeetCode).

**Complexity:**

- Time: `O(2^n)` subsets for `n` elements.
- Space: recursion depth `O(n)`.

---

## 2. **Permutation / Position Pattern**

**Definition:**  
At each step, we **fix one element at a position**, and then recursively permute the rest.  
This leads to problems that generate all possible orderings.

**Key Idea:**

- For index `i`, try every unused element at that position.
- Swap or mark used elements.
- Recurse for next position.

**Examples:**

- Print all permutations of a string/array.
- Generate unique permutations (handle duplicates).
- Letter case permutations (`"a1b2"` → `"a1b2", "A1b2", "a1B2", "A1B2"`).

**Complexity:**

- Time: `O(n! * n)` (since each permutation of length `n` takes `O(n)` to build).
- Space: recursion depth `O(n)`.

---

## 3. **Divide & Conquer Pattern**

**Definition:**  
We **divide the problem** into smaller subproblems, solve them recursively, and **combine results**.  
This is the essence of many efficient algorithms.

**Key Idea:**

- Split input into halves or partitions.
- Recurse on smaller problems.
- Merge/Combine solutions.

**Examples:**

- Merge Sort.
- Quick Sort.
- Binary Search.

**Complexity:**

- Depends on the problem.
- Sorting algorithms often `O(n log n)` time, `O(log n)` space.

---

## 4. **Backtracking Pattern**

**Definition:**  
Used for **constraint satisfaction problems**.  
We try all possible options, and if one option is invalid, we **backtrack** (undo the choice) and try the next one.

**Key Idea:**

- Place a candidate.
- Recurse deeper.
- If invalid, **undo the choice** and try another.

**Examples:**

- N-Queens problem.
- Rat in a Maze (all paths).
- Sudoku solver.
- Word search in a grid.
- Generate balanced parentheses.
- Palindromic partitions.

**Complexity:**

- Typically exponential in worst case (`O(k^n)` depending on branching).
- Space: recursion depth = size of board/constraints.

---

# ✅ Summary

- **Choice pattern:** “include/exclude” decisions → subsets.
- **Position pattern:** fix at index → permutations.
- **Divide & conquer:** split into smaller problems → mergesort/quicksort.
- **Backtracking:** explore + undo → puzzles & constraint problems.

## 📌 Quick Revision of Problems

| #   | Problem                                    | Head Recursion              | Tail Recursion                   | Notes                                                       |
| --- | ------------------------------------------ | --------------------------- | -------------------------------- | ----------------------------------------------------------- |
| 1   | Print numbers 1 → N                        | Yes (work after recursion)  | Yes (needs extra `curr`)         |                                                             |
| 2   | Print numbers N → 1                        | Yes                         | Yes (direct: log then recurse)   |                                                             |
| 3   | Factorial of N                             | Yes (`n * fact(n-1)`)       | Yes (with accumulator `acc`)     |                                                             |
| 4   | Fibonacci number                           | Yes (`fib(n-1) + fib(n-2)`) | Yes (with 2 accumulators `a, b`) | Classic vs optimized                                        |
| 5   | Sum of first N natural numbers             | Yes (`n + sum(n-1)`)        | Yes (with accumulator `sum`)     |                                                             |
| 6   | Power function (`a^b`)                     | Yes (divide & conquer)      | Yes (with accumulator `res`)     | Exponentiation by squaring                                  |
| 7   | Palindrome check (string)                  | No                          | Yes                              | Must compare ends before recursion                          |
| 8   | Reverse array                              | No                          | Yes                              | Swap, then recurse                                          |
| 9   | Reverse string                             | No                          | Yes                              | Same as reverse array, needs char array (strings immutable) |
| 10  | GCD (Euclidean algorithm)                  | No                          | Yes                              | Uses `gcd(b, a % b)`                                        |
| #   | Problem                                    | Head Recursion              | Tail Recursion                   | Notes                                                       |
| --  | -------------------------                  | --------------              | --------------                   | ---------------------------                                 |
| 11  | Check if array is sorted                   | No                          | Yes                              | Compare adjacent elements                                   |
| 12  | Linear search in array                     | No                          | Yes                              | Check element, then recurse                                 |
| 13  | Find min/max in array                      | No                          | Yes                              | Carry accumulators                                          |
| 14  | Binary search (recursive)                  | No                          | Yes                              | Use `low`, `high` bounds                                    |
| 15  | Print all subsequences / Power set         | No                          | Yes (choice: include/exclude)    | Foundation for patterns                                     |
| 16  | Generate all substrings                    | No                          | Yes (with `(i, j)` indices)      | Contiguous only                                             |
| 17  | Remove a character in string               | No                          | Yes                              | Tail recursion with `slice` and backtracking index          |
| 18  | Replace a character in string              | No                          | Yes                              | Optimized version uses accumulator                          |
| 19  | Check if string contains only digits       | No                          | Yes                              | Simple tail recursion                                       |
| 20  | Count occurrences of a character in string | No                          | Yes                              | Accumulate count                                            |

| #   | Problem                                | Methods                           | Twist (unique point)                                                            | Time Complexity                                | Space Complexity                                               | Edge cases / Notes                                                 |
| --- | -------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1   | Print all subsequences (power set)     | 1. Inclusion–Exclusion (pick/not) | Store curr in ans at base/each call                                             | 2^n subsets × O(n) copy → O(n·2^n)             | Output O(n·2^n) + call stack O(n) → O(n·2^n) dominates         | Empty [] → [[]]; duplicates need handling; impractical for n > ~20 |
|     |                                        | 2. DFS/Backtracking with loop     | Push path at every node, recurse with i+1                                       |                                                |                                                                |                                                                    |
| 2   | Count all subsequences                 | 1. Inclusion–Exclusion (pick/not) | Increment at base case OR return 1 at base and sum counts                       | 2^n leaves × O(1) → O(2^n)                     | Call stack O(n), no output → O(n)                              | Direct formula = 2^n; apply modulo if required                     |
|     |                                        | 2. DFS/Backtracking with loop     | Increment count at each call OR return 1+Σdfs(i+1)                              |                                                |                                                                |                                                                    |
| 3   | Sum of all subsequences                | 1. Inclusion–Exclusion (pick/not) | Pass `sum`; at base push sum (no curr needed)                                   | 2^n leaves × O(1) → O(2^n)                     | Result O(2^n) + call stack O(n) → O(2^n) dominates             | Empty → [0]; order differs; sort if ordered needed                 |
|     |                                        | 2. DFS/Backtracking with loop     | Push `sum` at each node; recurse with sum+nums[i]                               |                                                |                                                                |                                                                    |
| 4   | Print subsequences with sum = K        | 1. Inclusion–Exclusion (pick/not) | Carry sum+curr; at base push only if sum===K; return boolean if only one needed | O(2^n + m·n) worst-case O(n·2^n) (m = matches) | Output O(m·n) + call stack O(n) + curr O(n) → O(m·n) dominates | Prune if nums ≥ 0; skip duplicates if needed                       |
|     |                                        | 2. DFS/Backtracking with loop     | Push curr only if sum===K; return boolean to short-circuit for one              |                                                |                                                                |                                                                    |
| 5   | Count subsequences with sum = K        | 1. Inclusion–Exclusion (pick/not) | Base: return sum===K?1:0; prune sum>K if nums ≥ 0                               | O(2^n) worst-case (pruning may reduce)         | Call stack O(n), no output → O(n)                              | Careful when k==0; negatives/zeros break pruning                   |
|     |                                        | 2. DFS/Backtracking with loop     | Count++ when sum===K; avoid globals by return sum                               |                                                |                                                                |                                                                    |
| 6   | Print only one subsequence with sum=K  | 1. Inclusion–Exclusion (pick/not) | Return boolean; stop exploring once true bubbles up                             | Best O(n) if early found; worst O(2^n)         | Call stack O(n) + curr O(n) → O(n)                             | Prefer return-boolean short-circuit; pruning only safe if nums ≥ 0 |
|     |                                        | 2. DFS/Backtracking with loop     | Inside loop `if(dfs(...)) return true`; stop early                              |                                                |                                                                |                                                                    |
| 7   | Subsets of a string (power set)        | 1. Inclusion–Exclusion (pick/not) | Use char-array curr; snapshot with join() to avoid concat cost                  | 2^n leaves × O(n) per build → O(n·2^n)         | Output O(n·2^n) + call stack O(n) + curr O(n) → O(n·2^n)       | Empty "" → [""]; duplicates handled by sort+skip                   |
|     |                                        | 2. DFS/Backtracking with loop     | Same with char array; push snapshot each node                                   |                                                |                                                                |                                                                    |
| 8   | Subsets with duplicates handled        | 1. DFS/Backtracking with loop     | Sort; skip dupes in loop (`if(i>start && s[i]==s[i-1]) continue`)               | 2^n leaves × O(n) → O(n·2^n)                   | Output O(n·2^n) + call stack O(n) → O(n·2^n)                   | Works for nums or string chars; must sort first                    |
|     |                                        | 2. Inclusion–Exclusion (pick/not) | Skip over equal block in not-pick branch                                        | Same as above                                  | Same as above                                                  | DFS variant more common; both valid                                |
| 9   | Combination Sum (LC 39, reuse allowed) | 1. Inclusion–Exclusion (pick/not) | Pick→recurse(idx) for reuse; not-pick→recurse(idx+1)                            | O(m·L) output-driven; worst-case exponential   | Recursion O(L) + output O(m·L)                                 | Sort to prune; disallow 0 (infinite loop risk); dedupe if needed   |
|     |                                        | 2. DFS/Backtracking with loop     | Recurse with `i` to allow reuse; prune if cand[i]>remaining                     |                                                |                                                                |                                                                    |
| 10  | Combination Sum II (LC 40, no reuse)   | 1. DFS/Backtracking with loop     | Sort; skip dupes; recurse with i+1 (no reuse)                                   | O(m·L) output-driven; worst-case exponential   | Recursion O(L) + output O(m·L)                                 | Sort+skip needed; prune if cand[i]>remaining                       |
|     |                                        | 2. Inclusion–Exclusion (pick/not) | Not-pick branch skips equal block                                               | Same as above                                  | Same as above                                                  |                                                                    |

| #   | Problem                             | Methods                                                                                                                            | Twist (unique point)                                                                                                               | Time Complexity                                     | Space Complexity                              | Edge cases / Notes                                                                                                                             |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | Partition equal subset sum (LC 416) | 1. Inclusion–Exclusion (pick/not)<br>2. DFS/Backtracking (for-loop)<br>3. DP (0/1 knapsack) _(will be picked later with DP)_       | Compute total; if odd return false; target = total/2; helper returns boolean (or set found flag) to short-circuit when sum==target | Brute-force O(2^n); DP O(n \* target)               | Brute-force call stack O(n); DP O(target)     | Prune sum>target only for non-negative nums; prefer DP for larger inputs; reset globals between testcases                                      |
| 12  | Longest subsequence with sum ≤ K    | 1. Inclusion–Exclusion (pick/not)<br>2. DFS/Backtracking (for-loop)<br>3. DP _(will be picked later with DP)_                      | Track (sumSoFar, lenSoFar); update best at each visited node (not just leaf); return best or use global                            | Brute-force O(2^n); DP O(n·K) for efficient version | Call stack O(n) + curr O(n); DP O(K)          | Prune sum>K only for non-negative nums; if order doesn’t matter use greedy (sort & take smallest); for efficiency use DP or meet-in-the-middle |
| 13  | Count distinct subsequences         | 1. Brute-force subseq + Set<br>2. DFS/Backtracking (for-loop)<br>3. DP (LC 940) _(will be picked later with DP)_                   | Brute: generate all subseqs and dedupe in Set; DP: `dp[i] = 2*dp[i-1] - dp[last[c]-1]` for optimized counting                      | Brute O(n·2^n); DP O(n)                             | Brute O(n·2^n) (set); DP O(n) or O(1) rolling | Brute only for tiny n; DP requires last-occurrence map and modulo handling                                                                     |
| 14  | Is s1 a subsequence of s2?          | 1. Brute-force subseq generation<br>2. DFS/Backtracking (for-loop)<br>3. Two-pointer / next-table _(will be picked later with DP)_ | Brute: generate subseqs of s2 and compare to s1 (Stage-5); two-pointer is standard O(m+n) check                                    | Brute O(2^n·m); two-pointer O(m+n)                  | Brute call stack O(n); two-pointer O(1)       | Brute is correct but exponential; two-pointer or next-table preferred for production/multiple queries                                          |
| 15  | Subset sum problem (basic DP)       | 1. Inclusion–Exclusion (pick/not)<br>2. DFS/Backtracking (for-loop)<br>3. DP (subset-sum 0/1) _(will be picked later with DP)_     | Brute: helper returns boolean for target reachability; DP: boolean dp[s] reachable sums                                            | Brute O(2^n); DP O(n·target)                        | Brute call stack O(n); DP O(target)           | Standard knapsack variant; pruning requires non-negative numbers; DP preferred for larger constraints                                          |

| #   | Problem                                     | Methods                                                              | Twist (unique point)                                                                                                                                                                           | Time Complexity                                                                                                                         | Space Complexity                                                                                                                    | Edge cases / Notes                                                                                                                                                                                                                                                                                                 |
| --- | ------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P1  | Product of all subsequences                 | 1. Inclusion–Exclusion (pick/not)                                    | Replace `sum` with `product`; init product=1; at `idx==n` push product                                                                                                                         | 2^n leaves × O(1) per leaf → O(2^n)                                                                                                     | Result O(2^n) (products) + call stack O(n) → O(2^n)                                                                                 | Empty subset product = 1 (decide whether to include); watch zeros, negatives, overflow; use modulo or big-int if required                                                                                                                                                                                          |
|     |                                             | 2. DFS/Backtracking with loop                                        | Push current product at node; recurse with product\*nums[i] for include                                                                                                                        |                                                                                                                                         |                                                                                                                                     | Use set to dedupe identical products; use log-sum for comparisons to avoid overflow                                                                                                                                                                                                                                |
|     |
| P2  | Print subsequences in lexicographical order | 1. Inclusion–Exclusion (pick/not) <br> 2. DFS/Backtracking with loop | **Generally means subsets** (so sort input first, recursion yields lex order). <br> **Strict subsequence meaning** → generate all subsequences in original order, then sort output afterwards. | **Subset-style:** Generate O(2^n · n) (already lex-ordered) <br> **Strict subsequence:** Generate O(2^n · n) + Sort O(2^n log(2^n) · n) | **Subset-style:** O(2^n · n) output + call stack O(n) <br> **Strict subsequence:** O(2^n · n) output + O(2^n · n) extra for sorting | - Clarify problem statement: many tutorials misuse “subsequence” but actually mean “subset”. <br>- Subset-style: sort input first → lex order natural in recursion. <br>- Strict subsequence: cannot sort input (breaks definition), must sort only the final results. <br>- Empty subsequence always comes first. |

# Subsequence Problems Roadmap (with Status)

## Stage 1: Basics of subsequences

| #   | Problem                            | Status   |
| --- | ---------------------------------- | -------- |
| 1   | Print all subsequences (power set) | **Done** |
| 2   | Count all subsequences             | **Done** |
| 3   | Sum of all subsequences            | **Done** |

**Optional**

| #   | Problem                                     | Status   |
| --- | ------------------------------------------- | -------- |
| P1  | Product of all subsequences                 | **Done** |
| P2  | Print subsequences in lexicographical order | **Done** |

---

## Stage 2: Subsequence with conditions

| #   | Problem                                | Status   |
| --- | -------------------------------------- | -------- |
| 4   | Print subsequences whose sum = K       | **Done** |
| 5   | Count subsequences whose sum = K       | **Done** |
| 6   | Print only one subsequence whose sum=K | **Done** |

**Optional**

| #   | Problem                                | Status      |
| --- | -------------------------------------- | ----------- |
| P3  | Print subsequences of fixed length = K | **Pending** |
| P4  | Count subsequences with odd/even sum   | **Pending** |

---

## Stage 3: Power set variations

| #   | Problem                                     | Status   |
| --- | ------------------------------------------- | -------- |
| 7   | Subsets of a string                         | **Done** |
| 8   | Subsets of a string with duplicates handled | **Done** |

**Optional**

| #   | Problem                                         | Status      |
| --- | ----------------------------------------------- | ----------- |
| P5  | Generate power set using bitmasking (iterative) | **Pending** |

---

## Stage 4: Advanced subsequence problems

| #   | Problem                                                                           | Status   |
| --- | --------------------------------------------------------------------------------- | -------- |
| 9   | Subsequence sum = target (LC 39 – Combination Sum, reuse allowed)                 | **Done** |
| 10  | Subsequence sum = target (LC 40 – Combination Sum II, no reuse, duplicates exist) | **Done** |
| 11  | Partition array into two equal sum subsets (classic)                              | **Done** |
| 12  | Longest subsequence with sum ≤ K                                                  | **Done** |

**Optional**

| #   | Problem                                 | Status      |
| --- | --------------------------------------- | ----------- |
| P6  | Subset Sum Exists or Not (basic yes/no) | **Pending** |
| P7  | Subset with maximum sum < target        | **Pending** |
| P8  | Minimum difference partition problem    | **Pending** |

---

## Stage 5: Subsequence on strings

| #   | Problem                                       | Status   |
| --- | --------------------------------------------- | -------- |
| 13  | Print all subsequences of a string            | **Done** |
| 14  | Count distinct subsequences                   | **Done** |
| 15  | Check if one string is subsequence of another | **Done** |

**Optional**

| #   | Problem                                                          | Status      |
| --- | ---------------------------------------------------------------- | ----------- |
| P9  | Longest Common Subsequence (LCS)                                 | **Pending** |
| P10 | Shortest subsequence of one string covering all chars of another | **Pending** |

---

## Stage 6: Classic DP built on choice recursion

| #   | Problem                             | Status      |
| --- | ----------------------------------- | ----------- |
| 16  | Subset sum problem (basic DP)       | **Pending** |
| 17  | Partition equal subset sum (LC 416) | **Pending** |
| 18  | Count subsets with given difference | **Pending** |
| 19  | Target sum ways (LC 494)            | **Pending** |

**Optional**

| #   | Problem                                       | Status      |
| --- | --------------------------------------------- | ----------- |
| P11 | Count subsets with given sum                  | **Pending** |
| P12 | Coin Change problems (min coins / count ways) | **Pending** |
| P13 | Rod Cutting problem (variant of coin change)  | **Pending** |

---

---

---

# Permutation Generation — Notes

## 1. Core Recursive Patterns

In recursion, there are **four distinct ways** to generate all permutations:

1. **Swap-based recursion (in-place)**

   - Fix index `i`, swap each candidate into that position, recurse on `i+1`.
   - Uses the array itself to track choices.
   - Efficient, less extra memory.

2. **Visited-array recursion**

   - Maintain a `used[]` array and a `current` path.
   - At each step, loop over all unused elements, mark as used, recurse, unmark.
   - Very intuitive and clean for teaching/interviews.

3. **Insertion method**

   - Generate permutations of `n-1` elements, then insert the missing element in all possible positions.
   - Pure functional style (build new lists each time).
   - Less common in practice, but conceptually simple.

4. **Heap’s algorithm**
   - Special recursive swap scheme with minimal swaps.
   - Often faster in practice.
   - Used in some libraries for efficiency.

👉 **Handling duplicates** is not a separate method. It’s just an _extra check_ layered on swap/visited to skip repeated elements.

👉 **k-permutations** (partial permutations) is also not a new method — it’s the same recursion but with an early stop when path length = k.

---

## 2. Beyond Recursive Generation

If we expand outside recursion, other approaches exist:

### Iterative Methods

- **`next_permutation` algorithm (lexicographic order)**

  - Start with sorted array, repeatedly generate the next permutation in O(n).
  - Used in C++ STL.
  - Best when you need permutations in sorted order.

- **Iterative Heap’s algorithm**

  - Non-recursive version of Heap’s.

- **Johnson–Trotter algorithm**
  - Generates permutations by adjacent swaps only.
  - Each step changes the permutation minimally.

### Mathematical / Mapping Methods

- **Factoradic representation**

  - Map integers 0..n!-1 to unique permutations.
  - Used for ranking/unranking and finding the k-th permutation directly.

- **Lehmer code**
  - Another ranking/unranking technique.

### Dynamic Programming (DP)

- Rarely used for generating all permutations (output size is factorial).
- Useful for **counting** or **optimization problems** over permutations (e.g., Travelling Salesman, Hamiltonian paths) via bitmask DP.

---

## 3. Which Method is Best?

### General / Teaching / Interviews

- **Recursive backtracking (visited-array or swap)** is the most common.
- Easy to implement, intuitive, works well for small `n`.

### Ordered Generation

- **Iterative `next_permutation`** is the best when lexicographic order is required.
- Avoids recursion overhead, simple loop.

### Performance-sensitive

- **Heap’s algorithm** is preferred when minimizing swaps is important.
- **Johnson–Trotter** when you need only adjacent swaps.

### Direct Access (k-th permutation)

- **Factoradic / Lehmer code** is the most efficient.
- No need to generate all permutations.

---

## 4. Analogy with Factorial

- Factorial can be computed by recursion or iteration, but **iteration is best in practice**.
- Similarly:
  - **Recursion (visited/swap)** = best for learning and interviews.
  - **Iterative next_permutation** = practical best for lexicographic generation.
  - **Mathematical mapping** = best for direct indexing.

---

## 5. Summary Table

| Category                  | Methods                                             | Notes / Use Cases                          |
| ------------------------- | --------------------------------------------------- | ------------------------------------------ |
| **Recursive**             | Swap, Visited, Insertion, Heap’s                    | Standard, intuitive, factorial complexity  |
| **Iterative**             | next_permutation, Heap’s iterative, Johnson–Trotter | Efficient, ordered, adjacent swaps         |
| **Mathematical Mapping**  | Factoradic, Lehmer code                             | Direct k-th permutation, ranking/unranking |
| **DP (related problems)** | Bitmask DP, Hamiltonian, TSP                        | For counting/optimizing, not enumeration   |

---

# Recursion – Permutation Pattern Problems

## 1. Basic permutations

- LeetCode 46. Permutations

## 2. Unique permutations (with duplicates)

- LeetCode 47. Permutations II

## 3. String permutations

- GFG: Permutations of a given string

## 4. K-length permutations

- LeetCode 77. Combinations (extend to k-length permutations)
- GFG: Print all possible strings of length k (with/without repetition)

## 5. Constraint-based permutations

- Adapt LC 46 with pruning logic (e.g., adjacency rules, fixed positions)
- GFG: Knight’s Tour (example of constraint-based recursion)

## 6. Subsets → Permutations

- LeetCode 78. Subsets (generate subsets)
- Then permute each subset (using LC 46 approach)

## 7. Derangements (recursion approach)

- GFG: Derangements (generate permutations where no element stays at original index)

- **Swap-based recursion** → works for all 7 categories.
- **Visited-array recursion** → works for all 7 categories.
- **Insertion method** → works cleanly for basic & string permutations; awkward for duplicates, constraints, subsets.
- **Heap’s algorithm** → efficient for basic permutations, but not suited for constraints, k-length, subsets, or derangements.

### Summary:

- **Swap** and **Visited** are the **universal tools** — they can handle all categories.
- **Insertion** and **Heap’s algorithm** are educational/efficient in special cases but not flexible.
- Once you master Swap + Visited, you can solve any recursion-based permutation problem.
