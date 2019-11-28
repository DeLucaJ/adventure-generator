import { Chapter, Encounter, PlotEvent } from './index';
import { Graph } from '@/generators';
import World from "./world";

export default class Adventure {
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
    this.title = title;
    this.world = world;
    this.graph = new Graph();
  }
}