import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Stack

A Stack is a linear data structure that follows the LIFO principle — Last In, First Out. Like a stack of plates: you add and remove from the top only.

Operations:
  push(item) — add to top       O(1)
  pop()      — remove from top   O(1)
  peek()     — view top          O(1)
  isEmpty()  — check if empty    O(1)

Applications:
  - Undo/redo functionality
  - Browser history (back/forward)
  - Function call stack
  - Depth-First Search (DFS)
  - Expression evaluation and parsing
  - Balanced parentheses checking

Space Complexity: O(n) for n elements`,
  de: `Stack

A Stack is a linear data structure that follows the LIFO principle — Last In, First Out. Like a stack of plates: you add and remove from the top only.

Operations:
  push(item) — add to top       O(1)
  pop()      — remove from top   O(1)
  peek()     — view top          O(1)
  isEmpty()  — check if empty    O(1)

Anwendungen:
  - Undo/redo functionality
  - Browser history (back/forward)
  - Function call stack
  - Depth-First Search (DFS)
  - Expression evaluation and parsing
  - Balanced parentheses checking

Raumkomplexität: O(n) for n elements`,
}

export default descriptions
