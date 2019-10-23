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
    alphabet: [],
    rules: []
}

export const questGrammar: GraphGrammar = {
    alphabet: [],
    rules: []
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
    const rsg: [Rule, Graph.Graph] = findValidRule(graph, grammar);
    replaceSubGraph(graph, grammar, rsg[0], rsg[1]);
}

/*
 * @param graph: the Graph we want to use to validate rules 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @returns: the index of the chosen rule in the grammar.rules array
 * 
 * This function finds a rule that can be run on the subgraph
 */ 
function findValidRule(graph: Graph.Graph, grammar: GraphGrammar): [Rule, Graph.Graph] { 
    return [grammar.rules[-1], graph]
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function swaps a subgraph of graph matching the input of the rule with the output in the rule
 */
function replaceSubGraph(graph: Graph.Graph, grammar: GraphGrammar, rule: Rule, subgraph: Graph.Graph) { 
}

/*
 * @param graph: the Graph we want to grow 
 * @param grammar: the Grammar we want to draw rules and alphabet from
 * @param rule: the rule from which we want to draw the target graph and replacement graph from
 * 
 * This function finds a valid subgraph in the starting graph in order to replace
 */
function findSubGraph(graph: Graph.Graph, grammar: GraphGrammar, rule: Rule): Graph.Graph { 
    return graph; 
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