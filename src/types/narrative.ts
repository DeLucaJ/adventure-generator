import { Graph, Grammar } from "@/generators";
import { Character, Faction, Element, PlotPoint, Quest } from "@/types";

export default class Narrative extends Element {
  graph: Graph;
  quests: Quest[];
  plotPoints: PlotPoint[];
  adversaries: (Character | Faction)[];

  constructor(
    title: string = "New Narrative",
    description: string = "This is the Narrative taking place in the Adventure.",
    graph: Graph = new Graph(),
    quests: Quest[] = [],
    plotPoints: PlotPoint[] = [],
    adversaries: (Character | Faction)[] = []
  ) {
    super(title, description);
    this.graph = graph;
    this.quests = quests;
    this.plotPoints = plotPoints;
    this.adversaries = adversaries;
    this.quests.push(new Quest());
    this.plotPoints.push(new PlotPoint());
  }

  generateGraph() {
    this.graph.addVertex({ label: 'i' });
    this.graph.addVertex({ label: 'r' });
    this.graph.addEdge({ label: 'S', source: 0, target: 1 });
    Grammar.interpret(this.graph, Grammar.narrativeGrammar, 5);
    console.log(JSON.stringify(this.graph, null, '\t'));
  }
}