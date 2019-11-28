import { Dated, Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import World from "./world";

export default class Adventure extends Dated {
  title: string;
  world: World;
  graph: Graph;
  chapters: Chapter[] = [];
  encounters: Encounter[] = [];
  plotevents: PlotEvent[] = [];

  constructor(
    title: string = "New Adventure",
    world: World = new World()
  ) {
    super();
    this.title = title;
    this.world = world;
    this.graph = new Graph();
  }
}