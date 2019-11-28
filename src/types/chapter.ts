import { NarrativeElement, Encounter } from "@/types";
import { Graph } from "@/generators";

export default class Chapter extends NarrativeElement {
  graph: Graph;
  encounters: Encounter[];

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
  ) {
    super(title, description);
    this.graph = graph;
    this.encounters = encounters;
  }
}