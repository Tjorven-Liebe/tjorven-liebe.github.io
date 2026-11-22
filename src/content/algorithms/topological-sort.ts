import type { Locale } from '@i18n/translations'

const descriptions: Record<Locale, string> = {
  en: `Topological Sort (Kahn's Algorithm)

Topological Sort produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u comes before v in the ordering.

How it works (Kahn's Algorithm - BFS-based):
1. Compute the in-degree of each vertex
2. Add all vertices with in-degree 0 to a queue
3. While the queue is not empty:
   a. Dequeue a vertex, add it to the result
   b. For each outgoing edge, decrement the neighbor's in-degree
   c. If a neighbor's in-degree becomes 0, enqueue it
4. If all vertices are processed, the result is a valid topological order

Time Complexity: O(V + E)
Space Complexity: O(V)

Applications:
  - Task scheduling with dependencies
  - Build systems (Make, Gradle)
  - Course prerequisite planning
  - Package dependency resolution

Topological Sort is only possible for DAGs (Directed Acyclic Graphs). If the graph has a cycle, no valid ordering exists.`,
  de: `Topological Sort (Kahn's Algorithm)

Topological Sort produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u → v, vertex u comes before v in the ordering.

How it works (Kahn's Algorithm - BFS-based):
1. Compute the in-degree of each vertex
2. Add all vertices with in-degree 0 to a queue
3. While the queue is not empty:
   a. Dequeue a vertex, add it to the result
   b. For each outgoing edge, decrement the neighbor's in-degree
   c. If a neighbor's in-degree becomes 0, enqueue it
4. If all vertices are processed, the result is a valid topological order

Zeitkomplexität: O(V + E)
Raumkomplexität: O(V)

Anwendungen:
  - Task scheduling with dependencies
  - Build systems (Make, Gradle)
  - Course prerequisite planning
  - Package dependency resolution

Topological Sort is only possible for DAGs (Directed Acyclic Graphs). If the graph has a cycle, no valid ordering exists.`,
}

export default descriptions
