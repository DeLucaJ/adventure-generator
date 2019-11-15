import { Graph } from "@/generators";
import { PlotPoint, Quest } from "@/types";

export default class Narrative {
  title: string;
  graph: Graph;
  quests: Quest[];
  plotPoints: PlotPoint[];
  // adversary: 

  constructor(
    title: string = "",
    graph: Graph = new Graph(),
    quests: Quest[] = [],
    plotPoints: PlotPoint[] = []
  ) {
    this.title = title;
    this.graph = graph;
    this.quests = quests;
    this.plotPoints = plotPoints;
  }
}