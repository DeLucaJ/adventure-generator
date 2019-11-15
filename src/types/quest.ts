import { Encounter } from "./index";
import { Graph } from "@/generators";

export default class Quest {
  title: string;
  description: string;
  graph: Graph;
  encounters: Encounter[];

  constructor(
    title: string = "New Quest",
    description: string = "This is a Quest that must be resolved in the Narrative.",
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
  ) {
    this.title = title;
    this.description = description;
    this.graph = graph;
    this.encounters = encounters;
  }
}