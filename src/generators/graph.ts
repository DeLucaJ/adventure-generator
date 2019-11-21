import { Vertex, Edge } from "@/generators";
import cytoscape from 'cytoscape';

export default class Graph {
    vertices: Vertex[];
    edges: Edge[];

    constructor(vertices: Vertex[] = [], edges: Edge[] = []) {
        this.vertices = vertices;
        this.edges = edges;
    }

    cytoscape(): cytoscape.ElementsDefinition {
        let vertMap: Map<string, number> = new Map();
        const elements: cytoscape.ElementsDefinition = {
            nodes: [],
            edges: []
        }
        for (let vertex of this.vertices) {
            let cyvert: cytoscape.NodeDefinition = {
                data: { id: "" }
            }
            if (vertMap.has(vertex.label)) {
                vertMap.set(vertex.label, (vertMap.get(vertex.label) as number) + 1);
            }
            else {
                vertMap.set(vertex.label, 1);
            }
            cyvert.data.id = vertex.label + (vertMap.get(vertex.label) as number).toString();
            cyvert.data.label = vertex.label;
            elements.nodes.push(cyvert);
        }
        for (let edge of this.edges) {
            let cyedge: cytoscape.EdgeDefinition = {
                data: {
                    id: (elements.edges.length + 1).toString() as string,
                    source: elements.nodes[edge.source].data.id as string,
                    target: elements.nodes[edge.target].data.id as string
                }
            }
            elements.edges.push(cyedge);
        }
        
        return elements;
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



