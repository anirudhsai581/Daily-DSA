# Fermat Modular Inverse — Notes

## 1. When can we use Fermat Modular Inverse?

Use Fermat's method **only when the modulus `p` is prime**.

Conditions:

- `p` must be **prime**
- `gcd(a, p) = 1` (i.e., `a` not divisible by `p`)

This applies to popular mod values:

- **1_000_000_007 (1e9+7)**
- **998244353**
- Other prime moduli used in CP/DSA

---

# 2. Formula (from Fermat's Little Theorem)

Fermat’s Little Theorem:

```
a^(p-1) ≡ 1 (mod p)   (if p is prime)
```

Rearrange:

```
a * a^(p-2) ≡ 1 (mod p)
```

So the modular inverse of `a mod p` is:

```
a^(p-2) mod p
```

This gives:

```
a^(-1) mod p = a^(p-2) mod p
```

---

# 3. How to compute it fast?

Use **Binary Exponentiation (Fast Power — O(log p))**.

---

# 4. JavaScript Code

## Fast Power (Binary Exponentiation)

```javascript
function modPow(a, b, mod) {
  let res = 1;
  a = a % mod;

  while (b > 0) {
    if (b & 1) res = (res * a) % mod;
    a = (a * a) % mod;
    b >>= 1;
  }
  return res;
}
```

## Fermat Modular Inverse

```javascript
function fermatInverse(a, p) {
  // p must be prime
  return modPow(a, p - 2, p);
}
```

---

# 5. Example

Compute modular inverse of:

```
a = 3,  p = 7
```

Since 7 is prime, and gcd(3, 7) = 1, Fermat applies.

Compute:

```
3^(7-2) = 3^5  mod 7
```

Step-by-step:

```
3^1 = 3
3^2 = 9
3^3 = 27
3^4 = 81
3^5 = 243
243 mod 7 = 5
```

So:

```
3^(-1) mod 7 = 5
```

Verification:

```
3 * 5 = 15
15 mod 7 = 1   ✓ correct
```

---

# 6. When to Use Fermat vs Extended Euclid

| Method              | Works When           | Complexity | Use Case                                    |
| ------------------- | -------------------- | ---------- | ------------------------------------------- |
| **Fermat Inverse**  | Modulus is **prime** | O(log p)   | Competitive coding, mod 1e9+7, 998244353    |
| **Extended Euclid** | **Any modulus**      | O(log m)   | General modular inverse, RSA, non-prime mod |

For DSA and FAANG:

- Use **Fermat** when mod is prime
- Use **Extended Euclid** when mod is NOT prime

---

# 7. Final Summary

- If `p` is prime → inverse(a) = **a^(p−2) mod p**
- Compute using **fast exponentiation**
- Very important for:
  - nCr mod p
  - modular division
  - inverse factorials
  - hashing
  - combinatorics in DSA

This method is one of the most frequently used number-theory tricks in FAANG interviews.
