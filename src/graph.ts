export interface Graph {
    vertices: Vertex[];
    edges: Edge[];
}

export interface Vertex {
    label: number;
}

export interface Edge {
    label?: number;
    source: number;
    target: number;
}

export class Converter {
    valid: boolean = false;
    vertexMap: Map<number, number>;
    edgeMap: Map<number, number>;

    constructor(vertexMap: Map<number, number>, edgeMap: Map<number, number>, valid?: boolean) {
        this.vertexMap = vertexMap;
        this.edgeMap = edgeMap;
        if (valid) this.valid = valid;
    }
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

// Returns all edges in the graph that have the same source and target
export function findEdges(graph: Graph, s: number, t: number): number[] {
    const edges: number[] = [];
    for (let i = 0; i < graph.edges.length; i++) {
        let smatch = (s == -1) ? true : false;
        let tmatch = (t == -1) ? true : false;
        if (s > -1 && graph.edges[i].source == s) smatch = true;
        if (s > -1 && graph.edges[i].target == t) tmatch = true;
        if (smatch && tmatch) edges.push(i);
    }
    return edges;
}


