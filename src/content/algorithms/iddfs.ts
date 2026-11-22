import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Iterative Deepening Depth-First Search (IDDFS)

IDDFS combines the space-efficiency of Depth-First Search (DFS) with the optimality and completeness of Breadth-First Search (BFS).

How it works:
1. Run depth-limited DFS starting from depth limit = 0.
2. If the target is found, terminate and return the result.
3. If the target is not found at the current depth limit, increment the limit by 1.
4. Repeat DFS from the root up to the new depth limit until the target is found or all reachable nodes are exhausted.

Why use IDDFS?
- BFS uses O(b^d) memory, which easily exhausts RAM for large branching factors.
- DFS uses only O(d) memory, but can get trapped in deep or infinite branches and does not guarantee the shortest path on unweighted graphs.
- IDDFS visits nodes layer by layer like BFS while only requiring O(d) stack space like DFS. The repeated exploration of top layers adds only a small constant-factor overhead (approx. b / (b - 1)).

Time Complexity: O(b^d)
  b = branching factor, d = depth of goal / maximum depth

Space Complexity: O(d) — only requires stack space proportional to the current depth limit.

Applications:
  - Game tree searching (e.g., Chess, Checkers) with time limits
  - AI state-space search (e.g., 15-puzzle, Rubik's cube with IDA*)
  - Finding shortest paths when memory is strictly constrained`,
  de: `Tiefensuche mit iterativer Vertiefung (IDDFS)

IDDFS kombiniert die Platzeffizienz der Tiefensuche (DFS) mit der Optimalität und Vollständigkeit der Breitensuche (BFS).

Funktionsweise:
1. Führe eine tiefenbeschränkte DFS beginnend bei Tiefenlimit = 0 aus.
2. Wenn das Ziel gefunden wird, beende die Suche und gib das Ergebnis zurück.
3. Wenn das Ziel im aktuellen Tiefenlimit nicht gefunden wurde, erhöhe das Limit um 1.
4. Wiederhole die DFS von der Wurzel bis zum neuen Limit, bis das Ziel gefunden ist oder alle erreichbaren Knoten durchsucht wurden.

Warum IDDFS?
- BFS benötigt O(b^d) Speicher, was bei großen Verzweigungsfaktoren den RAM schnell erschöpft.
- DFS benötigt nur O(d) Speicher, kann sich aber in tiefen oder unendlichen Pfaden verlieren und garantiert in ungewichteten Graphen nicht den kürzesten Pfad.
- IDDFS besucht Knoten Schicht für Schicht wie BFS, benötigt aber nur O(d) Stack-Speicher wie DFS. Die erneute Erkundung der oberen Schichten erzeugt nur einen kleinen konstanten Mehraufwand (ca. b / (b - 1)).

Zeitkomplexität: O(b^d)
  b = Verzweigungsfaktor, d = Tiefe des Ziels / maximale Tiefe

Raumkomplexität: O(d) — nur proportional zum aktuellen Tiefenlimit.

Anwendungen:
  - Spielbaumsuche (z.B. Schach, Dame) mit Zeitlimits
  - Zustandssuche in der KI (15-Puzzle, Rubik's Cube mit IDA*)
  - Finden kürzester Pfade bei stark begrenztem Arbeitsspeicher`,
}

export default descriptions
