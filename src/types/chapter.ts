import { AdventureElement, Encounter } from "@/types";
import Adventure from "./adventure";
import { Graph } from "@/generators";

export default class Chapter extends AdventureElement {
  graph: Graph;
  encounters: Encounter[];

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
    adventure: Adventure
  ) {
    super(title, description, adventure);
    this.graph = graph;
    this.encounters = encounters;
  }
}