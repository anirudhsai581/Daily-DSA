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
