import { Encounter } from "./index";
import { Graph } from "@/generators";

export default class Quest {
  title: string;
  graph: Graph;
  encounters: Encounter[];

  constructor(
    title: string = "",
    graph: Graph = new Graph(),
    encounters: Encounter[] = [],
  ) {
    this.title = title;
    this.graph = graph;
    this.encounters = encounters;
  }
}