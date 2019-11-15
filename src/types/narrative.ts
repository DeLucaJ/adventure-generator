import { Graph } from "@/generators";
import { PlotPoint, Quest } from "@/types";

export default class Narrative {
  title: string;
  description: string;
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
    this.title = title;
    this.description = description;
    this.graph = graph;
    this.quests = quests;
    this.plotPoints = plotPoints;
  }
}