import { Graph, Grammar } from "@/generators";
import { AdventureElement, PlotPoint, Quest } from "@/types";

export default class Narrative extends AdventureElement {
  graph: Graph;
  quests: Quest[];
  plotPoints: PlotPoint[];
  // adversary: 

  constructor(
    title: string = "New Narrative",
    description: string = "This is the Narrative taking place in the Adventure.",
    graph: Graph = new Graph(),
    quests: Quest[] = [],
    plotPoints: PlotPoint[] = []
  ) {
    super(title, description);
    this.graph = graph;
    this.quests = quests;
    this.plotPoints = plotPoints;
  }

  generateGraph() {
    this.graph.addVertex({ label: 'i' });
    this.graph.addVertex({ label: 'r' });
    this.graph.addEdge({ label: 'S', source: 0, target: 1 });
    Grammar.interpret(this.graph, Grammar.narrativeGrammar, 5);
    console.log(JSON.stringify(this.graph, null, '\t'));
  }
}