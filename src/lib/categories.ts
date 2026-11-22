import { catalogCategories, algorithmCatalog } from '@lib/algorithms/catalog'
import type { Locale } from '@i18n/translations'
import { getCategoryName } from '@i18n/translations'
import type { AlgorithmSummary, CategorySummary } from '@lib/types'

/** URL slug for each catalog category (English IDs, shared by en/es routes). */
export const categorySlugs: Record<string, string> = {
  Concepts: 'concepts',
  'Data Structures': 'data-structures',
  Sorting: 'sorting',
  Searching: 'searching',
  Graphs: 'graphs',
  'Dynamic Programming': 'dynamic-programming',
  Backtracking: 'backtracking',
  'Divide and Conquer': 'divide-and-conquer',
  Math: 'math',
  Compression: 'compression',
}

const slugToCategory = Object.fromEntries(
  Object.entries(categorySlugs).map(([name, slug]) => [slug, name]),
) as Record<string, string>

export function getCategorySlug(categoryName: string): string | undefined {
  return categorySlugs[categoryName]
}

export function getCategoryNameFromSlug(slug: string): string | undefined {
  return slugToCategory[slug]
}

export function isCategorySlug(slug: string): boolean {
  return slug in slugToCategory
}

export function getCategoryBySlug(slug: string): CategorySummary | undefined {
  const name = slugToCategory[slug]
  if (!name) return undefined
  return catalogCategories.find((c) => c.name === name)
}

export function getAllCategorySlugs(): string[] {
  return Object.values(categorySlugs)
}

/** Hub intro copy for category landing pages. */
export function getCategoryIntro(locale: Locale, categoryName: string): string {
  const label = getCategoryName(locale, categoryName)
  if (locale === 'de') {
    const intros: Record<string, string> = {
      Concepts:
        'Grundlegende Algorithmen- und Datenstruktur-Konzepte: Komplexität, Muster und Techniken, die in fast allen Problemen vorkommen.',
      'Data Structures':
        'Klassische Datenstrukturen Schritt für Schritt visualisiert: Stacks, Queues, Listen, Hash-Tabellen, Bäume und Heaps.',
      Sorting:
        'Vergleichsbasierte und nicht-vergleichsbasierte Sortieralgorithmen. Vergleiche Komplexität, Stabilität und Einsatzzwecke.',
      Searching:
        'Lineare Suche, binäre Suche und Varianten auf sortierten Daten. Verstehe den Trade-off zwischen Vorbereitung und Abfragen.',
      Graphs:
        'Graphen-Traversierung und Algorithmen: BFS, DFS, kürzeste Pfade, minimale Spannbäume und topologische Sortierung.',
      'Dynamic Programming':
        'Klassiker der dynamischen Programmierung: Teilprobleme, Memoisation und DP-Tabellen anschaulich dargestellt.',
      Backtracking:
        'Backtracking-Erkundung: N-Damen-Problem, Sudoku und Wegfindung. Sieh, wie der Suchraum beschnitten wird.',
      'Divide and Conquer':
        'Teile das Problem, löse Teilprobleme und kombiniere Ergebnisse: Türme von Hanoi und mehr.',
      Math: 'Klassische mathematische Algorithmen: Euklidischer Algorithmus für den ggT und das Sieb des Eratosthenes für Primzahlen.',
      Compression:
        'Verlustfreie Kompression von RLE bis DEFLATE (gzip) und Brotli: Wörterbücher, Entropiekodierung und moderne Web-Pipelines.',
    }
    return (
      intros[categoryName] ?? `Entdecke interaktive Visualisierungen zu ${label.toLowerCase()}.`
    )
  }

  const intros: Record<string, string> = {
    Concepts:
      'Core algorithm and data-structure concepts: complexity, patterns, and techniques reused across most problems.',
    'Data Structures':
      'Classic data structures visualized step by step: stacks, queues, lists, hash tables, trees, and heaps.',
    Sorting:
      'Comparison and non-comparison sorting algorithms. Compare complexity, stability, and when to use each.',
    Searching:
      'Linear, binary, and ordered-data search variants. Learn the trade-off between preprocessing and queries.',
    Graphs: 'Graph traversals and algorithms: BFS, DFS, shortest paths, MST, and topological sort.',
    'Dynamic Programming':
      'Dynamic programming classics: subproblems, memoization, and DP tables made visual.',
    Backtracking:
      'Backtracking exploration: N-Queens, Sudoku, and pathfinding. See how the search space is pruned.',
    'Divide and Conquer':
      'Split the problem, solve subproblems, combine results. Tower of Hanoi and more.',
    Math: 'Classic math algorithms visualized step by step: the Euclidean algorithm for the greatest common divisor and the Sieve of Eratosthenes for primes.',
    Compression:
      'Lossless compression from RLE to DEFLATE (gzip) and Brotli: dictionaries, entropy coding, and real web pipelines.',
  }
  return intros[categoryName] ?? `Explore interactive ${label.toLowerCase()} visualizations.`
}

export function getCategoryMetaTitle(locale: Locale, categoryName: string): string {
  const label = getCategoryName(locale, categoryName)
  return locale === 'de'
    ? `${label} — Algorithmen-Visualisierer`
    : `${label} — Algorithm Visualizer`
}

export function getCategoryMetaDescription(locale: Locale, categoryName: string): string {
  const intro = getCategoryIntro(locale, categoryName)
  if (intro.length <= 160) return intro
  const cut = intro.slice(0, 157)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 120 ? lastSpace : 157)}...`
}

export function getRelatedAlgorithms(algorithm: AlgorithmSummary, limit = 6): AlgorithmSummary[] {
  return algorithmCatalog
    .filter((a) => a.category === algorithm.category && a.id !== algorithm.id)
    .slice(0, limit)
}
