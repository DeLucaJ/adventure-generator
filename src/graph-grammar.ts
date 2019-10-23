import * as Graph from './graph'

export interface GraphGrammar {
    alphabet: Letter[];
    rules:  Rule[];
}

export interface Rule {
    input: Graph.Graph;
    output: Graph.Graph;
    terminator: boolean; // rule is used to clean up a graph after the grammar has run
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
                vertices: [{ label: 0 }],
                edges: [],
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
    for(let i: number = 0; i < steps; i++) {
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
    const validRules: [Rule, Graph.Converter][] = [];
    for (let rule of grammar.rules) {
        let converter: Graph.Converter = matchSubGraph(graph, rule.input);
        if (converter.valid) validRules.push([rule, converter]);
    }
    const index = Math.floor(Math.random() * (validRules.length - 1));
    replaceSubGraph(graph, validRules[index][0].output, validRules[index][1]);
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function finds a valid subgraph in the starting graph in order to replace
 */
function matchSubGraph(graph: Graph.Graph, subgraph: Graph.Graph): Graph.Converter { 
    const vertexMap: Map<number, number> = new Map();
    const edgeMap: Map<number, number> = new Map();

    // Subgraph Isomorphism Problem

    return new Graph.Converter(vertexMap, edgeMap, false);
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function swaps a subgraph of graph matching the input of the rule with the output in the rule
 */
function replaceSubGraph(graph: Graph.Graph, newsub: Graph.Graph, converter: Graph.Converter) {
    for (let i = 0; i < newsub.vertices.length; i++) {
        const current: Graph.Vertex = newsub.vertices[i];
        if (converter.vertexMap.has(i)) {
            Graph.replaceVertex(graph, converter.vertexMap.get(i) as number, current);
        }
        else {
            Graph.addVertex(graph, current);
            converter.vertexMap.set(i, graph.vertices.length - 1);
        }
    }
    // all vertecies should have an entry in the map now
    for (let i = 0; i < newsub.edges.length; i++) {
        const current: Graph.Edge = newsub.edges[i];
        const newEdge: Graph.Edge = { 
            source: converter.vertexMap.get(current.source) as number, 
            target: converter.vertexMap.get(current.target) as number
        };
        if (converter.edgeMap.has(i)) {
            Graph.replaceEdge(graph, converter.edgeMap.get(i) as number, newEdge);
        }
        else {
            Graph.addEdge(graph, newEdge);
        }
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