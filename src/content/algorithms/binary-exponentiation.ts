import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Binary Exponentiation

Binary Exponentiation computes aⁿ in O(log n) time by halving the exponent at each step instead of multiplying a by itself n times.

How it works:
1. Base case: a⁰ = 1
2. Recursively compute half = binPow(base, floor(exp / 2))
3. If exp is even, return half × half
4. If exp is odd, return half × half × base

Why it is fast:
  Each recursive call cuts the exponent in half, so the recursion depth is proportional to log₂ n instead of n.

Time Complexity:
  Best:    O(log n)
  Average: O(log n)
  Worst:   O(log n)

Space Complexity: O(log n) for the recursive call stack

Applications:
  - Modular exponentiation in cryptography
  - Fast matrix exponentiation
  - Competitive programming and number theory

The key insight is that powers can be reused: once you know a^(n/2), you can square it to recover most of the work immediately.`,
  de: `Binary Exponentiation

Binary Exponentiation computes aⁿ in O(log n) time by halving the exponent at each step instead of multiplying a by itself n times.

Funktionsweise:
1. Base case: a⁰ = 1
2. Recursively compute half = binPow(base, floor(exp / 2))
3. If exp is even, return half × half
4. If exp is odd, return half × half × base

Why it is fast:
  Each recursive call cuts the exponent in half, so the recursion depth is proportional to log₂ n instead of n.

Zeitkomplexität:
  Best:    O(log n)
  Average: O(log n)
  Worst:   O(log n)

Raumkomplexität: O(log n) for the recursive call stack

Anwendungen:
  - Modular exponentiation in cryptography
  - Fast matrix exponentiation
  - Competitive programming and number theory

The key insight is that powers can be reused: once you know a^(n/2), you can square it to recover most of the work immediately.`,
}

export default descriptions
