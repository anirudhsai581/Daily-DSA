# Bézout’s Identity, Modular Inverse & Extended Euclid — Complete Notes

---

## 1. Bézout’s Identity

For any integers `a` and `b`, there exist integers `x` and `y` such that:

    a*x + b*y = gcd(a, b)

- `x` and `y` are Bézout coefficients.
- If `gcd(a, b) = 1`, then:

        a*x + b*y = 1

---

## 2. Modular Inverse

The modular inverse of `a` modulo `m` is the integer `x` satisfying:

    a*x ≡ 1 (mod m)

**Exists if and only if:**

    gcd(a, m) = 1

**Unique:** exactly one inverse in the range `0 … m-1`.

---

## 3. Connection Between Bézout’s Identity & Modular Inverse

If:

    a*x + m*y = 1

Take modulo `m`:

    a*x ≡ 1 (mod m)

So the `x` in Bézout’s equation **is the modular inverse of a modulo m**.

Thus, computing a modular inverse =  
**finding Bézout coefficient x**.

---

## 4. Extended Euclidean Algorithm — Purpose

Extended Euclid computes:

- `gcd(a, b)`
- integers `x` and `y` such that:

      a*x + b*y = gcd(a, b)

This solves Bézout’s identity.

---

# Extended Euclidean Algorithm — Full Derivation + Notes

## Notation

- **q = ⌊a/b⌋** → quotient when dividing **a** by **b**
- **a % b = a − b·q** → remainder of **a** divided by **b**

---

# 1. Core Principle: Euclid’s Identity

The Extended Euclid algorithm is built on the identity:

**gcd(a, b) = gcd(b, a % b)**

This means:

- If we can find Bézout coefficients for **(b, a % b)**
- We can convert them into Bézout coefficients for **(a, b)**

---

# 2. Bézout Form for the Smaller Pair (b, a%b)

Since:

**gcd(b, a % b) = g**

we know there exist integers **x₁, y₁** such that:

**b·x₁ + (a % b)·y₁ = g**  
(Equation 1)

This equation is exactly what the recursive call returns.

---

# 3. Substitute the Remainder Expression

We know:

**a % b = a − b·q**, where **q = ⌊a/b⌋**

Substitute this into Equation (1):

b·x₁ + (a − b·q)·y₁ = g

---

# 4. Expand and Group Terms

= **a·y₁ + b·(x₁ − q·y₁)**

Now this matches the Bézout form for the original pair (a, b):

**a·x + b·y = g**

By comparing coefficients, we get:

- **x = y₁**
- **y = x₁ − q·y₁**

These are exactly the update rules in the algorithm.

---

# 5. Base Case

If **b = 0**, then:

**a·1 + 0·0 = a**

So Bézout coefficients are:

- **g = a**
- **x = 1**
- **y = 0**

---

# 6. Final Extended Euclid Algorithm (Derived Form)

```javascript
function extendedGCD(a, b) {
  if (b === 0) {
    return { g: a, x: 1, y: 0 };
  }

  const res = extendedGCD(b, a % b);
  const g = res.g;
  const x1 = res.x;
  const y1 = res.y;

  const q = Math.floor(a / b); // quotient of a / b

  const x = y1;
  const y = x1 - q * y1;

  return { g, x, y };
}
```

---

# 7. Modular Inverse

If **gcd(a, b) = 1**, the extended Euclid output gives:

**a·x + b·y = 1**

So **x is the modular inverse of a mod b**.

Normalize into positive range:

```javascript
function modInverse(a, b) {
  const { g, x } = extendedGCD(a, b);
  if (g !== 1) return null; // inverse does not exist
  return ((x % b) + b) % b;
}
```

---

# 8. Summary — What to Remember (Very Important)

1. Start from the truth:  
   **gcd(a, b) = gcd(b, a % b)**

2. Write Bézout for the smaller pair:  
   **b·x₁ + (a % b)·y₁ = g**

3. Replace remainder:  
   **a % b = a − b·q**

4. Expand:  
   **a·y₁ + b·(x₁ − q·y₁) = g**

5. Identify coefficients:

   - **x = y₁**
   - **y = x₁ − q·y₁**

6. Base case gives:  
   **(g, x, y) = (a, 1, 0)** when b = 0

This is the entire Extended Euclid algorithm, derived from first principles.

## 5. Extended Euclid — Base Case

When:

    b = 0

Then:

    gcd(a, 0) = a

Bézout’s equation:

    a*1 + 0*0 = a

So return:

- `x = 1`
- `y = 0`

---

## 6. Extended Euclid — Recurrence Relation

Recursive call:

    gcd, x1, y1 = extendedEuclid(b, a % b)

Given:

    b*x1 + (a % b)*y1 = gcd

Let:

- `q = floor(a / b)`
- `r = a % b = a - q*b`

Substitute:

    b*x1 + (a - q*b)*y1 = gcd

Expand:

    a*y1 + b*(x1 - q*y1) = gcd

Match with:

    a*x + b*y = gcd

Therefore:

    x = y1
    y = x1 - q*y1

This is the key formula.

---

## 7. Modular Inverse Using Extended Euclid

If `gcd(a, m) = 1`:

    gcd, x, y = extendedEuclid(a, m)

The modular inverse is:

    inverse = (x % m + m) % m

---

## 8. Full JavaScript Implementation

    function extendedGCD(a, b) {
        if (b === 0) return { gcd: a, x: 1, y: 0 };

        const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);
        const q = Math.floor(a / b);

        return {
            gcd,
            x: y1,
            y: x1 - q * y1
        };
    }

    function modInverse(a, m) {
        const { gcd, x } = extendedGCD(a, m);
        if (gcd !== 1) throw new Error("Inverse doesn't exist");
        return (x % m + m) % m;
    }

---

## 9. Final Key Points (Interview-Ready)

- Inverse exists only if `gcd(a, m) = 1`.
- Bézout identity expresses gcd as linear combination.
- Extended Euclid calculates Bézout coefficients.
- Modular inverse = Bézout coefficient `x` when gcd = 1.
- Formula for x and y comes directly from:

      r = a - floor(a/b)*b

---
