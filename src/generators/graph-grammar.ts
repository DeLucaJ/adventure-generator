import { Graph } from '@/generators';

export interface GraphGrammar {
    alphabet: string[];
    rules: Rule[];
}

export interface Rule {
    input: InputEdge;
    output: Graph;
}

export interface InputEdge {
    source?: string;
    label?: string;
    target?: string;
}

/* 
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param steps: The number of Grammar steps we want to run
 * 
 * This function runs a number of rules of grammar on the graph
 */
export function interpret(graph: Graph, grammar: GraphGrammar, steps: number) {
    for (let i: number = 0; i < steps; i++) {
        step(graph, grammar);
    }
    terminate(graph);
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * 
 * Runs a single, random, and valid rule from the grammar
 */
function step(graph: Graph, grammar: GraphGrammar) {
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
function matchEdges(graph: Graph, input: InputEdge): number[] {
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
function replaceEdgeWithOutput(graph: Graph, edgeIndex: number, replacement: Graph) {
    // debugger;
    const givenEdge = graph.edges[edgeIndex];
    const vertexMap: Map<number, number> = new Map();
    // const labelMap: Map<number, string> = new Map();

    // remove Edge from graph
    graph.edges.splice(edgeIndex, 1);

    // set up vertex map and add vertecies to map
    for (let v = 0; v < replacement.vertices.length; v++) {
        if (v === 0) {
            vertexMap.set(v, givenEdge.source);
            // labelMap.set(v, graph.vertices[givenEdge.source].label);
        }
        else if (v === (replacement.vertices.length - 1)) {
            vertexMap.set(v, givenEdge.target);
            // labelMap.set(v, graph.vertices[givenEdge.target].label);
        }
        else {
            vertexMap.set(v, graph.vertices.length);
            // labelMap.set(v, replacement.vertices[v].label);
            graph.addVertex(replacement.vertices[v]);
        }
    }

    // convert edges of replacement to edges of graph, then add them to graph
    for (let edge of replacement.edges) {
        graph.addEdge({
            label: edge.label,
            source: vertexMap.get(edge.source) as number,
            target: vertexMap.get(edge.target) as number
        });
    } 
}

/*
 * @param graph: the Graph we want to symetrize parallels on
 * 
 * This function turns a linear chain in 'parallel format' clonse it, and clones if for each BR node
 */
function symetrizeParallels(graph: Graph) {

}

/*
 * @param graph: the Graph we want to clear non-terminals from
 * 
 * This functions is called after the interpret function has finished steping through the grammar.
 * It cleans the graph of non-terminals by removing all attributes from the graph's edges
 */
function terminate(graph: Graph) {
    for (let edge of graph.edges) {
        if(edge.label) delete edge.label;
    }
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * 
 * This function adds non-terminal nodes to the graph so the grammar can be run on it again. 
 */
export function expand(graph: Graph, grammar: GraphGrammar) { }

export const narrativeGrammar: GraphGrammar = {
    alphabet: [
        'S', 'A1', 'A2', 'A3', 'C', 'H',
        'PS', 'BR', 'PE', 'AND', 'OR',
        'i', 'r', 'ii', 'c', 'p', 'p1',
        'p2', 'pb', 'm', 'mi', 'mf' 
    ],
    rules: [
        {
            input: {
                label: 'S',
                source: 'i',
                target: 'r'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'ii' },
                    { label: 'p1' },
                    { label: 'p2' },
                    { label: 'c' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2, label: 'A1' },
                    { source: 2, target: 3, label: 'A2' },
                    { source: 3, target: 4, label: 'A3' },
                    { source: 4, target: 5 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'A1'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'mi' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                ]
            } as Graph
        },
        {
            input: {
                label: 'A2'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'm' },
                    { label: 'pb' },
                    { label: 'pb' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1, label: 'C' },
                    { source: 1, target: 2, label: 'H' },
                    { source: 1, target: 3, label: 'H' },
                    { source: 1, target: 4, label: 'C' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'A3'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'mf' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'm' },
                    { label: 'p' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                    { source: 2, target: 3, label: 'C' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'PS' },
                    { label: 'BR' },
                    { label: 'm' },
                    { label: 'p' },
                    { label: 'PE' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2, label: 'noOp' },
                    { source: 2, target: 3 },
                    { source: 3, target: 4 },
                    { source: 4, target: 5, label: 'C' },
                    { source: 5, target: 6 }
                ]
            } as Graph
        },
        {
            input: {
                target: 'BR'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'BR' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'noOp'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'OR' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'noOp'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'AND' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'H'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'm' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                source: 'p'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'pb' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 0, target: 2 }
                ]
            } as Graph
        }
    ]
}

export const questGrammar: GraphGrammar = {
    alphabet: [
        
    ],
    rules: [
        {
            input: {
                source: 'e',
                label: 'S',
                target: 'g'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'gr' },
                    { label: 'pu' },
                    { label: 'tr' },
                    { label: 'bl' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                    { source: 2, target: 3, label: 'CM' },
                    { source: 3, target: 4, label: 'CF' },
                    { source: 4, target: 5 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'CM'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'bm' },
                    { label: 'iq' },
                    { label: 'ei' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1, label: 'C' },
                    { source: 1, target: 2 },
                    { source: 2, target: 3 },
                    { source: 3, target: 4 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'CF'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'n' },
                    { label: 'ec' },
                    { label: 'lf' },
                    { label: 'kf' },
                    { label: 'ib' },
                    { label: 'ib' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 3, label: 'C' },
                    { source: 3, target: 7 },
                    { source: 1, target: 2 },
                    { source: 2, target: 4 },
                    { source: 1, target: 5, label: 'H' },
                    { source: 2, target: 6, label: 'H' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'k' },
                    { label: 'l' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 },
                    { source: 2, target: 3, label: 'C' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'n' },
                    { label: 'k' },
                    { label: 'l' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 3, label: 'C' },
                    { source: 1, target: 2 },
                    { source: 2, target: 3 },
                    { source: 3, target: 4 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'ec' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2, label: 'C' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'C'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'es' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2, label: 'C' }
                ]
            } as Graph
        },
        {
            input: {
                source: 'n'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'ib' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 0, target: 2, label: 'H' }
                ]
            } as Graph
        },
        {
            input: {
                label: 'H'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'ec' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'H'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'es' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
        {
            input: {
                label: 'H'
            },
            output: {
                vertices: [
                    { label: 'source' },
                    { label: 'ei' },
                    { label: 'target' }
                ],
                edges: [
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ]
            } as Graph
        },
    ]
}

export const structureGrammar: GraphGrammar = {
    alphabet: [],
    rules: []
}