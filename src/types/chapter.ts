import { EType, AdventureElement, Encounter } from "@/types";
import Adventure from "./adventure";
import { Graph } from "@/generators";

export default class Chapter extends AdventureElement {
  graph: Graph;
  encounters: Encounter[];
  objectives: string[]

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
    objectives: string[] = [],
    adventure: Adventure
  ) {
    super(EType.CHAPTER, title, description, adventure);
    this.graph = graph;
    this.encounters = encounters;
    this.objectives = objectives;
  }
}