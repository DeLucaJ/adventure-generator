export class Graph {
    vertices: Vertex[];
    edges: Edge[];

    constructor(vertices: Vertex[] = [], edges: Edge[] = []) {
        this.vertices = vertices;
        this.edges = edges;
    }

    addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
    }

    addEdge(edge: Edge) {
        this.edges.push(edge)
    }

    removeVertex(vertex: Vertex) {
        this.vertices.splice(this.vertices.indexOf(vertex), 1);
    }

    removeEdge(edge: Edge) {
        this.edges.splice(this.edges.indexOf(edge), 1);
    }

    replaceEdge(index: number, edge: Edge) {
        this.edges.splice(index, 1, edge)
    }

    replaceVertex(index: number, vertex: Vertex) {
        this.vertices.splice(index, 1, vertex);
    }
}

export interface Vertex {
    label: string;
}

export interface Edge {
    label?: string;
    source: number;
    target: number;
}


