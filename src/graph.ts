export interface Graph {
    vertices: Vertex[];
    edges: Edge[];
}

export interface Vertex {
    label: number;
    parents: number[];
    children: number[];
}

export interface Edge {
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
