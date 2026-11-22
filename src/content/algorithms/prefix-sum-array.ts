import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Prefix Sum Array

A Prefix Sum Array preprocesses a static array so range-sum queries become O(1). Each position stores the sum of all elements up to that index.

How it works:
1. Build prefix[0] = arr[0]
2. For each next index, add the current value to the previous prefix
3. Answer sum(l, r) with prefix[r] - prefix[l - 1]
4. If l = 0, the answer is just prefix[r]

Time Complexity: O(n) preprocessing, O(1) per query
Space Complexity: O(n)

Best when:
  - The array is static
  - You need many range-sum queries
  - You want to trade one preprocessing pass for instant lookups

Limitation:
  - Point updates are not handled efficiently here; for dynamic updates use other structures such as Fenwick Tree or Segment Tree.`,
  de: `Prefix Sum Array

A Prefix Sum Array preprocesses a static array so range-sum queries become O(1). Each position stores the sum of all elements up to that index.

Funktionsweise:
1. Build prefix[0] = arr[0]
2. For each next index, add the current value to the previous prefix
3. Answer sum(l, r) with prefix[r] - prefix[l - 1]
4. If l = 0, the answer is just prefix[r]

Zeitkomplexität: O(n) preprocessing, O(1) per query
Raumkomplexität: O(n)

Best when:
  - The array is static
  - You need many range-sum queries
  - You want to trade one preprocessing pass for instant lookups

Limitation:
  - Point updates are not handled efficiently here; for dynamic updates use other structures such as Fenwick Tree or Segment Tree.`,
}

export default descriptions
