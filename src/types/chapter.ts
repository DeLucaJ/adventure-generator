import { EType, AdventureElement, Encounter } from "@/types";
import { AdventureMeta } from "./meta";
import { Graph } from "@/generators";

export default class Chapter extends AdventureElement {
  graph: Graph;
  encounters: Encounter[];
  objectives: string[]

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    adventure: AdventureMeta,
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
    objectives: string[] = []
  ) {
    super(EType.CHAPTER, title, description, adventure);
    this.graph = graph;
    this.encounters = encounters;
    this.objectives = objectives;
  }
}