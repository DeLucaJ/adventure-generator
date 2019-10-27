export interface Graph {
    vertices: Vertex[];
    edges: Edge[];
}

export interface Vertex {
    label: string;
}

export interface Edge {
    label?: string;
    source: number;
    target: number;
}

export function addVertex(graph: Graph, vertex: Vertex) {
    graph.vertices.push(vertex);
}

export function addEdge(graph: Graph, edge: Edge) {
    graph.edges.push(edge)
}

export function removeVertex(graph: Graph, vertex: Vertex) {
    graph.vertices.splice(graph.vertices.indexOf(vertex), 1);
}

export function removeEdge(graph: Graph, edge: Edge) {
    graph.edges.splice(graph.edges.indexOf(edge), 1);
}

export function replaceEdge(graph: Graph, index: number, edge: Edge) {
    graph.edges.splice(index, 1, edge)
}

export function replaceVertex(graph: Graph, index: number, vertex: Vertex) {
    graph.vertices.splice(index, 1, vertex);
}


