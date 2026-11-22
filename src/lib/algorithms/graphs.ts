import type { Algorithm, Step, GraphNode, GraphEdge, GraphState } from '@lib/types'
import { d, graphNodes, graphEdges, graphAdj } from '@lib/algorithms/shared'

const bfs: Algorithm = {
  id: 'bfs',
  name: 'Breadth-First Search',
  category: 'Graphs',
  difficulty: 'intermediate',
  visualization: 'graph',
  code: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}`,

  generateSteps(locale = 'en') {
    const steps: Step[] = []
    const visited = new Set<number>()
    const visitedNodes: number[] = []
    const visitedEdges: [number, number][] = []
    const queue: number[] = [0]
    visited.add(0)

    steps.push({
      graph: {
        nodes: graphNodes,
        edges: graphEdges,
        visitedNodes: [],
        currentNode: 0,
        visitedEdges: [],
        currentEdge: null,
        queue: [0],
      },
      description: d(
        locale,
        'Starting BFS from node 0. Added to queue.',
        'Iniciando BFS desde el nodo 0. Agregado a la cola.',
      ),
      codeLine: 3,
      variables: { start: 0, queue: '[0]', visited: '{0}', result: '[]' },
    })

    while (queue.length > 0) {
      const node = queue.shift()!
      visitedNodes.push(node)

      steps.push({
        graph: {
          nodes: graphNodes,
          edges: graphEdges,
          visitedNodes: [...visitedNodes],
          currentNode: node,
          visitedEdges: [...visitedEdges],
          currentEdge: null,
          queue: [...queue],
        },
        description: d(
          locale,
          `Dequeued node ${node}. Processing neighbors...`,
          `Nodo ${node} desencolado. Procesando vecinos...`,
        ),
        codeLine: 8,
        variables: { node, queue: `[${queue.join(', ')}]`, result: `[${visitedNodes.join(', ')}]` },
      })

      for (const neighbor of graphAdj[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
          visitedEdges.push([node, neighbor])

          steps.push({
            graph: {
              nodes: graphNodes,
              edges: graphEdges,
              visitedNodes: [...visitedNodes],
              currentNode: node,
              visitedEdges: [...visitedEdges],
              currentEdge: [node, neighbor],
              queue: [...queue],
            },
            description: d(
              locale,
              `Discovered node ${neighbor} via edge ${node}→${neighbor}. Added to queue.`,
              `Nodo ${neighbor} descubierto por arista ${node}→${neighbor}. Agregado a la cola.`,
            ),
            codeLine: 13,
            variables: {
              node,
              neighbor,
              queue: `[${queue.join(', ')}]`,
              visited: `{${[...visited].join(', ')}}`,
            },
          })
        }
      }
    }

    steps.push({
      graph: {
        nodes: graphNodes,
        edges: graphEdges,
        visitedNodes: [...visitedNodes],
        currentNode: null,
        visitedEdges: [...visitedEdges],
        currentEdge: null,
        queue: [],
      },
      description: d(
        locale,
        `BFS complete! Visit order: ${visitedNodes.join(' → ')}`,
        `¡BFS completado! Orden de visita: ${visitedNodes.join(' → ')}`,
      ),
      codeLine: 19,
      variables: { result: `[${visitedNodes.join(', ')}]` },
    })

    return steps
  },
}

// ============================================================
// DFS (Depth-First Search)
// ============================================================
const dfs: Algorithm = {
  id: 'dfs',
  name: 'Depth-First Search',
  category: 'Graphs',
  difficulty: 'intermediate',
  visualization: 'graph',
  code: `function dfs(graph, start) {
  const visited = new Set();
  const result = [];

  function explore(node) {
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }
  }

  explore(start);
  return result;
}`,

  generateSteps(locale = 'en') {
    const steps: Step[] = []
    const visited = new Set<number>()
    const visitedNodes: number[] = []
    const visitedEdges: [number, number][] = []
    const stack: number[] = []

    steps.push({
      graph: {
        nodes: graphNodes,
        edges: graphEdges,
        visitedNodes: [],
        currentNode: 0,
        visitedEdges: [],
        currentEdge: null,
        stack: [],
      },
      description: d(locale, 'Starting DFS from node 0.', 'Starte DFS von Knoten 0.'),
      codeLine: 16,
      variables: { start: 0, visited: '{}', result: '[]' },
    })

    function dfsHelper(node: number) {
      visited.add(node)
      visitedNodes.push(node)
      stack.push(node)

      steps.push({
        graph: {
          nodes: graphNodes,
          edges: graphEdges,
          visitedNodes: [...visitedNodes],
          currentNode: node,
          visitedEdges: [...visitedEdges],
          currentEdge: null,
          stack: [...stack],
        },
        description: d(
          locale,
          `Visiting node ${node}. Exploring its neighbors...`,
          `Visitando nodo ${node}. Explorando sus vecinos...`,
        ),
        codeLine: 6,
        variables: {
          node,
          stack: `[${stack.join(', ')}]`,
          visited: `{${[...visited].join(', ')}}`,
          result: `[${visitedNodes.join(', ')}]`,
        },
      })

      for (const neighbor of graphAdj[node]) {
        if (!visited.has(neighbor)) {
          visitedEdges.push([node, neighbor])

          steps.push({
            graph: {
              nodes: graphNodes,
              edges: graphEdges,
              visitedNodes: [...visitedNodes],
              currentNode: node,
              visitedEdges: [...visitedEdges],
              currentEdge: [node, neighbor],
              stack: [...stack],
            },
            description: d(
              locale,
              `Exploring edge ${node} → ${neighbor}`,
              `Explorando arista ${node} → ${neighbor}`,
            ),
            codeLine: 9,
            variables: {
              node,
              neighbor,
              stack: `[${stack.join(', ')}]`,
              visited: `{${[...visited].join(', ')}}`,
            },
          })

          dfsHelper(neighbor)
        }
      }

      stack.pop()

      if (stack.length > 0) {
        steps.push({
          graph: {
            nodes: graphNodes,
            edges: graphEdges,
            visitedNodes: [...visitedNodes],
            currentNode: stack[stack.length - 1],
            visitedEdges: [...visitedEdges],
            currentEdge: null,
            stack: [...stack],
          },
          description: d(
            locale,
            `Backtracking from node ${node} to node ${stack[stack.length - 1]}`,
            `Retrocediendo del nodo ${node} al nodo ${stack[stack.length - 1]}`,
          ),
          codeLine: 12,
          variables: {
            node,
            stack: `[${stack.join(', ')}]`,
            result: `[${visitedNodes.join(', ')}]`,
          },
        })
      }
    }

    dfsHelper(0)

    steps.push({
      graph: {
        nodes: graphNodes,
        edges: graphEdges,
        visitedNodes: [...visitedNodes],
        currentNode: null,
        visitedEdges: [...visitedEdges],
        currentEdge: null,
        stack: [],
      },
      description: d(
        locale,
        `DFS complete! Visit order: ${visitedNodes.join(' → ')}`,
        `¡DFS completado! Orden de visita: ${visitedNodes.join(' → ')}`,
      ),
      codeLine: 17,
      variables: { result: `[${visitedNodes.join(', ')}]` },
    })

    return steps
  },
}

// ============================================================
// DIJKSTRA'S ALGORITHM
// ============================================================
const dijkstra: Algorithm = {
  id: 'dijkstra',
  name: "Dijkstra's Algorithm",
  category: 'Graphs',
  difficulty: 'advanced',
  visualization: 'graph',
  code: `function dijkstra(graph, start) {
  const n = graph.length;
  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  dist[start] = 0;

  for (let i = 0; i < n; i++) {
    // Pick unvisited node with minimum distance
    let u = -1;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) {
        u = v;
      }
    }

    visited[u] = true;

    // Relax neighbors
    for (const { node: v, weight: w } of graph[u]) {
      if (!visited[v] && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  return dist;
}`,

  generateSteps(locale = 'en') {
    const djNodes: GraphNode[] = [
      { id: 0, label: 'A', x: 150, y: 50 },
      { id: 1, label: 'B', x: 350, y: 50 },
      { id: 2, label: 'C', x: 100, y: 170 },
      { id: 3, label: 'D', x: 250, y: 170 },
      { id: 4, label: 'E', x: 400, y: 170 },
      { id: 5, label: 'F', x: 250, y: 290 },
    ]
    const djEdges: GraphEdge[] = [
      { from: 0, to: 1, weight: 4 },
      { from: 0, to: 2, weight: 2 },
      { from: 1, to: 3, weight: 5 },
      { from: 1, to: 4, weight: 10 },
      { from: 2, to: 3, weight: 3 },
      { from: 2, to: 5, weight: 8 },
      { from: 3, to: 4, weight: 2 },
      { from: 3, to: 5, weight: 4 },
      { from: 4, to: 5, weight: 1 },
    ]

    // Build adjacency list (bidirectional)
    const adj: Record<number, { node: number; weight: number }[]> = {}
    for (const { id } of djNodes) adj[id] = []
    for (const e of djEdges) {
      adj[e.from].push({ node: e.to, weight: e.weight! })
      adj[e.to].push({ node: e.from, weight: e.weight! })
    }

    const steps: Step[] = []
    const dist: Record<number, number | string> = {}
    const visited = new Set<number>()
    const visitedNodes: number[] = []
    const visitedEdges: [number, number][] = []

    // Initialize distances
    for (const { id } of djNodes) dist[id] = id === 0 ? 0 : '∞'

    function distStr() {
      return djNodes.map((nd) => `${nd.label}=${dist[nd.id]}`).join(', ')
    }

    steps.push({
      graph: {
        nodes: djNodes,
        edges: djEdges,
        visitedNodes: [],
        currentNode: 0,
        visitedEdges: [],
        currentEdge: null,
        distances: { ...dist },
      },
      description: d(
        locale,
        'Starting Dijkstra from node A. All distances set to ∞ except source (0).',
        'Iniciando Dijkstra desde el nodo A. Todas las distancias en ∞ excepto el origen (0).',
      ),
      codeLine: 1,
      variables: { start: 'A', distances: distStr() },
    })

    for (let step = 0; step < djNodes.length; step++) {
      // Pick unvisited node with minimum distance
      let minNode = -1
      let minDist = Infinity
      for (const { id } of djNodes) {
        if (!visited.has(id) && typeof dist[id] === 'number' && (dist[id] as number) < minDist) {
          minDist = dist[id] as number
          minNode = id
        }
      }
      if (minNode === -1) break

      visited.add(minNode)
      visitedNodes.push(minNode)

      steps.push({
        graph: {
          nodes: djNodes,
          edges: djEdges,
          visitedNodes: [...visitedNodes],
          currentNode: minNode,
          visitedEdges: [...visitedEdges],
          currentEdge: null,
          distances: { ...dist },
        },
        description: d(
          locale,
          `Pick node ${djNodes[minNode].label} (distance ${dist[minNode]}). Relaxing its neighbors...`,
          `Seleccionado nodo ${djNodes[minNode].label} (distancia ${dist[minNode]}). Relajando sus vecinos...`,
        ),
        codeLine: 8,
        variables: {
          node: djNodes[minNode].label,
          dist: dist[minNode] as number,
          distances: distStr(),
        },
      })

      // Relax neighbors
      for (const { node: neighbor, weight } of adj[minNode]) {
        if (visited.has(neighbor)) continue
        const newDist = (dist[minNode] as number) + weight
        const oldDist = dist[neighbor]
        const improved = oldDist === '∞' || newDist < (oldDist as number)

        if (improved) {
          dist[neighbor] = newDist
          visitedEdges.push([minNode, neighbor])

          steps.push({
            graph: {
              nodes: djNodes,
              edges: djEdges,
              visitedNodes: [...visitedNodes],
              currentNode: minNode,
              visitedEdges: [...visitedEdges],
              currentEdge: [minNode, neighbor],
              distances: { ...dist },
            },
            description: d(
              locale,
              `Relaxed ${djNodes[minNode].label}→${djNodes[neighbor].label} (weight ${weight}). Distance to ${djNodes[neighbor].label}: ${oldDist} → ${newDist}`,
              `Relajado ${djNodes[minNode].label}→${djNodes[neighbor].label} (peso ${weight}). Distancia a ${djNodes[neighbor].label}: ${oldDist} → ${newDist}`,
            ),
            codeLine: 20,
            variables: {
              from: djNodes[minNode].label,
              to: djNodes[neighbor].label,
              weight,
              newDist,
              oldDist: String(oldDist),
            },
          })
        } else {
          steps.push({
            graph: {
              nodes: djNodes,
              edges: djEdges,
              visitedNodes: [...visitedNodes],
              currentNode: minNode,
              visitedEdges: [...visitedEdges],
              currentEdge: [minNode, neighbor],
              distances: { ...dist },
            },
            description: d(
              locale,
              `Edge ${djNodes[minNode].label}→${djNodes[neighbor].label} (weight ${weight}): ${newDist} ≥ ${oldDist}. No improvement.`,
              `Arista ${djNodes[minNode].label}→${djNodes[neighbor].label} (peso ${weight}): ${newDist} ≥ ${oldDist}. Sin mejora.`,
            ),
            codeLine: 20,
            variables: {
              from: djNodes[minNode].label,
              to: djNodes[neighbor].label,
              weight,
              newDist,
              currentDist: String(oldDist),
            },
          })
        }
      }
    }

    steps.push({
      graph: {
        nodes: djNodes,
        edges: djEdges,
        visitedNodes: [...visitedNodes],
        currentNode: null,
        visitedEdges: [...visitedEdges],
        currentEdge: null,
        distances: { ...dist },
      },
      description: d(
        locale,
        `Dijkstra complete! Shortest distances from A: ${distStr()}`,
        `¡Dijkstra completado! Distancias más cortas desde A: ${distStr()}`,
      ),
      codeLine: 26,
      variables: { distances: distStr() },
    })

    return steps
  },
}

// ============================================================
// PRIM'S ALGORITHM
// ============================================================
const prim: Algorithm = {
  id: 'prim',
  name: "Prim's Algorithm",
  category: 'Graphs',
  difficulty: 'advanced',
  visualization: 'graph',
  code: `function prim(graph, start) {
  const n = graph.length;
  const key = new Array(n).fill(Infinity);
  const inMST = new Array(n).fill(false);
  const parent = new Array(n).fill(-1);
  key[start] = 0;

  for (let i = 0; i < n; i++) {
    // Pick node with minimum key not in MST
    let u = -1;
    for (let v = 0; v < n; v++) {
      if (!inMST[v] && (u === -1 || key[v] < key[u])) {
        u = v;
      }
    }

    inMST[u] = true;

    // Update neighbor keys
    for (const { node: v, weight: w } of graph[u]) {
      if (!inMST[v] && w < key[v]) {
        key[v] = w;
        parent[v] = u;
      }
    }
  }

  return parent;
}`,

  generateSteps(locale = 'en') {
    const prNodes: GraphNode[] = [
      { id: 0, label: 'A', x: 100, y: 50 },
      { id: 1, label: 'B', x: 300, y: 50 },
      { id: 2, label: 'C', x: 50, y: 170 },
      { id: 3, label: 'D', x: 200, y: 170 },
      { id: 4, label: 'E', x: 350, y: 170 },
      { id: 5, label: 'F', x: 200, y: 290 },
    ]
    const prEdges: GraphEdge[] = [
      { from: 0, to: 1, weight: 4 },
      { from: 0, to: 2, weight: 2 },
      { from: 1, to: 3, weight: 5 },
      { from: 1, to: 4, weight: 10 },
      { from: 2, to: 3, weight: 3 },
      { from: 2, to: 5, weight: 8 },
      { from: 3, to: 4, weight: 2 },
      { from: 3, to: 5, weight: 4 },
      { from: 4, to: 5, weight: 1 },
    ]

    // Build adjacency list (bidirectional)
    const adj: Record<number, { node: number; weight: number }[]> = {}
    for (const { id } of prNodes) adj[id] = []
    for (const e of prEdges) {
      adj[e.from].push({ node: e.to, weight: e.weight! })
      adj[e.to].push({ node: e.from, weight: e.weight! })
    }

    const steps: Step[] = []
    const key: Record<number, number | string> = {}
    const parent: Record<number, number | null> = {}
    const inMST = new Set<number>()
    const visitedNodes: number[] = []
    const visitedEdges: [number, number][] = []

    // Initialize keys
    for (const { id } of prNodes) {
      key[id] = id === 0 ? 0 : '∞'
      parent[id] = null
    }

    function keyStr() {
      return prNodes.map((nd) => `${nd.label}=${key[nd.id]}`).join(', ')
    }

    steps.push({
      graph: {
        nodes: prNodes,
        edges: prEdges,
        visitedNodes: [],
        currentNode: 0,
        visitedEdges: [],
        currentEdge: null,
        distances: { ...key },
      },
      description: d(
        locale,
        "Starting Prim's MST from node A. All key values set to ∞ except source (0).",
        'Iniciando MST de Prim desde el nodo A. Todos los valores clave en ∞ excepto el origen (0).',
      ),
      codeLine: 1,
      variables: { start: 'A', keys: keyStr() },
    })

    for (let step = 0; step < prNodes.length; step++) {
      // Pick node with minimum key not in MST
      let minNode = -1
      let minKey = Infinity
      for (const { id } of prNodes) {
        if (!inMST.has(id) && typeof key[id] === 'number' && (key[id] as number) < minKey) {
          minKey = key[id] as number
          minNode = id
        }
      }
      if (minNode === -1) break

      inMST.add(minNode)
      visitedNodes.push(minNode)

      // Add MST edge (except for the starting node)
      if (parent[minNode] !== null) {
        visitedEdges.push([parent[minNode]!, minNode])
      }

      steps.push({
        graph: {
          nodes: prNodes,
          edges: prEdges,
          visitedNodes: [...visitedNodes],
          currentNode: minNode,
          visitedEdges: [...visitedEdges],
          currentEdge: parent[minNode] !== null ? [parent[minNode]!, minNode] : null,
          distances: { ...key },
        },
        description:
          parent[minNode] !== null
            ? d(
                locale,
                `Added ${prNodes[minNode].label} to MST via edge ${prNodes[parent[minNode]!].label}→${prNodes[minNode].label} (weight ${key[minNode]})`,
                `${prNodes[minNode].label} agregado al MST por arista ${prNodes[parent[minNode]!].label}→${prNodes[minNode].label} (peso ${key[minNode]})`,
              )
            : d(
                locale,
                `Starting MST from node ${prNodes[minNode].label}`,
                `Iniciando MST desde el nodo ${prNodes[minNode].label}`,
              ),
        codeLine: 8,
        variables: { node: prNodes[minNode].label, key: key[minNode] as number, keys: keyStr() },
      })

      // Update neighbor keys
      for (const { node: neighbor, weight } of adj[minNode]) {
        if (inMST.has(neighbor)) continue

        if (key[neighbor] === '∞' || weight < (key[neighbor] as number)) {
          const oldKey = key[neighbor]
          key[neighbor] = weight
          parent[neighbor] = minNode

          steps.push({
            graph: {
              nodes: prNodes,
              edges: prEdges,
              visitedNodes: [...visitedNodes],
              currentNode: minNode,
              visitedEdges: [...visitedEdges],
              currentEdge: [minNode, neighbor],
              distances: { ...key },
            },
            description: d(
              locale,
              `Updated key of ${prNodes[neighbor].label}: ${oldKey} → ${weight} (via ${prNodes[minNode].label})`,
              `Clave de ${prNodes[neighbor].label} actualizada: ${oldKey} → ${weight} (vía ${prNodes[minNode].label})`,
            ),
            codeLine: 21,
            variables: {
              from: prNodes[minNode].label,
              to: prNodes[neighbor].label,
              weight,
              oldKey: String(oldKey),
              keys: keyStr(),
            },
          })
        }
      }
    }

    const totalWeight = visitedEdges.reduce((sum, [from, to]) => {
      const edge = prEdges.find(
        (e) => (e.from === from && e.to === to) || (e.from === to && e.to === from),
      )
      return sum + (edge?.weight || 0)
    }, 0)

    steps.push({
      graph: {
        nodes: prNodes,
        edges: prEdges,
        visitedNodes: [...visitedNodes],
        currentNode: null,
        visitedEdges: [...visitedEdges],
        currentEdge: null,
        distances: { ...key },
      },
      description: d(
        locale,
        `Prim's complete! MST total weight: ${totalWeight}. Edges: ${visitedEdges.map(([f, t]) => `${prNodes[f].label}-${prNodes[t].label}`).join(', ')}`,
        `¡Prim completado! Peso total del MST: ${totalWeight}. Aristas: ${visitedEdges.map(([f, t]) => `${prNodes[f].label}-${prNodes[t].label}`).join(', ')}`,
      ),
      codeLine: 28,
      variables: { totalWeight, mstEdges: visitedEdges.length },
    })

    return steps
  },
}

// ============================================================
// TOPOLOGICAL SORT
// ============================================================
const topologicalSort: Algorithm = {
  id: 'topological-sort',
  name: 'Topological Sort',
  category: 'Graphs',
  difficulty: 'advanced',
  visualization: 'graph',
  code: `function topologicalSort(graph, numNodes) {
  const inDegree = new Array(numNodes).fill(0);

  // Compute in-degrees
  for (let u = 0; u < numNodes; u++) {
    for (const v of graph[u]) {
      inDegree[v]++;
    }
  }

  // Start with nodes of in-degree 0
  const queue = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return order;
}`,

  generateSteps(locale = 'en') {
    const tsNodes: GraphNode[] = [
      { id: 0, label: 'A', x: 50, y: 50 },
      { id: 1, label: 'B', x: 200, y: 50 },
      { id: 2, label: 'C', x: 350, y: 50 },
      { id: 3, label: 'D', x: 125, y: 170 },
      { id: 4, label: 'E', x: 275, y: 170 },
      { id: 5, label: 'F', x: 200, y: 290 },
    ]
    const tsEdges: GraphEdge[] = [
      { from: 0, to: 3 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 4 },
      { from: 3, to: 5 },
      { from: 4, to: 5 },
    ]

    // Build adjacency list (directed)
    const adj: Record<number, number[]> = {}
    const inDegree: Record<number, number> = {}
    for (const { id } of tsNodes) {
      adj[id] = []
      inDegree[id] = 0
    }
    for (const e of tsEdges) {
      adj[e.from].push(e.to)
      inDegree[e.to]++
    }

    const steps: Step[] = []
    const visitedNodes: number[] = []
    const visitedEdges: [number, number][] = []
    const order: number[] = []
    const queue: number[] = []

    function inDegStr() {
      return tsNodes.map((nd) => `${nd.label}=${inDegree[nd.id]}`).join(', ')
    }

    steps.push({
      graph: {
        nodes: tsNodes,
        edges: tsEdges,
        visitedNodes: [],
        currentNode: null,
        visitedEdges: [],
        currentEdge: null,
        queue: [],
      },
      description: d(
        locale,
        `DAG with ${tsNodes.length} nodes. Computing in-degrees for Kahn's algorithm.`,
        `DAG con ${tsNodes.length} nodos. Calculando grados de entrada para el algoritmo de Kahn.`,
      ),
      codeLine: 1,
      variables: { inDegrees: inDegStr() },
    })

    // Find nodes with in-degree 0
    for (const { id } of tsNodes) {
      if (inDegree[id] === 0) queue.push(id)
    }

    steps.push({
      graph: {
        nodes: tsNodes,
        edges: tsEdges,
        visitedNodes: [],
        currentNode: null,
        visitedEdges: [],
        currentEdge: null,
        queue: [...queue],
      },
      description: d(
        locale,
        `Nodes with in-degree 0: [${queue.map((id) => tsNodes[id].label).join(', ')}]. Added to queue.`,
        `Nodos con grado de entrada 0: [${queue.map((id) => tsNodes[id].label).join(', ')}]. Agregados a la cola.`,
      ),
      codeLine: 12,
      variables: {
        queue: `[${queue.map((id) => tsNodes[id].label).join(', ')}]`,
        inDegrees: inDegStr(),
      },
    })

    while (queue.length > 0) {
      const node = queue.shift()!
      order.push(node)
      visitedNodes.push(node)

      steps.push({
        graph: {
          nodes: tsNodes,
          edges: tsEdges,
          visitedNodes: [...visitedNodes],
          currentNode: node,
          visitedEdges: [...visitedEdges],
          currentEdge: null,
          queue: [...queue],
        },
        description: d(
          locale,
          `Dequeued ${tsNodes[node].label}. Order: [${order.map((id) => tsNodes[id].label).join(', ')}]`,
          `${tsNodes[node].label} desencolado. Orden: [${order.map((id) => tsNodes[id].label).join(', ')}]`,
        ),
        codeLine: 18,
        variables: {
          node: tsNodes[node].label,
          order: `[${order.map((id) => tsNodes[id].label).join(', ')}]`,
          queue: `[${queue.map((id) => tsNodes[id].label).join(', ')}]`,
        },
      })

      for (const neighbor of adj[node]) {
        inDegree[neighbor]--
        visitedEdges.push([node, neighbor])

        if (inDegree[neighbor] === 0) {
          queue.push(neighbor)
        }

        steps.push({
          graph: {
            nodes: tsNodes,
            edges: tsEdges,
            visitedNodes: [...visitedNodes],
            currentNode: node,
            visitedEdges: [...visitedEdges],
            currentEdge: [node, neighbor],
            queue: [...queue],
          },
          description: d(
            locale,
            `Reduced in-degree of ${tsNodes[neighbor].label} to ${inDegree[neighbor]}${inDegree[neighbor] === 0 ? ' → added to queue' : ''}`,
            `Grado de entrada de ${tsNodes[neighbor].label} reducido a ${inDegree[neighbor]}${inDegree[neighbor] === 0 ? ' → agregado a la cola' : ''}`,
          ),
          codeLine: 22,
          variables: {
            from: tsNodes[node].label,
            to: tsNodes[neighbor].label,
            inDeg: inDegree[neighbor],
            inDegrees: inDegStr(),
          },
        })
      }
    }

    steps.push({
      graph: {
        nodes: tsNodes,
        edges: tsEdges,
        visitedNodes: [...visitedNodes],
        currentNode: null,
        visitedEdges: [...visitedEdges],
        currentEdge: null,
        queue: [],
      },
      description: d(
        locale,
        `Topological sort complete! Order: ${order.map((id) => tsNodes[id].label).join(' → ')}`,
        `¡Ordenamiento topológico completado! Orden: ${order.map((id) => tsNodes[id].label).join(' → ')}`,
      ),
      codeLine: 30,
      variables: { order: `[${order.map((id) => tsNodes[id].label).join(', ')}]` },
    })

    return steps
  },
}

// ============================================================
// ITERATIVE DEEPENING DEPTH-FIRST SEARCH (IDDFS)
// ============================================================
const iddfs: Algorithm = {
  id: 'iddfs',
  name: 'Iterative Deepening DFS',
  category: 'Graphs',
  difficulty: 'advanced',
  visualization: 'graph',
  code: `function iddfs(graph, start, target, maxDepth) {
  for (let limit = 0; limit <= maxDepth; limit++) {
    const visited = new Set();
    if (dls(start, target, limit, visited)) {
      return true;
    }
  }
  return false;
}

function dls(node, target, limit, visited) {
  visited.add(node);
  if (node === target) return true;
  if (limit <= 0) return false;

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (dls(neighbor, target, limit - 1, visited)) {
        return true;
      }
    }
  }
  return false;
}`,

  generateSteps(locale = 'en') {
    const steps: Step[] = []
    const target = 6
    const maxDepth = 3

    steps.push({
      graph: {
        nodes: graphNodes,
        edges: graphEdges,
        visitedNodes: [],
        currentNode: 0,
        visitedEdges: [],
        currentEdge: null,
        stack: [],
      },
      description: d(
        locale,
        `Starting IDDFS from node 0 looking for target node ${target} (max depth: ${maxDepth}).`,
        `Starte IDDFS von Knoten 0 auf der Suche nach Zielknoten ${target} (maximale Tiefe: ${maxDepth}).`,
      ),
      codeLine: 1,
      variables: { start: 0, target, maxDepth, limit: 0 },
    })

    let found = false

    for (let limit = 0; limit <= maxDepth; limit++) {
      const visitedInIteration = new Set<number>()
      const iterationVisitedNodes: number[] = []
      const iterationVisitedEdges: [number, number][] = []
      const stack: number[] = []

      steps.push({
        graph: {
          nodes: graphNodes,
          edges: graphEdges,
          visitedNodes: [],
          currentNode: 0,
          visitedEdges: [],
          currentEdge: null,
          stack: [],
        },
        description: d(
          locale,
          `Starting iteration with depth limit = ${limit}.`,
          `Starte Iteration mit Tiefenlimit = ${limit}.`,
        ),
        codeLine: 2,
        variables: { limit, target, depth: 0, stack: '[]' },
      })

      function dlsHelper(node: number, currentDepth: number): boolean {
        visitedInIteration.add(node)
        iterationVisitedNodes.push(node)
        stack.push(node)

        const isTarget = node === target
        steps.push({
          graph: {
            nodes: graphNodes,
            edges: graphEdges,
            visitedNodes: [...iterationVisitedNodes],
            currentNode: node,
            visitedEdges: [...iterationVisitedEdges],
            currentEdge: null,
            stack: [...stack],
          },
          description: isTarget
            ? d(
                locale,
                `Found target node ${target} at depth ${currentDepth}!`,
                `Zielknoten ${target} bei Tiefe ${currentDepth} gefunden!`,
              )
            : d(
                locale,
                `Visiting node ${node} at depth ${currentDepth} (limit = ${limit}).`,
                `Besuche Knoten ${node} bei Tiefe ${currentDepth} (Limit = ${limit}).`,
              ),
          codeLine: 12,
          variables: {
            node,
            currentDepth,
            limit,
            stack: `[${stack.join(', ')}]`,
            target,
          },
        })

        if (isTarget) {
          return true
        }

        if (currentDepth >= limit) {
          steps.push({
            graph: {
              nodes: graphNodes,
              edges: graphEdges,
              visitedNodes: [...iterationVisitedNodes],
              currentNode: node,
              visitedEdges: [...iterationVisitedEdges],
              currentEdge: null,
              stack: [...stack],
            },
            description: d(
              locale,
              `Depth limit ${limit} reached at node ${node}. Cannot explore deeper this iteration.`,
              `Tiefenlimit ${limit} bei Knoten ${node} erreicht. In dieser Iteration kann nicht tiefer gesucht werden.`,
            ),
            codeLine: 14,
            variables: {
              node,
              currentDepth,
              limit,
              stack: `[${stack.join(', ')}]`,
            },
          })
          stack.pop()
          return false
        }

        for (const neighbor of graphAdj[node]) {
          if (!visitedInIteration.has(neighbor)) {
            iterationVisitedEdges.push([node, neighbor])

            steps.push({
              graph: {
                nodes: graphNodes,
                edges: graphEdges,
                visitedNodes: [...iterationVisitedNodes],
                currentNode: node,
                visitedEdges: [...iterationVisitedEdges],
                currentEdge: [node, neighbor],
                stack: [...stack],
              },
              description: d(
                locale,
                `Exploring edge ${node} → ${neighbor} (depth ${currentDepth + 1} <= limit ${limit})`,
                `Untersuche Kante ${node} → ${neighbor} (Tiefe ${currentDepth + 1} <= Limit ${limit})`,
              ),
              codeLine: 16,
              variables: {
                node,
                neighbor,
                depth: currentDepth + 1,
                limit,
                stack: `[${stack.join(', ')}]`,
              },
            })

            if (dlsHelper(neighbor, currentDepth + 1)) {
              return true
            }
          }
        }

        stack.pop()
        if (stack.length > 0) {
          steps.push({
            graph: {
              nodes: graphNodes,
              edges: graphEdges,
              visitedNodes: [...iterationVisitedNodes],
              currentNode: stack[stack.length - 1],
              visitedEdges: [...iterationVisitedEdges],
              currentEdge: null,
              stack: [...stack],
            },
            description: d(
              locale,
              `Backtracking to node ${stack[stack.length - 1]}`,
              `Backtracking zu Knoten ${stack[stack.length - 1]}`,
            ),
            codeLine: 18,
            variables: {
              node,
              stack: `[${stack.join(', ')}]`,
              limit,
            },
          })
        }

        return false
      }

      if (dlsHelper(0, 0)) {
        found = true
        steps.push({
          graph: {
            nodes: graphNodes,
            edges: graphEdges,
            visitedNodes: [...iterationVisitedNodes],
            currentNode: target,
            visitedEdges: [...iterationVisitedEdges],
            currentEdge: null,
            stack: [...stack],
          },
          description: d(
            locale,
            `IDDFS successfully found target node ${target} at depth limit ${limit}! Path: ${stack.join(' → ')}`,
            `IDDFS hat Zielknoten ${target} bei Tiefenlimit ${limit} erfolgreich gefunden! Pfad: ${stack.join(' → ')}`,
          ),
          codeLine: 5,
          variables: {
            target,
            limit,
            path: `[${stack.join(', ')}]`,
            result: 'true',
          },
        })
        break
      } else {
        steps.push({
          graph: {
            nodes: graphNodes,
            edges: graphEdges,
            visitedNodes: [...iterationVisitedNodes],
            currentNode: null,
            visitedEdges: [...iterationVisitedEdges],
            currentEdge: null,
            stack: [],
          },
          description: d(
            locale,
            `Depth limit ${limit} exhausted without finding target ${target}. Incrementing depth limit.`,
            `Tiefenlimit ${limit} ausgeschöpft, ohne Ziel ${target} zu finden. Tiefenlimit wird erhöht.`,
          ),
          codeLine: 2,
          variables: { limit, target, result: 'false' },
        })
      }
    }

    if (!found) {
      steps.push({
        graph: {
          nodes: graphNodes,
          edges: graphEdges,
          visitedNodes: [],
          currentNode: null,
          visitedEdges: [],
          currentEdge: null,
          stack: [],
        },
        description: d(
          locale,
          `IDDFS complete. Target node ${target} not found within max depth ${maxDepth}.`,
          `IDDFS abgeschlossen. Zielknoten ${target} innerhalb der maximalen Tiefe ${maxDepth} nicht gefunden.`,
        ),
        codeLine: 8,
        variables: { target, maxDepth, result: 'false' },
      })
    }

    return steps
  },
}

export { bfs, dfs, iddfs, dijkstra, prim, topologicalSort }
