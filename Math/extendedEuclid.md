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
