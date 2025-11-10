# 📚 My Learning Notes for Math

<!-- USE CTRL+SHIFT+V inside md file to preview rendered in vscode itself -->

## 📌 Modular Arithmetic :

# TOPIC — MODULAR ARITHMETIC

## 1. What is Modulo?

Given integers a and m, a mod m is the remainder when a is divided by m. Modulo keeps numbers from growing too large (prevents overflow).

Examples:
17 % 5 = 2
-3 % 5 = 2 (normalize using +m)

Modulo result is always in:
0 ≤ x < m

## 2. Modular Arithmetic as Clock Arithmetic

Think of numbers on a circular clock of size m. Operations wrap around after m.

Example (mod 7):
5 + 4 = 9 → 9 % 7 = 2

## 3. Basic Modular Operations

### 3.1 Addition

    (a + b) mod m = ( (a mod m) + (b mod m) ) mod m

### 3.2 Subtraction

    (a - b) mod m = ( (a mod m) - (b mod m) + m ) mod m

(+m avoids negatives)

### 3.3 Multiplication

    (a * b) mod m = ( (a mod m) * (b mod m) ) mod m

These three operations are valid for all integers a, b, m.

## 4. Why Division is Special in Modulo

Division is NOT:
(a / b) % m

In modulo, division means:
a / b ≡ a \* b⁻¹ (mod m)

Where b⁻¹ is the modular inverse of b.
Inverse exists only if:
gcd(b, m) = 1

### 4.1 Meaning of the Modular Division Syntax:

### 4.1.1. The symbol “≡”

“≡” means **congruent modulo m**, i.e., two numbers give the same remainder when divided by m.

Example:
17 ≡ 2 (mod 5)
(because 17 % 5 = 2 and 2 % 5 = 2)

It is just equality in modular arithmetic.

---

### 4.1.2. The notation b⁻¹

    b⁻¹ does **not** mean 1/b.

It means the **modular inverse** of b under modulo m.

Definition:
b⁻¹ is the number x such that:
b \* x ≡ 1 (mod m)

Example:
3⁻¹ mod 7 = 5
because:
3 \* 5 = 15 ≡ 1 (mod 7)

---

### 4.1.3. Why division becomes multiplication

Regular division does not exist in modular arithmetic.

So we DEFINE modular division as:
(a / b) mod m = (a \* b⁻¹) mod m

You **multiply by the modular inverse** instead of dividing.

- This is the only correct meaning of division in modulo.(doing normal division like a/b and then finding mod is wrong , this division doesnt exist in modular arithmetic it only present in normal arithmetic. also the inverse exists only if below point holds (refer 4.1.4))

---

### 4.1.4. Condition for modular inverse to exist

b⁻¹ exists **only if**:
gcd(b, m) = 1

If gcd ≠ 1, modular inverse does not exist and division is impossible in modulo.

## 5. Modular Properties (Very Important)

### 5.1 Associativity

    (a + (b + c)) % m = ((a + b) + c) % m
    (a * (b * c)) % m = ((a * b) * c) % m

### 5.2 Commutativity

    a + b ≡ b + a (mod m)
    a * b ≡ b * a (mod m)

### 5.3 Distributivity

    a * (b + c) % m = (a*b + a*c) % m

Used heavily in DP, combinatorics, hashing, nCr, etc.

## 6. Practical Modular Pattern in Code

Typical safe updates in a loop:

    ans = (ans + x) % m
    ans = (ans - x + m) % m
    ans = (ans * x) % m

Normalize negatives:
x = (x % m + m) % m

## 7. Periodicity

Modulo is periodic:
(a + k\*m) % m = a % m
This is why we reduce values with mod first.

## 8. Working with BigInt (JavaScript)

If a or b may exceed 2^53 - 1, use BigInt:

    let mod = 1000000007n
    let x = (a * b) % mod

All operands must be BigInt.

## 9. Special Results when m is Prime

### Fermat’s Little Theorem:

If m is prime and gcd(a, m) = 1:
a^(m-1) ≡ 1 (mod m)

Modular Inverse (prime mod only):
a^(m-2) ≡ a⁻¹ (mod m)

This is the basis for:
fastPower(a, m-2) % m

Very common with m = 1e9+7.

## 10. Why Modular Arithmetic is Important

Used in:

- factorials and nCr % mod
- dynamic programming
- polynomial hashing
- matrix exponentiation
- number theory questions
- preventing overflow
- competitive programming

This is foundational for the next topics: 3. Modular Inverse 4. Binary Exponentiation 5. Sieve + Factorization 6. nCr % mod with factorials

# Topic 3: Modular Inverse

## (Ignore Topic numbering )

## 3.1 What is Modular Inverse?

For integers `n` and modulus `m`, the modular inverse of `n` (mod `m`) is a number `x` such that:

    (n * x) % m == 1

This `x` behaves like `1/n` under modulo arithmetic.

It is the only correct way to do division under modulo:

    (a / b) % m  ≡  (a * b⁻¹) % m

---

## 3.2 When Does Modular Inverse Exist?

A modular inverse of `n` under modulo `m` exists **iff**:

    gcd(n, m) = 1

If gcd ≠ 1 → inverse does NOT exist.

If gcd = 1 → exactly one inverse exists in the range:

    1 ≤ x < m

---

## 3.3 Why Inverse Is Unique in [1, m−1]

If one inverse is `x₀`, then all others are of the form:

    x = x₀ + k*m     (k ∈ integers)

One of these always lies between `0` and `m−1`:

    x = (x₀ % m + m) % m

`x = 0` cannot satisfy n\*x ≡ 1, so the inverse lies in:

    1 ≤ x ≤ m−1

---

## 3.4 Three Methods to Compute Modular Inverse

### Method 1: Extended Euclidean Algorithm (Works Always)

We solve:

    n*x + m*y = gcd(n,m)

If gcd = 1:

    n*x + m*y = 1   →  n*x ≡ 1 (mod m)

The `x` from EEA is the inverse.
If `x` is negative:

    x = (x % m + m) % m

Time complexity: O(log m).

Use this when modulus is composite or unknown.

---

### Method 2: Fermat’s Little Theorem (ONLY When m is Prime)

FLT says:

    a^(m-1) ≡ 1 (mod m)

Rewrite:

    a^(m-1) = a^(m-2) * a ≡ 1  →  a^(m-2) ≡ a⁻¹

So inverse is:

    a^(m-2) % m

Computed using fast exponentiation in O(log m).

Use only when m is prime (like 1e9+7, 998244353).

---

### Method 3: Brute Force (Only for Small m)

If m ≤ 10^5, you can test all x from 1 to m−1:

    if (n * x) % m == 1 → return x

Time: O(m). Only use when constraints allow.

---

## 3.5 Using Modular Inverse for Division

To compute:

    (a / b) % m

You must convert it to:

    (a * b⁻¹) % m

You CANNOT do `(a / b) % m` directly.

Inverse must exist (gcd(b, m) = 1).

---

## 3.6 Key Rules & Facts to Remember

- Inverse exists only when gcd(n, m) = 1.
- Inverse is unique in [1, m−1].
- EEA works for all cases.
- Fermat works only for prime mod.
- Use modular inverse whenever division appears under modulo.
- Normalize negative values with `(x % m + m) % m`.

---

## 3.7 Example (Simple)

Find inverse of `3` mod `11`.

Check gcd(3, 11) = 1 → inverse exists.

Try:

- 3\*1 = 3
- 3\*2 = 6
- 3\*3 = 9
- 3\*4 = 12 → 12 % 11 = 1 ✅

Answer: 4.

---

## 3.8 Example (Using Fermat, m = 11)

    3^(11-2) = 3^9 % 11 = 4

Matches the brute force result.

---

## 3.9 Example (EEA)

Solve:

    3x + 11y = 1

EEA gives x = -7.

Normalize:

    (-7 % 11 + 11) % 11 = 4

Inverse = 4.

---

# Summary

- Modular inverse lets us divide under modulo.
- Exists iff gcd(n, m) = 1.
- EEA → general, always works, O(log m).
- Fermat → only when m is prime.
- Normalize negative results.
- Inverse always lives in [1, m−1].

Inline code looks like this: `const x = 10;`

---

<!-- ===================== -->
<!--     JS CODE BLOCK     -->
<!-- ===================== -->

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Anirudh");
```

---

<!-- ===================== -->
<!--        IMAGE          -->
<!-- ===================== -->

![Alt text: short description for accessibility](images/example.png)

<!-- Replace 'images/example.png' with your image path or URL.
     The alt text describes the image for screen readers or if the image can't load -->

---

<!-- ===================== -->
<!--       LISTS           -->
<!-- ===================== -->

- Bullet item 1
- Bullet item 2
  - Nested bullet item

1. First numbered step
2. Second numbered step

---

<!-- ===================== -->
<!--     BLOCKQUOTE        -->
<!-- ===================== -->

> 💡 This is a blockquote — good for tips, notes, or quotes.

---

<!-- ===================== -->
<!--    HORIZONTAL LINE    -->

## <!-- ===================== -->

<!-- Creates a horizontal rule to separate sections -->
