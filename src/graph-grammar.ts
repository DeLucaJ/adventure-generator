import * as Graph from './graph'

export interface GraphGrammar {
    alphabet: Letter[];
    rules: Rule[];
}

export interface Rule {
    input: InputEdge;
    output: Graph.Graph;
    terminator: boolean; // rule is used to clean up a graph after the grammar has run
}

export interface InputEdge {
    source?: number;
    label?: number;
    target?: number;
}

export interface Letter {
    name: string;
    terminal: boolean;
}

export const narrativeGrammar: GraphGrammar = {
    alphabet: [
        { name: "S", terminal: false },
        { name: "C", terminal: false },
        { name: "CL", terminal: false },
        { name: "CP", terminal: false },
        { name: "F", terminal: false },
        { name: "H", terminal: false },
        { name: "m", terminal: true },
        { name: "p", terminal: true },
        { name: "bp", terminal: true },
        { name: "mp", terminal: true },
        { name: "ii", terminal: true },
        { name: "c", terminal: true },
        { name: "r", terminal: true },
        { name: "and", terminal: true },
        { name: "or", terminal: true },
        { name: "br", terminal: true }
    ],
    rules: []
}

export const questGrammar: GraphGrammar = {
    alphabet: [
        { name: 'S', terminal: false }, // 0
        { name: 'C', terminal: false }, // 1
        { name: 'CF', terminal: false },// 2
        { name: 'CL', terminal: false },// 3
        { name: 'CP', terminal: false },// 4
        { name: 'F', terminal: false }, // 5
        { name: 'G', terminal: false }, // 6
        { name: 'H', terminal: false }, // 7
        { name: 'bl', terminal: true }, // 8
        { name: 'bm', terminal: true }, // 9
        { name: 'e', terminal: true },  // 10
        { name: 'g', terminal: true },  // 11
        { name: 'ib', terminal: true }, // 12
        { name: 'iq', terminal: true }, // 13
        { name: 'k', terminal: true },  // 14
        { name: 'kf', terminal: true }, // 15
        { name: 'km', terminal: true }, // 16
        { name: 'l', terminal: true },  // 17
        { name: 'lf', terminal: true }, // 18
        { name: 'lm', terminal: true }, // 19
        { name: 'n', terminal: true },  // 20
        { name: 'ec', terminal: true }, // 21
        { name: 'ei', terminal: true }, // 22
        { name: 'es', terminal: true }  // 23
    ],
    rules: [
        { // (S) => (e -> C -> G -> bm -> iq -> ei -> CF -> g)
            input: {
                label: 0
            },
            output: {
                // each index directly corresponds, and will be replaced
                // leave any nodes that need to stay the same at the same index. 
                vertices: [
                    { label: 10 },  // 0
                    { label: 1 },   // 1
                    { label: 6 },   // 2
                    { label: 9 },   // 3
                    { label: 13 },  // 4
                    { label: 22 },  // 5
                    { label: 2 },   // 6
                    { label: 11 }   // 7
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                    { source: 2, target: 3 },
                    { source: 3, target: 4 },
                    { source: 4, target: 5 },
                    { source: 5, target: 6 },
                    { source: 6, target: 7 }
                ]
            },
            terminator: false
        }
    ]
}

export const structureGrammar: GraphGrammar = {
    alphabet: [],
    rules: []
}

/* 
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param steps: The number of Grammar steps we want to run
 * 
 * This function runs a number of rules of grammar on the graph
 */
export function interpret(graph: Graph.Graph, grammar: GraphGrammar, steps: number) {
    for (let i: number = 0; i < steps; i++) {
        step(graph, grammar);
    }
    terminate(graph, grammar);
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * 
 * Runs a single, random, and valid rule from the grammar
 */
function step(graph: Graph.Graph, grammar: GraphGrammar) {
    const validRules: [Rule, number[]][] = [];
    for (let rule of grammar.rules) {
        const validEdges = matchEdges(graph, rule.input);
        if (validEdges.length > 0) validRules.push([rule, validEdges]);
    }
    if (validRules.length > 0) {
        const ri = Math.floor(Math.random() * validRules.length);
        const ei = Math.floor(Math.random() * validRules[ri][1].length);
        replaceEdgeWithOutput(graph, validRules[ri][1][ei], validRules[ri][0].output);
    }
    else {
        console.log("No Valid Rules in Grammar")
    }
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function finds a valid subgraph in the starting graph in order to replace
 */
function matchEdges(graph: Graph.Graph, input: InputEdge): number[] {
    const valid: number[] = [];
    for (let i = 0; i < graph.edges.length; i++) {
        const edge = graph.edges[i];
        let l = false, s = false, t = false;
        if (input.label) {
            if (edge.label && edge.label == input.label) l = true;
        }
        else {
            l = true;
        }
        if (input.source) {
            if (graph.vertices[edge.source].label == input.source) s = true;
        }
        else {
            s = true;
        }
        if (input.target) {
            if (graph.vertices[edge.target].label == input.target) t = true;
        }
        else {
            t = true;
        }
        if (l && s && t) valid.push(i);
    }
    return valid;
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function swaps a subgraph of graph matching the input of the rule with the output in the rule
 */
function replaceEdgeWithOutput(graph: Graph.Graph, edgeIndex: number, replacement: Graph.Graph) {
    const edge = graph.edges[edgeIndex];
    const vertexMap: Map<number, number> = new Map();

    // remove Edge from graph
    graph.edges.splice(edgeIndex, 1);

    // set up vertex map and add vertecies to map
    for (let v = 0; v < replacement.vertices.length; v++) {
        if (v == 0) {
            vertexMap.set(v, edge.source);
            if (replacement.vertices[v].label != graph.vertices[edge.source].label) {
                graph.vertices[edge.source].label = replacement.vertices[v].label
            }
        }
        else if (v == replacement.edges.length - 1) {
            vertexMap.set(v, edge.target);
            if (replacement.vertices[v].label != graph.vertices[edge.target].label) {
                graph.vertices[edge.target].label = replacement.vertices[v].label;
            }
        }
        else {
            vertexMap.set(v, graph.vertices.length);
            Graph.addVertex(graph, replacement.vertices[v])
        }
    }

    // convert edges of replacement to edges of graph, then add them to graph
    for (let edge of replacement.edges) {
        Graph.addEdge(graph, {
            label: edge.label,
            source: vertexMap.get(edge.source) as number,
            target: vertexMap.get(edge.target) as number
        });
    } 
}

/*
 * @param graph: the Graph we want to clear non-terminals from
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * 
 * This functions is called after the interpret function has finished steping through the grammar.
 * It cleans the graph of non-terminals by running all of the termination rules until they cannot
 * be run further.
 */
function terminate(graph: Graph.Graph, grammar: GraphGrammar) {
    // Loops through grammar.rules, and tries to run any rule labeled 'terminator'
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * 
 * This function adds non-terminal nodes to the graph so the grammar can be run on it again. 
 */
export function expand(graph: Graph.Graph, grammar: GraphGrammar) { }