import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Merge Sort

Merge Sort is a stable, divide-and-conquer sorting algorithm. It divides the array into halves, recursively sorts each half, then merges the sorted halves.

How it works:
1. Divide the array into two halves
2. Recursively sort each half
3. Merge the two sorted halves into a single sorted array
4. The merge step compares elements from both halves and places them in order

Time Complexity:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n log n)

Space Complexity: O(n) — requires temporary array

Properties:
  - Stable sort
  - Not in-place (requires O(n) extra space)
  - Predictable performance (always O(n log n))
  - Parallelizable

Merge Sort guarantees O(n log n) performance regardless of input. Ideal when stability is required or for sorting linked lists.`,
  de: `Merge Sort

Merge Sort is a stable, divide-and-conquer sorting algorithm. It divides the array into halves, recursively sorts each half, then merges the sorted halves.

Funktionsweise:
1. Divide the array into two halves
2. Recursively sort each half
3. Merge the two sorted halves into a single sorted array
4. The merge step compares elements from both halves and places them in order

Zeitkomplexität:
  Best:    O(n log n)
  Average: O(n log n)
  Worst:   O(n log n)

Raumkomplexität: O(n) — requires temporary array

Eigenschaften:
  - Stable sort
  - Not in-place (requires O(n) extra space)
  - Predictable performance (always O(n log n))
  - Parallelizable

Merge Sort guarantees O(n log n) performance regardless of input. Ideal when stability is required or for sorting linked lists.`,
}

export default descriptions
